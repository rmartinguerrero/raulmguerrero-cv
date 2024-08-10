---
title: "Raspberry Pi, Un ordenador para todos"
description: "¿Qué es Raspberry Pi? Raspberry Pi es un ordenador reducido, del tamaño de una tarjeta de crédito, funciona mejor con sistemas operativos basados en Unix"
pubDate: "Aug 15 2021"
heroImage: "/PostIMG.png"
badge: "Nuevo Post!"
tags: ["Raspberry Pi","Tecnología"]
---
## ¿Qué es Raspberry Pi?

No quiero extenderme demasiado con detalles ya que existe muchísima información en *<a href="https://es.wikipedia.org/wiki/Raspberry_Pi" target="_blank">Wikipedia</a>* o en la web oficial de *<a href="https://www.raspberrypi.org/documentation/computers/" target="_blank">Raspberry Pi</a>*. Sin duda lo más interesante de este pequeño ordenador, es la cantidad de usos que podemos darle a un coste muy bajo. Desde sus comienzos, el emblema de Raspberry Pi es la educación, la introducción a la programación y tecnología para todos.

Raspberry Pi es un ordenador reducido, del tamaño de una tarjeta de crédito, funciona mejor con sistemas operativos basados en <a href="https://es.wikipedia.org/wiki/Unix" target="_blank">Unix</a>, en concreto una imagen de <a href="https://www.debian.org/intro/about.es.html" target="_blank">Debian</a> adaptada y renombrada como <a href="https://www.raspberrypi.org/software/operating-systems/" target="_blank">Raspbian</a>. También podemos instalar Windows, Ubuntu o LibreElec para montar un centro multimedia en casa. Además existen multitud de componentes extra que pueden multiplicar la diversión, como sensores de luz, gas, proximidad, cámaras, desde las más simples hasta con visión nocturna y zoom o pantallas táctiles con lo que podremos llevar nuestra Raspberry Pi comprimida en una pequeña caja no más grande que una funda de gafas de sol.


Las posibilidades que ofrece el pequeño ordenador no han pasado desapercibidas y en estos momentos, con pocos recursos y el <a href="https://es.wikipedia.org/wiki/Sistema_operativo" target="_blank">sistema operativo</a> adecuado para cada ocasión, podemos crear un ordenador domestico, un sistema de domótica o una consola retro y con el extra de haberlo hecho tu mism@.

