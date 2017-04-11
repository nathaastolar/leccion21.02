var contenedor = document.getElementById("container");
for(var i = 1; i<=12; i++){
  var div = document.createElement("div");
  var imagen = document.createElement("img");
  var span = document.createElement("span");

  div.setAttribute("class","div-img");
  imagen.setAttribute("width","320")
  imagen.setAttribute("class", "img");
  imagen.setAttribute("src", "assets/img/img-" + i + ".jpg");
  span.innerHTML = "Proyecto" + i;
  imagen.setAttribute("id", i);
  div.appendChild(imagen);
  div.appendChild(span);
  contenedor.appendChild(div);
    // div.setAttribute("class","div-img");
}
var modal= document.getElementById("miModal");
// var img1 = document.getElementByid("1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var imagenes = document.getElementsByClassName("img");
  for(var i = 0; i < imagenes.length ; i++){
    imagenes[i].addEventListener("click", mostrar);
  }
  function mostrar(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

var span = document.getElementsByClassName("close")[0];
span.addEventListener("click", spanSpan);
    function spanSpan(){
      modal.style.display = "none";
};
