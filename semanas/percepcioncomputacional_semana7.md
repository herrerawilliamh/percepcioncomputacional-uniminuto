---
layout: slide-01-portada
---

::title::
Percepción Computacional

::week::
Semana 7

::date::
Junio 15 de 2026

<!--
Notas del presentador:
Inicie la sesión dando la bienvenida a los estudiantes a la semana 7 del curso Electiva CPC: Percepción Computacional. Explique que esta clase se concentra en una etapa esencial dentro de los sistemas de percepción: la extracción de características. Hasta este punto del curso, los estudiantes han revisado fundamentos de percepción computacional, captura de información, preprocesamiento, mejora de imagen, filtrado y segmentación básica. En esta sesión se busca avanzar hacia la pregunta central: después de mejorar o preparar una imagen o señal, ¿qué información útil puede extraer una máquina para tomar decisiones?

Resalte que una imagen no es solamente una fotografía, sino una matriz de valores numéricos. Una señal sensorial tampoco es únicamente una línea temporal, sino una secuencia de datos que puede describirse mediante propiedades estadísticas, cambios de intensidad, patrones repetitivos, bordes, texturas o componentes frecuenciales. En aplicaciones reales, como conducción autónoma, monitoreo industrial, diagnóstico médico, seguridad, agricultura de precisión o inspección de carreteras, el sistema no “entiende” el mundo como lo hace una persona. El sistema necesita transformar datos complejos en medidas comprensibles para un algoritmo.

Presente el propósito de la sesión: identificar y aplicar métodos de extracción de características estadísticas y frecuenciales para facilitar el análisis de datos sensoriales, especialmente imágenes. Señale que durante la clase se revisarán conceptos, ejemplos aplicados, relación con el foro de la semana, preguntas tipo evaluación y una práctica guiada en Python con OpenCV, NumPy y Matplotlib. Indique que la práctica no busca construir un sistema de inteligencia artificial completo, sino preparar variables que luego podrían alimentar un modelo de clasificación, detección o toma de decisiones.

Finalmente, recuerde la dinámica de participación: la clase tendrá momentos breves de interacción, análisis grupal, práctica técnica y cierre con dudas. Invite a los estudiantes a conectar la sesión con situaciones concretas: señales de tráfico, obstáculos en carretera, imágenes médicas, imágenes satelitales, textura de superficies, ruido visual y decisiones automatizadas.
-->

---
layout: slide-02-titulo
---

::title::
Extracción de características estadísticas y frecuenciales

::content::
Semana 7 · Propiedades estadísticas y frecuenciales para extraer información clave de imágenes, señales y datos sensoriales.

<!--
Notas del presentador:
Explique que el título de la sesión sintetiza una idea fundamental: los sistemas de percepción computacional no trabajan únicamente con imágenes “bonitas” o visualmente comprensibles para las personas, sino con datos que deben convertirse en información medible. Una cámara, un sensor de distancia, un micrófono, un sensor térmico o un sistema de monitoreo ambiental producen datos. Sin embargo, para que un sistema inteligente pueda actuar, esos datos deben resumirse en características.

Aclare que una característica es una medida que describe algún aspecto relevante del dato. Por ejemplo, en una imagen de una carretera, podrían extraerse características relacionadas con bordes, cambios de contraste, rugosidad de la superficie, presencia de grietas, manchas oscuras, objetos inesperados o señales de tránsito. En una imagen médica, las características pueden corresponder a textura, intensidad, simetría, bordes de una región o distribución de niveles de gris. En una señal de vibración industrial, las características pueden relacionarse con energía, frecuencia dominante, variabilidad o presencia de picos anómalos.

Comente que esta semana tiene una relación directa con el tercer resultado de aprendizaje del curso: emplear técnicas estadísticas y frecuenciales en la extracción de características a través de inteligencia artificial. Antes de usar un modelo de aprendizaje automático, es necesario decidir qué información se le entregará. Aunque los modelos profundos pueden aprender características automáticamente, comprender las características tradicionales permite interpretar mejor los resultados, justificar decisiones y diseñar soluciones más responsables.

Oriente a los estudiantes a pensar en tres preguntas durante toda la sesión. Primera: ¿qué información del dato original es relevante para el problema? Segunda: ¿qué operación permite resaltar esa información sin destruir evidencia importante? Tercera: ¿cómo se convierte esa información en variables que puedan compararse, clasificarse o analizarse? Estas preguntas servirán como hilo conductor para la actividad inicial, el desarrollo conceptual, el foro y la práctica en Python.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
¿Qué puede “ver” una máquina?

::image:: 
<img src="/imagenes/percepcion_semana07_01_caracteristicas_visuales.png" alt="Imagen de apoyo sobre análisis visual de carretera y señales de tráfico" />

::content::
Observe una escena vial imaginaria: señales, carril, sombras, textura del pavimento, obstáculos y ruido visual.

Pregunta detonadora:
**¿Qué datos debería extraer un sistema inteligente para decidir si la vía está libre, dañada o requiere alerta?**

<!--
Notas del presentador:
Use esta diapositiva para activar saberes previos. Invite a los estudiantes a imaginar una cámara instalada en un vehículo autónomo o en un sistema de monitoreo vial. La escena puede contener una señal de tráfico, líneas de carril, sombras, cambios de iluminación, grietas, baches, objetos sobre la carretera y ruido producido por la cámara o por condiciones ambientales. Pregunte qué elementos serían relevantes para que una máquina tome decisiones. Oriente las respuestas hacia características observables: bordes de señales, formas geométricas, contraste entre carril y pavimento, color dominante, textura del asfalto, presencia de discontinuidades, regiones oscuras, patrones repetitivos o zonas con alta variación de intensidad.

Explique que una persona puede interpretar la escena de manera global gracias a su experiencia, pero un algoritmo necesita representar la información en números. Por ejemplo, un sistema puede detectar bordes para reconocer el contorno de una señal; puede calcular histogramas para estimar distribución de brillo; puede medir textura para distinguir pavimento normal de una zona agrietada; puede usar filtros de suavizado para reducir ruido antes de detectar objetos; y puede aplicar análisis frecuencial para encontrar patrones de repetición o cambios abruptos.

La intención de esta actividad no es encontrar una única respuesta correcta, sino evidenciar que la percepción computacional transforma datos visuales en variables útiles. Anime a los estudiantes a proponer características y luego clasifíquelas oralmente en categorías: estadísticas, espaciales, frecuenciales, de textura, de borde o de forma. Esta clasificación servirá para conectar la discusión con el desarrollo conceptual posterior.

También puede introducir una reflexión ética: si el sistema elimina demasiado ruido, puede perder detalles importantes; si aumenta demasiado el contraste, puede alterar la interpretación; si usa imágenes sensibles, debe proteger privacidad y trazabilidad. De esta forma, desde el inicio se integra la dimensión técnica con la responsabilidad en contextos críticos.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Actividad breve de integración: mapa de características

::left::
**Docente**

1. Presenta una escena visual o describe una carretera.
2. Solicita aportes rápidos.
3. Agrupa las respuestas en categorías.
4. Conecta cada categoría con una técnica de procesamiento.

