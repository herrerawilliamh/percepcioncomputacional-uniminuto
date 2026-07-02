---
layout: slide-01-portada
---

::title::
Percepción Computacional

::week::
Semana 6

::date::
Junio 08 de 2026

<!--
Notas del presentador:
Dar la bienvenida a la Open Class de la semana 6. Presentar la sesión como un espacio práctico para comprender cómo el filtrado, el análisis de frecuencia y la mejora de imagen permiten preparar datos visuales para sistemas inteligentes. Enfatizar que la clase conecta conceptos de procesamiento digital de imágenes con aplicaciones reales en salud, robótica, seguridad, agricultura y análisis satelital.
-->

---
layout: slide-02-titulo
---

::title::
Filtrado y análisis de f con IA

---
layout: slide-03-imagen-izquierda
---

::title::
Ver no es interpretar

::image:: 
<img src="/imagenes/favicon.png" alt="Imagen de apoyo sobre percepción computacional y análisis visual" />

::content::
Una cámara captura una escena, pero un sistema inteligente necesita procesarla para interpretar información útil.

En percepción computacional, una imagen puede contener:

* Ruido generado por sensores o iluminación.
* Bordes asociados a objetos.
* Texturas relacionadas con materiales.
* Regiones de interés para segmentación.
* Patrones que pueden alimentar modelos de IA.

Filtrar una imagen permite preparar mejor los datos antes de analizarlos.

<!--
Notas del presentador:
Utilizar la analogía de la visión humana. Una persona puede mirar una imagen y reconocer rápidamente objetos, rostros o zonas dañadas; una máquina, en cambio, recibe matrices numéricas. El procesamiento digital de imágenes actúa como una fase de preparación que ayuda a separar información útil de información irrelevante.
-->

---
layout: slide-08-titulo-texto
---

::title::
Actividad inicial: ¿qué debería resaltar la máquina?

::content::
**Duración:** 10 a 15 minutos.

**Instrucciones para estudiantes:**

1. Observe una imagen mental o real de una radiografía, una cámara de seguridad, un cultivo o una escena robótica.
2. Identifique qué elementos serían importantes para una máquina.
3. Clasifique esos elementos en tres categorías:

   * Ruido o interferencia.
   * Bordes, contornos o estructuras.
   * Regiones de interés.
4. Comparta una respuesta breve: ¿qué filtro o mejora aplicaría primero?

<!--
Notas del presentador:
Orientar la participación de forma rápida. No se busca que los estudiantes dominen todavía los nombres técnicos de todos los filtros, sino que identifiquen necesidades de procesamiento: limpiar, resaltar, contrastar o separar. Esta actividad abre el camino para hablar de filtros gaussianos, filtros de paso alto, ecualización de histograma y segmentación.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Relación con la percepción computacional

::left::
**Entrada sensorial**

* Imágenes digitales.
* Video de cámaras.
* Señales visuales.
* Datos multivariados.
* Sensores ópticos o térmicos.

**Procesamiento**

* Conversión a escala de grises.
* Reducción de ruido.
* Mejora de contraste.
* Filtrado en frecuencia.
* Segmentación.

::right::
**Interpretación inteligente**

* Identificación de objetos.
* Detección de bordes.
* Reconocimiento facial.
* Diagnóstico asistido.
* Navegación robótica.
* Monitoreo de cultivos.

La IA interpreta mejor cuando los datos visuales han sido preparados adecuadamente.

<!--
Notas del presentador:
Explicar que la percepción computacional integra captura, procesamiento e interpretación. Los filtros no son un fin en sí mismos; son una etapa que mejora la calidad de los datos antes de aplicar técnicas de aprendizaje automático o aprendizaje profundo. Un modelo de IA puede fallar si recibe imágenes con ruido, bajo contraste o regiones mal definidas.
-->

---
layout: slide-08-titulo-texto
---

::title::
Términos clave I: imagen, píxel, ruido y contraste

::content::
Una **imagen digital** es una representación numérica de una escena. En escala de grises, cada píxel suele tomar valores entre 0 y 255, donde 0 representa negro, 255 representa blanco y los valores intermedios representan diferentes niveles de intensidad. Esta estructura permite que una imagen sea procesada como una matriz.

El **ruido** corresponde a variaciones no deseadas que pueden aparecer por fallas de iluminación, limitaciones del sensor, transmisión de datos o condiciones ambientales. En percepción computacional, el ruido puede ocultar bordes, alterar texturas o generar falsas detecciones.

