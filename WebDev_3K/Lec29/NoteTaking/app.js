
let inp = document.querySelector('input');

let ul = document.querySelector('ul');
let btn = document.querySelector('.btn');

btn.addEventListener('click',(e)=>{

    let li = document.createElement('li');

    console.log(li);
    console.dir(inp);

    li.innerText = inp.value;
    inp.value = ''
    ul.appendChild(li);


    li.addEventListener('click',function(){
        li.remove();
    });    
})

