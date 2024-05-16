// ¡Buena suerte!

const dice = document.querySelector("img")
const pieceOfAdvice = document.querySelector(".card__quote");
const adviceID = document.querySelector("#advice-id");

    // 1. Al hacer clic en el dado, se debe hacer una petición GET mediante la funcion fetch a la URL adecuada
dice.addEventListener('click', async function(){
    // 2. Obtenemos un consejo nuevo
    const response = await fetch("https://api.adviceslip.com/advice");
    console.log("objeto response: ", response);
    const data = await response.json();
    console.log("objeto data: ", data);
    // 3. Tenemos que actualizar el #ID del consejo y el texto del consejo, en el nodo DOM adecuado.
    pieceOfAdvice.textContent = data.slip.advice; 
    adviceID.textContent = data.slip.id;
});

    