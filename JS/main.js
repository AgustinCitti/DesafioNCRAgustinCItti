
fetch('/JS/data.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    if (typeof data === "object" && Array.isArray(data.cuentas)) {
      const cuentasFiltradas = data.cuentas.filter(cuenta => {
        return (cuenta.moneda === "$" || cuenta.moneda === "u$s") &&
               (cuenta.tipo_letras === "CA" || cuenta.tipo_letras === "CC");
      });

      const mostrarCuentas = (cuentas) => {
        const cuentasContainer = document.getElementById("cuentas-container");
        cuentasContainer.innerHTML = "";

        const maxLinks = 5;
        

        for (let i = 0; i < cuentas.length && i < maxLinks; i++) {
          const cuenta = cuentas[i];
          const link = document.createElement("a");
          link.href = `/html/cuenta.html?cuenta=${cuenta.n}`;
          link.innerText = `${cuenta.tipo_letras} - ${cuenta.n}`;

          cuentasContainer.appendChild(link);
        }
        const mostrarMasOpciones = document.createElement("a");
        mostrarMasOpciones.href = `/html/masop.html?cuentas=${JSON.stringify(cuentas.slice(maxLinks))}`;
        mostrarMasOpciones.innerText = "Mas opciones";
        cuentasContainer.appendChild(mostrarMasOpciones);
      };

      console.log(cuentasFiltradas);
      mostrarCuentas(cuentasFiltradas);
    } else {
      console.error("El formato de los datos es incorrecto.");
    }
});

