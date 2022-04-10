//----------- FILTRADO DE LOS ITEMS DEL ARRAY -------------//

function filtroCategoria() {
    let contenedorSinCat = document.getElementById("noCategoria");
    const categoryUser = document.getElementById("buscador").value;
    let catFiltrada = archivos3d.filter((archivo) => {
      return archivo.categoria
        .join(" ")
        .toLowerCase()
        .includes(categoryUser.toLowerCase());
    });
    let child = contenedorSinCat.lastElementChild;
    while (child) {
      contenedorSinCat.removeChild(child);
      child = contenedorSinCat.lastElementChild;
    }
    // ------------ CUANDO NO HAY ELEMENTOS QUE MOSTRAR ---------------//
    if (categoryUser.trim().length && catFiltrada.length === 0) {
      let noCategoria = document.createElement("div");
      noCategoria.innerHTML = ` <div class="sinCategoria">
                                <p> No hay existen elementos </p>
                                </div>`;
      document.getElementById("noCategoria").appendChild(noCategoria);
      //--- OCULTA LOS ELEMENTOS DEL ARRAY QUE NO COINCIDE CON LA BUSQUEDA ----//
      document.getElementById("contenedor").style.visibility = "hidden";
    } else {
      if (catFiltrada.length > 0) {
        let contenedorImagenes = document.getElementById("contenedor");
        // -------------ELIMINA TODOS LOS COMPONENTES HIJOS ----------------- //
  
        let imagenChild = contenedorImagenes.lastElementChild;
        while (imagenChild) {
          contenedorImagenes.removeChild(imagenChild);
          imagenChild = contenedorImagenes.lastElementChild;
        }
        catFiltrada.forEach(item => {
          template.querySelector('h2').textContent = item.nombre
          template.querySelector('img').src = item.src
          template.querySelector('p').textContent = item.description
          template.querySelector('b').textContent = item.categoria
          const clone = template.cloneNode(true)
          fragment.appendChild(clone)
        });
        
        contenedor.appendChild(fragment)
        // VA MOSTRANDO LOS ELEMENTOS DE ACUERDO AL INPUT //
        document.getElementById("contenedor").style.visibility = "visible";
      } else {
      }
    }
  }
  
  //--------------- ALERTA BOTONES -----------------------//
