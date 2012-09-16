##Plugin creado por: Enrique Fernandez Guerra
###Web del creador: http://www.ckgrafico.com
###Fecha de creación: Septiembre 2012
####Nadie podrá evitar que copies pero deja la fuente para que otros lleguen al original

------------------------------------------
####Que es este plugin:
Este plugin simplemente muestra un "Cargando.." en la capa deseada, se puede personalizar tanto la imagen como el texto que aparecen. No carga una sección solo muestra el loader y la carga se debe hacer despues mediante un callback.
####What is this?
This plugin simply displays a "Loading .." in the desired layer, you can customize both the image and the text displayed. Don't load a single section shows the loader and loading should be done after using a callback.

#####Parámetros
img -> ruta de la imagen de load, por defecto: img/loading.gif
texto -> Texto, por defecto: Cargando...
ancho -> Ancho imagen loading en píxels, por defecto: 50
callback -> Tiene callback

#####Métodos de funcionamiento recomendados
``$("#mydiv").loading({
	img : "img/myload.gif",
	texto : "Loading...",
	ancho : 100
},function(){
	$("#mydiv").load("mypage.html");
});``


#####Simple
``$("#mydiv").loading();``

#####Uso típico
``$("#mydiv").loading(function(){
	$("#mydiv").load("mypage.html");
});``

##NOTA: LA FUNCION load() DE JQUERY USADA EN LOS EJEMPLOS NO SUELE IR EN LOCAL,SUBE A UN SERVIDOR TU CÓDIGO ANTES DE PROBARLO O USA UN SERVIDOR LOCAL