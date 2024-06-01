function abrirInicioSesion() {
    window.loginWindow = window.open('SingIn.html', 'Iniciar Sesión', 'width=400,height=400');
}

window.addEventListener('message', function(event) {
    if (event.data === 'success') {
        window.location.href = 'principal.html';
    }
});
