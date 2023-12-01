// const ele = document.getElementsByTagName('div');
// console.log(ele);
// console.log(ele[0]);
// const ele = document.getElementsByClassName('child');
// console.log(ele);
// console.log(ele[0]);

// const ele = document.getElementById('parent');
// console.log(ele);

// const ele = document.querySelector('#parent');
// const ele1 = document.querySelector('.child');
// const ele11 = document.querySelectorAll('.child');
// const ele2 = document.querySelector('div');

// console.log(ele);
// console.log(ele1);
// console.log(ele2);
// console.log(ele11);
// ele11.forEach((item)=>{
    // console.log(item);
// })

// console.log(ele11[1].textContent);
// console.log(ele11[1].innerHTML);
// console.log(ele11[1].innerText);

ele11[1].innerHTML = "<h1>Lucifer</h1>"
ele11[0].innerText= "<h1>Lucifer</h1>"

const ele = document.querySelectorAll('.child');
// console.log(ele[1].getAttribute('class'));
// console.log(ele[1].setAttribute('class','cl1 cl2'));

// ele[1].classList.add('cl1','cl2');
// ele[1].classList.remove('cl2');
// ele[1].classList.toggle('cl2');
// ele[1].classList.contains('cl2');

const parent = document.querySelector('#parent');
console.log(parent.children);
console.log(parent.children[0]);

const child = document.querySelector('.child');
console.log(child.parentElement);
console.log(child.nextElementSibling);