El **contraste** describe la diferencia de intensidad entre zonas claras y oscuras. Una imagen con bajo contraste puede contener información importante, pero difícil de distinguir. Mejorar el contraste facilita que los detalles relevantes sean visibles para una persona y detectables para un algoritmo.

<!--
Notas del presentador:
Aclarar que estos conceptos son la base del procesamiento visual. Si una imagen es una matriz, cada operación de filtrado modifica valores numéricos. Cuando se reduce el ruido, se busca disminuir variaciones irrelevantes. Cuando se mejora el contraste, se busca ampliar diferencias útiles para que las estructuras importantes sean más fáciles de analizar.
-->

---
layout: slide-08-titulo-texto
---

::title::
Términos clave II: filtrado espacial y filtro gaussiano

::content::
El **filtrado espacial** trabaja directamente sobre los píxeles de la imagen. Utiliza una ventana o kernel que recorre la matriz y modifica cada píxel según sus vecinos. Esta idea permite suavizar, resaltar bordes, reducir ruido o detectar cambios de intensidad.

El **filtro gaussiano** es un filtro de suavizado que reduce variaciones bruscas de intensidad. Su comportamiento se basa en una distribución gaussiana, por lo que da mayor peso a los píxeles cercanos al centro del kernel y menor peso a los más alejados. Esto permite disminuir ruido conservando una apariencia natural.

En aplicaciones como medicina, seguridad o reconocimiento facial, el filtro gaussiano puede mejorar la claridad general antes de aplicar una segmentación o un detector de bordes. Sin embargo, debe usarse con cuidado: un suavizado excesivo puede borrar detalles finos.

<!--
Notas del presentador:
Explicar con una analogía: el filtro gaussiano funciona como mirar la imagen a través de un vidrio ligeramente difuso. Ayuda a reducir pequeñas imperfecciones, pero si se exagera puede perderse información importante. Por eso, el tamaño del kernel y la intensidad del suavizado deben elegirse según el problema.
-->

---
layout: slide-08-titulo-texto
---

::title::
Términos clave III: frecuencia, paso alto y segmentación

::content::
El **dominio de frecuencia** permite analizar una imagen según la velocidad con la que cambian sus intensidades. Las zonas suaves y uniformes se relacionan con frecuencias bajas, mientras que bordes, detalles finos y transiciones abruptas se relacionan con frecuencias altas.

Un **filtro de paso alto** atenúa componentes suaves y permite destacar cambios rápidos de intensidad. Por esta razón, se usa para resaltar contornos, bordes y detalles finos. En robótica, inspección industrial o análisis médico, este tipo de filtro puede ayudar a identificar estructuras relevantes.

La **segmentación** busca separar regiones significativas de una imagen. Puede realizarse mediante umbrales, máscaras, contornos o modelos de aprendizaje profundo. Su propósito es enfocar el análisis en áreas importantes: rostros, órganos, cultivos, objetos, defectos o zonas de riesgo.

<!--
Notas del presentador:
Conectar frecuencia con música o sonido: en una señal sonora, las frecuencias altas suelen asociarse a cambios rápidos; en una imagen ocurre algo similar con los bordes. Esta explicación ayuda a comprender por qué el filtrado frecuencial es útil para detectar contornos y estructuras.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Filtro de paso bajo

::rightTitle::
Filtro de paso alto

::left::

* Reduce ruido.
* Suaviza variaciones bruscas.
* Conserva regiones amplias.
* Puede perder detalles finos.
* Ejemplo: filtro gaussiano.

Uso típico: mejorar la calidad inicial de una imagen antes de segmentar.

::right::

* Resalta bordes.
* Destaca detalles finos.
* Atenúa zonas uniformes.
* Puede amplificar ruido.
* Ejemplo: realce de contornos en frecuencia.

Uso típico: detectar estructuras, límites o formas.

<!--
Notas del presentador:
Destacar que paso bajo y paso alto no son filtros buenos o malos por sí mismos. Su utilidad depende del objetivo. Si se quiere reducir ruido, conviene un suavizado. Si se quiere encontrar contornos, conviene resaltar altas frecuencias. En muchos flujos reales se combinan ambos enfoques.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Ecualización de histograma

::image:: 
<img src="/imagenes/favicon.png" alt="Imagen de apoyo sobre ecualización de histograma" />

