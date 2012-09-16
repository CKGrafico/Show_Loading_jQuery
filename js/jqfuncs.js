/* /////////////////////////////////////////////
Documento creado por: Enrique Fernández Guerra
Web del creador: http://www.ckgrafico.com
Url del código original: http://www.disgram.com
Fecha de creación: Junio 2012
Nadie podrá evitar que copies pero deja la fuente para que otros lleguen al original
///////////////////////////////////////////// */

;(function($, window, undefined){
	$.fn.loading = function(opciones,callback){
		//opciones por defecto
		var interno = {
			img : "img/loading.gif",
			texto : "Cargando...",
			ancho : 25
		}
		var devuelvo = '';
		if(callback) {devuelvo = callback;}

		//pero si en vez de opciones solo he hecho un callback
		if($.isFunction(opciones)) {
			devuelvo = opciones;
		}else{
			//extiendo las opciones
			$.extend(interno,opciones);
		}

		//plugin
		$(this).html("<div style='text-align:center;'><p><img style='vertical-align: middle;' src='"+interno.img+"' width='"+interno.ancho+"'/> "+interno.texto+"</p></div>");

		//callback
		devuelvo.call(this);
	}

})(jQuery, window);