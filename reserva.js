document.getElementById('reservaBoton').addEventListener('click', function() {
    
    if (popupWindow && !popupWindow.closed) {
        popupWindow.close();
    }

    var width = 550;
    var height = 250;
    var left = (screen.width / 2) - (width / 2);
    var top = (screen.height / 2) - (height / 2);

    var popupWindow = window.open('../reserva/reservaExitosa.html', '_blank', 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top);

    // Esperar a que la ventana emergente esté completamente cargada antes de redireccionar
     popupWindow = window.open('../reserva/reservaExitosa.html', '_blank', 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top);
        
        // Redirigir a index.html después de abrir la nueva ventana emergente
    setTimeout(function() {
        window.location.href = '../index.html';
    }, 10000);
    
});
