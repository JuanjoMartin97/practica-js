const tagsArchivos = ["Figura", "Juegos", "Soporte", "Marvel", "Mascara"];
const archivos3d = [];

archivos3d.push(
  new Archivos("Wukong", "Figura Wukong", "/img/wukong.jpg", ["Figura", "Marvel"])
);
archivos3d.push(
  new Archivos("Mask", "Mascara Oni", "/img/mask/mask2.png", ["Mascara"])
);
archivos3d.push(
  new Archivos(
    "Soporte Link",
    "Soporte Joystick Link Leyend of Zelda",
    "/img/stl/soporte-control-link.png",
    ["Soporte"]
  )
);
archivos3d.push(
  new Archivos(
    "Venom Marvel",
    "Busto Venom Marvel",
    "/img/venom-body/venom-body.jpg",
    ["Figura", "Marvel"]
  )
);
archivos3d.push(
  new Archivos(
    "Ultron",
    "Ultron Figura Marvel",
    "/img/ultron/ultron2.jpg",
    ["Figura", "Marvel"]
  )
);
archivos3d.push(
  new Archivos(
    "Soporte Joystick ps4",
    "Soporte Joystick The Last Of Us Part ||",
    "/img/stl/soporte-joy-tlou.jpg",
    ["Soporte"]
  )
);
archivos3d.push(
  new Archivos(
    "Bahamut Final Fantasy",
    "Figura Bahamut Final Fantasy Ender3pro",
    "/img/stl/bahamut-final-fantasy.png",
    ["Figura", "Juegos"]
  )
);


function Archivos(nombre, description, link, categoria) {
  this.nombre = nombre;
  this.description = description;
  this.src = link;
  this.categoria = categoria;
}

for (let i in archivos3d) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `<div class="card">
                            <p> Nombre del archivo: ${archivos3d[i].nombre}</p>
                           <br>
                            <img src=${archivos3d[i].src} class = "img"/>
                          <br> 
                          <p> Categorias: ${archivos3d[i].categoria}</p>            
                            <b>  ${archivos3d[i].description}<b/>
                           <br>
                            <button> Agregar a descargas! </button>
                           <button> Quitar! </button>

                            </div> 
                            <br>`;
  document.body.appendChild(contenedor);
}

//ARRAY DE LOS MAS DESCARGADOS//

let imgArray = [];

imgArray[0] = new Image();
imgArray[0].nombre = "Trunks";
imgArray[0].description = "Trunks del futuro";
imgArray[0].src = "img/dbz-trunks/Trunks.jpeg";
imgArray[1] = new Image();
imgArray[1].nombre = "Luffy Gear 4 Figura";
imgArray[1].description = "Figura Luffy One Piece";
imgArray[1].src = "img/stl/LuffyGear4.jpg";
imgArray[2] = new Image();
imgArray[2].nombre = "Goku vs Broly Figura";
imgArray[2].description = "Figura de la pelea Goku Broly, pelicula";
imgArray[2].src = "img/stl/broly-vs-goku-3d-model-stl.jpg";
imgArray[3] = new Image();
imgArray[3].nombre = "Zoro Figura";
imgArray[3].description = "Figura Zoro One Piece ";
imgArray[3].src = "img/stl/zoro-busto.jpg";
imgArray[4] = new Image();
imgArray[4].nombre = "Naruto Fuko";
imgArray[4].description = "Funko Naruto ender3";
imgArray[4].src = "img/stl/narutofunko.png";
imgArray[5] = new Image();
imgArray[5].nombre = "Nezuko Figura";
imgArray[5].description = "Figura Nezuko Demon Slayer";
imgArray[5].src = "img/stl/nezukoStl.jpg";
imgArray[6] = new Image();
imgArray[6].nombre = "Rengoku Demon Slayer";
imgArray[6].description = "Figura Rengoku Demon Slayer";
imgArray[6].src = "img/stl/Rengoku-Demon.jpg";
imgArray[7] = new Image();
imgArray[7].nombre = "Goku SSJ DBZ";
imgArray[7].description = "Figura Goku DBZ - Kakarot SSJ";
imgArray[7].src = "img/stl/GokuSS.jpeg";
imgArray[8] = new Image();
imgArray[8].nombre = "Vegeta Funko";
imgArray[8].description = "Vegeta DBZ Funko Replica ender3";
imgArray[8].src = "img/stl/vegeta.jpg";

let imgArray2 = [];

