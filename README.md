#cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.
*El proyecto principal inclu+ia diferentes pantallas (5 en total) que guiaban al usuario para escoger que era lo que deseaba hacer, de las dos opciones propuestas. Tenía planteado incluir en la primera pantalla un menú de opciones que permitieron al usuario revisar si alguna de sus cuentas personales de email había sido hackeada, además de presentar la descripción del producto. Al final decidí reducir las pantallas a 3, pensando en que el usuario al que va dirigida la web app podría encontrar tedioso tener que dar varios clicks para ver el resultado. Y decidi dejar en la pantalla principal unicamente la descripción y las instrucciones de uso, para dejar esa pantalla lo menos saturada posible. Al final decidí dejar tres pantallas habilitadas ya que cada una tiene un fin muy puntual y de haber dado a una pantalla dos de estas funcionalidades habría resultado en la sobresaturación de alguna de las pantallas y quería que la web app se mantuviera lo mas simple posible.

# Quiénes son los principales usuarios de producto.
El usuario para el que la app web está diseñada es cualquier persona que haga uso de contraseñas para proteger sus cuentas en linea o sus archivos locales. 

#Cuáles son los objetivos de estos usuarios en relación con tu producto.

#Cómo crees que el producto que estás creando está resolviendo sus problemas.
El fin principal es mejorar la seguridad de las contraseñas sin forzar al usuario a crear contraseñas nuevas cada vez, ya que podría crear una con diferentes offset y usarla en diferentes cuentas, además de aumentar el grado de complejidad de las mismas. El objetivo secundario es permitir a los usuarios compartir sus contraseñas con otras personas de una manera más segura. 

 #Funcionalidad y diseño de pantallas

El fin de la primera pantalla es dar la bienvenida al usuario, describir que es lo que puede esperar de la web app y como utilizarla. Por lo que contiene una descripción y el botón de comenzar.

La segunda pantalla está diseñada para que el usuario ingrese sus contraseñas cifradas o desifradas e introduzca un offset con el que se van a convertir las contraseñas, ademas tiene la opcion de ingresar una etiqueta para a las contraseñas, ya que en la tercera pantalla se da la opcion de agregarlas a una tabla. En caso de que alguno de los campos obligatorios (contraseña, offset) no esté rellenado se devuelve un mensaje de error al usuario para que lo rellene, igual en el caso de que el offset ingresado sea negativo. Debajo del formulario se presentan dos botones, uno para elegir cifrar y otro para elegir decifrar, que el usuario tendrá que clickear para seguir. 

La tercera pantalla muestra la contraseña cifrada o descifrada, según la elección del usuario, tiene un botón para volver a la pantalla del formulario para seguir cifrando o descifrando y en caso de que el usuario haya cifrado una contraseña se habilita el botón de agregar a la tabla. El usuario tiene la posibilidad de cifrar el numero de contraseñas que desee e irla agragando a una tabla, con el fin de copiarlas al finasl y poder enviarlas por correo electrónico. Con el fin de compartilas o de tener un registro de ellas. La tabla que se genera tiene además otros dos botones, uno que permite eliminar la última de las contraseñas agregadas y otra para limpiar toda la tabla, que además envía a la pantalla de inicio. 


### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.

* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.