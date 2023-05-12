// next slider view
function next_slide(){

    // test
    console.log("next Triggered");

    // select the container
    let nxt = document.querySelector(".service");

    // condition to check for class name 
    if(nxt.className == "service"){
        nxt.className += " nxt";
    }

    // else{
    //      nxt.className = "service";
    // }
}

function prev_slide(){
    console.log("previous Triggered");

    let prv = document.querySelector(".service");

    // condition to check for class name 
    if(prv.className != "service"){
       prv.className = "service";
    }

}


let next_button = document.querySelector(".next");
let prev_button = document.querySelector(".prev");

next_button.addEventListener("onclick", next_slide());
prev_button.addEventListener("onclick", prev_slide());

