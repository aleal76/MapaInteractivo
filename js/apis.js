var mapa // Mapa que vamos a modificar

/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */
var posicionCentral = {lat: -33.866, lng: 151.196}


var pyrmont = {lat: -33.866, lng: 151.196};
        map = new google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          zoom: 17
        });l

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
  mapa = new google.maps.Map(document.getElementById('map'), {
    center: posicionCentral,
    zoom: 12
  });

     
    /* Modificá la variable mapa con el constructor Map().
    Tendrás que asignarle un valor de zoom y
    un centro igual a la variable posicionCentral. */

  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}
