$(document).ready(function(){
	"use strict";
	$(".icon").on("click",function(){
		$("nav ul").toggleClass("mostrar");
	});
});


$(document).ready(function(){
	"use strict";
	$(".menu2").on("click", function(){
		$(".segundo").toggleClass("ver-2");
	});
});


$(document).ready(function(){
	"use strict";
	$(".menu3").on("click", function(){
		$(".tercero").toggleClass("ver-3");
	});
});
if(document.querySelector('#container-slider')){/* Devuelve el primer elemento del documento (utilizando un recorrido primero en profundidad pre ordenado de los nodos del documento) que coincida con el grupo especificado de selectores. */
    setInterval('fntExecuteSlide("next")',5000);/* funciones setInterval() y setTimeout() comparten la misma pila de IDs, por lo que, técnicamente, los comandos clearInterval() y clearTimeout() pueden usarse indiscriminadamente. Sin embargo, por motivos de claridad y mantenimiento, es importante usarlos como corresponde. */
 }
 //------------------------------ LIST SLIDER -------------------------
 if(document.querySelector('.listslider')){
    let link = document.querySelectorAll(".listslider li a");/* El método querySelectorAll() de un Element devuelve una NodeList estática (no viva) que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados. */
    link.forEach(function(link) { /* El bucle foreach es una estructura especializada en recorrer los elementos que contiene una variable, es por eso que está especialmente indicado para ver o recorrer todos los elementos de un array. */
       link.addEventListener('click', function(e){ /*addEventListener: indicar al agente de usuario que permanezca atento a la interacción de un usuario sobre un elemento en concreto, sin necesidad de tocar un sólo caracter de nuestro marcado.  */
          e.preventDefault(); /* Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo. */
          let item = this.getAttribute('itlist');/* getAttribute() devuelve el valor del atributo especificado en el elemento. Si el atributo especificado no existe, el valor retornado puede ser tanto null como "" (una cadena vacía); ver Notes para más detalles */
          let arrItem = item.split("_");/* El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas. */
          fntExecuteSlide(arrItem[1]);/* pendiente no lo encontre  */
          return false;
       });
     });
 }
 
 function fntExecuteSlide(side){
     let parentTarget = document.getElementById('slider');/* La propiedad target de la interfaz del event.currentTarget es una referencia al objeto en el cual se lanzo el evento.document.getElementById:Devuelve una referencia al elemento por su ID.  */
     let elements = parentTarget.getElementsByTagName('li'); /* Devuelve una lista de elementos con un nombre determinado. Se busca en todo el documento, incluyendo el nodo raíz. */
     let curElement, nextElement;
 
     for(var i=0; i<elements.length;i++){ /* La propiedad length de un objeto que es una instancia de tipo Array establece o devuelve la cantidad de elementos en esa matriz. */
 
         if(elements[i].style.opacity==1){
             curElement = i;
             break;
         }
     }
     if(side == 'prev' || side == 'next'){
 
         if(side=="prev"){
             nextElement = (curElement == 0)?elements.length -1:curElement -1;
         }else{
             nextElement = (curElement == elements.length -1)?0:curElement +1;
         }
     }else{
         nextElement = side;
         side = (curElement > nextElement)?'prev':'next';
 
     }
     //RESALTA LOS PUNTOS
     let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");/* Retorna un objecto similar a un array de los elementos hijos que tengan todos los nombres de clase indicados. Cuando es llamado sobre el objeto document , la busqueda se realiza en todo el document, incluido el nodo raíz. También puedes llamar getElementsByClassName() sobre cualquier elemento; en ese caso retornara sólo los elementos hijos del elemento raíz indicado que contengan los nombres de clase indicados. */
     elementSel[curElement].classList.remove("item-select-slid");
     elementSel[nextElement].classList.add("item-select-slid");
     elements[curElement].style.opacity=0;
     elements[curElement].style.zIndex =0;
     elements[nextElement].style.opacity=1;
     elements[nextElement].style.zIndex =1;
 }
 

var mybutton = document.getElementsById("bttButton");
window.onscroll = function() {scrollFunction();};

function scrollFunction(){
	if(document.body.scrollTop > 20 || document.documentElement.scroll > 20){
        mybutton.style.display = "block";
    }else{
        mybutton.style.display = "none";
    }v
}
