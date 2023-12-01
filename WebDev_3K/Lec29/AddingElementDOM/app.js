// let parent = document.querySelector(".parent");

// let item  = document.createElement("li");
// let item1  = document.createElement("li");

// item.innerText = "Saturday hai class"
// item1.innerText = "Assingment submit "

// parent.appendChild(item);
// parent.appendChild(item1);


let formParent = document.querySelector("#frm");

formParent.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(e);
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    console.log(formParent.elements[0]);
})


