/* ============================================================
   StudyMate v3 — lógica con técnicas de estudio
   SM-2 (repetición espaciada) · Feynman · Blurting ·
   Interleaving · Pomodoro
   ============================================================ */
const STORE_KEY = "studymate_v3";

function loadState(){
  try{ const r=localStorage.getItem(STORE_KEY); if(r) return JSON.parse(r); }catch(e){}
  return { srs:{}, quizBest:{}, feynman:{}, theme:"light", streak:0, lastDay:null,
           studySeconds:0, studyDate:null, pomo:{done:0}, xp:0 };
}
let S = loadState();
function save(){ try{ localStorage.setItem(STORE_KEY, JSON.stringify(S)); }catch(e){} }

/* ---- racha diaria ---- */
(function(){
  const today=new Date().toDateString();
  if(S.lastDay!==today){
    const yest=new Date(Date.now()-864e5).toDateString();
    S.streak=(S.lastDay===yest)?(S.streak||0)+1:1;
    S.lastDay=today; save();
  }
})();

/* ---- timer de estudio ---- */
function todayStr(){ return new Date().toDateString(); }
if(S.studyDate!==todayStr()){ S.studyDate=todayStr(); S.studySeconds=0; S.pomo={done:0}; save(); }
setInterval(()=>{
  if(S.studyDate!==todayStr()){ S.studyDate=todayStr(); S.studySeconds=0; S.pomo={done:0}; }
  S.studySeconds=(S.studySeconds||0)+1;
  const t=document.getElementById("timerNum"); if(t) t.textContent=Math.floor(S.studySeconds/60)+" min";
},1000);
setInterval(save,8000);

/* ============================================================
   SM-2 — Repetición espaciada
   Cada tarjeta guarda: ef (facilidad), reps, intervalo (días), due (fecha)
   Calidad: 0=otra vez, 3=difícil, 4=bien, 5=fácil
   ============================================================ */
function srsKey(sid,i){ return sid+"-"+i; }
function getCard(sid,i){
  const k=srsKey(sid,i);
  if(!S.srs[k]) S.srs[k]={ef:2.5,reps:0,intv:0,due:0,seen:false};
  return S.srs[k];
}
function reviewCard(sid,i,quality){
  const c=getCard(sid,i);
  c.seen=true;
  if(quality<3){ c.reps=0; c.intv=1; }
  else{
    c.ef=Math.max(1.3, c.ef+(0.1-(5-quality)*(0.08+(5-quality)*0.02)));
    c.reps++;
    if(c.reps===1) c.intv=1;
    else if(c.reps===2) c.intv=6;
    else c.intv=Math.round(c.intv*c.ef);
  }
  c.due=Date.now()+c.intv*864e5;
  // XP
  S.xp=(S.xp||0)+(quality>=4?10:quality>=3?6:2);
  save();
}
function isDue(sid,i){ const c=S.srs[srsKey(sid,i)]; return !c || !c.seen || (c.due||0)<=Date.now(); }
function masteredCount(s){ return s.cards.filter((c,i)=>{const k=S.srs[srsKey(s.id,i)]; return k&&k.reps>=2;}).length; }
function dueCount(s){ return s.cards.filter((c,i)=>isDue(s.id,i)).length; }

/* ---- runtime ---- */
let current=null, deck=[], deckPos=0, cardFlipped=false;
let quizIdx=0, quizScore=0, quizAnswered=false, exam=null;
let interleaveDeck=null;