::right::
**Estudiantes**

1. Identifican elementos observables.
2. Proponen qué mediría una máquina.
3. Clasifican: ruido, borde, textura, contraste, frecuencia.
4. Comparten una aplicación posible.

<!--
Notas del presentador:
Desarrolle esta actividad durante 10 a 15 minutos. Puede realizarse de manera oral, por chat o mediante una herramienta rápida de participación. Indique a los estudiantes que trabajarán sobre una escena de carretera, aunque también pueden pensar en una imagen médica, industrial o satelital. El reto consiste en responder: ¿qué características podrían extraerse para que un sistema inteligente interprete la escena?

Sugiera ejemplos para iniciar, pero no entregue todas las respuestas de inmediato. Si un estudiante dice “la señal de tránsito”, pregunte qué mediría el sistema: color, forma, borde, contraste, tamaño, posición o patrón interno. Si otro menciona “un hueco en la carretera”, pregunte si se detectaría por sombra, textura, borde irregular, cambio de intensidad o diferencia con el pavimento normal. Si alguien menciona “ruido”, pida que distingan entre ruido que debe reducirse y detalle que debe conservarse. Esta distinción será clave para comprender filtros de suavizado, mediana, gaussiano, bilateral y paso bajo.

Agrupe las respuestas en cinco categorías. Primera, características estadísticas: promedio, desviación, histograma, contraste. Segunda, características de borde: cambios bruscos de intensidad y contornos. Tercera, características de textura: rugosidad, repetición, irregularidad. Cuarta, características frecuenciales: variaciones lentas o rápidas, patrones periódicos, detalle fino. Quinta, características éticas y de calidad: preservación de información, privacidad, trazabilidad y transparencia.

Explique que esta actividad conecta directamente con el foro de la semana. Para responder qué filtrado es adecuado en señales de tráfico, no basta con nombrar un filtro; se debe justificar si se busca reducir ruido, resaltar bordes, mejorar contraste o conservar detalles. Para detectar defectos u obstáculos en carretera, se deben describir patrones visuales específicos: grietas, bordes irregulares, texturas anómalas, sombras, cambios de color, discontinuidades o formas inesperadas. Cierre la actividad indicando que estas ideas serán formalizadas en las siguientes diapositivas.
-->

---
layout: slide-08-titulo-texto
---

::title::
De dato visual a característica útil

::content::
Una **característica** es una medida que resume información relevante de una imagen, señal o región.

Ejemplos:

* Promedio de intensidad.
* Desviación estándar.
* Contraste local.
* Histograma.
* Energía de bordes.
* Rugosidad o textura.
* Componentes de baja y alta frecuencia.

<!--
Notas del presentador:
Explique que una característica es una representación compacta de información. Una imagen puede tener miles o millones de píxeles, pero un algoritmo de clasificación, detección o monitoreo puede necesitar resumir esa información en un conjunto de variables interpretables. Por ejemplo, si se analiza una región de pavimento, no siempre es necesario usar todos los píxeles de forma directa. Se puede calcular el promedio de intensidad para saber si la zona es clara u oscura; la desviación estándar para medir variabilidad; el contraste local para estimar diferencia entre zonas; la energía de bordes para detectar cambios abruptos; o una medida de textura para reconocer rugosidad, grietas o patrones anómalos.

Aclaremos la diferencia entre dato, información y característica. El dato es el valor bruto capturado por el sensor. En una imagen en escala de grises, cada píxel puede tener un valor entre 0 y 255. La información aparece cuando esos valores se interpretan en contexto: una zona oscura puede corresponder a sombra, hueco, objeto o baja iluminación. La característica es una medida diseñada para capturar una propiedad relevante: por ejemplo, cuánta variación existe en una zona o qué tan fuertes son los bordes.

En percepción computacional, las características pueden diseñarse manualmente o aprenderse automáticamente. Las características manuales incluyen histogramas, bordes, momentos, descriptores de textura o medidas frecuenciales. Las características aprendidas aparecen en modelos de aprendizaje profundo, donde las capas internas extraen patrones progresivamente. Sin embargo, incluso cuando se usan redes neuronales, comprender las características clásicas es valioso porque permite interpretar el comportamiento del sistema, diagnosticar errores y diseñar preprocesamientos adecuados.
En percepción computacional, las características pueden diseñarse manualmente o aprenderse automáticamente. Las características manuales incluyen histogramas, bordes, momentos, descriptores de textura o medidas frecuenciales. Las características aprendidas aparecen en modelos de aprendizaje profundo, donde las capas internas extraen patrones progresivamente. Sin embargo, incluso cuando se usan redes neuronales, comprender las características clásicas es valioso porque permite interpretar el comportamiento del sistema, diagnosticar errores y diseñar preprocesamientos adecuados.

Use una analogía: una característica es como una ficha técnica de una imagen. No reemplaza completamente la imagen, pero permite comparar regiones, detectar diferencias y alimentar modelos de decisión. Si dos regiones tienen distinta textura, distinto histograma o distinta energía de bordes, probablemente representan objetos o condiciones diferentes. Esta idea será la base de la práctica en Python.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Características estadísticas

::rightTitle::
Características frecuenciales

::left::

* Describen distribución de valores.
* Resumen brillo, contraste y variabilidad.
* Se obtienen desde píxeles, regiones o señales.
* Son útiles para comparar zonas.

Ejemplos: media, varianza, desviación, histograma, entropía.

::right::

* Describen ritmos de cambio.
* Separan variaciones suaves y detalles finos.
* Ayudan a estudiar textura, ruido y bordes.
* Pueden analizarse con transformada de Fourier.

Ejemplos: baja frecuencia, alta frecuencia, energía espectral.

<!--
Notas del presentador:
Desarrolle la diferencia entre características estadísticas y frecuenciales. Las características estadísticas se calculan directamente sobre los valores de la imagen o señal. Si se toma una región de una imagen, se puede calcular el promedio de intensidad, que indica si la región tiende a ser clara u oscura. La desviación estándar indica cuánta variación existe; una región uniforme tendrá baja desviación, mientras que una región con textura, ruido o bordes tendrá mayor variabilidad. El histograma muestra cuántos píxeles aparecen en cada nivel de intensidad, permitiendo analizar contraste, iluminación y distribución tonal. La entropía puede interpretarse como una medida de complejidad o incertidumbre visual: una imagen muy uniforme tiene baja entropía, mientras que una imagen con muchos detalles puede tener mayor entropía.

Las características frecuenciales, por su parte, se relacionan con la velocidad de cambio de la información. En una imagen, una zona con variaciones suaves corresponde principalmente a bajas frecuencias. Un borde, una grieta, una textura rugosa o el ruido impulsivo suelen aportar altas frecuencias porque representan cambios abruptos. La transformada de Fourier permite representar una imagen desde sus componentes frecuenciales. Aunque no es necesario profundizar en toda la teoría matemática, sí conviene entender la intuición: el dominio espacial muestra dónde están los píxeles; el dominio frecuencial muestra cómo se distribuyen los patrones de cambio.

