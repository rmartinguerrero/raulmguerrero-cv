---
title: "Cómo empezar con Raspberry Pi"
description: "Empezar con Raspberry Pi es realmente sencillo, practicamente es como conectar un aparato DVD a la televisión. Para esta guía, vamos a poner de ejemplo la última Raspberry Pi 4 B"
pubDate: "Aug 15 2021"
heroImage: "/PostIMG_RaspberryPi.png"
tags: ["Raspberry Pi"]
---

Empezar con <a htef="https://www.raspberrypi.org" target="_blank">Raspberry Pi</a> es realmente sencillo, practicamente es como conectar un aparato DVD a la televisión. Para esta guía, vamos a poner de ejemplo la última Raspberry Pi 4 B, [detallada en este post]({% post_url 2021-08-15-Ordenador_para_todos %}), te recomiendo leerlo antes de empezar.

## Conexiones.
Las conexiones de los modelos más populares suelen ser las mismas, a partir de ahora el microUSB se sustituye por un USB tipo C, como los móviles actuales y los HDMI grandes, por los micro HDMI.
<img src="https://www.raspberrypi.org/homepage-9df4b/static/raspberry-pi-4-labelled-2857741801afdf1cabeaa58325e07b58.png" alt="Conexiones Raspberry Pi 4 - by: Raspebrrypi.org/products">

Simplemente tenemos que conectar cada cable a la televisión, no es necesario que conectes todos, los básicos para que funcionen son 1 micro HDMI, Power Supply para que la raspberry Pi encienda y por supuesto la tarjeta microSD, de la que vamos a hablar ahora.

<img src="https://projects-static.raspberrypi.org/projects/raspberry-pi-setting-up/0d6033edf45ad2d4185ed05d6cd9a01e2f803034/en/images/pi-plug-in.gif" alt="Animación conexiones RPI4 - by: RP Projects">

## Antes de conectar la Raspberry Pi

Una vez conectemos el cable de corriente, la placa encenderá por si sola, pero si no tiene una tarjeta microSD con un sistema operativo instalado, no podrá iniciar y solo nos aparecera una pantalla en negro. Para realizar este paso previo a la conexión de la Raspberry, necesitaremos:

- Un ordenador con conexión a Internet.
- Si el ordenador no cuenta con puerto para microSD, necesitaremos un adaptador, existen muchos en el mercado y muy baratos.<br><img src="https://i.ibb.co/x7TCtG4/USBCard-Reader.png" alt="USBCard-Reader" width="200"  heigt="auto"><br>
- Tener descargado Raspberry Pi Imager <a href="https://www.raspberrypi.org/software/">clicando aquí</a> y seleccionando **"Download for Windows/macOS o Ubuntu"**.

Ahora conectamos nuestra microSD al ordenador o a nusetro adaptador, después ejecutamos haciendo docle clic al archivo que acabamos de descargar y nos aparecerá el instalador con solo dos opciones para elegir.

- Primero seleccionamos desde "Choose OS" el sistema operativo que vamos a instalar, lo más recomendable es Raspbian Full.<br><img src="https://i.ibb.co/jVbR3pB/Raspberry-Pi-Imager.gif" alt="Raspberry-Pi-Imager" border="0">
- Por último, desde "Choose SD Card" indicamos donde queremos isntalarlo, deberás buscar tu tarjeta SD, cuidado de no indicar tu disco duro.
- Pulsamos en "Write" y dejámos que el proceso finalice por si solo.

Una vez que el programa nos indica que ha finalizado, solo queda conectar nuestra microSD en la Raspberry Pi y el cable de corriente. En ese momento veremos como el propio sistema hace un chequeo de la placa.<br><img src="https://thumbs.gfycat.com/FarflungChubbyAustralianfurseal-max-1mb.gif" alt="Inicio de Raspberry - by: rasterweb.net">

Ahora tenemos que hacer algunas configuraciones antes de empezar a usarlo, como ponerlo en nuestro idioma, configurar la fecha y hora, conectarlo a la Wifi y algunas otras cosas que consideremos oportunas:<br><img src="https://i.ibb.co/wctV59L/Raspberry-Pi-Config0.png" alt="Raspberry-Pi-Config0">

