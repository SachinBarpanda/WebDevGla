// const ele = document.getElementsByTagName('div');

// const ele = document.getElementsByClassName('child');
// console.log(ele);
// console.log(ele[0]);

// const ele = document.getElementById('parent');
// console.log(ele);

// const ele = document.querySelector('div');
// const ele = document.querySelector('.child');
// const ele1 = document.querySelector('#parent');
// console.log(ele);
// console.log(ele1);

// const ele = document.querySelectorAll('.child');
// console.log(ele);
// ele.forEach((items) => {
//     console.log(items);
// });
// ele[0].innerText = 'Akash';

// console.log(ele[1].innerText);
// console.log(ele[1].textContent);
// console.log(ele[1].innerHTML);

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