Conecte esta diferencia con ejemplos. En una imagen satelital, el histograma puede ayudar a mejorar contraste y resaltar variaciones ambientales. En una carretera, la alta frecuencia puede indicar bordes de grietas, señales o ruido. En imágenes médicas, una textura anómala puede aportar información diagnóstica, pero debe analizarse con cuidado para no confundir ruido con evidencia clínica. En robótica, combinar estadísticas y frecuencia permite mejorar navegación, detección de objetos y comprensión del entorno.

Cierre indicando que ninguna característica es universalmente mejor. La elección depende del problema, del sensor, de la calidad de los datos y del tipo de decisión que se desea apoyar.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Filtrado como preparación para extraer características

::image:: 
<img src="/imagenes/percepcion_semana07_02_filtros_extraccion.png" alt="Imagen de apoyo sobre filtros de imagen y extracción de características" />

::content::
El filtrado puede:

* Reducir ruido antes del análisis.
* Resaltar bordes y cambios de intensidad.
* Mejorar contraste y visibilidad.
* Preparar segmentación.
* Conservar detalles relevantes.
* Evitar interpretaciones erróneas.

<!--
Notas del presentador:
Explique que el filtrado no debe entenderse únicamente como una operación estética. En percepción computacional, filtrar una imagen significa modificarla de manera controlada para facilitar un análisis posterior. Por ejemplo, si una imagen contiene ruido, un algoritmo de detección de bordes puede reaccionar ante puntos irrelevantes y generar falsos positivos. Un filtro de suavizado puede reducir esas variaciones no deseadas. Sin embargo, si el suavizado es excesivo, también puede borrar bordes importantes. Por eso, cada filtro debe seleccionarse según el propósito.

Presente algunos filtros de forma conceptual. El filtro promedio calcula el valor medio de los píxeles vecinos, lo cual suaviza la imagen, pero puede borrar detalles. El filtro gaussiano también suaviza, pero pondera más los píxeles cercanos al centro, por lo que suele producir una reducción de ruido más natural y controlada. El filtro de mediana es especialmente útil para ruido impulsivo, conocido como ruido sal y pimienta, porque reemplaza cada píxel por la mediana de su vecindario y conserva mejor los bordes que un promedio simple. El filtro Sobel se utiliza para detectar cambios bruscos de intensidad, por lo que ayuda a resaltar bordes. El filtrado de paso bajo reduce variaciones rápidas y suaviza; el filtrado de paso alto resalta detalles finos y nitidez.

Relacione con los escenarios de la evaluación. En diagnóstico médico, el suavizado debe mejorar claridad sin destruir evidencia. En conducción automática, el filtro de paso bajo puede reducir ruido para detectar señales y obstáculos con mayor precisión. En imágenes satelitales, la ecualización de histograma mejora contraste y permite observar cambios sutiles. En reconocimiento facial, un filtrado adecuado puede reducir ruido y preservar detalles relevantes. En todos los casos, la calidad técnica se vincula con una responsabilidad ética: preservar la integridad visual y documentar los métodos usados.

Concluya diciendo que filtrar es una decisión metodológica. No se trata de aplicar filtros al azar, sino de justificar qué información se desea conservar, mejorar o destacar.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Términos clave para interpretar imágenes

::left::
**Ruido**
Variación no deseada que dificulta el análisis.

**Suavizado**
Reducción de variaciones abruptas.

**Contraste**
Diferencia visible entre regiones claras y oscuras.

**Histograma**
Distribución de intensidades de una imagen.

::right::
**Borde**
Cambio brusco de intensidad.

**Textura**
Patrón espacial de variación.

**Alta frecuencia**
Detalle fino, ruido, bordes o cambios rápidos.

**Baja frecuencia**
Zonas suaves y variaciones graduales.

<!--
Notas del presentador:
Use esta diapositiva para consolidar vocabulario. Aunque los términos parecen sencillos, en procesamiento de imágenes tienen implicaciones técnicas importantes. El ruido es cualquier variación que no representa información útil para el objetivo del análisis. Puede aparecer por condiciones de iluminación, limitaciones del sensor, compresión, movimiento, interferencias o errores de adquisición. Sin embargo, no siempre es fácil distinguir ruido de detalle. Una grieta fina en una carretera puede parecer ruido para un filtro agresivo, pero puede ser precisamente la evidencia que se desea detectar.

El suavizado consiste en reducir variaciones abruptas. Es útil para limpiar imágenes, pero puede afectar bordes. Por eso se debe seleccionar el filtro según el tipo de ruido. El contraste permite diferenciar regiones. Si una imagen tiene bajo contraste, los objetos pueden confundirse con el fondo. La ecualización de histograma redistribuye los niveles de brillo para mejorar la visibilidad de diferencias sutiles. El histograma, por su parte, es una herramienta de análisis que muestra cuántos píxeles se ubican en cada nivel de intensidad. No muestra la ubicación espacial de los píxeles, pero sí permite comprender la distribución tonal.

El borde es una transición marcada entre regiones. Muchos objetos se reconocen por sus bordes, contornos o cambios de intensidad. La textura describe cómo varían los valores en una región. Un pavimento liso, una superficie agrietada, una tela, una lesión médica o una zona de cultivo pueden diferenciarse por textura. Las frecuencias ayudan a interpretar estos patrones: las bajas frecuencias representan cambios suaves; las altas frecuencias representan detalles finos, ruido o bordes.

Estas definiciones deben conectarse con decisiones prácticas. Si se desea detectar señales de tráfico, posiblemente interesen color, forma, contraste y bordes. Si se desea detectar defectos en carretera, interesan textura, discontinuidades, sombras, bordes irregulares y variaciones locales. Si se trabaja con imágenes médicas, se debe preservar información crítica y evitar alteraciones injustificadas.
-->

---
layout: slide-08-titulo-texto
---

::title::
Percepción Computacional

::content::
En percepción computacional, extraer características significa transformar una imagen o señal en medidas que permitan comparar, clasificar o tomar decisiones. Una imagen contiene información espacial: cada píxel tiene una posición y una intensidad. 

Las características estadísticas resumen cómo se distribuyen esos valores. Las características frecuenciales describen cómo cambian esos valores: suavemente, de forma repetitiva o con rupturas abruptas. Así, un sistema puede diferenciar una superficie uniforme, una textura irregular, un borde fuerte, una señal de tráfico o una región con ruido.

<!--
Notas del presentador:
Amplíe esta explicación indicando que la extracción de características es un puente entre el procesamiento de datos y la inteligencia artificial. En la práctica, los modelos de aprendizaje automático no necesariamente reciben una imagen como la ve una persona. Muchas veces reciben vectores de características: números que representan propiedades relevantes. Por ejemplo, una imagen de una carretera puede convertirse en medidas como promedio de brillo, contraste local, energía de bordes, cantidad de píxeles oscuros, orientación dominante de líneas, textura de la superficie o proporción de altas frecuencias. Con esas medidas, un sistema puede clasificar la vía como normal, deteriorada o con posible obstáculo.

