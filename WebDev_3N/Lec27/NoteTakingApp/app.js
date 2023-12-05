const inp = document.querySelector('input');

const btn = document.querySelector('button');

const ul = document.querySelector('ul');

btn.addEventListener('click',function(){
    let li = document.createElement('li');
    // console.dir(inp);
    li.innerText = inp.value ;
    inp.value = '';
    ul.appendChild(li);

    // delete

    li.addEventListener('click',function(){
        li.remove();
    })
})

