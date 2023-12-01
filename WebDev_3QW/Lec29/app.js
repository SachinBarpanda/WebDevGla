

const inp = document.querySelector('input');

const btn = document.querySelector('button')

const ul = document.querySelector('ul');


btn.addEventListener('click',(e)=>{

    let li = document.createElement('li');

    console.log(li);
    console.dir(inp);

    li.innerText = inp.value;
    inp.value = ''
    ul.appendChild(li);


    li.addEventListener('click',function(){
        li.remove();
    })
})