Las características estadísticas son útiles porque reducen la complejidad. Una región de 100 por 100 píxeles tiene diez mil valores. En lugar de analizarlos uno por uno, se puede calcular media, desviación estándar, histograma o entropía. La media indica tendencia general; la desviación indica variabilidad; el histograma muestra distribución tonal; la entropía sugiere diversidad de valores. Estas medidas no explican toda la imagen, pero ayudan a comparar regiones. Una zona lisa de pavimento puede tener baja variabilidad, mientras que una grieta o defecto puede aumentar la variación y modificar el histograma.

Las características frecuenciales ofrecen otra mirada. En el dominio espacial se observa dónde están los píxeles; en el dominio de frecuencia se observa cómo cambian. Las bajas frecuencias se asocian con iluminación y formas amplias; las altas frecuencias se relacionan con bordes, ruido y textura fina. Por eso, un filtrado de paso bajo puede suavizar ruido y variaciones rápidas, mientras que un paso alto puede resaltar detalles. Esta distinción es clave en visión artificial, pues muchas decisiones dependen de conservar el equilibrio correcto entre limpiar la imagen y preservar evidencia.

Finalmente, explique que la extracción de características no es neutral. Una mala selección puede producir modelos imprecisos o injustos, especialmente en salud, seguridad o conducción autónoma. Por ello, los métodos deben ser transparentes, reproducibles y respetuosos de la información original.
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
Ejemplo aplicado: señales de tráfico

::image:: 
<img src="/imagenes/percepcion_semana07_03_senales_trafico_ia.png" alt="Imagen de apoyo sobre detección de señales de tráfico" />

::content::
Para analizar señales de tráfico se pueden combinar:

* Suavizado para reducir ruido.
* Contraste para mejorar visibilidad.
* Bordes para reconocer formas.
* Segmentación por color o intensidad.
* Características de forma: área, contorno, circularidad.
* Textura o frecuencia si hay deterioro, sombras o baja iluminación.

<!--
Notas del presentador:
Presente este caso como una aplicación directa del foro de discusión. Una señal de tráfico tiene propiedades visuales relativamente estructuradas: color, forma, borde, símbolo interno y ubicación en la escena. Sin embargo, en condiciones reales puede aparecer parcialmente oculta, con baja iluminación, movimiento, ruido de cámara, lluvia, reflejos, sombras o desgaste. Por esa razón, el sistema debe preprocesar la imagen antes de extraer características.

Explique que un filtro gaussiano o de paso bajo puede ayudar a reducir ruido antes de detectar bordes o segmentar la señal. No obstante, si el filtro es demasiado fuerte, los contornos del símbolo o de la señal pueden perder nitidez. En algunos casos, un filtro de mediana puede ser adecuado si el problema principal es ruido impulsivo, como píxeles aislados. Después del suavizado, puede aplicarse mejora de contraste o ecualización si la señal está poco visible. Luego, técnicas como Sobel o Canny pueden resaltar bordes, permitiendo encontrar contornos y formas geométricas. Si la señal tiene colores característicos, también puede segmentarse por rangos de color.

Conecte con características concretas: área del contorno, perímetro, relación ancho-alto, circularidad, cantidad de bordes, distribución de color, promedio de intensidad, histograma y textura. Estas características podrían alimentar un clasificador que distinga señales de pare, velocidad, advertencia o giro. También podrían usarse para detectar si la señal está deteriorada o cubierta.

Invite a los estudiantes a responder la primera pregunta del foro con una postura argumentada. No existe un único filtro universal. El filtrado adecuado depende del problema: para reducir ruido sin afectar demasiado la estructura, puede utilizarse un filtro gaussiano; para ruido impulsivo, mediana; para resaltar bordes, Sobel o Canny; para mantener bordes mientras se suaviza, bilateral. Lo importante es justificar la elección según la característica que se desea extraer.
-->

---
layout: slide-06-titulo-superior-texto-izquierda
---

::title::
Ejemplo aplicado: defectos u obstáculos en carretera

::image:: 
<img src="/imagenes/percepcion_semana07_04_textura_pavimento_obstaculos.png" alt="Imagen de apoyo sobre textura del pavimento y obstáculos en carretera" />

::content::
Patrones relevantes:

* Grietas lineales o ramificadas.
* Bordes irregulares.
* Zonas oscuras con forma anómala.
* Cambios bruscos de textura.
* Sombras no esperadas.
* Objetos con contorno distinto al pavimento.
* Alta frecuencia localizada.

<!--
Notas del presentador:
Relacione este ejemplo con la segunda pregunta del foro. Para detectar defectos u obstáculos en carretera mediante inteligencia artificial, no basta con decir que “la IA detecta el daño”. Es necesario explicar qué patrones visuales podrían indicar un problema. Una grieta suele aparecer como una línea oscura, delgada e irregular, con alta variación local respecto al pavimento. Un bache puede aparecer como una región más oscura, con bordes irregulares y cambios de sombra. Un obstáculo puede presentar un contorno claramente distinto al fondo, una textura diferente o una forma que sobresale de la superficie esperada.

Explique que la textura del pavimento normal tiene cierta regularidad. Si una región presenta variabilidad mucho mayor, bordes abruptos o patrones no esperados, puede ser candidata a defecto. Las características estadísticas ayudan a cuantificar esa diferencia: desviación estándar, contraste local, histograma y entropía. Las características de borde permiten localizar discontinuidades. Las características frecuenciales ayudan a distinguir entre una superficie suave, una textura rugosa o ruido. En una imagen real, estas características deberían combinarse con segmentación, aprendizaje automático y validación.

Haga énfasis en la diferencia entre obstáculo y ruido. Una sombra puede parecer un bache; una mancha de iluminación puede parecer defecto; una textura normal del asfalto puede generar altas frecuencias. Por eso se requieren datos diversos, filtros adecuados y criterios de evaluación. Un sistema responsable debe minimizar falsos positivos y falsos negativos. En conducción autónoma, un falso negativo puede ser peligroso porque el sistema no detectaría un obstáculo real. Un falso positivo constante también puede afectar la operación, produciendo alertas innecesarias.

Pida a los estudiantes que propongan un conjunto mínimo de características para este caso. Por ejemplo: contraste local, energía de bordes, área de regiones oscuras, orientación de grietas, textura y relación con la línea de carril. Esto prepara la transición hacia la práctica, donde se calcularán varias medidas sobre una imagen sintética.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Histogramas

::media::

<!-- Contenedor responsivo 9:16 -->
<iframe
src="https://www.tiktok.com/player/v1/7290683871270669574?autoplay=0&rel=0&description=0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
loading="lazy"
title="Video TikTok - Histogramas"
frameborder="0"></iframe>

<!--
Notas del presentador:
Presente estos videos como recursos complementarios, no como reemplazo de la explicación de clase. El primer video, sobre histograma de una imagen, es útil para reforzar la idea de distribución de intensidades. Puede recomendarse después del bloque conceptual o como consulta posterior para quienes deseen profundizar en cómo se calcula y visualiza un histograma con Python y OpenCV. El propósito pedagógico es que los estudiantes comprendan que el histograma no es solamente una gráfica, sino una forma de resumir la información tonal de una imagen. Esta herramienta permite analizar contraste, brillo, exposición y diferencias entre regiones.

