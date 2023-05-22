document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cuentasParam = urlParams.get("cuentas");
  
    if (cuentasParam) {
      const cuentasRestantes = JSON.parse(cuentasParam);
  
      const cuentasContainer = document.getElementById("cuentas-container");
      if (cuentasContainer) {
        cuentasContainer.innerHTML = "";
  
        cuentasRestantes.forEach(cuenta => {
          const link = document.createElement("a");
          link.href = `/html/cuenta.html?cuenta=${cuenta.n}`;
          link.innerText = `${cuenta.tipo_letras} - ${cuenta.n}`;
            
          cuentasContainer.appendChild(link);
        });
      }
    }
  });
  