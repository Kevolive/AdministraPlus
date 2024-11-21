function agregar() {
    var ingresos = Number(document.getElementById("ingresos").value);
    var Compras = Number(document.getElementById("Compras").value);
    var Transporte = Number(document.getElementById("Transporte").value);
    var Alimentacion = Number(document.getElementById("Alimentacion").value);
    var Alquiler = Number(document.getElementById("Alquiler").value);
    var Seguridad = Number(document.getElementById("Seguridad").value);
    var Nomina = Number(document.getElementById("Nomina").value);
    var Otros = Number(document.getElementById("Otros").value);
    var Gastos = Compras + Transporte + Alimentacion + Alquiler + Seguridad + Nomina + Otros
    document.getElementById("Gastos").value = Gastos
    var saldo = ingresos - Gastos
    document.getElementById("saldo").value = saldo

}