/* ---- helpers ---- */
function hexA(hex,a){const h=hex.replace("#","");return `rgba(${parseInt(h.substr(0,2),16)},${parseInt(h.substr(2,2),16)},${parseInt(h.substr(4,2),16)},${a})`;}
function stripHtml(h){return h.replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim();}
function norm(s){return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");}
function scrollToSubjects(){document.getElementById("subjectsAnchor").scrollIntoView({behavior:"smooth"});}

/* ---- theme ---- */
function applyTheme(){
  document.body.classList.toggle("dark",S.theme==="dark");
  const l=document.getElementById("themeLbl"); if(l) l.textContent=S.theme==="dark"?"Claro":"Oscuro";
}
function toggleTheme(){ S.theme=S.theme==="dark"?"light":"dark"; save(); applyTheme(); }

/* ---- init ---- */
function init(){
  applyTheme(); buildIndex(); renderGrid(); refreshOverview();
  const sn=document.getElementById("streakNum"); if(sn) sn.textContent=S.streak||0;
  const tn=document.getElementById("timerNum"); if(tn) tn.textContent=Math.floor((S.studySeconds||0)/60)+" min";
}
function refreshOverview(){
  document.getElementById("ovSubjects").textContent=SUBJECTS.length;
  let m=0; SUBJECTS.forEach(s=>m+=masteredCount(s));
  document.getElementById("ovCards").textContent=m;
  const bests=Object.values(S.quizBest);
  document.getElementById("ovQuiz").textContent=bests.length?Math.round(bests.reduce((a,b)=>a+b.score/b.total,0)/bests.length*100)+"%":"—";
  const xp=document.getElementById("ovXP"); if(xp) xp.textContent=(S.xp||0);
}

/* ---- grid ---- */
function renderGrid(){
  const g=document.getElementById("subjectGrid");
  g.innerHTML=SUBJECTS.map((s,i)=>{
    const m=masteredCount(s), pct=Math.round(m/s.cards.length*100), due=dueCount(s);
    const best=S.quizBest[s.id];
    return `<div class="subj-card" style="--sc:${s.color};animation:pop .5s cubic-bezier(.2,.8,.3,1.1) ${i*0.05}s both" onclick="openSubject('${s.id}')">
      <div class="subj-glow"></div>
      <div class="ico" style="background:${hexA(s.color,.14)}">${s.icon}</div>
      ${due>0?`<span class="due-badge" title="${due} tarjetas para repasar hoy">${due}</span>`:''}
      <h3>${s.name}</h3>
      <div class="tag">${s.tag}</div>
      <div class="bar-mini"><i data-w="${pct}" style="background:${s.color}"></i></div>
      <div class="meta">
        <span>${icoCard()} ${m}/${s.cards.length} dominadas</span>
        ${best?`<span>${icoStar()} ${best.score}/${best.total}</span>`:''}
      </div>
    </div>`;
  }).join("");
  requestAnimationFrame(()=>g.querySelectorAll(".bar-mini i").forEach(el=>el.style.width=el.dataset.w+"%"));
}
function icoCard(){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="14" height="12" rx="2"/><path d="M7 3h14v12"/></svg>`;}
function icoStar(){return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.6-5.2 4.5 1.6 6.7L12 17l-6.2 3.6 1.6-6.7L2.2 8.9l6.9-.6z"/></svg>`;}

/* ---- nav ---- */
function showView(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"instant"});
}
function goHome(){ renderGrid(); refreshOverview(); showView("view-home"); window.scrollTo({top:0,behavior:"smooth"}); }

function openSubject(id){
  current=SUBJECTS.find(s=>s.id===id);
  quizIdx=0; quizScore=0; quizAnswered=false;
  document.getElementById("detailName").textContent=current.name;
  document.getElementById("detailTag").textContent=current.tag;
  const ico=document.getElementById("detailIco");
  ico.style.background=hexA(current.color,.14); ico.innerHTML=current.icon;
  document.getElementById("view-subject").style.setProperty("--sc",current.color);
  renderNotes(); buildDeck(); renderFlash(); renderQuiz(); renderFeynman(); renderBlurt();
  setMode("notes");
  showView("view-subject");
}
function setMode(m){
  document.querySelectorAll("#view-subject .modes button").forEach(b=>b.classList.toggle("active",b.dataset.m===m));
  ["notes","cards","quiz","feynman","blurt"].forEach(p=>document.getElementById("panel-"+p).classList.toggle("active",p===m));
}

/* ---- notes ---- */
function renderNotes(){
  document.getElementById("panel-notes").innerHTML=current.notes.map((n,i)=>`
    <details class="note ${n.cls||''}" style="animation:slideUp .4s ease ${i*0.04}s both">
      <summary>${n.t}<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></summary>
      <div class="body">${n.h}</div>
    </details>`).join("");
}

/* ============================================================
   FLASHCARDS con SM-2
   ============================================================ */