::content::
La ecualización de histograma redistribuye los niveles de brillo de una imagen para mejorar el contraste.

Resulta útil cuando:

* La imagen tiene poca variabilidad de iluminación.
* Los detalles están ocultos en zonas oscuras o claras.
* Se requiere mejorar la percepción visual antes del análisis.
* Se trabaja con imágenes médicas, agrícolas o de seguridad.

No cambia el significado de la escena, pero mejora la distribución de intensidades.

<!--
Notas del presentador:
Explicar que el histograma muestra cuántos píxeles existen en cada nivel de intensidad. Si muchos píxeles se concentran en una zona estrecha, la imagen puede verse apagada o poco informativa. La ecualización redistribuye esos niveles para mejorar la visibilidad de detalles.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Ejemplos aplicados

::left::
**Salud**

* Reducción de ruido en radiografías.
* Mejora de contraste en resonancias.
* Segmentación de estructuras anatómicas.
* Apoyo a diagnóstico asistido.

**Seguridad**

* Detección de rostros.
* Identificación de contornos.
* Mejora en escenas con baja iluminación.
* Análisis de regiones de interés.

::right::
**Robótica e industria**

* Detección de bordes para navegación.
* Inspección de piezas.
* Identificación de defectos.
* Seguimiento de objetos.

**Agricultura y satélites**

* Análisis de cultivos.
* Segmentación de áreas afectadas.
* Detección de patrones visuales.
* Interpretación de imágenes complejas.

<!--
Notas del presentador:
Presentar estos ejemplos como escenarios donde el filtrado es una etapa previa a la toma de decisiones. Enfatizar que un robot, un sistema médico o una plataforma agrícola no interpreta la imagen cruda de forma aislada; normalmente se aplican operaciones de limpieza, realce y extracción de características.
-->

---
layout: slide-08-titulo-texto
---

::title::
Función de técnicas de mejora y filtrado:

::content::
* El **filtro de paso alto** resalta contornos, bordes y detalles finos.
* La **segmentación** facilita identificar regiones específicas de interés.
* El **filtro gaussiano** reduce ruido y mejora claridad visual.
* La **ecualización de histograma** redistribuye niveles de brillo para mejorar contraste.
* El **filtrado en frecuencia** permite atenuar o resaltar componentes visuales según su comportamiento.
* El **ajuste de contraste** mejora la visibilidad de detalles en imágenes complejas.

<!--
Notas del presentador:
No leer las preguntas una por una. En su lugar, sintetizar las ideas evaluadas. El objetivo es que los estudiantes puedan identificar el propósito de cada técnica y evitar confundirlas con acciones como cambiar el tamaño, alterar solo colores o modificar únicamente el almacenamiento.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Errores conceptuales frecuentes

::left::
**Confundir filtrado con compresión**

Reducir el tamaño de archivo no equivale a mejorar bordes, contraste o segmentación.

**Confundir brillo con contraste**

Aumentar brillo aclara la imagen, pero no necesariamente mejora la separación entre detalles.

**Confundir color con estructura**

Saturar colores no garantiza detectar bordes o regiones relevantes.

::right::
**Creer que suavizar siempre mejora**

Un filtro gaussiano puede reducir ruido, pero también borrar detalles si se aplica excesivamente.

**Creer que paso alto elimina ruido siempre**

El paso alto resalta cambios bruscos; si el ruido también es brusco, puede intensificarlo.

**Olvidar el propósito**

Cada filtro debe elegirse según la tarea visual que se desea resolver.

<!--
Notas del presentador:
Utilizar esta diapositiva para fortalecer la comprensión antes de la práctica. En la evaluación, varias opciones incorrectas se relacionan con compresión, brillo, saturación o almacenamiento. Es importante que los estudiantes identifiquen la función real de cada técnica.
-->

---
layout: slide-08-titulo-texto
---

::title::
Práctica guiada

::content::
**Título:** Filtrado, contraste, frecuencia y segmentación básica con OpenCV.

**Propósito:** aplicar un flujo sencillo de percepción computacional sobre una imagen sintética para observar cómo cambian los resultados al usar suavizado, ecualización, filtrado de paso alto, detección de bordes y segmentación.

**Recursos necesarios:**

* Google Colab o Jupyter Notebook.
* Python 3.
* OpenCV.
* NumPy.
* Matplotlib.
* Conexión a internet si se usa Google Colab.

