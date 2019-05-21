lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

  // Completa las direcciones ingresadas por el usuario a y establece los límites
  // con un círculo cuyo radio es de 20000 metros.
  function autocompletar() {
     
    var input = document.getElementById('direccion');
    autocomplete = new google.maps.places.Autocomplete(input);
    var input = document.getElementById('desde');
    autocomplete = new google.maps.places.Autocomplete(input);
    var input = document.getElementById('hasta');
    autocomplete = new google.maps.places.Autocomplete(input);
    var input = document.getElementById('agregar');
    autocomplete = new google.maps.places.Autocomplete(input);

    var circle = new google.maps.Circle(
      { center: posicionCentral, radius: 20000 });
    autocomplete.setBounds(circle.getBounds());

  /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
  página (las direcciones ingresables por el usuario).
  Para esto creá un círculo con radio de 20000 metros y usalo para fijar
  los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */
}

    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar() {
  servicioLugares = new google.maps.places.PlacesService(mapa)
  autocompletar()
}

// Busca lugares con el tipo especificado en el campo de TipoDeLugar

function buscarCerca(posicion) {
  var radio = document.getElementById('radio').value;
  var tipoDeLugar = document.getElementById('tipoDeLugar').value;
  var request = {
    location: posicion,
    radius: radio,
    type: [tipoDeLugar]
  };
  console.log("aquí adentro de buscarcerca", request);
  servicioLugares.nearbySearch(request, callback);

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      marcadorModulo.marcarLugares(results, status);
      console.log("busco ok", results);
    }
  }
  /* Completar la función buscarCerca  que realice la búsqueda de los lugares
  del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
  pasado como parámetro y llame a la función marcarLugares. */

}
return {
  inicializar,
  buscarCerca
}
}) ()
