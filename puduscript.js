document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("datoBtn");
    const parrafo = document.getElementById("datoCurioso");
  
    const datos = [
      "El pudú es el segundo ciervo más pequeño del mundo.",
      "Puede saltar hasta 2 metros para escapar de depredadores.",
      "Su población está disminuyendo debido a la deforestación.",
      "El pudú es un animal muy solitario y tímido."
    ];
  
    boton.addEventListener("click", () => {
      const indice = Math.floor(Math.random() * datos.length);
      parrafo.textContent = datos[indice];
    });
  });
  