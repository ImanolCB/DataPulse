"strict mode";

// DOM Elements
const btnLoadSells = document.getElementById("btn_loadSells");
const titulo = document.querySelector("h1");
const tbody = document.querySelector("tbody");

btnLoadSells.addEventListener("click", async function () {
    try {
        const data = await cargarDatos();
        updateDataTable(data);
        titulo.textContent = "DataPulse — Ventas cargadas";
    } catch (error) {
        console.error(error);
        if (error.status) {
            const e = Math.floor(error.status / 100);
            switch (e) {
                case 4:
                    titulo.textContent =
                        "DataPulse — No se ha podido obtener los datos";
                    break;
                case 5:
                    titulo.textContent =
                        "DataPulse — Fallo al conectar con el servidor";
                    break;

                default:
                    titulo.textContent = "DataPulse — Error al cargar los datos";
                    break;
            }
        } else {
            titulo.textContent = "DataPulse — No se ha podido conectar con el servidor"
        }
    }
});

// Metodo para limpieza de una tabla, se pasa por parametro elemento del DOM de la tabla
function cleanDataTable(element) {
    element.textContent = "";
}

// Metodo para creación de fila con datos, se pasa por parametro los datos que se cargan
function createSaleRow(item) {
    let row = document.createElement("tr");
    let cellProduct = document.createElement("td");
    let cellPrice = document.createElement("td");

    cellProduct.textContent = item.producto;
    row.appendChild(cellProduct);
    cellPrice.textContent = item.precio;
    row.appendChild(cellPrice);

    return row;
}

//Función que limpia la tabla, obtiene los datos y los muestra
function updateDataTable(dataTable) {
    cleanDataTable(tbody);
    dataTable.forEach((item) => {
        tbody.appendChild(createSaleRow(item));
    });
}

async function cargarDatos() {
    const response = await fetch("https://dominio-que-no-existe-123456789.com/todos");
    if (!response.ok) {
        const error = new Error(
            `Error al obtener los datos, status ${response.status}`,
        );
        error.status = response.status;
        throw error;
    }
    const data = await response.json();
    console.log(data[0]);
    console.log(data[0].title);
    const ventasTransformadas = data.map((item) => {
        return {
            idProduct: item.id,
            producto: item.title,
            precio: item.id * 10,
        };
    });
    return ventasTransformadas;
}
