$('#registro').hide();

$(document).ready(function(){

    $("#abrirRegistro").click(function(){
        $("#login").fadeOut("slow");
        $("#registro").fadeIn(3000);
    });

    $("#volverLogin").click(function(){
        $("#registro").fadeOut("slow");
        $("#login").fadeIn(3000);
    });

});