**Ventaja:** no depende de archivos locales, porque la imagen se genera con NumPy.

<!--
Notas del presentador:
Explicar que se usará una imagen sintética para garantizar que todos puedan ejecutar el código sin descargar archivos. La imagen incluirá formas, bordes y ruido, lo cual permite observar claramente el efecto de cada técnica. Invitar a los estudiantes a modificar parámetros durante la práctica.
-->

---
layout: slide-codigo
---

::title::
Código completo en Python

::content::

```python {lines:true}
import cv2
import numpy as np
import matplotlib.pyplot as plt

# ============================================================
# Práctica: filtrado, análisis de frecuencia y segmentación
# Herramientas: OpenCV, NumPy y Matplotlib
# Entorno sugerido: Google Colab o Jupyter Notebook
# ============================================================

np.random.seed(7)

# 1. Crear una imagen sintética en escala de grises
alto, ancho = 320, 420
imagen = np.zeros((alto, ancho), dtype=np.uint8)

# Fondo con gradiente suave
for y in range(alto):
    imagen[y, :] = np.clip(40 + y * 0.35, 0, 255)

# Agregar objetos geométricos
cv2.rectangle(imagen, (45, 70), (170, 220), 150, -1)
cv2.circle(imagen, (285, 150), 70, 210, -1)
cv2.line(imagen, (210, 260), (390, 70), 235, 6)

# Agregar textura simple dentro del rectángulo
for x in range(55, 165, 12):
    cv2.line(imagen, (x, 80), (x, 210), 105, 1)

# 2. Agregar ruido gaussiano
ruido = np.random.normal(0, 22, imagen.shape).astype(np.int16)
imagen_ruidosa = np.clip(imagen.astype(np.int16) + ruido, 0, 255).astype(np.uint8)

# 3. Suavizado con filtro gaussiano
imagen_gauss = cv2.GaussianBlur(imagen_ruidosa, (7, 7), 0)

# 4. Mejora de contraste con ecualización de histograma
imagen_ecualizada = cv2.equalizeHist(imagen_gauss)

# 5. Filtro de paso alto en dominio de frecuencia
f = np.fft.fft2(imagen_ecualizada)
f_shift = np.fft.fftshift(f)

filas, columnas = imagen_ecualizada.shape
centro_fila, centro_col = filas // 2, columnas // 2

# Máscara de paso alto: bloquea frecuencias bajas en el centro
radio = 35
mascara = np.ones((filas, columnas), dtype=np.uint8)
cv2.circle(mascara, (centro_col, centro_fila), radio, 0, -1)

f_shift_filtrado = f_shift * mascara
f_ishift = np.fft.ifftshift(f_shift_filtrado)
imagen_paso_alto = np.fft.ifft2(f_ishift)
imagen_paso_alto = np.abs(imagen_paso_alto)
imagen_paso_alto = cv2.normalize(imagen_paso_alto, None, 0, 255, cv2.NORM_MINMAX).astype(np.uint8)

# 6. Detección de bordes con Canny
bordes = cv2.Canny(imagen_ecualizada, 80, 160)

# 7. Segmentación básica por umbral
_, mascara_segmentacion = cv2.threshold(imagen_ecualizada, 130, 255, cv2.THRESH_BINARY)

# 8. Detección de contornos sobre la segmentación
contornos, _ = cv2.findContours(mascara_segmentacion, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

imagen_contornos = cv2.cvtColor(imagen_ecualizada, cv2.COLOR_GRAY2BGR)
cv2.drawContours(imagen_contornos, contornos, -1, (255, 0, 0), 2)

# 9. Extracción de características simples
areas = [cv2.contourArea(c) for c in contornos]
perimetros = [cv2.arcLength(c, True) for c in contornos]

print("Cantidad de contornos detectados:", len(contornos))
print("Áreas detectadas:", [round(a, 2) for a in areas])
print("Perímetros detectados:", [round(p, 2) for p in perimetros])
print("Promedio de intensidad imagen original:", round(np.mean(imagen_ruidosa), 2))
print("Promedio de intensidad imagen ecualizada:", round(np.mean(imagen_ecualizada), 2))

# 10. Visualización de resultados
resultados = [
    ("Imagen sintética original", imagen),
    ("Imagen con ruido", imagen_ruidosa),
    ("Filtro gaussiano", imagen_gauss),
    ("Ecualización de histograma", imagen_ecualizada),
    ("Paso alto en frecuencia", imagen_paso_alto),
    ("Bordes Canny", bordes),
    ("Segmentación por umbral", mascara_segmentacion),
]

plt.figure(figsize=(16, 10))

for i, (titulo, img) in enumerate(resultados, 1):
    plt.subplot(2, 4, i)
    plt.imshow(img, cmap="gray")
    plt.title(titulo)
    plt.axis("off")

plt.subplot(2, 4, 8)
plt.imshow(cv2.cvtColor(imagen_contornos, cv2.COLOR_BGR2RGB))
plt.title("Contornos detectados")
plt.axis("off")

plt.tight_layout()
plt.show()

# 11. Histogramas comparativos
plt.figure(figsize=(12, 4))
plt.hist(imagen_ruidosa.ravel(), bins=256, alpha=0.6, label="Ruidosa")
plt.hist(imagen_ecualizada.ravel(), bins=256, alpha=0.6, label="Ecualizada")
plt.title("Comparación de histogramas")
plt.xlabel("Nivel de intensidad")
plt.ylabel("Cantidad de píxeles")
plt.legend()
plt.show()
```

