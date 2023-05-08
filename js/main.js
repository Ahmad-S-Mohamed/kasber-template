
// ! links bar

let myElementMenue = document.querySelector(".menue");
let myElementList = document.querySelector("ul");



// document.addEventListener('click', function(event){
//     let isClickInside = myElementMenue.contains(event.target);
//     if(window.fa-mobile-screen){
//         myElementList.style.display= 'none'
//         myElementMenue.style.display= 'bloke'
//     }if(isClickInside)
//     myElementList.style.display = "flex";
//         myElementList.style.cssText=
//         'flex-direction: column;position: absolute;left: 10px; top:100px;width: 100%;background-color: #0402026b;'
//     }
    
// )

// !SCroll
let bttnScrol = document.querySelector('.scroll')

window.onscroll=(function(){
    if(window.scrollY >= 400){
        bttnScrol.style.display = 'block'
    }else{
        bttnScrol.style.display = "none";
    }
})

bttnScrol.addEventListener('click',function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    })
})
