function buildDeck(){
  // Baraja priorizando las vencidas (due), luego no vistas, luego el resto
  const idxs=current.cards.map((c,i)=>i);
  const due=idxs.filter(i=>isDue(current.id,i));
  const rest=idxs.filter(i=>!isDue(current.id,i));
  deck = due.length? due : idxs; // si no hay vencidas, repasar todas
  deck = shuffle(deck);
  deckPos=0; cardFlipped=false;
}
function renderFlash(){
  const p=document.getElementById("panel-cards");
  if(deckPos>=deck.length){
    p.innerHTML=`<div class="done-screen">
      <img class="illus" src="assets/ilustracion-vacio.png" alt="">
      <h3>¡Sesión completa!</h3>
      <p>Repasaste ${deck.length} tarjeta${deck.length!==1?'s':''} de ${current.name}. La repetición espaciada ya programó cuándo mostrártelas de nuevo.</p>
      <div class="done-actions">
        <button class="btn-primary" onclick="buildDeck();renderFlash()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg> Repasar otra vez</button>
        <button class="btn-ghost" onclick="setMode('quiz')">Ir al quiz →</button>
      </div>
    </div>`;
    return;
  }
  const ri=deck[deckPos];
  const c=current.cards[ri];
  const srs=S.srs[srsKey(current.id,ri)];
  const lvl=srs&&srs.reps>=2?"dominada":srs&&srs.seen?"en progreso":"nueva";
  const pct=Math.round(deckPos/deck.length*100);
  p.innerHTML=`<div class="flash-stage">
    <div class="flash-top">
      <span class="flash-count">${deckPos+1} / ${deck.length}</span>
      <span class="lvl-pill lvl-${lvl.replace(' ','')}">${lvl}</span>
      <span class="flash-progress"><i style="width:${pct}%;background:${current.color}"></i></span>
    </div>
    <div class="flashcard ${cardFlipped?'flipped':''}" id="fc" onclick="flip()">
      <div class="inner">
        <div class="face front">
          <span class="tag">Pregunta</span>
          <div class="q">${c.q}</div>
          <span class="hint"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg> Pensá tu respuesta, luego tocá</span>
        </div>
        <div class="face back">
          <span class="tag">Respuesta</span>
          <div class="q">${c.a}</div>
        </div>
      </div>
    </div>
    ${cardFlipped?`
      <div class="rate-row">
        <span class="rate-label">¿Qué tan bien la sabías?</span>
        <div class="rate-btns">
          <button class="rate r0" onclick="rate(0)">Otra vez</button>
          <button class="rate r3" onclick="rate(3)">Difícil</button>
          <button class="rate r4" onclick="rate(4)">Bien</button>
          <button class="rate r5" onclick="rate(5)">Fácil</button>
        </div>
      </div>`:`
      <div class="flash-nav">
        <button class="btn-ghost" onclick="flip()">Ver respuesta</button>
      </div>`}
  </div>`;
}
function flip(){ cardFlipped=!cardFlipped; renderFlash(); }
function rate(q){
  reviewCard(current.id,deck[deckPos],q);
  if(q>=4) miniConfetti();
  deckPos++; cardFlipped=false; renderFlash();
  refreshOverview();
}

/* ============================================================
   INTERLEAVING — mezcla de materias
   ============================================================ */
