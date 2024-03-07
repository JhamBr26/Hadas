// script.js
var popupWindow;

document.getElementById('loginButton').addEventListener('click', function() {
    // Si ya existe una ventana emergente abierta, y no está cerrada, enfocarla
    if (popupWindow && !popupWindow.closed) {
        popupWindow.focus();
    } else {
        var width = 550;
        var height = 500;
        var left = (screen.width / 2) - (width / 2);
        var top = (screen.height / 2) - (height / 2);

        popupWindow = window.open('../sesion/iniciar.html', '_blank', 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top);
    }
});

