const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
btn.addEventListener ("click", switchStyle);

function switchStyle(){
    h1.dataset.filter = "bat"
}