El segundo video, sobre filtrado gaussiano en Python y OpenCV, se relaciona con la reducción de ruido y el suavizado. Puede usarse como apoyo antes de la práctica guiada o como recurso de repaso para la evaluación. Su propósito pedagógico es mostrar cómo un filtro modifica la imagen y por qué la reducción de ruido puede facilitar tareas posteriores como detección de bordes, segmentación o extracción de características. Explique que el filtro gaussiano no debe aplicarse mecánicamente; debe seleccionarse el tamaño del kernel y la intensidad del suavizado según el problema.

Si el tiempo es limitado, no reproduzca los videos completos durante la Open Class. Puede mostrar brevemente el inicio o indicar el enlace para estudio autónomo. Sugiera que los estudiantes observen los ejemplos de código, comparen resultados y relacionen los videos con la práctica que se desarrollará en la sesión. También puede proponer una tarea de observación: identificar en el video qué operación se aplica, qué cambia en la imagen y qué característica se facilita extraer.

Como tercer recurso opcional, puede sugerirse un video sobre ecualización de histograma en OpenCV: https://www.youtube.com/watch?v=8KHdNFZH9x4. Este recurso es pertinente para reforzar la pregunta de evaluación sobre imágenes satelitales y mejora de contraste.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Detección de bordes con OpenCV y Python

::media::

<!-- Contenedor responsivo 9:16 -->
  <iframe class="media__iframe"
      title="Video TikTok - Detección de bordes con OpenCV y Python"
      loading="lazy"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      frameborder="0"
      src="https://www.tiktok.com/player/v1/7265483204537158917?autoplay=0&rel=0&description=0"
      aria-hidden="false"></iframe>

<!--
Notas del presentador:
Presente estos videos como recursos complementarios, no como reemplazo de la explicación de clase. El primer video, sobre histograma de una imagen, es útil para reforzar la idea de distribución de intensidades. Puede recomendarse después del bloque conceptual o como consulta posterior para quienes deseen profundizar en cómo se calcula y visualiza un histograma con Python y OpenCV. El propósito pedagógico es que los estudiantes comprendan que el histograma no es solamente una gráfica, sino una forma de resumir la información tonal de una imagen. Esta herramienta permite analizar contraste, brillo, exposición y diferencias entre regiones.

El segundo video, sobre filtrado gaussiano en Python y OpenCV, se relaciona con la reducción de ruido y el suavizado. Puede usarse como apoyo antes de la práctica guiada o como recurso de repaso para la evaluación. Su propósito pedagógico es mostrar cómo un filtro modifica la imagen y por qué la reducción de ruido puede facilitar tareas posteriores como detección de bordes, segmentación o extracción de características. Explique que el filtro gaussiano no debe aplicarse mecánicamente; debe seleccionarse el tamaño del kernel y la intensidad del suavizado según el problema.

Si el tiempo es limitado, no reproduzca los videos completos durante la Open Class. Puede mostrar brevemente el inicio o indicar el enlace para estudio autónomo. Sugiera que los estudiantes observen los ejemplos de código, comparen resultados y relacionen los videos con la práctica que se desarrollará en la sesión. También puede proponer una tarea de observación: identificar en el video qué operación se aplica, qué cambia en la imagen y qué característica se facilita extraer.

Como tercer recurso opcional, puede sugerirse un video sobre ecualización de histograma en OpenCV: https://www.youtube.com/watch?v=8KHdNFZH9x4. Este recurso es pertinente para reforzar la pregunta de evaluación sobre imágenes satelitales y mejora de contraste.
-->

---
layout: slide-08-titulo-texto
---

::title::
Práctica guiada: características en una escena sintética

::content::
**Título:** Extracción de características estadísticas, de bordes y frecuenciales.

**Propósito:** generar una imagen sintética tipo carretera, agregar ruido, mejorarla, detectar bordes y calcular características útiles para análisis automático.

**Recursos:** Google Colab o Jupyter Notebook, Python, OpenCV, NumPy y Matplotlib.

**Producto esperado:** visualización comparativa y diccionario de características.

<!--
Notas del presentador:
Introduzca la práctica como una actividad guiada, sencilla y ejecutable en Google Colab o Jupyter Notebook. Explique que se usará una imagen sintética generada con NumPy, en lugar de depender de una imagen local. Esto tiene varias ventajas didácticas: todos los estudiantes pueden ejecutar el mismo código, se controla el contenido de la escena y se pueden observar claramente las operaciones aplicadas. La imagen representará una carretera simple con carriles, una señal, una grieta u obstáculo y ruido visual. Aunque no es una escena real, permite simular condiciones relevantes para discutir extracción de características.

El propósito técnico es recorrer un flujo básico de percepción computacional. Primero se genera o carga una imagen. Luego se convierte a escala de grises porque muchas operaciones estadísticas y de borde se calculan sobre intensidad. Después se agrega ruido para representar imperfecciones de captura. Se aplica suavizado gaussiano para reducir variación no deseada. Se mejora contraste mediante ecualización de histograma. Se detectan bordes con Sobel o Canny. Finalmente se calculan características: media, desviación estándar, entropía aproximada, cantidad de bordes, varianza del Laplaciano y proporción de energía frecuencial alta.

Explique que estas características podrían alimentar un modelo de clasificación. Por ejemplo, si una región presenta alta energía de bordes y alta variabilidad, podría señalar textura irregular. Si hay una cantidad elevada de bordes en una zona donde se espera pavimento uniforme, podría indicar grietas, obstáculos o ruido. Si el histograma cambia drásticamente, podría revelar problemas de iluminación o contraste.

Aclaremos que la práctica no pretende construir un detector perfecto de carreteras. Su objetivo es mostrar cómo se transforma una imagen en variables. Esta comprensión es fundamental para diseñar sistemas de percepción más robustos y para responder con mayor profundidad al foro y a las preguntas de evaluación.
-->

---
layout: slide-codigo
---

::title::
Código completo en Python

::content::