function openInterleave(){
  // arma un mazo mezclando tarjetas due de todas las materias
  let pool=[];
  SUBJECTS.forEach(s=> s.cards.forEach((c,i)=>{ if(isDue(s.id,i)) pool.push({sid:s.id,i,name:s.name,color:s.color,c}); }));
  if(pool.length===0){ SUBJECTS.forEach(s=> s.cards.forEach((c,i)=> pool.push({sid:s.id,i,name:s.name,color:s.color,c}))); }
  interleaveDeck={cards:shuffle(pool).slice(0,20),pos:0,flipped:false};
  renderInterleave(); showView("view-interleave");
}
function renderInterleave(){
  const b=document.getElementById("interleaveBody");
  const d=interleaveDeck;
  if(d.pos>=d.cards.length){
    b.innerHTML=`<div class="done-screen"><img class="illus" src="assets/ilustracion-logro.png" alt=""><h3>¡Sesión mixta completa!</h3><p>Mezclaste ${d.cards.length} tarjetas de varias materias. Intercalar mejora la retención a largo plazo.</p><div class="done-actions"><button class="btn-primary" onclick="openInterleave()">Otra mezcla</button><button class="btn-ghost" onclick="goHome()">Inicio</button></div></div>`;
    return;
  }
  const card=d.cards[d.pos];
  const pct=Math.round(d.pos/d.cards.length*100);
  b.innerHTML=`<div class="flash-stage" style="--sc:${card.color}">
    <div class="flash-top">
      <span class="flash-count">${d.pos+1} / ${d.cards.length}</span>
      <span class="lvl-pill" style="background:${hexA(card.color,.16)};color:${card.color}">${card.name}</span>
      <span class="flash-progress"><i style="width:${pct}%;background:${card.color}"></i></span>
    </div>
    <div class="flashcard ${d.flipped?'flipped':''}" id="ifc" onclick="iflip()">
      <div class="inner">
        <div class="face front"><span class="tag">Pregunta</span><div class="q">${card.c.q}</div><span class="hint">Tocá para la respuesta</span></div>
        <div class="face back"><span class="tag">Respuesta</span><div class="q">${card.c.a}</div></div>
      </div>
    </div>
    ${d.flipped?`<div class="rate-row"><span class="rate-label">¿Cómo te fue?</span><div class="rate-btns">
      <button class="rate r0" onclick="irate(0)">Otra vez</button>
      <button class="rate r3" onclick="irate(3)">Difícil</button>
      <button class="rate r4" onclick="irate(4)">Bien</button>
      <button class="rate r5" onclick="irate(5)">Fácil</button></div></div>`:`<div class="flash-nav"><button class="btn-ghost" onclick="iflip()">Ver respuesta</button></div>`}
  </div>`;
}
function iflip(){ interleaveDeck.flipped=!interleaveDeck.flipped; renderInterleave(); }
function irate(q){ const card=interleaveDeck.cards[interleaveDeck.pos]; reviewCard(card.sid,card.i,q); if(q>=4)miniConfetti(); interleaveDeck.pos++; interleaveDeck.flipped=false; renderInterleave(); refreshOverview(); }

/* ============================================================
   FEYNMAN — explícalo simple
   ============================================================ */
function renderFeynman(){
  const saved=S.feynman[current.id]||"";
  document.getElementById("panel-feynman").innerHTML=`
    <div class="technique-intro">
      <h3>Explícalo como a un niño de 5 años</h3>
      <p>Escribí el tema con tus propias palabras, lo más simple posible. Si te trabás o usás palabras que no podés explicar, ahí están tus huecos. Después compará con el resumen.</p>
    </div>
    <textarea class="big-text" id="feynText" placeholder="Ej: La voz pasiva es cuando la cosa importante de la oración no hace la acción, sino que se la hacen a ella...">${saved}</textarea>
    <div class="tech-actions">
      <button class="btn-ghost" onclick="toggleFeynMaterial()">Ver el resumen para comparar</button>
      <button class="btn-primary" onclick="saveFeyn()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/></svg> Guardar mi explicación</button>
    </div>
    <div id="feynMaterial" class="feyn-material" style="display:none">
      ${current.notes.filter(n=>!n.cls).map(n=>`<details class="note"><summary>${n.t}<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></summary><div class="body">${n.h}</div></details>`).join("")}
    </div>`;
}
function toggleFeynMaterial(){ const m=document.getElementById("feynMaterial"); m.style.display=m.style.display==="none"?"block":"none"; }
function saveFeyn(){ S.feynman[current.id]=document.getElementById("feynText").value; save(); toast("Explicación guardada ✓"); }

/* ============================================================
   BLURTING — recuerdo activo en blanco
   ============================================================ */
let blurtStarted=false;
function renderBlurt(){
  blurtStarted=false;
  document.getElementById("panel-blurt").innerHTML=`
    <div class="technique-intro">
      <h3>Recuerdo activo (blurting)</h3>
      <p>Pantalla en blanco: escribí TODO lo que recordás de ${current.name} sin mirar nada. Cuando termines, revelá el material y marcá qué te faltó. Recordar de memoria fija mucho más que releer.</p>
    </div>
    <textarea class="big-text" id="blurtText" placeholder="Escribí de memoria todo lo que sepas del tema..."></textarea>
    <div class="tech-actions">
      <button class="btn-primary" onclick="revealBlurt()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg> Revelar material y comparar</button>
    </div>
    <div id="blurtMaterial" class="feyn-material" style="display:none">
      <div class="compare-note">Compará lo que escribiste con esto. Lo que no pusiste, es lo que tenés que reforzar 👇</div>
      ${current.notes.filter(n=>!n.cls).map(n=>`<details class="note" open><summary>${n.t}</summary><div class="body">${n.h}</div></details>`).join("")}
    </div>`;
}
function revealBlurt(){ document.getElementById("blurtMaterial").style.display="block"; document.getElementById("blurtMaterial").scrollIntoView({behavior:"smooth"}); }

