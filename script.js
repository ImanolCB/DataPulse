"strict mode";

const btnLoadSells = document.getElementById("btn_loadSells");
const titulo = document.querySelector("h1")
const tabla = document.querySelector("table")
const venta = {
    producto: "Monitor",
    precio: 300
}


console.log(btnLoadSells);
console.log(titulo);

btnLoadSells.addEventListener("click", function () {
    console.log("Se ha pulsado el boton");
    updateDataTable()
    titulo.textContent = "DataPulse — Ventas cargadas";
});

function updateDataTable() {
    const tr = document.createElement("tr")
    const tdProducto = document.createElement("td")
    const tdPrecio = document.createElement("td")

    tdProducto.textContent = venta.producto
    tdPrecio.textContent = venta.precio
    tr.appendChild(tdProducto)
    tr.appendChild(tdPrecio)
    tabla.appendChild(tr)
}