```python {lines:true}
# Práctica Semana 7 - Percepción Computacional
# Extracción de características estadísticas, de bordes y frecuenciales
# Compatible con Google Colab o Jupyter Notebook

import cv2
import numpy as np
import matplotlib.pyplot as plt

# ------------------------------------------------------------
# 1. Crear una imagen sintética tipo carretera
# ------------------------------------------------------------
height, width = 420, 560
image = np.zeros((height, width, 3), dtype=np.uint8)

# Fondo tipo cielo
image[:, :] = (190, 210, 230)

# Carretera en perspectiva
road = np.array([[120, height], [440, height], [330, 150], [230, 150]], dtype=np.int32)
cv2.fillPoly(image, [road], (70, 70, 70))

# Líneas de carril
cv2.line(image, (280, height), (280, 170), (230, 230, 230), 4)
cv2.line(image, (185, height), (240, 170), (210, 210, 210), 3)
cv2.line(image, (375, height), (320, 170), (210, 210, 210), 3)

# Señal de tráfico simple
cv2.circle(image, (430, 110), 35, (30, 30, 220), -1)
cv2.circle(image, (430, 110), 24, (245, 245, 245), -1)

# Grieta/defecto en la carretera
crack_points = np.array([[250, 300], [260, 315], [252, 330], [270, 350], [265, 370]], dtype=np.int32)
cv2.polylines(image, [crack_points], False, (20, 20, 20), 5)

# Obstáculo oscuro
cv2.ellipse(image, (345, 330), (35, 18), 0, 0, 360, (25, 25, 25), -1)

# ------------------------------------------------------------
# 2. Agregar ruido gaussiano
# ------------------------------------------------------------
np.random.seed(7)
noise = np.random.normal(0, 18, image.shape).astype(np.int16)
noisy = np.clip(image.astype(np.int16) + noise, 0, 255).astype(np.uint8)

# ------------------------------------------------------------
# 3. Conversión a escala de grises y preprocesamiento
# ------------------------------------------------------------
gray = cv2.cvtColor(noisy, cv2.COLOR_BGR2GRAY)

# Suavizado gaussiano para reducir ruido
blur = cv2.GaussianBlur(gray, (5, 5), 0)

# Mejora de contraste mediante ecualización de histograma
equalized = cv2.equalizeHist(blur)

# Detección de bordes
sobel_x = cv2.Sobel(equalized, cv2.CV_64F, 1, 0, ksize=3)
sobel_y = cv2.Sobel(equalized, cv2.CV_64F, 0, 1, ksize=3)
sobel_mag = cv2.magnitude(sobel_x, sobel_y)
sobel_mag_uint8 = cv2.convertScaleAbs(sobel_mag)

edges = cv2.Canny(equalized, 80, 160)

# ------------------------------------------------------------
# 4. Características estadísticas
# ------------------------------------------------------------
mean_intensity = np.mean(equalized)
std_intensity = np.std(equalized)
min_intensity = np.min(equalized)
max_intensity = np.max(equalized)

hist = cv2.calcHist([equalized], [0], None, [256], [0, 256]).flatten()
prob = hist / np.sum(hist)
prob_nonzero = prob[prob > 0]
entropy = -np.sum(prob_nonzero * np.log2(prob_nonzero))

# ------------------------------------------------------------
# 5. Características de bordes y textura
# ------------------------------------------------------------
edge_density = np.sum(edges > 0) / edges.size

laplacian = cv2.Laplacian(equalized, cv2.CV_64F)
laplacian_variance = laplacian.var()

sobel_energy = np.mean(sobel_mag ** 2)

# ------------------------------------------------------------
# 6. Características frecuenciales básicas con FFT
# ------------------------------------------------------------
fft = np.fft.fft2(equalized)
fft_shift = np.fft.fftshift(fft)
magnitude_spectrum = 20 * np.log(np.abs(fft_shift) + 1)

rows, cols = equalized.shape
crow, ccol = rows // 2, cols // 2

# Máscara circular de baja frecuencia
radius = 35
y, x = np.ogrid[:rows, :cols]
mask_low = (x - ccol) ** 2 + (y - crow) ** 2 <= radius ** 2

total_energy = np.sum(np.abs(fft_shift) ** 2)
low_energy = np.sum(np.abs(fft_shift[mask_low]) ** 2)
high_energy = total_energy - low_energy
high_frequency_ratio = high_energy / total_energy

# ------------------------------------------------------------
# 7. Organizar resultados
# ------------------------------------------------------------
features = {
    "media_intensidad": round(float(mean_intensity), 3),
    "desviacion_estandar": round(float(std_intensity), 3),
    "intensidad_minima": int(min_intensity),
    "intensidad_maxima": int(max_intensity),
    "entropia_histograma": round(float(entropy), 3),
    "densidad_bordes_canny": round(float(edge_density), 5),
    "varianza_laplaciano": round(float(laplacian_variance), 3),
    "energia_sobel": round(float(sobel_energy), 3),
    "proporcion_alta_frecuencia": round(float(high_frequency_ratio), 5)
}

print("Características extraídas:")
for key, value in features.items():
    print(f"{key}: {value}")

# ------------------------------------------------------------
# 8. Visualización
# ------------------------------------------------------------
plt.figure(figsize=(14, 10))

plt.subplot(2, 3, 1)
plt.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
plt.title("Imagen sintética original")
plt.axis("off")

plt.subplot(2, 3, 2)
plt.imshow(cv2.cvtColor(noisy, cv2.COLOR_BGR2RGB))
plt.title("Imagen con ruido")
plt.axis("off")

plt.subplot(2, 3, 3)
plt.imshow(equalized, cmap="gray")
plt.title("Gris + suavizado + contraste")
plt.axis("off")

plt.subplot(2, 3, 4)
plt.imshow(sobel_mag_uint8, cmap="gray")
plt.title("Magnitud Sobel")
plt.axis("off")

plt.subplot(2, 3, 5)
plt.imshow(edges, cmap="gray")
plt.title("Bordes Canny")
plt.axis("off")

plt.subplot(2, 3, 6)
plt.imshow(magnitude_spectrum, cmap="gray")
plt.title("Espectro frecuencial")
plt.axis("off")

plt.tight_layout()
plt.show()

# Histograma de intensidades
plt.figure(figsize=(8, 4))
plt.plot(hist)
plt.title("Histograma de la imagen procesada")
plt.xlabel("Nivel de intensidad")
plt.ylabel("Cantidad de píxeles")
plt.grid(True)
plt.show()
```

<!--
Notas del presentador:
Acompañe la ejecución del código paso a paso. Primero, indique que se importan tres librerías principales: OpenCV para procesamiento de imágenes, NumPy para operaciones matriciales y Matplotlib para visualización. Explique que OpenCV suele manejar imágenes en formato BGR, mientras que Matplotlib visualiza mejor en RGB, por eso se hacen conversiones al mostrar la imagen.

En la primera sección se construye una imagen sintética. Se define un fondo, una carretera en perspectiva, líneas de carril, una señal circular, una grieta y un obstáculo oscuro. Estos elementos representan problemas reales de percepción: detección de señal, análisis de carril, textura del pavimento, discontinuidades y posibles obstáculos. Luego se agrega ruido gaussiano para simular imperfecciones de captura. Señale que en escenarios reales el ruido puede provenir de baja iluminación, movimiento, sensores de baja calidad o compresión.

Después, el código convierte la imagen a escala de grises. Explique que muchas operaciones se aplican sobre intensidad porque simplifican el análisis. Luego se usa un filtro gaussiano para suavizar y reducir ruido. Posteriormente se aplica ecualización de histograma para mejorar contraste. Esta secuencia muestra que el preprocesamiento prepara la extracción de características.

En la sección de bordes, Sobel calcula cambios horizontales y verticales de intensidad, y Canny identifica bordes con umbrales. Explique que los bordes pueden corresponder a líneas de carril, señal, grieta u obstáculo. Luego se calculan características estadísticas: media, desviación, mínimo, máximo, histograma y entropía. La densidad de bordes indica qué proporción de la imagen contiene transiciones marcadas. La varianza del Laplaciano es una medida común de nitidez o detalle. La energía de Sobel resume intensidad de bordes.

Finalmente, se aplica FFT para obtener una representación frecuencial. El código separa una región central como baja frecuencia y estima la proporción de energía de alta frecuencia. Aclare que esta medida puede aumentar cuando hay bordes, ruido o textura fina. Cierre señalando que el diccionario de características es el producto más importante: convierte una imagen compleja en variables que podrían usarse en IA.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar la práctica