<!--
Notas del presentador:
Acompañar la ejecución por bloques conceptuales: primero la creación de la imagen, luego el ruido, después el suavizado, la mejora de contraste, el filtro de frecuencia, los bordes y la segmentación. Pedir a los estudiantes observar qué resultado mejora la claridad, cuál resalta bordes y cuál separa regiones.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para ejecutar la práctica

::content::

1. Abrir Google Colab o Jupyter Notebook.
2. Crear un nuevo cuaderno.
3. Copiar el código completo en una celda.
4. Ejecutar la celda.
5. Observar las imágenes generadas.
6. Revisar los valores impresos: contornos, áreas, perímetros e intensidades.
7. Modificar al menos un parámetro:

   * Tamaño del kernel gaussiano.
   * Radio del filtro de paso alto.
   * Umbrales de Canny.
   * Valor de umbral de segmentación.
8. Comparar cómo cambian los resultados.

<!--
Notas del presentador:
Indicar que modificar parámetros es clave para aprender. En percepción computacional no existe un único valor correcto para todos los casos. Los parámetros dependen del tipo de imagen, la iluminación, el ruido, el objetivo de análisis y la sensibilidad requerida.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Producto esperado de la práctica

::left::
**Resultados visuales**

* Imagen original.
* Imagen con ruido.
* Imagen suavizada.
* Imagen con contraste mejorado.
* Imagen filtrada en frecuencia.
* Bordes detectados.
* Máscara segmentada.
* Contornos sobre la imagen.

::right::
**Resultados interpretables**

* Cantidad de contornos.
* Área aproximada de regiones.
* Perímetro de objetos.
* Cambios en intensidad promedio.
* Comparación de histogramas.
* Relación entre filtrado y análisis visual.

<!--
Notas del presentador:
Recalcar que el producto no es únicamente la gráfica final. El verdadero producto es la interpretación: comprender qué transformación aporta cada técnica y cómo se relaciona con una tarea de percepción computacional.
-->

---
layout: slide-08-titulo-texto
---

::title::
Preguntas de análisis

::content::
Después de ejecutar el código, responda:

1. ¿Qué efecto produjo el filtro gaussiano sobre el ruido?
2. ¿Qué cambió después de aplicar ecualización de histograma?
3. ¿Qué información resaltó el filtro de paso alto?
4. ¿Qué diferencias observa entre bordes Canny y segmentación por umbral?
5. ¿Qué parámetro tuvo mayor impacto al modificarlo?
6. ¿En qué escenario real usaría este flujo: salud, seguridad, robótica, agricultura o industria?
7. ¿Qué riesgos tendría aplicar demasiado suavizado antes de detectar bordes?

<!--
Notas del presentador:
Estas preguntas pueden responderse de forma individual o por participación rápida. El objetivo es que los estudiantes expliquen con sus palabras lo observado. Favorecer respuestas que conecten técnica, resultado e interpretación.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
La Transformada Discreta de Fourier

::media::

