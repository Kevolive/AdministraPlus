document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores de usuario y contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validar que los campos no estén vacíos
    if (!username.trim() || !password.trim()) {
        alert('Por favor, ingresa tu usuario y contraseña.');
        return; // Detener la ejecución si algún campo está vacío
    }

    // Autenticación con credenciales específicas
    if (username === "ADplus" && password === "ADplus4") {
        // Si la autenticación es exitosa, enviar mensaje a la ventana principal y cerrarla
        alert('Inicio de sesión exitoso');
        window.opener.postMessage('success', '*');
        window.close();
    } else {
        // Si la autenticación falla, mostrar un mensaje de error
        var existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.textContent = 'Usuario o contraseña incorrectos';
        } else {
            var errorMessage = document.createElement('p');
            errorMessage.textContent = 'Usuario o contraseña incorrectos';
            errorMessage.style.color = 'red';
            errorMessage.classList.add('error-message');
            document.getElementById('loginForm').appendChild(errorMessage);
        }
    }
});
