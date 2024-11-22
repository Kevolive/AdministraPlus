import { Usuarios } from "../models/ModeloUsuario.js";

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    let user = Usuarios.find((item) => {
      if (username === item.usuario && password === item.password) {
        return item
      }
    });
    console.log(user);

    if (user.tipo === 'natural') {
      console.log('redireccion');
      location.href = '/vistaPersonaNatural.html'
    }

  });