Las opciones que podemos configurar son las siguientes.
### <i class="fab fa-raspberry-pi" style="font-size:16px"> Menú</i> > Settings > System<br><img src="https://i.ibb.co/gRwYxzM/Raspberry-Pi-Config-system.png" alt="Raspberry-Pi-Config-system"><br>
- Password: Debemos crear una contraseña de acceso, esto impedirá que tengamos visitantes inesperados.
- Hostname: Podemos darle el nombre que deseamos, esto nos servirá para identificar cada placa en caso de tener varias y nos hará más fácil conectar en remoto, pero eso lo veremos más adelante.
- Boot: Por defecto está marcado en "To Desktop", "Al Escritorio", la dejaremos así para movernos de manera más visual por el sistema operativo, la opción "To CLI", "A la Interfaz de línea de comandos". Aprenderemos a usarla.
- Auto Login: Con el check marcado, la Raspberry Pi iniciará el escritorio sin pedir contraseña, pero intenta que no se te olvide, es muy importante.
- Network at Boot: Esta opción **no recomiendo activarla**, esta opción hace que en caso de no tener conexión a Internet por cualquier motivo, no iniciará el escritorio.
- Splash Screen: Simplemente si queremos ver una imagen de bienvenida, antes de iniciar la Raspberry Pi.
- Resolution: Si pulsamos este botón, podemos seleccionar la resolución, frecuencia de refresco del monitor y la orientación vertical u horizontal. No es necesario tocar nada a no ser que tengas un monitor en vertical o prefieras tocar la tasa de refresco de la imagen.
- Overscan/Underscan: Al activar esta opción reduce el tamaño de la imagen dejando bordes negros alrededor.

### <i class="fab fa-raspberry-pi" style="font-size:16px"> **Menú**</i> > Settings > Interfaces<br><img src="https://i.ibb.co/myQ70h6/Raspberry-Pi-Config-interfaces.png" alt="Raspberry-Pi-Config-interfaces"><br>
Desde este panel podemos activar o desactivar varias funcionalidades externas de la Raspberry pi. Voy a enumerar las más importantes y por ahora, omitir las destinadas más a desarrrollo.

- Camera: Como menciomanos [en el anterior post]({% post_url 2021-08-15-Ordenador_para_todos %}) podemos instalar una pequeña cámara. Hay varios modelos con los que se pueden hacer proyectos realmente interesantes. Cámaras de seguridad, TimeLapse, Reconocimiento de objetos con inteligencia artifial y un largo etcétera.
- SSH: Esta interfaz permite conectarnos a la placa desde cualquier ordenador pero en el modo consola, tendremos que saber lo básico de <a href="https://es.wikipedia.org/wiki/Unix" target="_blank">unix</a>.
- VNC: Activando esta interfaz, conseguiremos conectar a la Raspberry Pi visualizando el escritorio y moviendonos con el ratón y el teclado como siempre.

### <i class="fab fa-raspberry-pi" style="font-size:16px"> **Menú**</i> > Settings > Performance<br><img src="https://i.ibb.co/LZYQFPf/Raspberry-Pi-Config-performance.png" alt="Raspberry-Pi-Config-performance"><br>
En esta sección, en principio, no hay que tocar nada, básicamente podemos hacer <a href="https://es.wikipedia.org/wiki/Overclocking" target="_blank">overclock</a> y esto es algo muy delicado, si no sabemos como hacerlo podemos causar daños a nuestra Raspberry Pi y hacerla inutilizable. Mejor pasamos.

### <i class="fab fa-raspberry-pi" style="font-size:16px"> **Menú**</i> > Settings > Localisation<br><img src="https://i.ibb.co/Xyd7YkJ/Raspberry-Pi-Config-localosation.png" alt="Raspberry-Pi-Config-localosation"><br>
Desde aquí cambiaremos el idioma, la hora , la distribución en español de nusetro teclado y la configuración regional de nusetra conexión Wifi.<br><img src="https://i.ibb.co/qkc0mpK/Raspberry-Pi-Config-localosation-2.png" alt="Raspberry-Pi-Config-localosation-2"><br>

## Conectar en remoto con Raspberry Pi

Ahora que hemos activado las interfaces de SSH y VNC, podemos conectarnos desde otro ordenador que esté en la misma red, sin necesidad de usar más el monitor y el teclado en la propia Raspberry Pi. Si quieres usar la pequeña placa como ordenador personal, no necesitamos realizar niguna otra configuración, con esto ya podemos empezar a navegar, hacer los trabajos del colégio o ver vídeos. Pero si queremos hacer mucho más, te recomiendo configurar la conexión en remoto.

