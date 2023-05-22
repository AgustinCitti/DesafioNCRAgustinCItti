const urlParams = new URLSearchParams(window.location.search);
const cuentaId = urlParams.get("cuenta");

fetch('/JS/data.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    if (typeof data === "object" && Array.isArray(data.cuentas)) {
      const cuenta = data.cuentas.find(cuenta => cuenta.n === cuentaId);

      if (cuenta) {
        const informacionContainer = document.getElementById("informacion-container");
        informacionContainer.innerHTML = "";

        const saldo = document.createElement("p");
        saldo.innerText = `Saldo de la Cuenta:${cuenta.moneda} ${cuenta.saldo}`;

        const tipoCuenta = document.createElement("p");
        tipoCuenta.innerText = `Tipo de Cuenta: ${cuenta.tipo_letras}`;

        const numeroCuenta = document.createElement("p");
        numeroCuenta.innerText = `Número de Cuenta: ${cuenta.n}`;

        informacionContainer.appendChild(saldo);
        informacionContainer.appendChild(tipoCuenta);
        informacionContainer.appendChild(numeroCuenta);
      } else {
        console.error("La cuenta no existe.");
      }
    } else {
      console.error("El formato de los datos es incorrecto.");
    }
});
