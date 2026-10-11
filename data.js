/* ============================================================
   StudyMate — Contenido de estudio · Décimo año 2026
   Colegio Nuestra Señora de Sion
   Actualizado a la Primera prueba del III Trimestre
   Fuentes: libro Santillana 10° + temarios oficiales + verificación
   ============================================================ */

const SUBJECTS = [
/* ============================================ ESPAÑOL */
{ id:"espanol", name:"Español", tag:"Cernuda y la oración pasiva", color:"#b5473f",
  icon:`<img src="assets/materia-espanol.png" alt="">`,
  notes:[
    {t:"El autor: Luis Cernuda", h:`<p><b>Luis Cernuda</b> (Sevilla, 1902 – México, 1963), poeta de la <span class="hl">Generación del 27</span>. Tras la Guerra Civil Española partió al exilio y nunca regresó; murió en México. Su obra reúne la poesía bajo el título <i>La realidad y el deseo</i>.</p><p>📖 <b>Libro:</b> Antología, pp. 280-285.</p>`},
    {t:"El poema «Si el hombre pudiera decir lo que ama»", h:`<p>Pertenece a <i>Los placeres prohibidos</i> (1931). <b>Tema central:</b> el <span class="hl">amor</span> como única verdad y forma de libertad del ser humano, aunque la sociedad lo reprima.</p><ul><li>El poeta afirma que si pudiera expresar libremente su amor, alcanzaría su plena identidad.</li><li>Contrapone la <b>libertad interior</b> del amor con la <b>opresión</b> de las normas sociales.</li><li>Expresa el conflicto entre el <b>deseo</b> (lo que se anhela) y la <b>realidad</b> (lo que se permite).</li></ul><p><i>(Por derechos de autor no se reproduce el poema completo; se estudia su análisis. Texto en la antología.)</i></p>`},
    {t:"Las fases del análisis literario", h:`<ul><li><b>1. Lectura natural:</b> primera lectura para captar el sentido general.</li><li><b>2. Ubicación:</b> autor, época, movimiento, obra a la que pertenece.</li><li><b>3. Interpretativa:</b> ¿qué quiere decir el texto? Tema, mensaje, emociones.</li><li><b>4. Analítica:</b> figuras literarias, estructura, recursos y cómo refuerzan el mensaje.</li></ul>`},
    {t:"Figuras literarias", h:`<ul><li><b>Metáfora:</b> identifica dos elementos sin "como". "Tu amor es un río."</li><li><b>Símil:</b> compara usando "como". "Libre como el viento."</li><li><b>Anáfora:</b> repetición de palabras al inicio de versos. "Si el hombre... si pudiera..."</li><li><b>Oxímoron:</b> une ideas opuestas. "<span class="hl">Libertad de estar preso</span>."</li><li><b>Hipérbole:</b> exageración. "Un amor infinito."</li><li><b>Personificación:</b> da cualidades humanas a lo no humano.</li></ul>`},
    {t:"La oración pasiva", h:`<p>📖 <b>Libro Compartir 10:</b> pp. 130-135.</p><p>En la <b>voz activa</b> el sujeto hace la acción; en la <b>voz pasiva</b> el sujeto la recibe.</p><p><b>Estructura:</b> sujeto pasivo + <span class="hl">ser</span> (conjugado) + participio + (complemento agente)</p><ul><li><b>Pasiva completa</b> (con agente): "La casa <b>fue construida por los obreros</b>."</li><li><b>Pasiva incompleta</b> (sin agente): "La casa fue construida."</li></ul><p><b>De activa a pasiva:</b> el complemento directo pasa a sujeto pasivo. Activa: "Cernuda escribió el poema." → Pasiva: "El poema fue escrito por Cernuda."</p>`},
    {t:"Pasiva refleja y preferencia de la activa", h:`<p><b>Pasiva refleja (con "se"):</b> se + verbo en 3ª persona + sujeto pasivo. "Se publicaron los poemas." Es la forma más natural en español.</p><p><b>Importante:</b> al redactar, se recomienda la <b>voz activa</b> porque es más clara y directa. La pasiva se reserva para destacar la acción o cuando el agente es desconocido.</p>`},
    {t:"Fuentes y referencias", cls:"sources", h:`<ul><li>Cernuda, L. <i>Los placeres prohibidos</i> (en <i>La realidad y el deseo</i>).</li><li>Antología literaria, Décimo año, pp. 280-285.</li><li>Santillana. <i>Compartir Español 10</i>, pp. 130-135.</li><li>RAE-ASALE. <i>Nueva Gramática de la Lengua Española</i>.</li></ul>`}
  ],
  cards:[
    {q:"¿A qué generación pertenece Luis Cernuda?", a:"A la Generación del 27. Vivió en el exilio y murió en México en 1963."},
    {q:"¿Cuál es el tema de «Si el hombre pudiera decir lo que ama»?", a:"El amor como única verdad y forma de libertad del ser humano, frente a la represión social."},
    {q:"¿Qué es un oxímoron? Da el ejemplo del poema.", a:"Unir dos ideas opuestas. Ej: \"libertad de estar preso\"."},
    {q:"Estructura de la oración pasiva", a:"Sujeto pasivo + ser (conjugado) + participio + (complemento agente). Ej: \"El poema fue escrito por Cernuda.\""},
    {q:"Diferencia entre pasiva completa e incompleta", a:"La completa lleva complemento agente (por...); la incompleta no lo lleva."},
    {q:"¿Cuáles son las 4 fases del análisis literario?", a:"Lectura natural, ubicación, interpretativa y analítica."},
    {q:"Pasa a pasiva: \"Cernuda escribió el poema.\"", a:"El poema fue escrito por Cernuda."},
    {q:"¿Qué voz se recomienda al redactar y por qué?", a:"La voz activa, porque es más clara y directa."}
  ],
  quiz:[
    {q:"Luis Cernuda perteneció a la:", o:["Generación del 98","Generación del 27","Romanticismo","Barroco"], c:1},
    {q:"El tema central del poema estudiado es:", o:["La guerra","El amor como libertad","La naturaleza","La muerte"], c:1},
    {q:"\"Libertad de estar preso\" es un ejemplo de:", o:["Símil","Metáfora","Oxímoron","Anáfora"], c:2},
    {q:"¿Cuál es una oración en voz pasiva?", o:["Cernuda escribió el poema","El poema fue escrito por Cernuda","El poeta escribe","Escribió un verso"], c:1},
    {q:"La pasiva incompleta se caracteriza por:", o:["Llevar complemento agente","No llevar complemento agente","No tener verbo","Estar en presente"], c:1},
    {q:"La primera fase del análisis literario es:", o:["Analítica","Interpretativa","Lectura natural","Ubicación"], c:2},
    {q:"En \"La casa fue construida por los obreros\", el sujeto pasivo es:", o:["Los obreros","La casa","Construida","Fue"], c:1}
  ]
},
/* ============================================ ESTUDIOS SOCIALES (sin cambios) */
{ id:"sociales", name:"Est. Sociales", tag:"Dinámica poblacional y mundo contemporáneo", color:"#3f7a5c",
  icon:`<img src="assets/materia-sociales.png" alt="">`,
  notes:[
    {t:"Conceptos de dinámica poblacional", h:`<ul><li><b>Natalidad/Mortalidad:</b> nacimientos/defunciones por cada 1.000 habitantes al año.</li><li><b>Crecimiento natural:</b> natalidad − mortalidad.</li><li><b>Pirámide regresiva:</b> base angosta, cúspide ancha — población envejecida (<span class="hl">tendencia en Costa Rica</span>).</li><li><b>Transición demográfica:</b> paso de alta natalidad/mortalidad a bajas tasas de ambas con el desarrollo.</li><li><b>Índice de envejecimiento:</b> adultos mayores (65+) por cada 100 menores de 15.</li></ul>`},
    {t:"Datos de Costa Rica (INEC)", h:`<ul><li>Fecundidad proyectada: mínimo de <span class="hl">1,14 hijos por mujer en 2031</span>.</li><li>La población total empezará a disminuir alrededor de <span class="hl">2044-2045</span>.</li><li>Esperanza de vida: 83,7 años (mujeres), 78,6 (hombres).</li><li>La población de 65+ se duplicará en los próximos 20 años.</li></ul>`},
    {t:"Movilidad espacial en un mundo global", h:`<p>Desplazamiento de personas en el territorio, temporal o permanente.</p><ul><li><b>Migración interna:</b> dentro del país (campo → ciudad = éxodo rural).</li><li><b>Migración internacional:</b> entre países. Costa Rica es <b>receptor</b>, sobre todo de migración nicaragüense.</li><li><b>Push (expulsión):</b> pobreza, conflictos, desastres. <b>Pull (atracción):</b> empleo, seguridad, servicios.</li></ul>`},
    {t:"Guerras mundiales y Revolución Rusa", h:`<p><b>1ª Guerra Mundial (1914-1918):</b> Triple Entente vs. Triple Alianza. Detonada por el asesinato del archiduque Francisco Fernando.</p><p><b>Revolución Rusa (1917):</b> los bolcheviques de Lenin derrocan al Zar e instauran el primer Estado comunista (URSS).</p><p><b>2ª Guerra Mundial (1939-1945):</b> Aliados vs. Eje. Terminó con las bombas de Hiroshima y Nagasaki. Consecuencias: ONU, Guerra Fría, Holocausto.</p>`},
    {t:"Guerra Fría y globalización", h:`<p><b>Guerra Fría (1947-1991):</b> enfrentamiento ideológico entre EE.UU. (OTAN) y la URSS (Pacto de Varsovia), sin guerra directa. Terminó con la caída del Muro de Berlín (1989) y la disolución de la URSS (1991).</p><p><b>Globalización:</b> creciente interconexión económica, política, tecnológica y cultural entre países, acelerada por internet.</p>`},
    {t:"Fuentes y referencias", cls:"sources", h:`<ul><li>INEC Costa Rica. <i>Estimaciones y proyecciones de población 1950-2100</i> (2024).</li><li>MEP. Programa de Estudios Sociales, Educación Diversificada.</li></ul>`}
  ],
  cards:[
    {q:"¿Qué es la transición demográfica?", a:"El paso de alta natalidad/mortalidad a bajas tasas de ambas conforme un país se desarrolla."},
    {q:"¿Hasta cuánto bajará la fecundidad en CR?", a:"Hasta 1,14 hijos por mujer en 2031 (bajo el reemplazo de 2,1)."},
    {q:"¿Qué detonó la Primera Guerra Mundial?", a:"El asesinato del archiduque Francisco Fernando en 1914."},
    {q:"¿Cómo terminó la Guerra Fría?", a:"Con la caída del Muro de Berlín (1989) y la disolución de la URSS (1991)."},
    {q:"¿Qué es la globalización?", a:"La creciente interconexión económica, política, tecnológica y cultural entre países."},
    {q:"Diferencia entre push y pull en migración", a:"Push = causas que expulsan (pobreza, conflictos). Pull = causas que atraen (empleo, seguridad)."},
    {q:"¿Costa Rica es emisor o receptor de migración?", a:"Principalmente receptor, sobre todo de migración nicaragüense."}
  ],
  quiz:[
    {q:"¿En qué año inició la Segunda Guerra Mundial?", o:["1914","1939","1945","1917"], c:1},
    {q:"¿Quién lideró la Revolución Rusa de 1917?", o:["Stalin","Trotsky","Lenin","Zar Nicolás II"], c:2},
    {q:"La Guerra Fría enfrentó a:", o:["Alemania y Francia","Estados Unidos y la URSS","Japón y China","Reino Unido y España"], c:1},
    {q:"¿Cuándo disminuirá la población de CR según el INEC?", o:["2030","2044-2045","2100","2010"], c:1},
    {q:"La globalización se caracteriza por:", o:["Aislamiento entre países","Libre comercio e interconexión mundial","Fin del comercio","Solo intercambio cultural"], c:1},
    {q:"Las causas 'pull' de la migración:", o:["Expulsan población","Atraen población","Detienen la natalidad","Aumentan la mortalidad"], c:1}
  ]
},
/* ============================================ CÍVICA (sin cambios) */
{ id:"civica", name:"Cívica", tag:"Sistema electoral, partidos y participación", color:"#2c5a8c",
  icon:`<img src="assets/materia-civica.png" alt="">`,
  notes:[
    {t:"El sistema electoral costarricense", h:`<ul><li><b>Voto universal:</b> mayores de 18 años inscritos en el padrón, con cédula al día.</li><li><b>Voto directo y secreto</b> (Constitución, art. 93).</li><li><b>Paridad y alternancia:</b> las nóminas deben tener 50% mujeres y 50% hombres.</li><li>El voto es un <b>deber cívico</b>.</li></ul>`},
    {t:"El TSE — Tribunal Supremo de Elecciones", h:`<p>Órgano constitucional superior en materia electoral, con rango de <span class="hl">"cuarto poder"</span> desde 1975.</p><ul><li>Autónomo e independiente de los tres poderes.</li><li>Integrado por <b>3 magistrados propietarios y 6 suplentes</b>, nombrados por la Corte Suprema por 6 años.</li><li><b>Funciones:</b> organizar y vigilar elecciones, escrutinio, declarar resultados, emitir la cédula, llevar el padrón.</li><li>El <b>IFED</b> promueve la cultura democrática.</li></ul>`},
    {t:"Bipartidismo y multipartidismo", h:`<p><b>Bipartidismo:</b> solo dos partidos grandes con opción real de gobernar (ej. EE.UU.). Más estabilidad, menos pluralidad.</p><p><b>Multipartidismo:</b> tres o más partidos con opción real, requiere coaliciones. <span class="hl">Costa Rica</span> lo es desde inicios de los 2000 (antes PLN y PUSC). Más pluralidad, más complejidad.</p>`},
    {t:"Derechos Humanos — generaciones", h:`<ul><li><b>1ª generación (civiles y políticos):</b> vida, libertad de expresión, voto.</li><li><b>2ª generación (económicos, sociales, culturales):</b> trabajo, educación, salud.</li><li><b>3ª generación (colectivos):</b> medio ambiente sano, paz, desarrollo.</li></ul>`},
    {t:"Participación ciudadana y comunicación política", h:`<p><b>Participación:</b> voto, referéndum, plebiscito, iniciativa popular, cabildos, redes sociales.</p><p><b>Comunicación política:</b> cómo partidos e instituciones transmiten mensajes. Hoy las redes permiten más participación pero también desinformación.</p><p><b>Retos en CR:</b> abstencionismo alto, desconfianza y volatilidad electoral.</p>`},
    {t:"Estado de derecho y separación de poderes", h:`<p><b>Estado de derecho:</b> todas las personas, incluidas las autoridades, están sometidas a la ley.</p><p><b>Separación de poderes</b> (Montesquieu): Ejecutivo (gobierna), Legislativo (crea leyes), Judicial (aplica justicia).</p>`},
    {t:"Fuentes y referencias", cls:"sources", h:`<ul><li>Tribunal Supremo de Elecciones (TSE) de Costa Rica. tse.go.cr</li><li>ONU. <i>Declaración Universal de los Derechos Humanos</i> (1948).</li><li>MEP. Programa de Educación Cívica.</li></ul>`}
  ],
  cards:[
    {q:"¿Qué es el TSE y qué rango tiene?", a:"El Tribunal Supremo de Elecciones, órgano superior en materia electoral, con rango de 'cuarto poder' desde 1975."},
    {q:"¿Cómo está integrado el TSE?", a:"Por 3 magistrados propietarios y 6 suplentes, nombrados por la Corte Suprema por 6 años."},
    {q:"¿Cómo es el voto en Costa Rica?", a:"Universal, directo y secreto, para mayores de 18 años inscritos en el padrón."},
    {q:"¿Qué es el multipartidismo?", a:"Sistema con tres o más partidos con opción real de gobierno; requiere coaliciones."},
    {q:"Derechos de segunda generación", a:"Económicos, sociales y culturales: trabajo, educación, salud."},
    {q:"¿Quién propuso la separación de poderes?", a:"Montesquieu, en \"El espíritu de las leyes\" (1748)."},
    {q:"¿Qué es un referéndum?", a:"Una consulta popular para aprobar o rechazar una ley."},
    {q:"¿Qué es el principio de paridad?", a:"Que las nóminas deben tener 50% mujeres y 50% hombres."}
  ],
  quiz:[
    {q:"El TSE de Costa Rica se considera:", o:["Parte del Poder Judicial","El cuarto poder de la República","Una ONG","Parte del Ejecutivo"], c:1},
    {q:"¿Cuántos magistrados propietarios tiene el TSE?", o:["3","5","7","9"], c:0},
    {q:"El voto en Costa Rica es:", o:["Público y obligatorio","Universal, directo y secreto","Solo para militantes","Indirecto"], c:1},
    {q:"Estados Unidos es ejemplo de:", o:["Multipartidismo","Bipartidismo","Unipartidismo","Anarquía"], c:1},
    {q:"El derecho a la educación es de la:", o:["Primera generación","Segunda generación","Tercera generación","Ninguna"], c:1},
    {q:"¿Qué poder crea las leyes?", o:["Ejecutivo","Legislativo","Judicial","Ninguno"], c:1}
  ]
},
/* ============================================ BIOLOGÍA */
{ id:"biologia", name:"Biología", tag:"Origen de la vida y evolución", color:"#5C7A1E",
  icon:`<img src="assets/materia-biologia.png" alt="">`,
  notes:[
    {t:"Teorías sobre el origen de la vida", h:`<p>📖 <b>Libro:</b> pp. 170-171.</p><table><tr><th>Teoría</th><th>Idea / Autor</th></tr><tr><td>Generación espontánea</td><td>La vida surge de materia inerte (Aristóteles). Refutada por <b>Pasteur</b> con el matraz de cuello de cisne.</td></tr><tr><td>Panspermia</td><td>La vida llegó del espacio en meteoritos (Arrhenius; Crick y Orgel).</td></tr><tr><td>Quimiosintética</td><td><b>Oparin-Haldane</b> (1938): la vida surgió de reacciones químicas en la Tierra primitiva sin oxígeno. Formó los <span class="hl">coacervados</span>.</td></tr><tr><td>Miller-Urey (1953)</td><td>Simularon la atmósfera primitiva y produjeron aminoácidos.</td></tr><tr><td>Biosfera profunda y caliente</td><td>Thomas Gold: la vida surgió a km bajo la superficie.</td></tr><tr><td>Mundo de ARN</td><td>Walter Gilbert: el ARN autorreplicante fue la primera molécula de la vida.</td></tr></table>`},
    {t:"Teoría endosimbiótica (Lynn Margulis)", h:`<p>📖 <b>Libro:</b> pp. 172-173.</p><p>Propuesta por <b>Lynn Margulis</b> (1971). Las <span class="hl">mitocondrias</span> y los <span class="hl">cloroplastos</span> se originaron de bacterias que fueron englobadas por otra célula y vivieron en simbiosis permanente.</p><ul><li><b>Mitocondrias:</b> de una bacteria aeróbica fagocitada por una anaeróbica.</li><li><b>Cloroplastos:</b> de algas/cianobacterias fotosintéticas englobadas.</li><li><b>Pruebas:</b> tienen su propio ADN circular (como bacterias), se dividen por fisión binaria y tienen doble membrana.</li></ul>`},
    {t:"Los tres dominios y el origen celular", h:`<p>📖 <b>Libro:</b> pp. 180-181.</p><ul><li><b>Tres dominios:</b> Bacteria, Archaea y Eukarya.</li><li>Las primeras formas de vida fueron <b>procariotas</b> marinas (sin núcleo), hace ~3800 millones de años.</li><li>La <b>fotosíntesis oxigénica</b> de las cianobacterias liberó oxígeno, tóxico para muchas especies (primera gran extinción).</li><li><b>Eucariotas:</b> aparecieron por endosimbiosis; tienen núcleo con ADN.</li></ul>`},
    {t:"Multicelularidad", h:`<p>📖 <b>Libro:</b> p. 182.</p><p>Las primeras formas multicelulares aparecieron hace ~1200 millones de años. Tres teorías:</p><ul><li><b>Colonial:</b> células flageladas se unieron en colonias que se especializaron.</li><li><b>Fagotrofia:</b> las colonias surgieron por asociación ante depredadores.</li><li><b>Plasmodial:</b> de un plasmodio multinucleado se pasó a células diferenciadas.</li></ul>`},
    {t:"Primeras ideas y corrientes preevolucionistas", h:`<p>📖 <b>Libro:</b> pp. 186-187.</p><ul><li><b>Idealismo (Platón):</b> las especies son copias de un modelo ideal, no cambian.</li><li><b>Fijismo (Aristóteles):</b> las especies son inalterables desde su creación. Propuso la <i>Scala Naturae</i>.</li><li><b>Creacionismo:</b> los seres vivos fueron creados por Dios y no cambian.</li><li><b>Preevolucionistas:</b> Steno (fósiles), Hutton (uniformismo), Cuvier (catastrofismo), Lamarck, Erasmus Darwin, Malthus, Lyell (gradualismo).</li></ul>`},
    {t:"Lamarck y Darwin", h:`<p>📖 <b>Libro:</b> pp. 190-191.</p><p><b>Lamarck:</b> herencia de los caracteres adquiridos. Los órganos se desarrollan por el <b>uso y desuso</b> y esos cambios se heredan (ej. el cuello de la jirafa se alargó por estirarse).</p><p><b>Darwin</b> (El origen de las especies, 1859): <span class="hl">selección natural</span>. Hay variaciones entre individuos; los más aptos sobreviven y se reproducen (influido por Malthus y Wallace). Pinzones de Galápagos.</p>`},
    {t:"Teoría mutacionista y sintética", h:`<p>📖 <b>Libro:</b> pp. 192-193.</p><p><b>Mutacionista (Hugo de Vries, 1905):</b> las nuevas especies surgen por <b>mutaciones</b> súbitas y al azar, no graduales.</p><p><b>Sintética (neodarwinismo):</b> integra la selección natural de Darwin con la genética mendeliana. La <b>mutación</b> aporta la variabilidad sobre la cual actúa la <b>selección natural</b>. (Huxley, Mayr, Simpson.)</p>`},
    {t:"Fuentes y referencias", cls:"sources", h:`<ul><li>Santillana. <i>Ciencias Biología 10°</i>, pp. 170-193.</li><li>Margulis, L. (1971). Teoría endosimbiótica.</li><li>Darwin, C. (1859). <i>El origen de las especies</i>.</li></ul>`}
  ],
  cards:[
    {q:"¿Quién refutó la generación espontánea?", a:"Louis Pasteur, con el matraz de cuello de cisne."},
    {q:"¿Qué propusieron Oparin y Haldane?", a:"La teoría quimiosintética: la vida surgió de reacciones químicas en la Tierra primitiva, formando coacervados."},
    {q:"¿Quién propuso la teoría endosimbiótica?", a:"Lynn Margulis (1971): mitocondrias y cloroplastos vienen de bacterias englobadas."},
    {q:"Pruebas de la teoría endosimbiótica", a:"Mitocondrias y cloroplastos tienen ADN circular propio, se dividen por fisión binaria y tienen doble membrana."},
    {q:"¿Cuáles son los tres dominios de la vida?", a:"Bacteria, Archaea y Eukarya."},
    {q:"Diferencia entre Lamarck y Darwin", a:"Lamarck: herencia de caracteres adquiridos por uso y desuso. Darwin: selección natural de los más aptos."},
    {q:"¿Qué plantea la teoría mutacionista?", a:"Que las nuevas especies surgen por mutaciones súbitas y al azar (Hugo de Vries)."},
    {q:"¿Qué integra la teoría sintética?", a:"La selección natural de Darwin con la genética mendeliana (la mutación da variabilidad)."},
    {q:"¿Qué teorías explican la multicelularidad?", a:"Colonial, fagotrofia y plasmodial."}
  ],
  quiz:[
    {q:"La teoría endosimbiótica fue propuesta por:", o:["Darwin","Lynn Margulis","Pasteur","Lamarck"], c:1},
    {q:"El experimento de Miller-Urey produjo:", o:["ADN","Aminoácidos","Una célula viva","Oxígeno"], c:1},
    {q:"Según Lamarck, los órganos se desarrollan por:", o:["Selección natural","El uso y desuso","Mutaciones","Creación divina"], c:1},
    {q:"La selección natural fue propuesta por:", o:["Lamarck","Darwin","De Vries","Platón"], c:1},
    {q:"Las mitocondrias se originaron de:", o:["Virus","Una bacteria aeróbica englobada","El núcleo","Cloroplastos"], c:1},
    {q:"El fijismo de Aristóteles sostiene que las especies:", o:["Evolucionan","Son inalterables","Vienen del espacio","Mután"], c:1},
    {q:"La teoría mutacionista fue propuesta por:", o:["Hugo de Vries","Margulis","Malthus","Cuvier"], c:0},
    {q:"¿Qué dominio NO es uno de los tres fundamentales?", o:["Bacteria","Archaea","Eukarya","Protista"], c:3}
  ]
},
/* ============================================ QUÍMICA */
{ id:"quimica", name:"Química", tag:"Nomenclatura de compuestos inorgánicos", color:"#799833",
  icon:`<img src="assets/materia-quimica.png" alt="">`,
  notes:[
    {t:"Función química y número de oxidación", h:`<p>📖 <b>Libro:</b> pp. 102, 117.</p><p>Una <b>función química</b> es una familia de compuestos con propiedades similares. El <b>grupo funcional</b> la identifica.</p><table><tr><th>Función</th><th>Grupo funcional</th><th>Ejemplo</th></tr><tr><td>Óxido</td><td>O²⁻</td><td>Na₂O</td></tr><tr><td>Hidróxido</td><td>OH⁻</td><td>NaOH</td></tr><tr><td>Ácido</td><td>H⁺</td><td>H₂SO₄</td></tr><tr><td>Hidruro</td><td>H⁻</td><td>NaH</td></tr><tr><td>Sal</td><td>catión + anión</td><td>NaCl</td></tr></table><p><b>Número de oxidación:</b> negativo si el átomo gana electrones, positivo si los pierde. El O casi siempre es −2, el H casi siempre +1.</p>`},
    {t:"Los tres sistemas de nomenclatura", h:`<p>📖 <b>Libro:</b> p. 116.</p><ul><li><b>Tradicional:</b> sufijos -oso (menor valencia) e -ico (mayor); prefijos hipo- y per-. Ej: óxido ferroso.</li><li><b>Stock:</b> número romano para la valencia. Ej: óxido de hierro (II). Recomendada por IUPAC.</li><li><b>Sistemática:</b> prefijos griegos mono-, di-, tri-, tetra-. Ej: monóxido de carbono.</li></ul>`},
    {t:"Óxidos y peróxidos", h:`<p>📖 <b>Libro:</b> pp. 118-120.</p><ul><li><b>Óxido básico:</b> metal + O. Ej: Na₂O (óxido de sodio). El O trabaja con −2.</li><li><b>Óxido ácido (anhídrido):</b> no metal + O. Ej: CO₂ (dióxido de carbono).</li><li><b>Peróxido:</b> el O tiene número de oxidación <span class="hl">−1</span>. Ej: H₂O₂ (peróxido de hidrógeno / agua oxigenada).</li></ul><p>Para escribir la fórmula: se intercambian los números de oxidación como subíndices y se simplifica.</p>`},
    {t:"Hidróxidos", h:`<p>📖 <b>Libro:</b> pp. 121-122.</p><p>Son <b>bases o álcalis</b>: óxido básico + agua. Grupo funcional <span class="hl">OH⁻</span> (valencia −1).</p><p><b>Fórmula:</b> M(OH)ₙ. Ej: NaOH (hidróxido de sodio), Ca(OH)₂ (hidróxido de calcio).</p><p>Cambian el papel tornasol rojo a azul y <b>neutralizan</b> los ácidos. Por eso se usan contra la acidez estomacal.</p>`},
    {t:"Ácidos (oxácidos e hidrácidos)", h:`<p>📖 <b>Libro:</b> pp. 123-125.</p><ul><li><b>Ácidos oxácidos:</b> óxido ácido + agua → contienen H, O y un no metal. Ej: H₂SO₄ (ácido sulfúrico). Fórmula general: Hₓ(NoM)Oᵧ.</li><li><b>Ácidos hidrácidos:</b> H + no metal (grupos 16-17), sin oxígeno. En disolución acuosa (ac). Ej: HCl (ácido clorhídrico), H₂S (ácido sulfhídrico).</li></ul><p>Tradicional: sufijos -oso/-ico (oxácidos), -hídrico (hidrácidos). Cambian el tornasol a rojo y tienen sabor agrio.</p>`},
    {t:"Hidruros", h:`<p>📖 <b>Libro:</b> pp. 126-127.</p><ul><li><b>Hidruros metálicos:</b> metal + H (el H es −1). Ej: CaH₂, NaH.</li><li><b>Hidruros no metálicos:</b> no metal + H. Grupos 13-15 tienen nombres propios: borano (BH₃), metano (CH₄), amoniaco (NH₃). Grupos 16-17 forman ácidos hidrácidos.</li></ul>`},
    {t:"Sales", h:`<p>📖 <b>Libro:</b> pp. 128-131.</p><p>Se forman al reaccionar un <b>ácido con una base</b>: ácido + base → <span class="hl">sal + agua</span>.</p><table><tr><th>Tipo de sal</th><th>Ejemplo</th></tr><tr><td>Binaria (metal + no metal)</td><td>NaCl — cloruro de sodio</td></tr><tr><td>Ternaria u oxisal</td><td>CaCO₃ — carbonato de calcio</td></tr><tr><td>Ácida (conserva H)</td><td>NaHCO₃ — bicarbonato de sodio</td></tr><tr><td>Básica (conserva OH)</td><td>MgOHNO₃</td></tr><tr><td>Doble (dos metales)</td><td>CuFePO₄</td></tr></table><p>Al disolverse en agua se separan en iones (disociación): por eso el agua salada conduce electricidad.</p>`},
    {t:"Tipos de compuestos inorgánicos", h:`<p>📖 <b>Libro:</b> pp. 106-107.</p><p>Se clasifican por el número de <b>elementos diferentes</b> (no de átomos):</p><ul><li><b>Binarios:</b> 2 elementos. Ej: NaCl, CaO.</li><li><b>Ternarios:</b> 3 elementos. Ej: H₂SO₄, KNO₃.</li><li><b>Cuaternarios:</b> 4 elementos. Ej: NaHCO₃.</li></ul><p>Ojo: el H₂SO₄ tiene 7 átomos pero solo 3 elementos (H, S, O) → es ternario. El O₃ no es compuesto (un solo elemento).</p>`},
    {t:"Fuentes y referencias", cls:"sources", h:`<ul><li>Santillana. <i>Química 10°</i>, pp. 102-131.</li><li>IUPAC. <i>Nomenclature of Inorganic Chemistry</i> (2005).</li></ul>`}
  ],
  cards:[
    {q:"¿Qué valencia tiene el oxígeno en un peróxido?", a:"−1 (en los óxidos normales es −2). Ej: H₂O₂."},
    {q:"¿Cómo se forma una sal?", a:"Por la reacción de un ácido con una base: ácido + base → sal + agua."},
    {q:"¿Qué indica el número romano en la nomenclatura Stock?", a:"La valencia del metal cuando tiene más de una. Ej: óxido de hierro (II)."},
    {q:"Diferencia entre ácido oxácido e hidrácido", a:"El oxácido contiene oxígeno (H₂SO₄); el hidrácido no (HCl)."},
    {q:"¿Cómo se forma un hidróxido?", a:"De un óxido básico + agua. Grupo funcional OH⁻. Fórmula M(OH)ₙ."},
    {q:"¿Cuántos elementos hace binario a un compuesto?", a:"Dos elementos diferentes. Ej: NaCl, CaO."},
    {q:"¿Por qué el H₂SO₄ es ternario si tiene 7 átomos?", a:"Porque solo tiene 3 elementos diferentes: H, S y O."},
    {q:"¿Qué es un hidruro metálico y qué valencia tiene el H?", a:"Metal + H, donde el H trabaja con −1. Ej: CaH₂."},
    {q:"¿Por qué el agua salada conduce electricidad?", a:"Porque la sal se disocia en iones al disolverse."}
  ],
  quiz:[
    {q:"En un peróxido, el oxígeno tiene número de oxidación:", o:["−2","−1","+1","+2"], c:1},
    {q:"Una sal se forma por la reacción de:", o:["Dos metales","Un ácido y una base","Dos óxidos","Agua y sal"], c:1},
    {q:"HCl (ácido clorhídrico) es un:", o:["Oxácido","Hidrácido","Hidróxido","Óxido"], c:1},
    {q:"NaHCO₃ es un ejemplo de sal:", o:["Binaria","Ácida","Básica","Doble"], c:1},
    {q:"El H₂SO₄ se clasifica como compuesto:", o:["Binario","Ternario","Cuaternario","Elemento"], c:1},
    {q:"La nomenclatura que usa números romanos es:", o:["Tradicional","Stock","Sistemática","Común"], c:1},
    {q:"El grupo funcional de los hidróxidos es:", o:["O²⁻","OH⁻","H⁺","H⁻"], c:1},
    {q:"¿Cuál es un óxido ácido (anhídrido)?", o:["Na₂O","CO₂","NaOH","NaCl"], c:1}
  ]
},
/* ============================================ FÍSICA */
{ id:"fisica", name:"Física", tag:"El universo, Kepler y gravitación", color:"#8FAE49",
  icon:`<img src="assets/materia-fisica.png" alt="">`,
  notes:[
    {t:"El universo y modelos del cosmos", h:`<p>📖 <b>Libro:</b> pp. 159-161.</p><ul><li><b>Modelo geocéntrico</b> (Ptolomeo): la Tierra en el centro. Erróneo.</li><li><b>Modelo heliocéntrico</b> (Copérnico): el Sol en el centro. Correcto.</li><li><b>Cuerpos celestes:</b> estrellas, planetas, satélites, cometas, asteroides, galaxias.</li></ul>`},
    {t:"Las leyes de Kepler", h:`<p>📖 <b>Libro:</b> pp. 162-164.</p><ul><li><b>1ª Ley (órbitas):</b> los planetas giran en <span class="hl">elipses</span>, con el Sol en uno de los focos.</li><li><b>2ª Ley (áreas):</b> el planeta barre áreas iguales en tiempos iguales (va más rápido cerca del Sol).</li><li><b>3ª Ley (períodos):</b> el cuadrado del período es proporcional al cubo de la distancia. <b>T² = k·r³</b></li></ul>`},
    {t:"Ley de gravitación universal (Newton)", h:`<p>📖 <b>Libro:</b> pp. 165-167.</p><p>Dos cuerpos se atraen con una fuerza proporcional a sus masas e inversamente proporcional al cuadrado de la distancia:</p><p><span class="hl">F = G·m₁·m₂ / r²</span></p><ul><li><b>G</b> = constante de gravitación = 6,67×10⁻¹¹ N·m²/kg²</li><li>Medida por <b>Cavendish</b>.</li><li>Si la distancia se duplica, la fuerza se reduce a la cuarta parte.</li></ul>`},
    {t:"Gravedad superficial y peso", h:`<p>📖 <b>Libro:</b> pp. 171-172.</p><ul><li>Gravedad en la superficie: <b>g = G·M / r²</b></li><li>A una altura h: g = G·M / (r+h)²</li><li>Peso: <b>P = m·g</b> (en la Tierra g ≈ 9,8 m/s²)</li><li>La masa es constante; el peso cambia según la gravedad del lugar.</li></ul>`},
    {t:"Movimiento orbital y satélites", h:`<p>📖 <b>Libro:</b> pp. 173-175, 178-179.</p><ul><li>Velocidad orbital: <b>v = √(G·M / r)</b></li><li>Período orbital: <b>T = 2π·√(r³ / G·M)</b></li><li><b>Satélite:</b> cuerpo que orbita a otro. Naturales (la Luna) o artificiales.</li><li>Órbitas de satélites artificiales: baja (LEO), media (MEO) y geoestacionaria (GEO).</li></ul>`},
    {t:"Sistema Tierra-Luna-Sol", h:`<p>📖 <b>Libro:</b> pp. 174-177.</p><ul><li><b>Mareas:</b> causadas por la atracción gravitatoria de la Luna (y el Sol).</li><li><b>Fases lunares:</b> nueva, creciente, llena, menguante.</li><li><b>Eclipses:</b> solar (la Luna tapa el Sol) y lunar (la Tierra tapa la Luna).</li><li><b>Estaciones:</b> por la inclinación del eje terrestre, no por la distancia al Sol.</li></ul>`},
    {t:"Evolución estelar", h:`<p>📖 <b>Libro:</b> pp. 181-182.</p><p>Ciclo de vida de una estrella:</p><ul><li>Nace de una <b>nebulosa</b> (gas y polvo).</li><li>Vive como estrella estable (secuencia principal), fusionando hidrógeno.</li><li>Se expande a <b>gigante roja</b>.</li><li>Estrellas pequeñas → <b>enana blanca</b>. Estrellas grandes → <b>supernova</b> → estrella de neutrones o <span class="hl">agujero negro</span>.</li></ul>`},
    {t:"Fuentes y referencias", cls:"sources", h:`<ul><li>Santillana. <i>Física 10°</i>, pp. 159-182.</li><li>Newton, I. (1687). <i>Principia</i>.</li><li>Kepler, J. Leyes del movimiento planetario.</li></ul>`}
  ],
  cards:[
    {q:"1ª Ley de Kepler", a:"Los planetas giran en órbitas elípticas, con el Sol en uno de los focos."},
    {q:"3ª Ley de Kepler", a:"El cuadrado del período es proporcional al cubo de la distancia: T² = k·r³."},
    {q:"Ley de gravitación universal", a:"F = G·m₁·m₂/r². La fuerza es proporcional a las masas e inversa al cuadrado de la distancia."},
    {q:"¿Cuánto vale G y quién la midió?", a:"G = 6,67×10⁻¹¹ N·m²/kg², medida por Cavendish."},
    {q:"Fórmula del peso", a:"P = m·g (en la Tierra g ≈ 9,8 m/s²)."},
    {q:"Fórmula de la velocidad orbital", a:"v = √(G·M / r)."},
    {q:"¿Qué causa las mareas?", a:"La atracción gravitatoria de la Luna (y en menor medida el Sol)."},
    {q:"¿Por qué hay estaciones?", a:"Por la inclinación del eje de la Tierra, no por la distancia al Sol."},
    {q:"¿En qué puede terminar una estrella muy masiva?", a:"En una supernova, que deja una estrella de neutrones o un agujero negro."}
  ],
  quiz:[
    {q:"Según la 1ª ley de Kepler, las órbitas son:", o:["Circulares","Elípticas","Cuadradas","Rectas"], c:1},
    {q:"La ley de gravitación universal es:", o:["F=m·a","F=G·m₁·m₂/r²","P=m·g","v=d/t"], c:1},
    {q:"La constante G fue medida por:", o:["Newton","Kepler","Cavendish","Galileo"], c:2},
    {q:"Si la distancia entre dos cuerpos se duplica, la fuerza gravitatoria:", o:["Se duplica","Se reduce a la mitad","Se reduce a la cuarta parte","No cambia"], c:2},
    {q:"Las mareas son causadas principalmente por:", o:["El viento","La Luna","Las estaciones","El eje terrestre"], c:1},
    {q:"Las estaciones del año se deben a:", o:["La distancia al Sol","La inclinación del eje terrestre","Las mareas","Los eclipses"], c:1},
    {q:"Una estrella muy masiva puede terminar como:", o:["Enana blanca","Agujero negro","Planeta","Cometa"], c:1},
    {q:"El modelo heliocéntrico fue propuesto por:", o:["Ptolomeo","Copérnico","Aristóteles","Newton"], c:1}
  ]
},
/* ============================================ MATEMÁTICAS */
{ id:"matematicas", name:"Matemáticas", tag:"Función cuadrática, sistemas y estadística", color:"#a03c3c",
  icon:`<img src="assets/materia-matematicas.png" alt="">`,
  notes:[
    {t:"La función cuadrática", h:`<p>📖 <b>Libro:</b> pp. 123-124.</p><p>Forma: <span class="hl">f(x) = ax² + bx + c</span> (con a ≠ 0). Su gráfica es una <b>parábola</b>.</p><ul><li>Si <b>a > 0</b>: abre hacia arriba (cóncava hacia arriba), tiene mínimo.</li><li>Si <b>a < 0</b>: abre hacia abajo (cóncava hacia abajo), tiene máximo.</li><li>La <b>imagen</b> se calcula sustituyendo x en el criterio.</li></ul>`},
    {t:"Vértice, eje de simetría y ámbito", h:`<p>📖 <b>Libro:</b> p. 127.</p><p>El <b>vértice</b> V(h, k) es el punto máximo o mínimo:</p><ul><li><b>h = −b / 2a</b></li><li><b>k = f(h)</b> (o k = −Δ/4a)</li><li><b>Eje de simetría:</b> x = −b/2a</li><li><b>Dominio:</b> siempre ℝ. <b>Ámbito:</b> si a>0, [k, +∞[; si a<0, ]−∞, k].</li></ul>`},
    {t:"Intersecciones con los ejes y discriminante", h:`<p>📖 <b>Libro:</b> p. 125.</p><ul><li><b>Intersección con eje Y:</b> el punto (0, c).</li><li><b>Intersección con eje X (ceros):</b> se resuelve ax² + bx + c = 0.</li></ul><p><b>Discriminante Δ = b² − 4ac:</b></p><ul><li>Δ > 0 → dos ceros (corta el eje X en 2 puntos)</li><li>Δ = 0 → un cero (toca el eje X en 1 punto)</li><li>Δ < 0 → sin ceros reales (no corta el eje X)</li></ul><p>Fórmula general: x = (−b ± √(b²−4ac)) / 2a</p>`},
    {t:"Sistemas de ecuaciones — conceptos", h:`<p>📖 <b>Libro:</b> p. 135.</p><p>Dos ecuaciones lineales con dos incógnitas. La solución es el par (x, y) que cumple ambas.</p><ul><li><b>Compatible determinado:</b> una única solución (rectas se cortan).</li><li><b>Compatible indeterminado:</b> infinitas soluciones (rectas coinciden).</li><li><b>Incompatible:</b> sin solución (rectas paralelas). S = { }.</li></ul>`},
    {t:"Método de sustitución", h:`<p>📖 <b>Libro:</b> p. 137.</p><ol><li>Se despeja una variable en una ecuación.</li><li>Se sustituye en la otra ecuación y se resuelve.</li><li>Se reemplaza el valor hallado para encontrar la otra variable.</li><li>Se anota la solución S = (x, y).</li></ol><p>Ej: x = y + 116 y x + y = 316 → (y+116) + y = 316 → y = 100, x = 216.</p>`},
    {t:"Método de suma y resta (reducción)", h:`<p>📖 <b>Libro:</b> p. 142.</p><ol><li>Se igualan los coeficientes de una incógnita (multiplicando) con signos opuestos.</li><li>Se suman las ecuaciones para eliminar esa incógnita.</li><li>Se resuelve y se sustituye para hallar la otra.</li></ol>`},
    {t:"Estadística — tablas y frecuencias", h:`<p>📖 <b>Libro:</b> pp. 155-157.</p><ul><li><b>Frecuencia absoluta (fᵢ):</b> cuántas veces se repite un dato.</li><li><b>Frecuencia relativa (hᵢ):</b> hᵢ = fᵢ / n.</li><li><b>Frecuencia porcentual:</b> hᵢ × 100.</li><li><b>Datos agrupados:</b> en intervalos. Recorrido R = máx − mín; amplitud A = R / nº intervalos.</li></ul>`},
    {t:"Media aritmética ponderada", h:`<p>📖 <b>Libro:</b> p. 179.</p><p>Se usa cuando los datos tienen <b>distinto peso</b>. Pasos:</p><ol><li>Multiplicar cada dato por su peso (ponderación).</li><li>Sumar esos productos.</li><li>Dividir entre la suma de los pesos.</li></ol><p>Ej: (85·20 + 76·30 + 65·35 + 90·15) / 100 = 7605/100 = <b>76,05</b></p>`},
    {t:"Fuentes y referencias", cls:"sources", h:`<ul><li>Santillana. <i>Matemáticas 10°</i>, pp. 123-183.</li><li>MEP. Programa de Estudios de Matemáticas.</li></ul>`}
  ],
  cards:[
    {q:"Forma de la función cuadrática", a:"f(x) = ax² + bx + c, con a ≠ 0. Su gráfica es una parábola."},
    {q:"¿Cómo se calcula el vértice de una parábola?", a:"h = −b/2a, y k = f(h). El eje de simetría es x = −b/2a."},
    {q:"¿Qué indica el discriminante Δ = b²−4ac?", a:"Δ>0: dos ceros; Δ=0: un cero; Δ<0: sin ceros reales."},
    {q:"¿Cuándo una parábola abre hacia arriba?", a:"Cuando a > 0 (tiene un mínimo)."},
    {q:"Tipos de sistemas de ecuaciones", a:"Compatible determinado (1 solución), compatible indeterminado (infinitas), incompatible (ninguna)."},
    {q:"Pasos del método de sustitución", a:"Despejar una variable, sustituir en la otra ecuación, resolver, y reemplazar para la otra."},
    {q:"¿Qué es la frecuencia relativa?", a:"hᵢ = fᵢ / n (la frecuencia absoluta entre el total de datos)."},
    {q:"¿Cómo se calcula la media ponderada?", a:"Se suman los productos de cada dato por su peso y se divide entre la suma de los pesos."},
    {q:"Fórmula general para los ceros", a:"x = (−b ± √(b²−4ac)) / 2a."}
  ],
  quiz:[
    {q:"Si en f(x)=ax²+bx+c, a<0, la parábola:", o:["Abre hacia arriba","Abre hacia abajo","Es una recta","No existe"], c:1},
    {q:"El vértice de una parábola tiene x =", o:["−b/2a","b²−4ac","a·c","2a/b"], c:0},
    {q:"Si Δ < 0, la cuadrática tiene:", o:["Dos ceros","Un cero","Sin ceros reales","Infinitos ceros"], c:2},
    {q:"Un sistema sin solución se llama:", o:["Compatible determinado","Compatible indeterminado","Incompatible","Lineal"], c:2},
    {q:"El método que elimina una incógnita sumando ecuaciones es:", o:["Sustitución","Suma y resta","Gráfico","Igualación"], c:1},
    {q:"La frecuencia relativa se calcula:", o:["fᵢ × 100","fᵢ / n","n / fᵢ","fᵢ + n"], c:1},
    {q:"La media ponderada se usa cuando los datos:", o:["Son iguales","Tienen distinto peso","Son negativos","Están ordenados"], c:1},
    {q:"La intersección con el eje Y de f(x)=ax²+bx+c es:", o:["(0, c)","(c, 0)","(0, a)","(a, b)"], c:0}
  ]
},
/* ============================================ INGLÉS (sin cambios) */
{ id:"ingles", name:"Inglés", tag:"Passives, reported speech y tiempos verbales", color:"#b5822f",
  icon:`<img src="assets/materia-ingles.png" alt="">`,
  notes:[
    {t:"Passive voice", h:`<p><b>Structure:</b> subject + <span class="hl">be</span> + past participle + (by + agent).</p><ul><li>Active: They build houses. → Passive: Houses are built.</li><li>Active: Shakespeare wrote the play. → Passive: The play was written by Shakespeare.</li></ul>`},
    {t:"Modal passives", h:`<p><b>Structure:</b> modal + <span class="hl">be</span> + past participle.</p><ul><li>The report must be completed. (obligation)</li><li>The problem can be solved. (possibility)</li><li>More efforts should be made. (advice)</li></ul><p>Never drop "be"; keep the modal unchanged.</p>`},
    {t:"Modals of possibility (may/might/could)", h:`<ul><li><b>May:</b> possibility or permission.</li><li><b>Might:</b> possibility, less certain than "may".</li><li><b>Could:</b> possibility or past ability.</li></ul><p>Certainty: must → may → might/could.</p>`},
    {t:"Reported speech", h:`<table><tr><th>Direct</th><th>Reported</th></tr><tr><td>present simple</td><td>past simple</td></tr><tr><td>past simple</td><td>past perfect</td></tr><tr><td>will</td><td>would</td></tr><tr><td>can</td><td>could</td></tr><tr><td>may</td><td>might</td></tr><tr><td>must</td><td>had to</td></tr></table><p>"I am tired" → He said he was tired. Verbos: say, tell, <span class="hl">deny, admit, suggest</span>.</p>`},
    {t:"Tiempos verbales", h:`<ul><li><b>Present Simple:</b> hábitos. "She works every day."</li><li><b>Present Continuous:</b> acción en progreso. "She is working now."</li><li><b>Past Simple:</b> acción terminada. "She worked yesterday."</li><li><b>Present Perfect:</b> have/has + participio. "She has worked here for 5 years."</li></ul>`},
    {t:"Fuentes y referencias", cls:"sources", h:`<ul><li>Murphy, R. <i>English Grammar in Use</i>. Cambridge University Press.</li><li>Cambridge Dictionary. dictionary.cambridge.org</li></ul>`}
  ],
  cards:[
    {q:"Structure of the passive voice", a:"subject + be + past participle (+ by + agent). Ej: The play was written by Shakespeare."},
    {q:"Structure of a modal passive", a:"modal + be + past participle. Ej: The report must be completed."},
    {q:"Make passive: 'She can solve the problem.'", a:"The problem can be solved (by her)."},
    {q:"In reported speech, 'will' changes to...", a:"'would'. Ej: \"I will help\" → He said he would help."},
    {q:"In reported speech, 'must' changes to...", a:"'had to'. Ej: \"You must go\" → She said I had to go."},
    {q:"Estructura del Present Perfect", a:"have/has + participio pasado. \"She has worked here for 5 years.\""},
    {q:"Difference between 'may' and 'might'", a:"Both express possibility, but 'might' is less certain."}
  ],
  quiz:[
    {q:"Passive of 'They clean the office every day':", o:["The office cleans every day","The office is cleaned every day","The office was clean","They are cleaned"], c:1},
    {q:"Correct modal passive:", o:["The rules must followed","The rules must be followed","The rules must being followed","The rules be must followed"], c:1},
    {q:"Which modal shows LEAST certainty?", o:["must","will","might","can"], c:2},
    {q:"Reported: \"I can swim,\" she said.", o:["She said she can swim","She said she could swim","She says she can swim","She said she swims"], c:1},
    {q:"\"She is working now\" está en:", o:["Present Simple","Present Continuous","Past Simple","Present Perfect"], c:1},
    {q:"Which is a reporting verb?", o:["admit","because","however","therefore"], c:0}
  ]
},
/* ============================================ FRANCÉS */
{ id:"frances", name:"Francés", tag:"Imparfait, passé composé y conectores", color:"#4a6d8c",
  icon:`<img src="assets/materia-frances.png" alt="">`,
  notes:[
    {t:"L'imparfait", h:`<p>📖 <b>Tome II «Lire le français autrement»</b> + Wordwall Imparfait.</p><p><b>Describe</b> el pasado: situaciones, estados, hábitos, acciones en curso.</p><p><b>Terminaciones:</b> <span class="hl">-ais, -ais, -ait, -ions, -iez, -aient</span> (sobre la raíz de "nous").</p><p>Ej: "Quand j'étais jeune, je jouais dehors." Excepción: être → j'étais.</p>`},
    {t:"Le passé composé", h:`<p>📖 <b>Wordwall:</b> Passé composé avec être.</p><p><b>Cuenta</b> acciones puntuales terminadas.</p><p><b>Formación:</b> auxiliar <span class="hl">avoir</span> o <span class="hl">être</span> (presente) + participio.</p><p>"J'ai mangé." · "Elle est allée." (con être el participio concuerda). Être: verbos de movimiento (aller, venir, partir...) y pronominales.</p>`},
    {t:"Imparfait vs passé composé", h:`<table><tr><th>Imparfait</th><th>Passé composé</th></tr><tr><td>describe / contexto</td><td>acción puntual</td></tr><tr><td>hábito</td><td>evento único</td></tr><tr><td>"¿cómo era?"</td><td>"¿qué pasó?"</td></tr></table><p>"Je <b>lisais</b> quand il <b>a téléphoné</b>."</p>`},
    {t:"Futur simple et être en train de", h:`<p>📖 <b>Wordwall:</b> Futur simple · Français Facile: présent progressif.</p><ul><li><b>Futur simple:</b> proyección futura. Terminaciones: -ai, -as, -a, -ons, -ez, -ont. "Je parlerai."</li><li><b>Être en train de + infinitivo:</b> acción en curso ahora. "Je suis en train de manger."</li><li><b>Être au présent:</b> je suis, tu es, il est, nous sommes, vous êtes, ils sont.</li></ul>`},
    {t:"Connecteurs logiques", h:`<p>📖 <b>Wordwall:</b> Connecteurs logiques.</p><ul><li>Cependant / En revanche — sin embargo / en cambio</li><li>Donc / C'est pourquoi — por lo tanto / por eso</li><li>De plus — además · Par exemple — por ejemplo</li><li>Parce que — porque · Bien que — aunque</li><li>D'abord... ensuite... enfin — primero... luego... finalmente</li></ul>`},
    {t:"Vocabulaire : au jardin", h:`<p>📖 <b>Français Facile:</b> Vocabulaire au jardin.</p><ul><li>le jardin (el jardín), la fleur (la flor), l'arbre (el árbol)</li><li>la plante (la planta), l'herbe (la hierba), la feuille (la hoja)</li><li>arroser (regar), planter (plantar), cueillir (recoger)</li></ul>`},
    {t:"Fuentes y referencias", cls:"sources", h:`<ul><li>Tome II «Lire le français autrement».</li><li>Bescherelle. <i>La Conjugaison pour tous</i>. Hatier.</li><li>Recursos Wordwall y Français Facile (dosificación III trimestre).</li></ul>`}
  ],
  cards:[
    {q:"¿Para qué sirve l'imparfait?", a:"Para describir el pasado: situaciones, estados, hábitos y acciones en curso."},
    {q:"¿Para qué sirve le passé composé?", a:"Para contar acciones puntuales y terminadas."},
    {q:"Terminaciones del imparfait", a:"-ais, -ais, -ait, -ions, -iez, -aient."},
    {q:"¿Cómo se forma le passé composé?", a:"Auxiliar avoir o être (presente) + participio. Ej: j'ai mangé, elle est allée."},
    {q:"¿Cómo se dice 'estar haciendo algo'?", a:"Être en train de + infinitivo. Ej: Je suis en train de manger."},
    {q:"Terminaciones del futur simple", a:"-ai, -as, -a, -ons, -ez, -ont. Ej: je parlerai."},
    {q:"Traduce 'Cependant' y 'Donc'", a:"Cependant = sin embargo (contraste). Donc = por lo tanto (consecuencia)."},
    {q:"Conjuga 'être' en presente (je, tu, il)", a:"je suis, tu es, il est."}
  ],
  quiz:[
    {q:"L'imparfait se usa para:", o:["Acciones puntuales","Describir y hablar de hábitos pasados","El futuro","Órdenes"], c:1},
    {q:"¿Cuál está en passé composé?", o:["Je mangeais","J'ai mangé","Je mange","Je mangerai"], c:1},
    {q:"En 'Je lisais quand il a téléphoné', el imparfait es:", o:["a téléphoné","lisais","quand","il"], c:1},
    {q:"'Être en train de + infinitivo' expresa:", o:["El pasado","Una acción en curso","El futuro lejano","Una orden"], c:1},
    {q:"'Cependant' significa:", o:["Por lo tanto","Además","Sin embargo","Porque"], c:2},
    {q:"El auxiliar 'être' se usa con:", o:["Todos los verbos","Verbos de movimiento y pronominales","Solo verbos -er","Nunca"], c:1},
    {q:"¿Cuál es una terminación del futur simple?", o:["-ais","-ait","-ont","-é"], c:2}
  ]
}
];
