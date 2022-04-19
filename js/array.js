//arrays con los archivos utilizados para las cards//

const tagsArchivos = [
  "Anime",
  "Figura",
  "Juegos",
  "Soporte",
  "Marvel",
  "Mascara",
  "Joystick",
];
function ImgArray(nombre, description, link) {
  this.nombre = nombre;
  this.description = description;
  this.src = link;
}
function Archivos(id, nombre, description, link, categoria) {
  this.id = id;
  this.nombre = nombre;
  this.description = description;
  this.src = link;
  this.categoria = categoria;
}
function archivosArray2(nombre, description, src) {
  this.nombre = nombre;
  this.description = description;
  this.src = src;
}

const archivos3d = [];
let arrayCarrito = [];
load();
archivos3d.push(
  new Archivos(
    "1",
    "Jiraiya",
    "Figura Jiraiya Naruto-Sensei",
    "img/stl/jiraiya.jpg",
    ["Figura", " Anime"]
  )
);
archivos3d.push(
  new Archivos("2", "Mask", "Mascara Oni", "img/stl/mask2.png", ["Mascara"])
);
archivos3d.push(
  new Archivos(
    "3",
    "Soporte Link",
    "Soporte Joystick Link Leyend of Zelda",
    "img/stl/soporte-control-link.png",
    ["Soporte", " Joystick"]
  )
);
archivos3d.push(
  new Archivos(
    "4",
    "Venom Marvel",
    "Busto Venom Marvel",
    "img/stl/venom-body.jpg",
    ["Figura", " Marvel"]
  )
);
archivos3d.push(
  new Archivos("5", "Ultron", "Ultron Figura Marvel", "img/stl/ultron2.jpg", [
    "Figura",
    " Marvel",
  ])
);
archivos3d.push(
  new Archivos(
    "6",
    "Soporte Joystick",
    "Soporte Joystick The Last Of Us Part ||",
    "img/stl/soporte-joy-tlou.jpg",
    ["Soporte", " Joystick"]
  )
);
archivos3d.push(
  new Archivos(
    "7",
    "Bahamut Final Fantasy",
    "Figura Bahamut Final Fantasy Ender3pro",
    "img/stl/bahamut-final-fantasy.png",
    ["Figura", " Juegos"]
  )
);

//ARRAY DE LOS MAS DESCARGADOS//
// COMIENZO PRIMER ARRAY //

const imgArrayDescargados = [];

imgArrayDescargados.push(
  new ImgArray("Demonio Samurai", "Samurai Akuma", "img/stl/samurai.jpg")
);
imgArrayDescargados.push(
  new ImgArray(
    "Luffy Gear 4",
    "Figura Luffy One Piece",
    "img/stl/LuffyGear4.jpg"
  )
);
imgArrayDescargados.push(
  new ImgArray(
    "Goku vs Broly",
    "Figura de la pelea Goku Broly pelicula",
    "img/stl/broly-vs-goku-3d-model-stl.jpg"
  )
);
imgArrayDescargados.push(
  new ImgArray(
    "Ronoroa Zoro",
    "Figura Zoro One Piece",
    "img/stl/zoro-busto.jpg"
  )
);
imgArrayDescargados.push(
  new ImgArray("Naruto Fuko", "Funko Naruto ender3", "img/stl/narutofunko.png")
);
imgArrayDescargados.push(
  new ImgArray(
    "Nezuko Figura",
    "Figura Nezuko Demon Slayer",
    "img/stl/nezukoStl.jpg"
  )
);
imgArrayDescargados.push(
  new ImgArray(
    "Rengoku Demon Slayer",
    "Figura Rengoku Demon Slayer",
    "img/stl/rengoku.jpg"
  )
);
imgArrayDescargados.push(
  new ImgArray(
    "Goku SSJ DBZ",
    "Figura Goku DBZ - Kakarot SSJ",
    "img/stl/GokuSS.jpeg"
  )
);
imgArrayDescargados.push(
  new ImgArray(
    "Vegeta Funko",
    "Vegeta DBZ Funko Replica ender3",
    "img/stl/vegeta.jpg"
  )
);

// COMIENZO SEGUNDO ARRAY //

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
    "img/stl/ghostbusters-zeddemore.jpg"
  )
);

//se crean los elementos del array
let arrRead = document.getElementById("arrayRead");

