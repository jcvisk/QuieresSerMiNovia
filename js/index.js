function accionParaCuandoEllaDigaQueSi() {
    let respuesta = alert('Mandame un msj por WhatsApp mi amor, gracias por la oportunidad, te amo💞');
    window.open("https://wa.me/9993904313")
}

function mueveElBoton() {
    let width = $('#question-container').width();
    let  height = $('#question-container').height();

    width = width - $('#btnNo').width();
    height = height - $('#btnNo').height();

    newWidth = (Math.random() * width);
    newHeight = (Math.random() * height);

    document.getElementById('btnNo').style.position = "absolute";
    document.getElementById('btnNo').style.left = newWidth + "px";
    document.getElementById('btnNo').style.top = newHeight + "px";


}



// Función para calcular los días transcurridos entre una fecha y la fecha actual

restaFechas = function (f) {
    var aFecha1 = f.split('/');
    //var aFecha2 = f2.split('/');
    var fFecha1 = Date.UTC(aFecha1[2], aFecha1[1] - 1, aFecha1[0]);
    var fActual = new Date();
    var dif = fActual - fFecha1;
    var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
    return dias;
}

var fecha = '29/09/2019';
$('#dias').text(restaFechas(fecha));




