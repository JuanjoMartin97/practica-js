
//arrays con los archivos utilizados para las cards//
const tagsArchivos = [
  "Figura",
  "Juegos",
  "Soporte",
  "Marvel",
  "Mascara",
  "Joystick",
];
const archivos3d = [];

archivos3d.push(
  new Archivos("Wukong", "Figura Wukong", "/img/wukong.jpg", [
    "Figura",
    " Marvel",
  ])
);
archivos3d.push(
  new Archivos("Mask", "Mascara Oni", "/img/mask/mask2.png", ["Mascara"])
);
archivos3d.push(
  new Archivos(
    "Soporte Link",
    "Soporte Joystick Link Leyend of Zelda",
    "/img/stl/soporte-control-link.png",
    ["Soporte", " Joystick"]
  )
);
archivos3d.push(
  new Archivos(
    "Venom Marvel",
    "Busto Venom Marvel",
    "/img/venom-body/venom-body.jpg",
    ["Figura", " Marvel"]
  )
);
archivos3d.push(
  new Archivos("Ultron", "Ultron Figura Marvel", "/img/ultron/ultron2.jpg", [
    "Figura",
    " Marvel",
  ])
);
archivos3d.push(
  new Archivos(
    "Soporte Joystick ps4",
    "Soporte Joystick The Last Of Us Part ||",
    "/img/stl/soporte-joy-tlou.jpg",
    ["Soporte", " Joystick"]
  )
);
archivos3d.push(
  new Archivos(
    "Bahamut Final Fantasy",
    "Figura Bahamut Final Fantasy Ender3pro",
    "/img/stl/bahamut-final-fantasy.png",
    ["Figura", " Juegos"]
  )
);

function Archivos(nombre, description, link, categoria) {
  this.nombre = nombre;
  this.description = description;
  this.src = link;
  this.categoria = categoria;
}

