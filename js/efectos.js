jQuery(document).ready(function($) {
	//SCROLL EN LOS ELEMENTOS DEL MENÚ
	var caracteristicas = $('#caracteristicas').offset().top,
		precios = $('#precios').offset().top,
		contacto = $('#contacto').offset().top;


		$('#btn-caracteristicas').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: caracteristicas + 50
			}, 500);
		});

		$('#btn-precios').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: precios + 60
			}, 500);
		});

		$('#btn-contacto').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: contacto
			}, 500);
		});

});