::content::

1. Abrir Google Colab o Jupyter Notebook.
2. Crear un nuevo cuaderno.
3. Copiar el código completo en una celda.
4. Ejecutar la celda.
5. Observar las imágenes generadas.
6. Leer el diccionario de características.
7. Modificar ruido, grieta, obstáculo o umbrales.
8. Comparar cómo cambian las características.

<!--
Notas del presentador:
Explique a los estudiantes que el código está diseñado para ejecutarse con mínimas modificaciones. En Google Colab, OpenCV, NumPy y Matplotlib suelen estar disponibles de manera predeterminada. Si algún entorno local no tiene OpenCV, puede instalarse con pip install opencv-python, aunque para la sesión se recomienda Colab para evitar problemas de configuración.

Indique que la primera ejecución debe realizarse sin cambiar nada. El objetivo inicial es verificar que se generan las visualizaciones y el diccionario de características. Después de observar el resultado, pida a los estudiantes que analicen cada imagen: la original, la imagen con ruido, la versión procesada en escala de grises con suavizado y contraste, la magnitud Sobel, los bordes Canny y el espectro frecuencial. Pregunte qué elementos aparecen más resaltados y cuáles podrían confundirse.

Luego proponga modificaciones controladas. Por ejemplo, aumentar la desviación del ruido de 18 a 35 y observar si aumenta la densidad de bordes o la proporción de alta frecuencia. Cambiar el grosor de la grieta y revisar si la energía Sobel o la varianza del Laplaciano aumentan. Modificar los umbrales de Canny para ver cómo se detectan más o menos bordes. Cambiar el tamaño del kernel gaussiano de 5 por 5 a 9 por 9 para observar mayor suavizado y posible pérdida de detalle. Agregar más obstáculos o retirar la grieta para comparar características.

Resalte que esta experimentación permite comprender que las características no son valores abstractos. Cambian cuando cambia la imagen, el ruido, el filtro o el umbral. Por eso, en un sistema real, se necesita calibración, validación y comparación con datos etiquetados. También se debe evitar ajustar parámetros únicamente para un caso ideal; un sistema robusto debe funcionar ante variaciones de iluminación, perspectiva, textura y ruido.

Concluya esta diapositiva indicando que la práctica puede realizarse individualmente o por parejas, pero la socialización debe enfocarse en interpretación, no solo en ejecución.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Producto esperado y preguntas de análisis

::left::
**Producto esperado**

* Imágenes comparativas.
* Histograma de intensidad.
* Diccionario de características.
* Interpretación de al menos tres medidas.
* Relación con tráfico o carretera.

::right::
**Preguntas**

* ¿Qué medida cambió más al agregar ruido?
* ¿Qué filtro preservó mejor los bordes?
* ¿Qué indica una alta densidad de bordes?
* ¿Cuándo una alta frecuencia es detalle y cuándo es ruido?
* ¿Qué riesgo ético aparece al modificar imágenes sensibles?

<!--
Notas del presentador:
Oriente a los estudiantes sobre lo que deben obtener al finalizar la práctica. No basta con ejecutar el código; deben interpretar los resultados. El producto esperado incluye las visualizaciones comparativas, el histograma y el diccionario de características. Cada estudiante o grupo debe seleccionar al menos tres características y explicar qué significan en el contexto de la escena. Por ejemplo, la desviación estándar puede indicar variabilidad de intensidad; la densidad de bordes puede relacionarse con cantidad de contornos; la varianza del Laplaciano puede asociarse con nitidez o detalle; la proporción de alta frecuencia puede reflejar textura, ruido o bordes.

Use las preguntas de análisis para guiar la discusión. Cuando se pregunta qué medida cambió más al agregar ruido, se busca que los estudiantes comprendan que el ruido puede aumentar variabilidad, bordes falsos y energía de alta frecuencia. Cuando se pregunta qué filtro preservó mejor los bordes, se invita a comparar suavizado gaussiano, mediana o bilateral en futuras exploraciones. Cuando se pregunta por alta densidad de bordes, la respuesta debe ser contextual: puede indicar muchos objetos, textura compleja, grietas o ruido. No se debe interpretar un valor alto de manera automática.

La pregunta sobre frecuencia es especialmente importante. En procesamiento de imágenes, las altas frecuencias no son “buenas” o “malas” por sí mismas. Pueden representar detalles útiles, como bordes de una señal o grietas, pero también pueden representar ruido. El criterio depende del problema y de la validación. En una carretera, alta frecuencia localizada sobre una grieta puede ser útil; alta frecuencia distribuida por toda la imagen puede indicar ruido.

Cierre con la dimensión ética. En imágenes sensibles, como las médicas o legales, modificar contraste, suavizar o eliminar ruido puede cambiar la interpretación. Por eso se requiere transparencia, conservación de información original, registro de métodos, consentimiento cuando aplique y anonimización de datos personales. La técnica debe estar al servicio de decisiones responsables.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Socialización breve

::rightTitle::
Criterios de discusión

::left::
Cada grupo comparte en máximo un minuto:

* Una característica calculada.
* Su interpretación.
* Una modificación realizada.
* Un posible uso en IA.

::right::
Valorar:

* Claridad técnica.
* Relación con el problema.
* Argumentación.
* Reconocimiento de limitaciones.
* Consideraciones éticas.

<!--
Notas del presentador:
Dedique entre ocho y diez minutos a la socialización. Pida intervenciones breves para mantener el ritmo de la clase. Cada grupo puede compartir una característica que le haya llamado la atención, una modificación realizada al código y una interpretación. Por ejemplo, un grupo puede decir que al aumentar el ruido se incrementó la proporción de alta frecuencia y aparecieron más bordes falsos. Otro puede señalar que al aumentar el tamaño del filtro gaussiano se redujo el ruido, pero también se perdió definición en la grieta. Otro grupo puede indicar que la ecualización del histograma mejoró la visibilidad general, pero podría alterar la apariencia de una imagen sensible si no se documenta adecuadamente.

Como docente, escuche las respuestas y formule preguntas de profundización. Si un grupo interpreta una característica de manera absoluta, invítelo a contextualizar. Por ejemplo, si dicen “más bordes significa mejor imagen”, pregunte si esos bordes corresponden a objetos reales o a ruido. Si dicen “más suavizado mejora la calidad”, pregunte qué ocurre con detalles finos o evidencia importante. Si dicen “alta frecuencia indica defecto”, pregunte cómo distinguir defecto de textura normal o ruido.

Los criterios de discusión deben orientar la calidad de las intervenciones. La claridad técnica implica usar términos como histograma, contraste, borde, textura, frecuencia o suavizado de manera adecuada. La relación con el problema exige conectar la medida con señales de tráfico, carretera, salud o monitoreo. La argumentación implica justificar por qué una técnica es pertinente. Reconocer limitaciones es clave, porque los sistemas de percepción no son infalibles. Finalmente, las consideraciones éticas recuerdan que los datos visuales pueden influir en decisiones críticas.