function readArr() {
  let arrRead = document.getElementById("arrayRead");
  let child = arrRead.lastElementChild;
  while (child) {
    arrRead.removeChild(child);
    child = arrRead.lastElementChild;
  }
  let div = document.createElement("div");
  div.classList.add("row");
  //se pintan los elementos del array en el HTML
  archivos3d.forEach((item) => {
    let archivoEncontrado = arrayCarrito.find(
      (element) => element.id === item.id
    );
    //se crean los elementos de las cards
    let divContainer = document.createElement("div");
    divContainer.classList.add("col-3", "card", "m-2");
    divContainer.style.width = "30%";
    divContainer.style.alignItems = "center";
    let fileName = document.createElement("h2");
    let fileDescription = document.createElement("p");
    let fileCategoria = document.createElement("p");
    let fileImg = document.createElement("img");
    let fileButton = document.createElement("button");
    fileButton.style.width = "50%";
    fileName.innerHTML = item.nombre;
    fileName.classList.add("card-title");
    fileDescription.innerHTML = item.description;
    fileDescription.classList.add("cardDescription");
    fileDescription.style.color = "blackgi";
    fileCategoria.innerHTML = item.categoria;
    fileCategoria.style.color = "black";
    fileImg.src = item.src;
    fileImg.style.width = "350px";
    fileImg.style.height = "300px";
    fileImg.classList.add("card-img-top");
    fileButton.innerHTML = archivoEncontrado ? "AGREGADO" : " AGREGAR ";
    fileButton.setAttribute("id", item.id);
    fileButton.addEventListener("click", () => {
      botonAgregarAlCarrito(item);
    });
    fileButton.disabled = archivoEncontrado;
    if (archivoEncontrado) {
      fileButton.classList.add("btn", "btn-danger");
    } else {
      fileButton.classList.add("btn", "btn-primary");
    }
    divContainer.appendChild(fileName);
    divContainer.appendChild(fileCategoria);
    divContainer.appendChild(fileImg);
    divContainer.appendChild(fileDescription);
    divContainer.appendChild(fileButton);
    div.appendChild(divContainer);
  });
  arrRead.appendChild(div);
}
readArr();

//----------------------------------------------//

document.getElementById("title1").innerHTML = imgArrayDescargados[0].nombre;
document.getElementById("description1").innerHTML =
  imgArrayDescargados[0].description;
document.getElementById("mainImage").src = imgArrayDescargados[0].src;

// ------------- FUNCION RECORRER PRIMER ARRAY IMG ---------
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

//agrega un item al carrito y se ejecuta una alerta
function botonAgregarAlCarrito(item) {
  arrayCarrito.push(item);
  pintarCarrito();
  Swal.fire({
    title: "Agregaste el archivo --- " + item.nombre,
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "",
    backdrop: `
      rgba(0,0,123,0.4)
      url("img/print3d.gif")
      center top
      no-repeat
      `,
  });
}

//se pintan los elementos del nuevo array en el popup - del carrito
function pintarCarrito() {
  readArr();
  //no se pinta los demas elementos
  let contenedorCarrito = document.getElementById("containerPopu");
  let child = contenedorCarrito.lastElementChild;
  while (child) {
    contenedorCarrito.removeChild(child);
    child = contenedorCarrito.lastElementChild;
  }
  //recorre el array arrayCarrito y se pinta
  for (let index = 0; index < arrayCarrito.length; index++) {
    const element = arrayCarrito[index];
    let contentedorPopup = document.createElement("ul");
    contentedorPopup.classList.add("ulListCart");
    let img = document.createElement("img");
    img.classList.add("img-items");
    let elementoLista = document.createElement("li");
    let btnClear = document.createElement("button");
    btnClear.setAttribute("id", "btnEliminar");
    btnClear.classList.add("btn", "btn-danger", "buttonDelete");
    btnClear.innerHTML = "Eliminar Archivo";
    btnClear.addEventListener("click", () => {
      eliminarItemCarrito(element.id);
    });
    elementoLista.innerHTML = element.nombre;
    img.src = element.src;

    contentedorPopup.appendChild(elementoLista);
    contentedorPopup.appendChild(img);
    contentedorPopup.appendChild(btnClear);
    document.getElementById("containerPopu").appendChild(contentedorPopup);
  }

  //se muestran los archivos del carrrito
  let mostrarItems = document.getElementById("cantItem");
  let items = arrayCarrito.length;
  let btnDescarga = document.getElementById("btnDownload");
  mostrarItems.value = "Cantidad de Archivos " + items;
  if (arrayCarrito.length < 1) {
    mostrarItems.value = "Sin Items";
    btnDescarga.disabled = true;
  } else {
    btnDescarga.disabled = false;
  }
  //llamo guardar en el localstorage
  save();
}

//eliminamos un item del carrito
function eliminarItemCarrito(id) {
  const arrayItems = arrayCarrito.filter((item) => item.id !== id);
  arrayCarrito = arrayItems;
  pintarCarrito();
}
//funcion para cargar items del localstorage
function load() {
  let itemsArray = JSON.parse(localStorage.getItem("itemsCarrito"));
  if (itemsArray) {
    arrayCarrito = itemsArray;
    pintarCarrito();
  }
}
//funcion para guardar items en el localstorage
function save() {
  if (arrayCarrito.length > 0) {
    localStorage.setItem("itemsCarrito", JSON.stringify(arrayCarrito));
  } else {
    localStorage.removeItem("itemsCarrito");
  }
}