/* ============================================================
   QUIZ
   ============================================================ */
function renderQuiz(){
  const p=document.getElementById("panel-quiz");
  if(quizIdx>=current.quiz.length){
    const pct=Math.round(quizScore/current.quiz.length*100);
    const prev=S.quizBest[current.id]; const isBest=!prev||quizScore>prev.score;
    if(isBest){ S.quizBest[current.id]={score:quizScore,total:current.quiz.length}; save(); }
    if(pct>=70){ confetti(); S.xp=(S.xp||0)+20; save(); }
    const msg=pct>=90?"¡Dominaste el tema!":pct>=70?"¡Muy bien!":pct>=50?"Vas bien, seguí repasando.":"Repasá las tarjetas y volvé.";
    const circ=2*Math.PI*65, off=circ*(1-pct/100);
    p.innerHTML=`<div class="done-screen">
      ${pct>=70?'<img class="illus" src="assets/ilustracion-logro.png" alt="">':''}
      <div class="ring"><svg width="150" height="150"><circle cx="75" cy="75" r="65" fill="none" stroke="var(--paper2)" stroke-width="12"/><circle cx="75" cy="75" r="65" fill="none" stroke="${current.color}" stroke-width="12" stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${circ}" id="ringFill"/></svg><div class="pct"><b>${pct}%</b><span>${quizScore}/${current.quiz.length}</span></div></div>
      <h3>${msg}</h3><p>${isBest?"¡Nuevo récord!":"Tu mejor marca: "+Math.round(prev.score/prev.total*100)+"%"}</p>
      <div class="done-actions"><button class="btn-primary" onclick="quizIdx=0;quizScore=0;renderQuiz()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg> Repetir</button><button class="btn-ghost" onclick="goHome()">Inicio</button></div>
    </div>`;
    requestAnimationFrame(()=>{const r=document.getElementById("ringFill");if(r){r.style.transition="stroke-dashoffset 1s cubic-bezier(.2,.7,.3,1)";r.style.strokeDashoffset=off;}});
    return;
  }
  const q=current.quiz[quizIdx], pct=Math.round(quizIdx/current.quiz.length*100), keys=["A","B","C","D"];
  p.innerHTML=`<div class="quiz-stage">
    <div class="quiz-top"><span class="quiz-step">Pregunta ${quizIdx+1} de ${current.quiz.length}</span><span class="quiz-score">Aciertos: ${quizScore}</span></div>
    <div class="quiz-progress"><i style="width:${pct}%;background:${current.color}"></i></div>
    <div class="q-card"><div class="q-text">${q.q}</div>
      ${q.o.map((opt,i)=>`<button class="opt" onclick="answer(${i})"><span class="key">${keys[i]}</span><span>${opt}</span></button>`).join("")}
      <div class="q-feedback" id="qfb"></div>
      <div class="quiz-actions"><button id="qnext" onclick="quizIdx++;renderQuiz()" disabled>${quizIdx===current.quiz.length-1?"Ver resultado":"Siguiente"} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></div>
    </div></div>`;
  quizAnswered=false;
}
function answer(i){
  if(quizAnswered)return; quizAnswered=true;
  const q=current.quiz[quizIdx];
  document.querySelectorAll("#panel-quiz .opt").forEach((b,idx)=>{b.disabled=true;if(idx===q.c)b.classList.add("correct");else if(idx===i)b.classList.add("wrong");});
  const fb=document.getElementById("qfb");
  if(i===q.c){quizScore++;fb.className="q-feedback ok";fb.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> ¡Correcto!`;}
  else{fb.className="q-feedback no";fb.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg> Era: ${q.o[q.c]}`;}
  document.getElementById("qnext").disabled=false;
}

/* ============================================================
   POMODORO
   ============================================================ */
