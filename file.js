const h1 = document.querySelector("h1");
const primerInput = document.querySelector("#input1");
const segundoInput = document.querySelector("#input2");
const p = document.querySelector("#result");
const btn = document.querySelector("#btnCalcular");

/*El addEventListener es un metodo, el cual recibe dos parametros, el primero es el tipo de evento que tiene que escuchar, y el segundo es lo que queremos ejecutar cuando suceda dicho evento, es buena practica hacerlo de esta manera desde el archivo JS, en vez de poner un atributo onClick en el HTML, es mejor dejar lo mas limpio posible el HTML.*/
btn.addEventListener("click", btnOnClick)

function btnOnClick() {
 p.innerHTML=parseInt(primerInput.value ) + parseInt(segundoInput.value)
  
   /*Esta es otra manera mas sencilla de lograr la misma solucion, usando el + en vez de Number() o parseInt(), de esta manera se ahorra un poquito de codigo, lo cual nunca viene mal. El operador plus unario se comporta igual que Number().
   
   p.innerHTML= +(primerInput.value ) + +(segundoInput.value) */
}