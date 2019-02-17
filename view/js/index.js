
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

    $('#botonRegistro').click(function () {

        registro();
    });

});

function registro() {

    var datos = $('#registro').serialize();

    $.ajax({
        data: datos,
        url: 'api/usuario/registro',
        type: 'post',
        success: function (data) {
            alert("usuario registrado");
        },
        error: function (data) {
            alert("Error " + data);
        }
    });

    return false;
}