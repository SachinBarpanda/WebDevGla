// const ele = document.getElementsByTagName('div');
// console.log(ele);
// console.log(ele[0]);
// console.log(ele[1]);

// const ele = document.getElementsByClassName('child');
// console.log(ele);
// console.log(ele[0]);
// console.log(ele[1]);

// const ele = document.getElementById('parent');
// console.log(ele);

// const ele = document.querySelector('.child');
const ele = document.querySelectorAll('.child');
// const ele = document.querySelector('#parent');
// ele.forEach((items)=>{
//     console.log(`here is my ${items}`);
// })
// console.log(ele);
// console.log(ele[0]);


// console.log(ele[1].innerText);
// console.log(ele[1].textContent);
// console.log(ele[1].innerHTML);

// ele[1].innerText = '500 Miles'
// ele[1].innerHTML = "<h1>500 Miles </h1>"

// console.log(ele[1].getAttribute('class'));
// console.log(ele[1].setAttribute('class','cl1'));
ele[0].classList.add('cl1')
ele[0].classList.remove('cl1')
ele[0].classList.toggle('cl1')
ele[0].classList.contains('cl1')
