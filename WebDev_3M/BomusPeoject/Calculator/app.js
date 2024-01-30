

let saaraElementKaArray = document.querySelectorAll('span')

let parentLine = document.querySelector('.line')
let str='';
parentLine.addEventListener('click',(event)=>{
    
    
    if(event.target.textContent == '='){
        document.querySelector('.output').innerText =eval(str); 
    }else{
        str += ''+event.target.textContent;  
        document.querySelector('.take-output').innerHTML = str;
    }
})

// saaraElementKaArray.addEventListener('click',()=>{
//     console.log("Elements click hue");
// })
