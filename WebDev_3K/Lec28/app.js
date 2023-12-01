const ele = document.createElement('li');
const ele1 = document.createElement('li');

const ul = document.querySelector("#parent");

ele.innerText = "Uncharted"
ele1.innerText = "GTA 5"

ul.appendChild(ele);
ul.appendChild(ele1);

// ul.removeChild(ele1);
ele1.remove();

let giveFunction = ()=>{
    // console.log("Givin this function");
}

document.querySelector('.btn').addEventListener('click',(e)=>{
    console.log(e);
    console.log(e.x);
    console.log(e.y);
})


const inpEve = document.querySelector("#name");
inpEve.addEventListener('input',function(e){
    console.log(e.target.value);
})

let form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(form.element[0].value);
    console.log("Form Submitted");
})


