$('#registro').hide();

$(document).ready(function(){

    $("#abrirRegistro").click(function(){
        $("#login").fadeOut();
        $("#registro").fadeIn("slow");
    });

    $("#volverLogin").click(function(){
        $("#registro").fadeOut();
        $("#login").fadeIn("slow");
    });

});