
$(document).ready(function(){

    $("#abrirRegistro").click(function(){
        $("#login").fadeOut("slow");
        $("#registro").fadeIn("slow");
    });

    $("#volverLogin").click(function(){
        $("#registro").fadeOut("slow");
        $("#login").fadeIn("slow");
    });

});