Cierre la socialización destacando que la práctica mostró un flujo completo: imagen, ruido, preprocesamiento, características e interpretación. Esta secuencia resume el trabajo de muchos sistemas reales de percepción computacional.
-->

---
layout: slide-08-titulo-texto
---

::title::
Resolución de dudas: ideas que deben quedar claras

::content::

* No existe un filtro universal para todos los problemas.
* Suavizar puede reducir ruido, pero también borrar detalles.
* Resaltar bordes ayuda a detectar formas, grietas u objetos.
* El histograma resume intensidad, no ubicación espacial.
* La frecuencia permite analizar cambios suaves o abruptos.
* La ética exige transparencia, privacidad y conservación de información.

<!--
Notas del presentador:
Use esta diapositiva para organizar la resolución de dudas durante un máximo de 15 minutos. Inicie preguntando qué parte generó mayor dificultad: conceptos, código, interpretación de resultados o relación con el foro. Luego retome las ideas clave una a una. La primera es que no existe un filtro universal. La elección depende del objetivo, del tipo de ruido, de la característica que se quiere extraer y del contexto. Un filtro gaussiano puede ser útil para suavizar ruido general, pero no siempre es ideal si se requiere preservar detalles muy finos. Un filtro de mediana puede ser excelente para ruido impulsivo, pero no resuelve todos los problemas de iluminación. Sobel resalta bordes, pero no elimina ruido por sí mismo.

La segunda idea es que toda mejora implica una decisión. Suavizar puede ayudar, pero también puede borrar evidencia. Aumentar contraste puede revelar detalles, pero también puede amplificar ruido o alterar interpretación visual. Por eso, en aplicaciones sensibles se debe conservar la imagen original y documentar el procesamiento aplicado.

La tercera idea es distinguir entre histograma y estructura espacial. Un histograma muestra cuántos píxeles tienen cierto nivel de intensidad, pero no dice dónde están ubicados. Dos imágenes distintas pueden tener histogramas similares. Por eso, para analizar forma, bordes o textura, se requieren otras características.

La cuarta idea es la frecuencia. Las bajas frecuencias se relacionan con cambios suaves, iluminación y formas amplias. Las altas frecuencias se asocian con bordes, textura fina y ruido. Interpretar frecuencia exige contexto. Una alta frecuencia puede ser una grieta útil o un ruido no deseado.

Finalmente, atienda dudas sobre la actividad del foro y la evaluación. Recuerde que las respuestas deben argumentarse con ejemplos. Enfatice que la perspectiva ética no es un complemento externo, sino parte del diseño técnico responsable en percepción computacional.
-->

---
layout: slide-08-titulo-texto
---

::title::
Para recordar

::content::
Hoy conectamos el preprocesamiento con la extracción de características.

Una imagen o señal puede convertirse en variables útiles para IA mediante:

* Estadística.
* Histograma.
* Bordes.
* Textura.
* Frecuencia.
* Interpretación contextual.

La calidad de la decisión depende de la calidad de las características.

<!--
Notas del presentador:
Realice el cierre académico retomando el hilo de la sesión. Al inicio se preguntó qué puede “ver” una máquina. Ahora los estudiantes deben reconocer que una máquina no ve de la misma manera que una persona: mide, transforma, compara y decide con base en características. La clase mostró que las imágenes y señales pueden convertirse en variables significativas mediante estadísticas, histogramas, bordes, texturas y análisis frecuencial.

Resuma los aprendizajes principales. Primero, las características estadísticas permiten describir distribución de intensidad, variabilidad y contraste. Segundo, los filtros preparan la imagen, pero deben seleccionarse con cuidado. Tercero, los bordes son fundamentales para detectar formas, contornos, grietas, señales u objetos. Cuarto, la textura ayuda a distinguir superficies normales de patrones anómalos. Quinto, el análisis frecuencial permite estudiar cambios suaves o rápidos, asociando bajas frecuencias con variaciones graduales y altas frecuencias con detalles finos, ruido o bordes. Sexto, toda interpretación depende del contexto.

Conecte con la práctica. La imagen sintética permitió simular una escena vial, agregar ruido, aplicar suavizado, mejorar contraste, detectar bordes y calcular características. Aunque el ejercicio fue controlado, representa una secuencia realista en muchos sistemas de percepción computacional. En proyectos más avanzados, estas características podrían alimentar un clasificador, un sistema de alerta, un modelo de segmentación o una red neuronal.

Refuerce la relación con el foro. Los estudiantes ya cuentan con elementos para argumentar qué filtros serían adecuados para señales de tráfico y qué patrones buscarían para detectar defectos u obstáculos en carretera. Recomiende que sus intervenciones incluyan ejemplos, justificación técnica y reconocimiento de limitaciones.

Cierre con una reflexión: en percepción computacional, más procesamiento no siempre significa mejor análisis. Lo importante es preservar información relevante, reducir ruido de manera responsable y extraer características que realmente ayuden a tomar decisiones confiables.
-->

---
layout: slide-12-cierre
---

::title::
Recordatorio institucional y cierre

::content::
Gracias por su participación.

Recuerden:

* Participar en el foro de la semana en equipo.
* Argumentar con base en filtros, características y contexto.
* Ejecutar o revisar la práctica guiada.
* Registrar dudas para el acompañamiento.
* Diligenciar la Encuesta de Percepción Estudiantil.

<!--
Notas del presentador:
Finalice la sesión con un tono cercano y académico. Agradezca la participación de los estudiantes en la actividad inicial, la práctica y la socialización. Recuerde que la construcción del aprendizaje en una Open Class no depende solo de escuchar la explicación, sino de conectar los conceptos con problemas reales y formular interpretaciones propias. La semana 7 exige que los estudiantes comprendan cómo las propiedades estadísticas y frecuenciales permiten extraer información útil de datos complejos.

Reitere las orientaciones para el foro. Los equipos deben organizarse con mínimo tres y máximo cinco integrantes. Un integrante realiza el aporte principal, dos o más pueden retroalimentar y otro puede elaborar la conclusión. El orden es flexible, pero todos deben participar para ser evaluados. Recomiende que el aporte principal plantee una postura clara sobre filtros adecuados para señales de tráfico y patrones de textura en carretera. Las retroalimentaciones deben ampliar, precisar o contrastar ideas, no limitarse a decir que están de acuerdo. La conclusión debe sintetizar aprendizajes técnicos y posibles aplicaciones.

Recuerde también la práctica guiada. Aunque no sea una entrega formal, ejecutarla permite comprender mejor las preguntas de evaluación y fortalecer habilidades con Python, OpenCV, NumPy y Matplotlib. Sugiera revisar el comportamiento de las características cuando se modifica el ruido, el suavizado, los bordes o el obstáculo.

Finalmente, haga el recordatorio institucional de la Encuesta de Percepción Estudiantil. Explique que este instrumento permite valorar la experiencia del curso, identificar oportunidades de mejora y fortalecer el acompañamiento académico. Invite a diligenciarla con responsabilidad y honestidad. Cierre dejando abierta la posibilidad de plantear dudas por los canales establecidos del curso y motive a los estudiantes a seguir relacionando la percepción computacional con problemas reales de su entorno profesional.
-->
