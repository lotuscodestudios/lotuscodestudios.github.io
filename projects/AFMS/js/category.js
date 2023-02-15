


// business booster animation logic
function biz(){
    let fx = document.querySelector(".hoverfx")
    fx.className = "hoverfx"  

    let cat1Heading = document.querySelector(".cat1 h1");
    cat1Heading.style.color = "blue";  

    let catHeading = document.querySelector(".cat h1");
    catHeading.style.color = "white";

    let cat2Heading = document.querySelector(".cat2 h1");
    cat2Heading.style.color = "blue";  
};

// hub animation logic
function hub(){
    let fx = document.querySelector(".hoverfx")
    fx.className = "hoverfx hub";

    let cat1Heading = document.querySelector(".cat1 h1");
    cat1Heading.style.color = "white";  

    let catHeading = document.querySelector(".cat h1");
    catHeading.style.color = "blue";

    let cat2Heading = document.querySelector(".cat2 h1");
    cat2Heading.style.color = "blue";  
};

 // academy animation logic
function acad(){
    let fx = document.querySelector(".hoverfx")
    fx.className = "hoverfx acad";

    let cat2Heading = document.querySelector(".cat2 h1");
    cat2Heading.style.color = "white";  
    
    let catHeading = document.querySelector(".cat h1");
    catHeading.style.color = "blue"

    let cat1Heading = document.querySelector(".cat1 h1");
    cat1Heading.style.color = "blue"  
};


// Dom and events 

let cat = document.querySelector(".cat");
cat.addEventListener("onclick", biz)

let cat1 = document.querySelector(".cat1");
cat1.addEventListener("onclick", hub);

let cat2 = document.querySelector(".cat2");
cat2.addEventListener("onclick", acad);
