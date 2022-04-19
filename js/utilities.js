//---------------- BOTON DESPLAZAMIENTO ----------------\\

//se trae el boton:
let mybutton = document.getElementById("topBtn");

// Cuando el Usuario haga scroll pasando los 1000px aparece el boton
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// // Cuando el usuario clickea en el boton, se dirige a TOP
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // chrome, firefox, ie y opera
}




// ---------------- CONTADOR DE CHECKBOX ------------------\\

// function checkboxes() {
//   let inputs = document.getElementsByTagName("input");
//   let inputObj;
//   let selectedCount = 0;
//   let p = document.getElementById("display");

//   for (let count1 = 0; count1 < inputs.length; count1++) {
//     inputObj = inputs[count1];
//     let type = inputObj.getAttribute("type");
//     ------------ CONDICION Y ACUMULADOR -------------\\
//     if (type == "checkbox" && inputObj.checked) {
//       selectedCount++;
//     }
//   }
//   -----ESTA LINEA HACE QUE SE MUESTRE EN EL INPUT----//
//   document.getElementById("value").value = selectedCount;
//   localStorage.setItem('contadora', selectedCount);
//   ---------------- alertas ---------------------\\
//   if (selectedCount > 0) {
//     Swal.fire({
//       position: 'top-end',
//       title: 'Seleccionaste ',
//       text:    selectedCount + '  archivos',
//       icon:'success'
//     })
//     ---------- SE LE DA AL VALOR DEL PARRAFO LA VARIABLE CONTADORA -------
//     p.textContent = "Cantidad de archivos " + selectedCount;
//   } else {
//     alert("No agregaste ningún archivo");
//     ---------- SE LE DA AL PARRAFO EL VALOR LA VARIABLE CONTADORA -------
//     p.textContent = " No se seleccionó ningún archivo ";
//   }

// }

// function load(){
//   let checked = JSON.parse(localStorage.getItem('chkMarket'));
//   document.getElementById('chkMarket').checked = checked;
//   document.getElementById('value').value = JSON.parse(localStorage.getItem('contadora'));
// }
// function save(){
//   let checkbox = document.getElementById('chkMarket');
//   localStorage.setItem('chkMarket', checkbox.checked);
// }
// function clear(){
//   location.reload();
//   localStorage.clear()
// }

// load();

//--------------------------------------------------------\\

// //===== OCULTAR ELEMENTOS SI LO REQUIERO =====//

// // function showHide() {
// //   let x = document.getElementById("display");
// //   if (x.style.display === "none") {
// //     x.style.display = "block";
// //   } else {
// //
// //   }
// // }
