
$(document).ready(function(){

    $("#login").fadeIn("slow");

    $("#abrirRegistro").click(function(){
        $("#login").fadeOut("slow");
        setTimeout(function(){
            $("#registro").fadeIn("slow");
        }, 1000);
    });

    $("#volverLogin").click(function(){
        $("#registro").fadeOut("slow");
        setTimeout(function(){
            $("#login").fadeIn("slow");
        }, 1000);
    });

});