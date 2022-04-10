// ------- CARRITO ESTATICO ----------\\

const button = document.getElementById("btnCarrito");
const popup = document.querySelector(".modal");
const close = document.querySelector(".btn-close");

button.addEventListener("click", () => {
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  // console.log(e);
  if (e.target.className === "modal") {
    popup.style.display = "none";
  }
});





//------------------------------//

function download() {
  axios({
    url: "https:/source.unsplash.com/random/500x500",
    method: "GET",
    responseType: "blob",
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = link;
    link.setAttribute("download", "image.jpg");
    document.body.appendChild(link);
    link.click();
  });
}

//----------PRACTICA FETCH USUARIOS RANDOM CONSOLA ----------//

const url ='https://randomuser.me/api/'

fetch(url)
.then(response => response.json())
.then(data =>{
console.log(data)
})
.catch(err=>console.log(err))

