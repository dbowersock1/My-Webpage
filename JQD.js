// code for the Javascript
// Name is JQD

$("#h-soft").click(function(){
	$('html, body').animate({
		scrollTop: $('#SWDIV').offset().top-=700
	},1250)
});

$("#h-engg").click(function(){
	$('html, body').animate({
		scrollTop: $('#ENGDIV').offset().top-=700
	},1250)
});

$("#h-life").click(function(){
	$('html, body').animate({
		scrollTop: $('#LIFEDIV').offset().top-=700
	},1250);
});