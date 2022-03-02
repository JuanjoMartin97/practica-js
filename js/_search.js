filterSelection("all")
function filterSelection(c) {
  let x
  let i;
  x = document.getElementsByClassName("box");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// ELEMENTOS FILTRADOS
function w3AddClass(element, name) {
  let i
  let arr1 
  let arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }  
  }
 
}

// SE OCULTAN ELEMENTOS
function w3RemoveClass(element, name) {
  let i
  let arr1 =  element.className.split(" ");
  let arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  
  element.className = arr1.join(" ");
}

// SE AGREGA LA CLASE ACTIVE PARA MOSTRAR LOS ELEMENTOS
let btnContainer = document.getElementById("buttons");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}