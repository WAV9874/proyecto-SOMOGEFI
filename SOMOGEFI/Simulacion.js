function calcularCuota() {
    const saldoDisponible = parseFloat(document.getElementById('ahorros').value);
    const tasaInteres = parseFloat(document.getElementById('tasaInteres').value) / 100;
    const plazo = parseInt(document.getElementById('plazo').value);
    const valorSimulado = parseFloat(document.getElementById('valorSimulado').value);

    const ingresos = parseFloat(document.getElementById('ingresos').value);
    const gastos = parseFloat(document.getElementById('gastos').value);

    const capacidadPago = (ingresos - gastos) * 0.35;
    
    if (valorSimulado > saldoDisponible) {
        alert("El valor simulado excede el saldo disponible.");
        return;
    }

    if (valorSimulado > capacidadPago) {
        alert("El crédito excede tu capacidad de pago.");
        return;
    }

    let saldoInicial = valorSimulado;
    let cuotaMensual = (valorSimulado * tasaInteres * Math.pow(1 + tasaInteres, plazo)) / (Math.pow(1 + tasaInteres, plazo) - 1);
    document.getElementById('tablaContenido').innerHTML = "";

    for (let i = 1; i <= plazo; i++) {
        let interes = saldoInicial * tasaInteres;
        let abonoCapital = cuotaMensual - interes;
        let saldoFinal = saldoInicial - abonoCapital;

        document.getElementById('tablaContenido').innerHTML += `
            <tr>
                <td>${i}</td>
                <td>${saldoInicial.toFixed(2)}</td>
                <td>${cuotaMensual.toFixed(2)}</td>
                <td>${interes.toFixed(2)}</td>
                <td>${abonoCapital.toFixed(2)}</td>
                <td>${saldoFinal.toFixed(2)}</td>
            </tr>
        `;

        saldoInicial = saldoFinal;
    }

    document.getElementById('tablaAmortizacion').classList.add("active");
}

function enviarSolicitud() {
    alert("Solicitud enviada para estudio.");
}
