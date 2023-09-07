var url = "https://images-api.nasa.gov/search?q=andromeda"
var div = document.getElementById("contenedor");
var button = document.getElementById("btnBuscar");

button.addEventListener("click", mostrarDatos);

function mostrarDatos() {
    div.innerHTML = "";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            var datos = data.collection.items;
            for (var i = 0; i < datos.length; i++) {
                var title = datos[i].data[0].title;
                div.innerHTML +=
                    `<b>${title}</b>`;
            }
        });
}