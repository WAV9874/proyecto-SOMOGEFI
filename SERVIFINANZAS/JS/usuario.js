document.addEventListener("DOMContentLoaded", function () {
    const usuario = localStorage.getItem("usuario");
  
    if (!usuario) {
      alert("Debes iniciar sesión para acceder a esta sección.");
      window.location.href = "index.html"; // redirige al inicio
      return;
    }
  
    // Mostrar saludo personalizado
    const saludo = document.getElementById("bienvenida");
    saludo.textContent = `Hola, ${usuario}. Bienvenido a tu panel.`;
  });
  
  function cerrarSesion() {
    localStorage.clear();
    alert("Has cerrado sesión.");
    window.location.href = "index.html";
  }
  