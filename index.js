$(document).ready(function() {
	$("button").click(function() {
		alert("Gambar Tidak Bisa Ditampilkan !!");
	});
	$("#jumbo").mouseenter(function(){
		$("#cad").slideDown();	
	});
	$("#jumbo").mouseleave(function(){
		$("#cad").slideUp();	
	});
	$("#gbrjpg").mouseenter(function(){
		$("#aboutjpg").slideDown();	
	});
	$("#gbrjpg").mouseleave(function(){
		$("#aboutjpg").slideUp();	
	});
	
});
