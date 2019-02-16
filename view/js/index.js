
$(document).ready(function(){

    setTimeout(function(){
        $("#login").fadeIn("slow");
    }, 500);

    $("#abrirRegistro").click(function(){
        $("#login").fadeOut("slow");
        setTimeout(function(){
            $("#registro").fadeIn("slow");
        }, 800);
    });

    $("#volverLogin").click(function(){
        $("#registro").fadeOut("slow");
        setTimeout(function(){
            $("#login").fadeIn("slow");
        }, 800);
    });

});