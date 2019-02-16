
$(document).ready(function(){

    $("#abrirRegistro").click(function(){
        $("#login").fadeOut("slow");
        setTimeout(function(){
            $("#registro").fadeIn("slow");
        }, 3000);
    });

    $("#volverLogin").click(function(){
        $("#registro").fadeOut("slow");
        setTimeout(function(){
            $("#login").fadeIn("slow");
        }, 3000);
    });

});