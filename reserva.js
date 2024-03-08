document.getElementById('reservaBoton').addEventListener('click', function() {
    
        var width = 550;
        var height = 250;
        var left = (screen.width / 2) - (width / 2);
        var top = (screen.height / 2) - (height / 2);

        
        popupWindow = window.open('../reserva/reservaExitosa.html', '_blank', 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top);

        console.log("jhamil1")
        setTimeout(function() {
            window.location.href = '../index.html';
        }, 10000)
        console.log("jhamil2")
    
});
