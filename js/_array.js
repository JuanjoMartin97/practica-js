
let nameArray = [ "trunks", "Luffy Gear 4", "Broly vs Goku figure", "Zoro Figure", "Naruto Funko", "Nezuko Demon Slayer ", "Rengoku Demon Slayer", "Goku SSJ Figure", "Vegeta DBZ Funko" ]

let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'img/dbz-trunks/Trunks.jpeg';

imgArray[1] = new Image();
imgArray[1].src = 'img/stl/LuffyGear4.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'img/stl/broly-vs-goku-3d-model-stl.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'img/stl/zoro-busto.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'img/stl/narutofunko.png';

imgArray[5] = new Image();
imgArray[5].src = 'img/stl/nezukoStl.jpg';

imgArray[6] = new Image();
imgArray[6].src = 'img/stl/Rengoku-Demon.jpg';

imgArray[7] = new Image();
imgArray[7].src = 'img/stl/GokuSS.jpeg';


imgArray[8] = new Image();
imgArray[8].src = 'img/stl/vegeta.jpg';



function nextImage(){

  let img = document.getElementById("mainImage");
  for(let i = 0; i < imgArray.length;i++){
      if(imgArray[i].src == img.src){
          if(i === imgArray.length){
              document
              
              
          }
           document.getElementById("mainImage").src = imgArray[i+1].src;
              break;        
      }
    }}

    document.getElementById("name").innerText = nameArray[0]
  
function previousImage(){ 
  let img = document.getElementById("mainImage");
  for(let i = imgArray.length-1; i >=0 ;i--){
      if(imgArray[i].src == img.src){
          if(i === imgArray.length){
              document.getElementById("mainImage").src = imgArray[8].src;;
              break;     
          }
          document.getElementById("mainImage").src = imgArray[i-1].src;
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