let pomo={running:false,left:25*60,mode:"focus",timer:null};
function openPomodoro(){ renderPomodoro(); showView("view-pomodoro"); }
function renderPomodoro(){
  const m=Math.floor(pomo.left/60), s=pomo.left%60;
  const total=pomo.mode==="focus"?25*60:5*60;
  const pct=(1-pomo.left/total)*100;
  const circ=2*Math.PI*120, off=circ*(1-pct/100);
  document.getElementById("pomodoroBody").innerHTML=`
    <div class="pomo-wrap">
      <div class="pomo-mode">${pomo.mode==="focus"?"🎯 Concentración":"☕ Descanso"}</div>
      <div class="pomo-ring">
        <svg width="280" height="280">
          <circle cx="140" cy="140" r="120" fill="none" stroke="var(--paper2)" stroke-width="14"/>
          <circle cx="140" cy="140" r="120" fill="none" stroke="${pomo.mode==='focus'?'var(--olive2)':'var(--green)'}" stroke-width="14" stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${off}" transform="rotate(-90 140 140)" style="transition:stroke-dashoffset 1s linear"/>
        </svg>
        <div class="pomo-time">${m}:${String(s).padStart(2,'0')}</div>
      </div>
      <div class="pomo-controls">
        <button class="btn-primary" onclick="togglePomo()">${pomo.running?'⏸ Pausar':'▶ Iniciar'}</button>
        <button class="btn-ghost" onclick="resetPomo()">Reiniciar</button>
      </div>
      <div class="pomo-stats">Pomodoros completados hoy: <b>${S.pomo.done||0}</b></div>
      <p class="pomo-hint">25 minutos de concentración, 5 de descanso. Estudiá en bloques para rendir más.</p>
    </div>`;
}
function togglePomo(){
  pomo.running=!pomo.running;
  if(pomo.running){
    pomo.timer=setInterval(()=>{
      pomo.left--;
      if(pomo.left<=0){
        clearInterval(pomo.timer); pomo.running=false;
        if(pomo.mode==="focus"){ S.pomo.done=(S.pomo.done||0)+1; S.xp=(S.xp||0)+30; save(); pomo.mode="break"; pomo.left=5*60; confetti(); toast("¡Pomodoro completo! Tomate un descanso ☕"); }
        else{ pomo.mode="focus"; pomo.left=25*60; toast("¡A concentrarse! 🎯"); }
      }
      renderPomodoro();
    },1000);
  } else clearInterval(pomo.timer);
  renderPomodoro();
}
function resetPomo(){ clearInterval(pomo.timer); pomo.running=false; pomo.left=pomo.mode==="focus"?25*60:5*60; renderPomodoro(); }

/* ============================================================
   EXAMEN GENERAL
   ============================================================ */
