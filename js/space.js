//Buscador
var inputBuscar = document.getElementById("inputBuscar");
var div = document.getElementById("contenedor");
var button = document.getElementById("btnBuscar");
button.addEventListener("click", mostrarDatos);

//Fetch y mostrar datos
function mostrarDatos() {
    var url = "https://images-api.nasa.gov/search?q=" + inputBuscar.value;
    div.innerHTML = "";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            var datos = data.collection.items;
            for (var i = 0; i < datos.length; i++) {
                var img = (datos[i].links[0].href);
                var title = datos[i].data[0].title;
                var desc = datos[i].data[0].description;
                var timestamp = datos[i].data[0].date_created;
                console.log(img + title + desc + timestamp);
                div.innerHTML +=
                    `<div class="card">
                    <img class="card-img-top" src="`+ img + `">
                    <div class="card-body">
                      <h5 class="card-title">`+ title + `</h5>
                      <p class="card-text">`+ desc + `</p>
                    </div>
                    <p class="card-text"><small class="text-muted">`+ timestamp + `</p>
                  </div>`;
            }
        });
}