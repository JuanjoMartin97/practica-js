//arrays con los archivos utilizados para las cards//
const tagsArchivos = [
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

archivos3d.push(
  new Archivos("1", "Wukong", "Figura Wukong", "/img/wukong.jpg", [
    "Figura",
    " Marvel",
  ])
);
archivos3d.push(
  new Archivos("2", "Mask", "Mascara Oni", "/img/mask/mask2.png", ["Mascara"])
);
archivos3d.push(
  new Archivos(
    "3",
    "Soporte Link",
    "Soporte Joystick Link Leyend of Zelda",
    "/img/stl/soporte-control-link.png",
    ["Soporte", " Joystick"]
  )
);
archivos3d.push(
  new Archivos(
    "4",
    "Venom Marvel",
    "Busto Venom Marvel",
    "/img/venom-body/venom-body.jpg",
    ["Figura", " Marvel"]
  )
);
archivos3d.push(
  new Archivos(
    "5",
    "Ultron",
    "Ultron Figura Marvel",
    "/img/ultron/ultron2.jpg",
    ["Figura", " Marvel"]
  )
);
archivos3d.push(
  new Archivos(
    "6",
    "Soporte Joystick ps4",
    "Soporte Joystick The Last Of Us Part ||",
    "/img/stl/soporte-joy-tlou.jpg",
    ["Soporte", " Joystick"]
  )
);
archivos3d.push(
  new Archivos(
    "7",
    "Bahamut Final Fantasy",
    "Figura Bahamut Final Fantasy Ender3pro",
    "/img/stl/bahamut-final-fantasy.png",
    ["Figura", " Juegos"]
  )
);

//ARRAY DE LOS MAS DESCARGADOS//
// COMIENZO PRIMER ARRAY //

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
    "/img/stl/ghostbusters-zeddemore.jpg"
  )
);

// creamos los elementos del html y treamos los elementos del array//

const contenedor = document.querySelector("#contenedor");
const template = document.querySelector("#templateCard").content;
const fragment = document.createDocumentFragment();

archivos3d.forEach((item) => {
  template.querySelector("h2").textContent = item.nombre;
  template.querySelector("h3").textContent = item.id;
  template.querySelector("img").src = item.src;
  template.querySelector("p").textContent = item.description;
  template.querySelector("b").textContent = item.categoria;
  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});
contenedor.appendChild(fragment);

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

//UTILIZO EL POPUP COMO CARRITO----------------

const botonesCarrito = document.querySelectorAll(".btnCard");
botonesCarrito.forEach((botonesCarrito) => {
  botonesCarrito.addEventListener("click", botonesCarritoClicked);
});

function botonesCarritoClicked(e) {
  const btnAddCart = e.target;
  const item = btnAddCart.closest(".card");
  const itemNombre = item.querySelector(".card-title").textContent;
  const itemImg = item.querySelector(".imgCard").src;
  btnAddCart.disabled = true;
  btnAddCart.classList.add("btn-danger");
  itemsCarrito(itemNombre, itemImg);
  //se toma el boton
  const element = document.getElementById("btnVaciar");
  //se clickea el boton y se ejecuta...
  element.addEventListener("click", () => {
    vaciarCarrito();
    const btnAddCart = e.target;
    btnAddCart.disabled = false;
    btnAddCart.classList.remove("btn-danger");
  });
  btnDisabled.disabled = false;
}

function itemsCarrito(itemNombre, itemImg) {
  let contentedorPopup = document.createElement("ul");
  contentedorPopup.classList.add("ulListCart");
  let img = document.createElement("img");
  img.classList.add("img-items");
  let elementoLista = document.createElement("li");
  elementoLista.innerHTML = itemNombre;
  img.src = itemImg;
  contentedorPopup.appendChild(elementoLista);
  contentedorPopup.appendChild(img);
  document.getElementById("containerPopu").appendChild(contentedorPopup);
}

//eliminamos los elementos pintados en el carrito
const btnDisabled = document.getElementById("btnCarrito");
function vaciarCarrito() {
  let contenedorCarrito = document.getElementById("containerPopu");
  let child = contenedorCarrito.lastElementChild;
  let mostrarItems = document.getElementById("cantItem");
  while (child) {
    contenedorCarrito.removeChild(child);
    child = contenedorCarrito.lastElementChild;
  }
  mostrarItems.value = "Sin Items";
  items = 0;
  btnDisabled.disabled = true;
}

//--------------- ALERTA BOTONES -----------------------//
//---------- FUNCION BOTONES -----------//

const allbtn = document.querySelectorAll(".btnCard");
for (const buttons of allbtn) {
  console.log(allbtn);
  buttons.addEventListener("click", function (event) {
    Swal.fire({
      title: "Agregaste el archivo ",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "",
      backdrop: `
      rgba(0,0,123,0.4)
      url("/img/print3d.gif")
      center top
      no-repeat
      `,
    });
  });
}

let mostrarItems = document.getElementById("cantItem");
let items = 0;
function contItems() {
  items += 1;
  //---------------- alertas ---------------------\\
  if (items > 0) {
    //---------- SE LE ASIGNA AL INPUT LA VARIABLE ACUM-------
    mostrarItems.value = "Cantidad de archivos " + items;
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
