let count = 0;
let countEl= document.querySelector("#count-el");
let saveEl= document.querySelector("#save-el");

function increment(){
    count += 1;
    countEl.textContent = count;
}

function save(){

    let saveStr = count + "- "
    saveEl.textContent += saveStr

    count= 0;
    countEl.textContent = count;
}