function openExam(){ renderExamSetup(); showView("view-exam"); }
function renderExamSetup(){
  document.getElementById("examBody").innerHTML=`<div class="exam-setup">
    <p>Preguntas mezcladas de las 9 materias, en orden aleatorio, como en un examen real.</p>
    <select id="examCount"><option value="10">10 preguntas</option><option value="20" selected>20 preguntas</option><option value="30">30 preguntas</option></select><br>
    <button class="btn-primary" onclick="startExam()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg> Comenzar examen</button>
  </div>`;
}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function startExam(){
  const n=parseInt(document.getElementById("examCount").value,10);
  let pool=[]; SUBJECTS.forEach(s=>s.quiz.forEach(q=>pool.push({...q,subject:s.name})));
  pool=shuffle(pool).slice(0,Math.min(n,pool.length));
  exam={qs:pool,i:0,score:0,answered:false,bySubj:{}}; renderExam();
}
function renderExam(){
  const b=document.getElementById("examBody");
  if(exam.i>=exam.qs.length){
    const pct=Math.round(exam.score/exam.qs.length*100);
    if(pct>=70){ confetti(); S.xp=(S.xp||0)+50; save(); }
    const rows=Object.keys(exam.bySubj).map(k=>{const r=exam.bySubj[k];return `<div class="breakdown-row"><span>${k}</span><b>${r.correct}/${r.total}</b></div>`;}).join("");
    const circ=2*Math.PI*65, off=circ*(1-pct/100);
    b.innerHTML=`<div class="done-screen">${pct>=70?'<img class="illus" src="assets/ilustracion-logro.png" alt="">':''}
      <div class="ring"><svg width="150" height="150"><circle cx="75" cy="75" r="65" fill="none" stroke="var(--paper2)" stroke-width="12"/><circle cx="75" cy="75" r="65" fill="none" stroke="var(--olive2)" stroke-width="12" stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${circ}" id="ringFillE"/></svg><div class="pct"><b>${pct}%</b><span>${exam.score}/${exam.qs.length}</span></div></div>
      <h3>${pct>=70?"¡Buen examen!":"Seguí practicando"}</h3>
      <div class="breakdown">${rows}</div>
      <div class="done-actions"><button class="btn-primary" onclick="renderExamSetup()">Otro examen</button><button class="btn-ghost" onclick="goHome()">Inicio</button></div>
    </div>`;
    requestAnimationFrame(()=>{const r=document.getElementById("ringFillE");if(r){r.style.transition="stroke-dashoffset 1s cubic-bezier(.2,.7,.3,1)";r.style.strokeDashoffset=off;}});
    return;
  }
  const q=exam.qs[exam.i], pct=Math.round(exam.i/exam.qs.length*100), keys=["A","B","C","D"];
  b.innerHTML=`<div class="quiz-stage">
    <div class="quiz-top"><span class="quiz-step">Pregunta ${exam.i+1} de ${exam.qs.length}</span><span class="quiz-score">Aciertos: ${exam.score}</span></div>
    <div class="quiz-progress"><i style="width:${pct}%"></i></div>
    <div class="q-card"><div class="q-subject">${q.subject}</div><div class="q-text">${q.q}</div>
      ${q.o.map((opt,i)=>`<button class="opt" onclick="answerExam(${i})"><span class="key">${keys[i]}</span><span>${opt}</span></button>`).join("")}
      <div class="q-feedback" id="efb"></div>
      <div class="quiz-actions"><button id="enext" onclick="exam.i++;renderExam()" disabled>${exam.i===exam.qs.length-1?"Ver resultado":"Siguiente"} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></div>
    </div></div>`;
  exam.answered=false;
}
function answerExam(i){
  if(exam.answered)return; exam.answered=true;
  const q=exam.qs[exam.i];
  document.querySelectorAll("#examBody .opt").forEach((btn,idx)=>{btn.disabled=true;if(idx===q.c)btn.classList.add("correct");else if(idx===i)btn.classList.add("wrong");});
  if(!exam.bySubj[q.subject])exam.bySubj[q.subject]={correct:0,total:0};
  exam.bySubj[q.subject].total++;
  const fb=document.getElementById("efb");
  if(i===q.c){exam.score++;exam.bySubj[q.subject].correct++;fb.className="q-feedback ok";fb.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> ¡Correcto!`;}
  else{fb.className="q-feedback no";fb.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg> Era: ${q.o[q.c]}`;}
  document.getElementById("enext").disabled=false;
}

/* ============================================================
   PROGRESO
   ============================================================ */
function openProgress(){ renderProgress(); showView("view-progress"); }
function renderProgress(){
  let totalCards=0,mastered=0,quizzes=0,sumPct=0;
  SUBJECTS.forEach(s=>{
    totalCards+=s.cards.length; mastered+=masteredCount(s);
    if(S.quizBest[s.id]){quizzes++;sumPct+=S.quizBest[s.id].score/S.quizBest[s.id].total;}
  });
  const avg=quizzes?Math.round(sumPct/quizzes*100):0;
  const rows=SUBJECTS.map(s=>{
    const m=masteredCount(s), cp=Math.round(m/s.cards.length*100);
    const qb=S.quizBest[s.id], qp=qb?Math.round(qb.score/qb.total*100):0;
    return `<div class="spr"><div class="spr-top"><span class="name">${s.name}</span><span class="figs">Dominadas ${m}/${s.cards.length} · Quiz ${qb?qb.score+"/"+qb.total:"—"}</span></div>
      <div class="bar-track"><div class="bar-fill" style="width:${cp}%;background:${s.color}"></div></div>
      <div class="bar-track" style="margin-top:3px"><div class="bar-fill quiz" style="width:${qp}%"></div></div></div>`;
  }).join("");
  document.getElementById("progressBody").innerHTML=`
    <div class="stat-grid">
      <div class="stat-card"><div class="num">${mastered}/${totalCards}</div><div class="label">Tarjetas dominadas</div></div>
      <div class="stat-card"><div class="num">${S.xp||0}</div><div class="label">Puntos XP</div></div>
      <div class="stat-card"><div class="num">${avg}%</div><div class="label">Promedio quizzes</div></div>
      <div class="stat-card"><div class="num">${Math.floor((S.studySeconds||0)/60)}</div><div class="label">Min. hoy</div></div>
    </div>
    <div class="prog-panel">
      <div class="prog-legend"><span>▬ Dominio (repetición espaciada)</span><span style="color:var(--green)">▬ Mejor quiz</span></div>
      ${rows}
    </div>
    <button class="reset-btn" onclick="resetProgress()">Borrar todo mi progreso</button>`;
}
function resetProgress(){
  if(!confirm("¿Seguro que querés borrar todo tu progreso? No se puede deshacer.")) return;
  S.srs={}; S.quizBest={}; S.feynman={}; S.xp=0; save(); renderProgress(); refreshOverview();
}

