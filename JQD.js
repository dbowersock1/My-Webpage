// code for the Javascript
// Name is JQD



$(document).ready(function(){
	$("h1").css("color","blue");
});

$(".header-right").click(function(){
	$("h1").css("color","red");
	$('html, body').animate({
		scrollTop: $('.background_second').offset().top
	},1250)
});

$("#h-soft").click(function(){
	$("h1").css("color","green");
	$('html, body').animate({
		scrollTop: $('#SWDIV').offset().top-=50
	},1250)
});

$("#h-engg").click(function(){
	$("h1").css("color","green");
	$('html, body').animate({
		scrollTop: $('#ENGDIV').offset().top-=50
	},1250)
});

$("#h-life").click(function(){
	$("h1").css("color","green");
	$('html, body').animate({
		scrollTop: $('#LIFEDIV').offset().top-=50
	},1250)
});