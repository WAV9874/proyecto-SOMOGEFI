document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const ahorro = parseFloat(document.getElementById("ahorro").value);
      const ingreso = parseFloat(document.getElementById("ingreso").value);
      const plazo = parseInt(document.getElementById("plazo").value);
  
      if (isNaN(ahorro) || isNaN(ingreso) || isNaN(plazo)) {
        alert("Por favor, completa todos los campos con números válidos.");
        return;
      }
  
      const creditoPorAhorro = ahorro * 5;
      const creditoPorIngreso = ingreso * 0.3 * plazo;
  
      const creditoFinal = Math.min(creditoPorAhorro, creditoPorIngreso);
  
      alert(`Monto estimado de tu crédito: $${creditoFinal.toLocaleString("es-CO")}`);
    });
  });
  