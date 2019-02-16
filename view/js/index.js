$('#registro').hide();

$(document).ready(function(){

    $("#abrirRegistro").click(function(){
        $("#login").fadeOut();
        $("#registro").fadeIn();
    });

    $("#volverLogin").click(function(){
        $("#registro").fadeOut();
        $("#login").fadeIn();
    });

});