// creamos los elementos del html y treamos los elementos del array//
for (let i in archivos3d) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `<div class="card" >
                            <p> Nombre del archivo: ${archivos3d[i].nombre}</p>
                           <br>
                            <img style=" width: 400px ; height:300px" src=${archivos3d[i].src} class = "img"/>
                          <br> 
                          <p> Categorias: ${archivos3d[i].categoria}</p>            
                            <b>  ${archivos3d[i].description}<b/>
                           <br>
                           <input type="checkbox" id="chkMarket" class="box"> Agregar a descargas           
                           <button id="save" onclick="save()"> Guardar! </button> <br>
                           <button id="quit"onclick="clear()"> Quitar! </button>
                            </div> 
                            <br>`;
  document.getElementById("contenedor").appendChild(contenedor);
}

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
      for (let i in catFiltrada) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<div class="card" >
                                    <p> Nombre del archivo: ${catFiltrada[i].nombre}</p>
                                   <br>
                                    <img style=" width: 400px ; height:300px" src=${catFiltrada[i].src} class = "img"/>
                                  <br> 
                                  <p> Categorias: ${catFiltrada[i].categoria}</p>            
                                    <b>  ${catFiltrada[i].description}</b>
                                   <br>
                                   <input type="checkbox" id="chkMarket" class="box"> Agregar a descargas
                                   <button id="save" onclick="save()"> Guardar! </button> <br>
                                   <button id="quit" onclick="wis()"> Quitar! </button>
                                   </div> 
                                   <br>`;
        contenedorImagenes.appendChild(contenedor);
      }
      // VA MOSTRANDO LOS ELEMENTOS DE ACUERDO AL INPUT //
      document.getElementById("contenedor").style.visibility = "visible";
    } else {
    }
  }
  console.log(catFiltrada);
}

//ARRAY DE LOS MAS DESCARGADOS//
const imgArrayDescargados = [];

imgArrayDescargados.push(
  new ImgArray("Trunks", "Trunks del Futuro", "/img/dbz-trunks/Trunks.jpeg")
);
imgArrayDescargados.push(
  new ImgArray(
    "Luffy Gear 4",
    "Figura Luffy One Piece",
    "/img/stl/LuffyGear4.jpg"
  )
);
imgArrayDescargados.push(
  new ImgArray(
    "Goku vs Broly",
    "Figura de la pelea Goku Broly pelicula",
    "/img/stl/broly-vs-goku-3d-model-stl.jpg"
  )
);
imgArrayDescargados.push(
  new ImgArray(
    "Ronoroa Zoro",
    "Figura Zoro One Piece",
    "/img/stl/zoro-busto.jpg"
  )
);
imgArrayDescargados.push(
  new ImgArray("Naruto Fuko", "Funko Naruto ender3", "/img/stl/narutofunko.png")
);
imgArrayDescargados.push(
  new ImgArray(
    "Nezuko Figura",
    "Figura Nezuko Demon Slayer",
    "/img/stl/nezukoStl.jpg"
  )
);
imgArrayDescargados.push(
  new ImgArray(
    "Rengoku Demon Slayer",
    "Figura Rengoku Demon Slayer",
    "/img/stl/rengoku-demon.jpg"
  )
);
imgArrayDescargados.push(
  new ImgArray(
    "Goku SSJ DBZ",
    "Figura Goku DBZ - Kakarot SSJ",
    "/img/stl/GokuSS.jpeg"
  )
);
imgArrayDescargados.push(
  new ImgArray(
    "Vegeta Funko",
    "Vegeta DBZ Funko Replica ender3",
    "/img/stl/vegeta.jpg"
  )
);

console.log(imgArrayDescargados);

function ImgArray(nombre, description, link) {
  this.nombre = nombre;
  this.description = description;
  this.src = link;
}

let imgArray2 = [];

imgArray2.push(
  new archivosArray2(
    "Black Widow - The Avengers",
    "BlackWidow The Avengers figura",
    "img/stl/blackwidow.jpg"
  )
);
imgArray2.push(
  new archivosArray2(
    "Capitan America - The Avengers",
    "Figura Capitan America The Avergers",
    "img/stl/CaptainAmericaBust.jpg"
  )
);
imgArray2.push(
  new archivosArray2(
    "Arbol Bonsai",
    "Arbol Bonsai Deco",
    "img/stl/Bonsai-Tree-and-Pot.jpg"
  )
);
imgArray2.push(
  new archivosArray2(
    "Soporte Voltorb Pokemon Joystick",
    "Soporte Joystick Voltorb Pokemon 1Gen",
    "img/stl/soporte-control-ps4-Pokemon.jpg"
  )
);
imgArray2.push(
  new archivosArray2(
    "Soporte Joystick Halo",
    "Soporte Joystick Master Chief Halo XBOX",
    "img/stl/soporte-halo.jpg"
  )
);
imgArray2.push(
  new archivosArray2(
    "Ray GhostBusters",
    "Personaje Ray GhostBusters Figura",
    "img/stl/ghostbusters-ray.jpg"
  )
);
imgArray2.push(
  new archivosArray2(
    "Spengler GhostBusters",
    "Personaje Spengler GhostBusters Figura",
    "img/stl/ghostbusters-spengler.jpg"
  )
);
imgArray2.push(
  new archivosArray2(
    "Venkman GhostBusters",
    "Personaje Venkman GhostBusters Figura",
    "img/stl/ghostbusters-venkman.jpg"
  )
);
imgArray2.push(
  new archivosArray2(
    "Zeddmore GhostBusters",
    "Personajes Zeddemore GhostBusters Figura",
    "/img/stl/ghostbusters-zeddemore.jpg"
  )
);

function archivosArray2(nombre, description, src) {
  this.nombre = nombre;
  this.description = description;
  this.src = src;
}

// COMIENZO PRIMER VECTOR //

document.getElementById("title1").innerHTML = imgArrayDescargados[0].nombre;
document.getElementById("description1").innerHTML =
  imgArrayDescargados[0].description;
document.getElementById("mainImage").src = imgArrayDescargados[0].src;

// ------------- FUNCION RECORRER PRIMER VECTOR IMG ---------
function nextImage() {
  let name = document.getElementById("title1");
  for (let i = 0; i < imgArrayDescargados.length; i++) {
    if (imgArrayDescargados[i].nombre == name.innerHTML) {
      if (i === imgArrayDescargados.length - 1) {
        return;
      }
      document.getElementById("title1").innerHTML =
        imgArrayDescargados[i + 1].nombre;
      document.getElementById("description1").innerHTML =
        imgArrayDescargados[i + 1].description;
      document.getElementById("mainImage").src = imgArrayDescargados[i + 1].src;
      return;
    }
  }
}
function previousImage() {
  let name = document.getElementById("title1");
  for (let i = imgArrayDescargados.length - 1; i >= 0; i--) {
    if (imgArrayDescargados[i].nombre == name.innerHTML) {
      if (i === imgArrayDescargados.length + 1) {
        return;
      }
      document.getElementById("mainImage").src = imgArrayDescargados[i - 1].src;
      document.getElementById("title1").innerHTML =
        imgArrayDescargados[i - 1].nombre;
      document.getElementById("description1").innerHTML =
        imgArrayDescargados[i - 1].description;
      return;
    }
  }
}

// ------------- FIN FUNCION RECORRER PRIMER VECTOR IMG ---------

// ------------- FUNCION RECORRER SEGUNDO VECTOR IMG ---------

document.getElementById("title").innerHTML = imgArray2[0].nombre;
document.getElementById("description").innerHTML = imgArray2[0].description;
document.getElementById("mainImage2").src = imgArray2[0].src;

function nextImage2() {
  let name = document.getElementById("title");
  for (let i = 0; i < imgArray2.length; i++) {
    if (imgArray2[i].nombre == name.innerHTML) {
      if (i === imgArray2.length - 1) {
        return;
      }

      document.getElementById("title").innerHTML = imgArray2[i + 1].nombre;
      document.getElementById("description").innerHTML =
        imgArray2[i + 1].description;
      document.getElementById("mainImage2").src = imgArray2[i + 1].src;
      return;
    }
  }
}
function previousImage2() {
  let name = document.getElementById("title");
  for (let i = imgArray2.length - 1; i >= 0; i--) {
    if (imgArray2[i].nombre == name.innerHTML) {
      if (i === imgArray2.length + 1) {
        return;
      }
      document.getElementById("mainImage2").src = imgArray2[i - 1].src;
      document.getElementById("title").innerHTML = imgArray2[i - 1].nombre;
      document.getElementById("description").innerHTML =
        imgArray2[i - 1].description;
      return;
    }
  }
}

// let i = 0;
// function buildImage() {
//   let img = document.createElement("img");
//   img.src = imgArray[i];
//   document.getElementById("box").appendChild(img);
// }

// function changeImage() {
//   let img = document.getElementById("box").getElementsByTagName("img")[0];
//   i++;
//   i = i % imgArray.length; // EN ESTA LINEA DA LA VUELTA, LA ULTIMA PASA A PRIMERA
//   img.src = imgArray[i];

// }