/* ============================================================
   ASISTENTE / BUSCADOR
   ============================================================ */
let INDEX=[];
function buildIndex(){
  INDEX=[];
  SUBJECTS.forEach(s=>{
    s.notes.forEach(n=>INDEX.push({subj:s.name,sid:s.id,title:n.t,text:stripHtml(n.h)}));
    s.cards.forEach(c=>INDEX.push({subj:s.name,sid:s.id,title:"Tarjeta: "+c.q,text:c.a}));
    s.quiz.forEach(q=>INDEX.push({subj:s.name,sid:s.id,title:"Quiz: "+q.q,text:"Respuesta: "+q.o[q.c]}));
  });
}
function openAssistant(){
  document.getElementById("overlay").classList.add("open");
  document.getElementById("assistInput").value="";
  document.getElementById("assistResults").innerHTML=`<div class="assist-empty">Escribí una palabra para buscar en las 9 materias.</div>`;
  setTimeout(()=>document.getElementById("assistInput").focus(),100);
}
function closeAssistant(){ document.getElementById("overlay").classList.remove("open"); }
function runSearch(query){
  const el=document.getElementById("assistResults");
  const q=norm(query.trim());
  if(q.length<2){ el.innerHTML=`<div class="assist-empty">Escribí al menos 2 letras.</div>`; return; }
  const matches=INDEX.filter(it=>norm(it.title).includes(q)||norm(it.text).includes(q)).slice(0,25);
  if(!matches.length){ el.innerHTML=`<div class="assist-empty">No encontré nada con "${query}".</div>`; return; }
  el.innerHTML=matches.map(m=>{
    const idx=norm(m.text).indexOf(q); let snip=m.text;
    if(idx>=0){const st=Math.max(0,idx-50);snip=(st>0?"…":"")+m.text.substring(st,idx+q.length+70)+"…";}else snip=m.text.substring(0,130)+"…";
    return `<div class="assist-item" onclick="goToSubj('${m.sid}')"><div class="as">${m.subj}</div><div class="at">${m.title}</div><div class="asn">${snip}</div></div>`;
  }).join("");
}
function goToSubj(id){ closeAssistant(); openSubject(id); }

/* ---- efectos ---- */
function confetti(){
  const colors=["#4F7302","#799833","#D6D979","#3E5902"];
  const box=document.createElement("div"); box.className="confetti";
  for(let i=0;i<70;i++){const c=document.createElement("i");c.style.left=Math.random()*100+"%";c.style.background=colors[i%colors.length];c.style.animationDelay=(Math.random()*.6)+"s";c.style.transform=`rotate(${Math.random()*360}deg)`;box.appendChild(c);}
  document.body.appendChild(box); setTimeout(()=>box.remove(),3400);
}
function miniConfetti(){
  const colors=["#799833","#D6D979"];
  const box=document.createElement("div"); box.className="confetti";
  for(let i=0;i<18;i++){const c=document.createElement("i");c.style.left=(40+Math.random()*20)+"%";c.style.top="40%";c.style.background=colors[i%2];c.style.animationDelay=(Math.random()*.2)+"s";box.appendChild(c);}
  document.body.appendChild(box); setTimeout(()=>box.remove(),2000);
}
function toast(msg){
  const t=document.createElement("div"); t.className="toast"; t.textContent=msg;
  document.body.appendChild(t);
  requestAnimationFrame(()=>t.classList.add("show"));
  setTimeout(()=>{t.classList.remove("show");setTimeout(()=>t.remove(),300);},2400);
}

document.addEventListener("keydown",e=>{ if(e.key==="Escape") closeAssistant(); });
init();
