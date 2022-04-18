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
        // ------------- ELIMINA TODOS LOS COMPONENTES HIJOS ----------------- //
        let imagenChild = contenedorImagenes.lastElementChild;
        while (imagenChild) {
          contenedorImagenes.removeChild(imagenChild);
          imagenChild = contenedorImagenes.lastElementChild;
        }
        catFiltrada.forEach(item => {
          let archivoEncontrado = arrayCarrito.find(
            (element) => element.id === item.id
          );
          console.log(item.id);
          console.log(archivoEncontrado);
          let divContainer = document.createElement("div");
          divContainer.classList.add("col-3", "card", "m-2");
          let fileName = document.createElement("h2");
          let fileDescription = document.createElement("h3");
          let fileCategoria = document.createElement("p");
          let fileImg = document.createElement("img");
          let fileButton = document.createElement("button");
          fileName.innerHTML = item.nombre;
          fileName.classList.add("card-title");
          fileDescription.innerHTML = item.description;
          fileDescription.classList.add("cardDescription");
          fileCategoria.innerHTML = item.categoria;
          fileImg.src = item.src;
          fileImg.classList.add("card-img-top");
          fileButton.innerHTML = archivoEncontrado ? "AGREGADO": " AGREGAR ";
          fileButton.setAttribute("id", item.id);
          fileButton.addEventListener("click", () => {
            botonAgregarAlCarrito(item);
          });
          fileButton.disabled = archivoEncontrado;
          if (archivoEncontrado) {
            fileButton.classList.add("btn", "btn-danger");
          }else{
            fileButton.classList.add("btn", "btn-primary");
          }
        
          divContainer.appendChild(fileName);
          divContainer.appendChild(fileDescription);
          divContainer.appendChild(fileCategoria);
          divContainer.appendChild(fileImg);
          divContainer.appendChild(fileButton);
          div.appendChild(divContainer);
        });
        arrRead.appendChild(div);
        contenedor.appendChild(divContainer)
        // VA MOSTRANDO LOS ELEMENTOS DE ACUERDO AL INPUT //
        document.getElementById("contenedor").style.visibility = "visible";
      } 
    }
  }
  