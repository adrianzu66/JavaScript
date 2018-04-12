// variables generales
var numero1;
var numero2;
var operacion;
function zoom(elemento){
  var totalWidth = elemento.width; //.split("%")[0];
  var nuevoWidth = parseInt(totalWidth) - 4;
  elemento.style.width = String(nuevoWidth)+"px";
}
function restauraZomm(elemento){
  var totalWidth = elemento.width; //.split("%")[0];
  var nuevoWidth = parseInt(totalWidth) + 4;
  elemento.style.width = String(nuevoWidth)+"px";
}
function inregesoPantalla(elemento){
  var valorTecla = elemento.id
  var numero = parseInt(elemento.id);
  var elementoPantalla =  document.getElementById("display");
  var numeroActual  = elementoPantalla.innerHTML;
  if (String(numero) != "NaN") {
    if(numeroActual=="0"){
      elementoPantalla.innerHTML = String(numero);
    }
    else{
      if(numeroActual.length <=7){
        elementoPantalla.innerHTML += String(numero);
      }
    }
  }
  if(valorTecla == "punto"){
    if(!numeroActual.includes(".")){
      elementoPantalla.innerHTML += ".";
    }
  }
  if(valorTecla == "on"){
    elementoPantalla.innerHTML = "0";
    numero1=0;
    numero2=0;
    operacion="";
  }
  if(valorTecla == "sign"){
    var valor = parseFloat(elementoPantalla.innerHTML);
    elementoPantalla.innerHTML = String(valor * -1);
  }
  //operaciones
  if(valorTecla =="mas"|| valorTecla =="menos" ||
      valorTecla =="por" || valorTecla =="dividido"){
    if(elementoPantalla.innerHTML != "0"){
      numero1 = parseFloat(elementoPantalla.innerHTML);
      operacion = valorTecla;
      elementoPantalla.innerHTML = "0";
    }
  }
  //operaciones
  if(valorTecla == "igual"){
    numero2 = parseFloat(elementoPantalla.innerHTML);
    if(numero1 != 0){
      if(operacion == "mas"){
        elementoPantalla.innerHTML = String(numero1 + numero2).substr(0,8);
      }
      if(operacion == "menos"){
        elementoPantalla.innerHTML = String(numero1 - numero2).substr(0,8);
      }
      if(operacion == "por"){
        elementoPantalla.innerHTML = String(numero1 * numero2).substr(0,8);
      }
      if(operacion == "dividido"){
        elementoPantalla.innerHTML = String(numero1 / numero2).substr(0,8);
      }
    }
  }

}
// Objeto calculadora
var Calculadora = {
  init:function(){
    this.ingresoTeclas();
  },
  ingresoTeclas: function(){
    var teclas = document.getElementsByClassName("tecla");
    for (var i = 0; i < teclas.length; i++) {
      teclas[i].onmousedown = this.eventoZoom;
      teclas[i].onmouseup = this.eventoRestaurarZoom;
      teclas[i].onclick = this.eventoNumero;
    }
  },
  eventoZoom: function(event){
    zoom(event.target);
  },
  eventoRestaurarZoom: function(event){
    restauraZomm(event.target);
  },
  eventoNumero: function(event){
    inregesoPantalla(event.target)
  }
}
Calculadora.init();
