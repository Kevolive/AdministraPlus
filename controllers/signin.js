import { Usuarios } from "../models/ModelUsuario.js";

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    Usuarios.some((item) => {
      if (username === item.usuario && password === item.password) {
        alert("Inicio de sesión exitoso");
      } else {
        // Si la autenticación falla, mostrar un mensaje de error
        var existingError = document.querySelector(".error-message");
        if (existingError) {
          existingError.textContent = "Usuario o contraseña incorrectos";
        } else {
          var errorMessage = document.createElement("p");
          errorMessage.textContent = "Usuario o contraseña incorrectos";
          errorMessage.style.color = "red";
          errorMessage.classList.add("error-message");
          document.getElementById("loginForm").appendChild(errorMessage);
        }
      }
    });
  });