/*document.getElementById('showFlightsButton').addEventListener('click', function() {
    var departingFecha = new Date(document.getElementById('departing').value);
    var returningFecha = new Date(document.getElementById('returning').value);
    var currentDate = new Date();
    
    var departingError = document.getElementById('departingError');
    var returningError = document.getElementById('returningError');
    
    departingError.textContent = '';
    returningError.textContent = '';
    
    if (departingFecha < currentDate || returningFecha < currentDate) {
      departingError.textContent = 'La fecha departing y la fecha returning deben ser mayores a la fecha actual.';
    } else if (departingFecha > returningFecha) {
      returningError.textContent = 'La fecha departing debe ser menor a la fecha returning.';
    } else {
      // Realizar otras acciones o mostrar los vuelos si las validaciones pasan
      // ...
    }
  });*/


  const validarFecha = () => {

    var departingFecha = new Date(document.getElementById('departing').value);
    var returningFecha = new Date(document.getElementById('returning').value);
    var fecha = new Date();

    var departingError = document.getElementById('departingError');
    var returningError = document.getElementById('returningError');
    
    departingError.textContent = '';
    returningError.textContent = '';

    if (departingFecha < fecha || returningFecha < fecha) {
        departingError.textContent = 'La fecha departing y la fecha returning deben ser mayores a la fecha actual.';
      } else if (departingFecha > returningFecha) {
        returningError.textContent = 'La fecha departing debe ser menor a la fecha returning.';
      }

  }

  document.querySelector('#btnShowFlights')
.addEventListener('click',() => validarFecha())
  