"strict mode";

// DOM Elements
const btnLoadSells = document.getElementById("btn_loadSells");
const titulo = document.querySelector("h1")
const tbody = document.querySelector("tbody")

//DATA
const ventas = [
    {
        producto: "Monitor",
        precio: 300
    },
    {
        producto: "Teclado",
        precio: 80
    },
    {
        producto: "Ratón",
        precio: 25
    },
    {
        producto: "Auriculares",
        precio: 70
    },
]

const respuestaBackend = JSON.stringify(ventas)
console.log(typeof respuestaBackend);
console.log(respuestaBackend)
const ventasRecibidas = JSON.parse(respuestaBackend);
console.log(ventasRecibidas);
console.log(typeof ventasRecibidas);
console.log(Array.isArray(ventasRecibidas));

const respuesta = fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
        return response.parse();
    })
    .then(data => {
        console.log(data);
    });


btnLoadSells.addEventListener("click", function () {
    console.log("Se ha pulsado el boton");
    updateDataTable(ventas)
    titulo.textContent = "DataPulse — Ventass cargadas";
});


// Metodo para limpieza de una tabla, se pasa por parametro elemento del DOM de la tabla
function cleanDataTable(element) {
    element.textContent = ""
}

// Metodo para creación de fila con datos, se pasa por parametro los datos que se cargan
function createSaleRow(item) {
    let row = document.createElement("tr")
    let cellProduct = document.createElement("td")
    let cellPrice = document.createElement("td")

    cellProduct.textContent = item.producto
    row.appendChild(cellProduct)
    cellPrice.textContent = item.precio
    row.appendChild(cellPrice)

    return row
}

//Función que limpia la tabla, obtiene los datos y los muestra
function updateDataTable(dataTable) {

    cleanDataTable(tbody);
    dataTable.forEach(item => {

        tbody.appendChild(createSaleRow(item))
    });

}