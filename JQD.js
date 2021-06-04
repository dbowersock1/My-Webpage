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