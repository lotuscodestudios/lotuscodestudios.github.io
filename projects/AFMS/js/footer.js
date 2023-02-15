// // footer toggle daemon
// function toggleOpen(){ 
//     let footElem = document.querySelector(".link");
//     console.log(footElem.className);

//     if(footElem.className === "link"){
//         footElem.className += " toggleopen";
        
//     }else{
//         footElem.className = "link";
//     };
// }

let link = document.querySelector(".link");
link.addEventListener('onclick', toggleOpen());

function servToggle() {
    // document.querySelector('.serv').classList.toggle("servopen");
}

function compOpen(){
    // document.querySelector(".comp").classList.toggle("compopen");
}