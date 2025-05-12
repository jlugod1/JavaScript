function obtenerDatos() {
  fetch('persona.json')
    .then(res => res.json())
    .then((datosJson) => {
      document.getElementById("nombre").textContent = datosJson.nombre;
      document.getElementById("edad").textContent = datosJson.edad;
      document.getElementById("saldo").textContent = datosJson.saldo;
      document.getElementById("numeroCuenta").textContent = datosJson.numeroCuenta;
      document.getElementById("telefono").textContent = datosJson.telefono.join(", ");
      document.getElementById("direccion").textContent = `${datosJson.direccion.calle}, ${datosJson.direccion.ciudad}`;
    })
    .catch(function(error) {
      alert("Error al cargar datos: " + error);
    });
}
