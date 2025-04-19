document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal-login");
  modal.style.display = "block";

  // Validación de inicio de sesión
  const formLogin = document.querySelector("#modal-login form");
  if (formLogin) {
    formLogin.addEventListener("submit", function (e) {
      e.preventDefault();

      const usuario = document.getElementById("usuario").value.trim();
      const password = document.getElementById("password").value.trim();

      const usuarioGuardado = localStorage.getItem("usuario");
      const passwordGuardada = localStorage.getItem("password");

      if (usuario === usuarioGuardado && password === passwordGuardada) {
        alert("Inicio de sesión exitoso.");
        cerrarModal();
      } else {
        alert("Usuario o contraseña incorrectos.");
      }
    });
  }
});

function cerrarModal() {
  const modal = document.getElementById("modal-login");
  modal.style.display = "none";
}

function abrirModalRegistro() {
  document.getElementById("modal-login").style.display = "none";
  document.getElementById("modal-registro").style.display = "block";
}

function cerrarModalRegistro() {
  document.getElementById("modal-registro").style.display = "none";
}

// Validación básica para campos vacíos
function validarFormulario() {
  const inputs = document.querySelectorAll("input[required]");
  for (const input of inputs) {
    if (input.value.trim() === "") {
      alert("Por favor completa todos los campos.");
      input.focus();
      return false;
    }
  }
  return true;
}

// Guardar nueva cuenta
function registrarCuenta() {
  const usuario = document.getElementById("nuevoUsuario").value.trim();
  const correo = document.getElementById("nuevoCorreo").value.trim();
  const password = document.getElementById("nuevaPassword").value.trim();

  if (!usuario || !correo || !password) {
    alert("Por favor completa todos los campos.");
    return false;
  }

  // Guardar en LocalStorage (simulado)
  localStorage.setItem("usuario", usuario);
  localStorage.setItem("correo", correo);
  localStorage.setItem("password", password);

  alert("Cuenta creada exitosamente. Ahora puedes iniciar sesión.");
  cerrarModalRegistro();
  return false; // Evita recargar la página
}

    