![Raspberry Pi convertida en consola retro](https://images.unsplash.com/photo-1507289872412-523fc6b2db5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1496&q=80)

Sin duda es una de las mejores opciones para la educación de los pequeños, medianos y grandes. Ya no existen muchos kits de inicio que merezcan la pena y algunos de los que había, por desgracia se han subido al carromato del capitalismo haciendo imperceptible la esencia del <a href="https://es.wikipedia.org/wiki/C%C3%B3digo_abierto" target="_blank">Open Source</a>. Pero eso no será un problema, sinceramente siempre escapé de los kits prestablecidos y estoy aquí precisamente para recomendarte por donde empezar sin gastar más de lo necesario.

## ¿Qué necesitas para empezar?

Lo primero es la placa de Raspberry Pi, cuenta con microprocesador, ram, conexiones USB incluyendo la entrada de corriente, ethernet, salida de vídeo compuesto o digital, <a href="https://es.wikipedia.org/wiki/GPIO" target="_blank">GPIO</a> y en los últimos modelos wifi y bluetooth. Además, en su parte baja, podemos encontrar una ranura para una tarjeta generalmente microSD, donde instalaremos nuestro sistema operativo. Existen diversos modelos y aquí es donde pueden variar las conexiones, tamaño y prestaciones.<br>También necesitaremos:
- Monitor o TV.
- Teclado y ratón.
- Tarjeta midroSD.
- Alimentación a la corriente.
- Otros cables de conexiones como HDMI, ethernet, usb, etc...
- Caja o carcasa. Esto es opcional, pero recomendable para evitar que se llene de polvo y esté protejida y cool.

Muchas de estas cosas las tenemos en cajones de casa y fácilmente podemos recuperar un cargador del tablet para alimentar nuestra Raspberry pi. ¿Por qué he dicho un cargador de tablet y no de móvil?. La Raspberry pi necesita 2 amperios para funcionar de manera óptima, los cargadores de móvil solo tienen 1 amperio y puede dar problemas.

Respecto a la tarjeta microSD si es **muy recomendable** que sea de clase 10 ultra rápida *(UHS-I Ultra High Speed)*. Suelen identificarse porque tienen un 10 encerrado en una C, además de un 1 encima de una U. <br>

<img alt="Micro SD clase 10 - by:comunity GoPro" src="http://cbcdn1.gp-static.com/media_library/image/397/large_lexar_64.png" alt="Tarjeta microSD - By: Adafruit Industries" width="120"/>

Todos estos periféricos se pueden conseguir en el bazar más cercano, podemos echar un vistazo dentro del mismo bazar y revisar si sale más rentable comprarlo ahí o en cualquier página web conocida.

## Modelos y usos más frecuentes.

Desde su comienzo, han lanzado muchas versiones, existen las versionas A, A+, B, B+ y las versiones zero, una más barata que la otra sacrificando wifi y bluetooth.<br> Su último lanzamiento ha sido *un todo en uno donde* se incluye un teclado, por ahora vamos a omitir las primeras versiones, dejando así solo los últimos lanzamientos y los modelos B + o zero más utilizados.<br> En la siguiente tabla se puede ver los modelos y sus usos más frecuentes. Puedes ir directamente a la ficha pulsando el enlace:<br>

<!-- Table -->

<div mb-9>
  <div class="carousel carousel-vertical rounded-box h-96">
    <div class="carousel-item h-full">
      <img src="../public/RBPmpdels1.png" />
    </div>
    <div class="carousel-item h-full">
      <img src="../public/RBPmpdels2.png" />
    </div>
    <div class="carousel-item h-full">
      <img src="../public/RBPmpdels3.png" />
    </div>
    <div class="carousel-item h-full">
      <img src="../public/RBPmpdels4.png" />
    </div>
    <div class="carousel-item h-full">
      <img src="../public/RBPmpdels5.png" />
    </div>
  </div>
    <div class="flex flex-col items-center">
      <a href="https://www.raspberrypi.com/products/" target="_blank">
        <button class="btn btn-ghost">Clic para ampliar información</button>
      </a>
    </div>
</div>
<!-- End Table-->

## ¿Por qué lo recomiendo tanto? En serio, compra una Raspberry Pi.

No solo porque soy un freak al que le gusta cacharrear y leer verde sobre negro, creo que es una herramienta que puede ayudar a las personas, con ella aprendí a moverme por <a href="https://es.wikipedia.org/wiki/Unix" target="_blank">Unix</a> y descrubí que no solo se usaba para tener una consola retro, realmente ayuda en la educación y en la industria, puedes crear impresoras 3D, securizar la conexión a Internet de tu familia o hacer que países gobernados por dictaduras, puedan tener acceso a un Internet libre.

Su mayor ventaja es la comunidad que tiene detrás, los miles y miles de usos que gente con creatividad y necesidad, hacen brotar a diario y compartidos con el resto del mundo desde plataformas como <a href="https://github.com/search?q=raspberry+pi" target="_blank">Github</a>, <a href="https://codeclub.org/en/" target="_blank">CodeClub</a>, <a href="https://projects.raspberrypi.org/en" target="_blank">Raspberry Pi Projects</a> y muchos más. Incluso escuelas de todo el mundo pueden crear un programa que será ejecutado en el espacio gracias a <a href="https://astro-pi.org/" target="_blank">AstroPi</a>.

En mi caso yo necesité mucho menos para comprarme la primera versión y ahora voy por la tercera y mucho aprendido. Lo recomiendo encarecidamente, antes que dejar a los niñ@s tirados en un ricón sin saber que hacen con el teléfono, es mucho más productivo alimentar su creatividad e impulsarle a ser curioso y resolutivo, salvemos las próximas generaciones de la prisión que se les viene encima.

Gracias por leer.

![Bansky Art By: Pinteres](https://i.pinimg.com/originals/0d/4a/f3/0d4af343b70f8bb9394b1870e801f45f.jpg)

[Wikipedia]: https://es.wikipedia.org/wiki/Raspberry_Pi
[Raspberry Pi]: https://www.raspberrypi.org/documentation/computers/ 
[sistema operativo]:https://es.wikipedia.org/wiki/Sistema_operativo
[Open Source]: https://es.wikipedia.org/wiki/C%C3%B3digo_abierto
[Unix]: https://es.wikipedia.org/wiki/Unix
[Debian]: https://www.debian.org/intro/about.es.html
[Raspbian]: https://www.raspberrypi.org/software/operating-systems/
[GPIO]: https://es.wikipedia.org/wiki/GPIO
[Github]: https://github.com/search?q=raspberry+pi
[CodeClub]: https://codeclub.org/en/
[Raspberry Pi Projects]: https://projects.raspberrypi.org/en