const ele = document.createElement('li');

const parent = document.querySelector('ol');

ele.innerText = "Sachin"

parent.appendChild(ele);
ele.remove();
