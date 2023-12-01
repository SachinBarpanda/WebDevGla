const ele = document.createElement('li');
const ele1 = document.createElement('li');
const ele2 = document.createElement('li');
const ul = document.querySelector('.parent');

ele.innerText = 'Hitman Silent Assasin'
ele1.innerText = 'Clash of Clans'
ele2.innerText = 'Day Z'
ul.appendChild(ele);
ul.appendChild(ele1);
ul.appendChild(ele2);

// ul.removeChild(ele2)
ele2.remove()

// const thisfun = ()=>{
//     console.log("THis fun called");
// }

function thisfun(){
    console.log("THis fun called");
}

const btn1 = document.querySelector('.btn');
// btn1.onclick = function(){
//     console.log("New Function Called");
// }

// btn1.addEventListener('click',function(e){
//     console.log("THis fun called");
//     console.log(e.x);
//     console.log(e.y);
// })

const inpEve = document.querySelector("#name");
inpEve.addEventListener('input',function(e){
    console.log(e.target.value);
})

let form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(e.target[0]);
    console.log(e.target[1]);
    console.log("Form Submitted");
})