### Conexión por VNC
Para poder ver el escritorio y navegar de manera visual, necesitamos instalar un programa llamado VNC Viewer, tanto en la Raspberry Pi cómo en el ordenador desde el que deseamos conectar. Para ello solo tenemos que descargar e instalar el programa <a href="https://www.realvnc.com/es/connect/download/viewer/raspberrypi/" alt="Descarga VNC Viewer para Raspberry Pi">desde su web,</a> a la Raspberry Pi. Después hacer lo mismo pero seleccionando la versión que corresponda en nuestro ordenador.

Una vez instalado, tenemos que configurar una contraseña para poder acceder. Abrimos el programa, y en la parte de abajo, podemos ver la sección de "Authentication", pulsamos el enlace azúl para configurar una.<br><img src="https://images.ctfassets.net/tvfg2m04ppj4/39eWzM0Xr89bz8E35cQv8v/040a8997ae5704f03a0a741b70fc0d53/VNC_Server.png" alt="Ventana principal de VNC - by: ctfassets.net">

Después podemos indicar si queremos iniciar el escritorio remoto don la contraseña de Raspbian o la contraseña que hemos puesto en VNC en este paso, solo tenemos que ir a la parte superior derecha, <i class="fas fa-bars" style="font-size:16px"></i> Menú > Options > Security y desplegamos en "Authentication" para seleccionar con que contraseña entraremos.<br><img src="https://magazines-attachments.raspberrypi.org/magpi/legacy-assets/2016/11/main_image.png" alt="Ventana Options de VNC - by: raspberrypi.org">

Solo nos queda abrir nuestro programa de VNC Viewer desde el ordenador que deseamos conectar e introducir la IP la Raspberry Pi, la cual podemos ver en la ventana principal, donde cambiamos la contraseña, a la izquierda, en el apartado de "Conectivity" junto a una numeración *192.x..x.x*.

### Conexión por SSH

La conexión por SSH requiere menos pasos que la anterior, una vez hemos activado la interfaz SSH, solo necesitaremos un software en el ordenador desde el que deseamos conectar, en este caso no es necesario instalar nada en la Raspberry.

Podemos usar diversos programas o Power Shell de Windows, si estamos usando Linux o Mac, también podemos usar la consola de comandos del propio sistema operativo. Si queremos descargar un programa de terceros y que nos facilite la vida, el más usado se llama Putty, igual que VNC es software libre y muy sencillo.

#### Putty
Podemos descargarlo desde su página web,<a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html" alt="Descarga de Putty"> clicando aquí</a>. Seleccionamos el primer enlace **"putty-XXbit-X.XX-installer.msi"**, 64 o 32 bits, dependiendo de nuestro sistema, normalmente será 64 bits a no ser que tengas un ordenador demasiado antiguo. Una vez abierto, solo tenemos que poner la IP y pulsar intro.<br><img src="https://tecadmin.net/wp-content/uploads/2021/01/putty-tunnel-local-1.png" alt="Conexion por Putty - by:tecadmin.net">

Después nos preguntará si estamos seguros de conectarnos remotamente, ovbiamente, pulsamos en si.<br><img src="https://www.ssh.com/hubfs/Imported_Blog_Media/Security_Alert_Dialog_about_unknown_server_host_key-2.png" alt="Mensaje de seguridad Putty - by:ssh.com">

Por último, ya estaremos conectados a nuestra Raspberry Pi, pero en modo consola y sin ayuda visual. Manejarse mediante los comandos no es dificil, aprenderemos fácilmente y pordrás notar que es cómodo y rápido.<br><img src="https://i.ibb.co/fMtN7dJ/consla-putty-neofetch-ofuscado.png" alt="consla-putty-neofetch-ofuscado">

Ahora ya podemos usar un ordenador doméstico a muy poco precio y ocupando muy poco espacio. En el siguiente artículo vamos a securizar aún más nuestra placa para que ningún intruso pueda entrar sin permiso.

Gracias por leer.

![Raspberry Pi Portátil by:adafruit](https://cdn-shop.adafruit.com/1200x900/3062-04.jpg)