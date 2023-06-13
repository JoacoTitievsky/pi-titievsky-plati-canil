let endpoint_charts = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart"
let endpoint_genero = "https://api.allorigins.win/raw?url=https://api.deezer.com/genre"

let buscador = document.querySelector('#buscador');
let campoBuscar = document.querySelector('#textoBuscado');

buscador.addEventListener('submit', function (e){
e.preventDefault();

if(campoBuscar.value.length == 0) {
    alert('No puedes enviar el form vacio')
} else if(campoBuscar.value.length < 3){
    alert('El termino buscado debe tener mas de 3 caracteres')
} else {
    this.submit();
}
});