# Usuarios
## ¿Cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz?

* El primer usuario en el que pensé como receptor de mi web app fue el usuario promedio de internet que hace uso de las redes sociales, email y cuentas en las diferentes plataformas que requieren de la creación de un usuario y una contraseña. 

* El proyecto principal incluía diferentes pantallas (5 en total) que guiaban al usuario para escoger entre cifrar y descifrar una contraseña. Tenía planeado incluir en la primera pantalla un menú de opciones que permitieron al usuario revisar si alguna de sus cuentas personales de email había sido hackeada, además de presentar la descripción del producto y las instrucciones de uso. 

*Al hacer iteraciones con posibles usuarios me di cuenta de que lo que yo tenía en mente como una web app con un diseño sencillo y fácil de utilizar, resultaba confuso para los usuarios ya que tenía algunas de las pantallas muy saturadas de información (como la primera) y hacía al usuario dar clics que resultaban innecesarios y podían desesperar al usuario. Al final decidí reducir las pantallas principales a 3, pensando en que el usuario al que va dirigida la web app podría encontrar tedioso tener que dar varios clics para ver el resultado, además de dejar en la pantalla principal únicamente las instrucciones de uso. Porque no quería que la primera impresión que el usuario tuviera fuera desagradable al ver muchas letras en la primera pantalla. Cada una de las pantallas fue pensada para tener un fin muy puntual para mantener web app lo más simple posible.

* Adicionalmente a esas 3 pantallas principales, agregue ancladas a la barra de navegación dos más, una que permite al usuario mandar sugerencias y otra que da una breve explicación sobre el funcionamiento de la web app.

# ¿Quiénes son los principales usuarios de producto?
* El usuario para el que la app web está diseñada es cualquier persona que haga uso de contraseñas para proteger sus cuentas en línea o sus archivos locales. 

# Objetivos
## Cuáles son los objetivos de estos usuarios en relación con tu producto.
* Proteger sus cuentas o archivos.
    * Mediante el uso de contraseñas más seguras.
* Facilitar la creación de contraseñas.
* Permitir al usuario compartir sus contraseñas con otras personas de forma segura.

# ¿Cómo crees que el producto que estás creando está resolviendo sus problemas?

* El fin principal del producto es mejorar la seguridad de las contraseñas sin forzar al usuario a crear contraseñas nuevas cada vez, ya que podría crear una con diferentes offset y usarla en diferentes cuentas, además de aumentar el grado de complejidad de las mismas.

* Al facilitar al usuario la creación de múltiples contraseñas se estaría evitando que use la misma contraseña para varias cuentas y limita el riesgo ya que aunque una de ellas fuera hackeada las demás cuentas seguirían protegidas. 

*El objetivo secundario es permitir que se puedan compartir sus contraseñas con otras personas de una manera más segura, sin que terceros que llegasen a verlas pudieran acceder a sus cuentas o archivos.

#Funcionalidad

## Funcionalidad y diseño de pantallas

1.-El fin de la primera pantalla es dar la bienvenida al usuario y mostrarle una serie de instrucciones sobre lo que puede hacer en la web app, esta primera pantalla es meramente informativa y solo tiene un botón de comenzar.

2.-La segunda pantalla está diseñada para que el usuario ingrese una contraseña cifrada o descifrada e introduzca un offset con el que se van a convertir las contraseñas, además tiene la opción de ingresar una etiqueta para a las contraseñas, ya que en la tercera pantalla se da la opción de agregarlas a una tabla. En caso de que alguno de los campos obligatorios (contraseña, offset) no esté rellenado se devuelve un mensaje de error al usuario para que lo rellene, igual en el caso de que el offset ingresado sea negativo. Debajo del formulario se presentan dos botones, uno para elegir cifrar y otro para elegir descifrar, a los que el usuario tendrá que dar clic para continuar. 

3.-La tercera pantalla muestra la contraseña cifrada o descifrada, según la elección del usuario, tiene un botón para volver a la pantalla del formulario para seguir cifrando o descifrando y en caso de que el usuario haya cifrado una contraseña se habilita el botón de agregar a la tabla y se visualiza la tabla debajo. El usuario tiene la posibilidad de cifrar el número de contraseñas que desee e irla agregando a la tabla, con el fin de copiarlas al final y poder enviarlas por correo electrónico. De esta manera podría compartirlas con alguien más o guardarlas para si mismo. La tabla que se genera tiene además otros dos botones, uno que permite eliminar la última de las contraseñas agregadas y otra para limpiar toda la tabla, que además envía a la pantalla de inicio. 

Pantallas adicionales: Las pantallas adicionales, a las que se accede al dar clic los botones contacto y acerca de tienen como fin abrir un canal de comunicación con el usuario y darle información extra, pero que podría resultar necesaria, sobre la web app.