imgArray2[0] = new Image();
imgArray2[0].nombre = "Black Widow - The Avengers";
imgArray2[0].description = "BlackWidow The Avengers figura";
imgArray2[0].src = "img/stl/blackwidow.jpg";
imgArray2[1] = new Image();
imgArray2[1].nombre = "Capitan America - The Avengers";
imgArray2[1].description = "Figura Capitan America The Avergers";
imgArray2[1].src = "img/stl/CaptainAmericaBust.jpg";
imgArray2[2] = new Image();
imgArray2[2].nombre = "Arbol Bonsai";
imgArray2[2].description = "Arbol Bonsai Deco";
imgArray2[2].src = "img/stl/Bonsai-Tree-and-Pot.jpg";
imgArray2[3] = new Image();
imgArray2[3].nombre = "Soporte Pokemon Joystick";
imgArray2[3].description = "Soporte Joystick Voltorb Pokemon 1Gen";
imgArray2[3].src = "img/stl/soporte-control-ps4-Pokemon.jpg";
imgArray2[4] = new Image();
imgArray2[4].nombre = "Soporte Joystick Halo";
imgArray2[4].description = "Soporte Joystick Master Chief Halo";
imgArray2[4].src = "img/stl/soporte-halo.jpg";
imgArray2[5] = new Image();
imgArray2[5].nombre = "Ray GhostBusters";
imgArray2[5].description = "Personaje Ray GhostBusters Figura";
imgArray2[5].src = "img/stl/ghostbusters-ray.jpg";
imgArray2[6] = new Image();
imgArray2[6].nombre = "Spengler GhostBusters";
imgArray2[6].description = "Personaje Spengler GhostBusters Figura";
imgArray2[6].src = "img/stl/ghostbusters-spengler.jpg";
imgArray2[7] = new Image();
imgArray2[7].nombre = "Venkman GhostBusters ";
imgArray2[7].description = "Personaje Venkman GhostBusters Figura";
imgArray2[7].src = "img/stl/ghostbusters-venkman.jpg";
imgArray2[8] = new Image();
imgArray2[8].nombre = "Zeddemore GhostBusters";
imgArray2[8].description = "Personajes Zeddemore GhostBusters Figura";
imgArray2[8].src = "img/stl/ghostbusters-zeddemore.jpg";
imgArray2[9] = new Image();
imgArray2[9].nombre = "Jason Figura";
imgArray2[9].description = "Figura personaje Jason Friday13";
imgArray2[9].src = "img/stl/jason-bust.png";

document.getElementById("title1").innerHTML = imgArray[0].nombre;
document.getElementById("description1").innerHTML = imgArray[0].description;
document.getElementById("mainImage").src = imgArray[0].src;
// ------------- FUNCION RECORRER PRIMER VECTOR IMG ---------
function nextImage() {
  let img = document.getElementById("mainImage");
  for (let i = 0; i < imgArray.length; i++) {
    if (imgArray[i].src == img.src) {
      if (i === imgArray.length) {
        document.getElementById("mainImage").src = imgArray[0].src;
        document.getElementById("title1").innerHTML = imgArray[0].nombre;
        document.getElementById("description1").innerHTML =
          imgArray[0].description;
        break;
      }
      document.getElementById("mainImage").src = imgArray[i + 1].src;
      document.getElementById("title1").innerHTML = imgArray[i + 1].nombre;
      document.getElementById("description1").innerHTML =
        imgArray[i + 1].description;
      break;
    }
  }
}
function previousImage() {
  let img = document.getElementById("mainImage");
  for (let i = imgArray.length - 1; i >= 0; i--) {
    if (imgArray[i].src == img.src) {
      if (i === imgArray.length) {
        document.getElementById("mainImage").src = imgArray[8].src;
        document.getElementById("title1").innerHTML = imgArray[8].nombre;
        document.getElementById("description1").innerHTML =
          imgArray[8].description;
        break;
      }
      document.getElementById("mainImage").src = imgArray[i - 1].src;
      document.getElementById("title1").innerHTML = imgArray[i - 1].nombre;
      document.getElementById("description1").innerHTML =
        imgArray[i - 1].description;
      break;
    }
  }
}

// ------------- FIN FUNCION RECORRER PRIMER VECTOR IMG ---------

// ------------- FUNCION RECORRER SEGUNDO VECTOR IMG ---------

document.getElementById("title").innerHTML = imgArray2[0].nombre;
document.getElementById("description").innerHTML = imgArray2[0].description;
document.getElementById("mainImage2").src = imgArray2[0].src;

function nextImage2() {
  let img = document.getElementById("mainImage2");
  for (let i = 0; i < imgArray2.length; i++) {
    if (imgArray2[i].src == img.src) {
      if (i === imgArray2.length) {
        document.getElementById("title").innerHTML = imgArray2[0].nombre;
        document.getElementById("description").innerHTML =
          imgArray2[0].description;
        document.getElementById("mainImage2").src = imgArray2[0].src;
        break;
      }
      document.getElementById("title").innerHTML = imgArray2[i + 1].nombre;
      document.getElementById("description").innerHTML =
        imgArray2[i + 1].description;
      document.getElementById("mainImage2").src = imgArray2[i + 1].src;
      break;
    }
  }
}
function previousImage2() {
  let img = document.getElementById("mainImage2");
  for (let i = imgArray2.length - 1; i >= 0; i--) {
    if (imgArray2[i].src == img.src) {
      if (i === imgArray2.length) {
        document.getElementById("title").innerHTML = imgArray2[9].nombre;
        document.getElementById("description").innerHTML =
          imgArray2[9].description;
        document.getElementById("mainImage2").src = imgArray2[9].src;
        break;
      }
      document.getElementById("title").innerHTML = imgArray2[i - 1].nombre;
      document.getElementById("description").innerHTML =
        imgArray2[i - 1].description;
      document.getElementById("mainImage2").src = imgArray2[i - 1].src;
      break;
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
