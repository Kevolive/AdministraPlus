function agregar(){
    var ingresos=Number(document.getElementById("ingresos").value);
var Educacion =Number(document.getElementById("Educacion").value);
var Transporte=Number(document.getElementById("Transporte").value);
var Comida=Number(document.getElementById("Comida").value);
var Alquiler=Number(document.getElementById("Alquiler").value);
var Otros=Number(document.getElementById("Otros").value);
var Gastos= Educacion + Transporte + Comida + Alquiler + Otros
document.getElementById("Gastos").value= Gastos
var saldo= ingresos - Gastos
    document.getElementById("saldo").value=saldo

}

