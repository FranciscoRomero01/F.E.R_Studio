$(document).ready(function(){

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.headboard').addClass('headboard2');
		} else {
			$('.headboard').removeClass('headboard2');
		}
	});

});