<iframe width="560" height="315" src="https://www.youtube.com/embed/6jlRRywqaKc?si=fP5GDiXVPce7lJEh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Video sugerido: “Transformada Discreta de Fourier. Filtros pasa bajas/altas en imágenes”. Propósito pedagógico: reforzar la relación entre Transformada de Fourier, filtros pasa bajas y filtros pasa altas. Momento recomendado: ampliación posterior a la clase o antes de la práctica si el grupo requiere mayor apoyo conceptual. Duración: verificar en YouTube. Enlace verificado mediante búsqueda web. Fuente: :contentReference[oaicite:0]{index=0}
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Filtros 2D con Fourier

::media::

<iframe src="https://www.youtube.com/embed/5eA7HBzT6CM" allowfullscreen></iframe>

<!--
Notas del presentador:
Video sugerido: “Image Processing: Implementation of Filters using 2D Fourier”. Propósito pedagógico: ampliar el análisis técnico sobre implementación de filtros en el dominio de frecuencia. Momento recomendado: recurso complementario para estudiantes que quieran profundizar. Duración: verificar en YouTube. Enlace verificado mediante búsqueda web. Fuente: :contentReference[oaicite:1]{index=1}
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Socialización breve

::left::
**Cada estudiante o grupo comparte:**

* Un resultado visual que le llamó la atención.
* Un parámetro que modificó.
* Una interpretación técnica.
* Una posible aplicación real.

::right::
**Criterios para escuchar aportes:**

* Claridad en la explicación.
* Relación con filtrado o frecuencia.
* Interpretación del resultado.
* Aplicación a percepción computacional.
* Uso adecuado de términos técnicos.

<!--
Notas del presentador:
Conducir la socialización en máximo ocho minutos. Priorizar intervenciones cortas y significativas. Si hay muchos estudiantes, solicitar respuestas por chat o seleccionar algunos aportes representativos.
-->

---
layout: slide-08-titulo-texto
---

::title::
Resolución de dudas

::content::
Espacio orientado a aclarar preguntas sobre:

* Diferencia entre filtrado espacial y filtrado frecuencial.
* Uso del filtro gaussiano.
* Interpretación del filtro de paso alto.
* Ecualización de histograma.
* Segmentación por umbral.
* Detección de bordes.
* Relación entre práctica y evaluación.
* Aplicaciones reales en percepción computacional.

<!--
Notas del presentador:
Gestionar las dudas en máximo quince minutos. Recomendar que las preguntas se formulen desde la práctica: qué resultado apareció, qué parámetro se modificó y qué interpretación se propone. Esto evita que la discusión se vuelva demasiado abstracta.
-->

---
layout: slide-08-titulo-texto
---

::title::
Para recordar...

::content::
El filtrado y el análisis de frecuencia son herramientas fundamentales para preparar datos visuales antes de aplicar modelos inteligentes.

Ideas clave de la sesión:

* Las imágenes son matrices de datos.
* El ruido puede afectar la interpretación automática.
* El filtro gaussiano ayuda a suavizar y reducir ruido.
* El paso alto resalta bordes y detalles finos.
* La ecualización mejora el contraste.
* La segmentación permite enfocar el análisis en regiones relevantes.
* La IA funciona mejor cuando los datos han sido preprocesados adecuadamente.

<!--
Notas del presentador:
Cerrar conectando con el propósito del curso. La percepción computacional combina sensores, procesamiento de señales, imágenes e inteligencia artificial. La calidad de la entrada condiciona la calidad de la decisión. Por eso, el preprocesamiento es una etapa esencial en sistemas inteligentes.
-->

---
layout: slide-08-titulo-texto
---

::title::
Recordatorio institucional

::content::
Antes de finalizar, recuerde:

* Revisar la actividad evaluativa de la semana.
* Repasar las funciones de cada técnica trabajada.
* Ejecutar nuevamente la práctica y modificar parámetros.
* Participar en la Encuesta de Percepción Estudiantil.
* Registrar dudas pendientes para el acompañamiento académico.

<!--
Notas del presentador:
Hacer el recordatorio de la Encuesta de Percepción Estudiantil de forma clara y cordial. Explicar que la retroalimentación permite mejorar los espacios académicos, las estrategias de acompañamiento y la experiencia formativa.
-->

---
layout: slide-12-cierre
---

::title::
Gracias por su participación

::content::
Semana 6 · Percepción Computacional
Filtrado, frecuencia e inteligencia artificial aplicada al análisis visual

<!--
Notas del presentador:
Agradecer la asistencia y participación. Invitar a los estudiantes a continuar explorando los ejemplos en Python y a relacionar el tema con aplicaciones reales de su campo profesional.
-->

