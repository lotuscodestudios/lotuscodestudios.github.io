
function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}


window.addEventListener('scroll', ()=>{

    let scroll = window.scrollY;
    console.log(typeof((Math.ceil(scroll))));

    let vscroll = scroll + 10;

    console.log(`Scroll: ${scroll}\nVscroll: ${vscroll}`)



    // let menuBody = document.querySelector(".menu-body");
    // xScroll = menuBody.scrollTop;
    // console.log(`XScroll : ${xScroll}`);


    
    let header = document.querySelector(".header");
    let siteId = document.querySelector(".site-id");
    let pryNav = document.querySelector(".pry-nav ");
    // let pryNav = document.querySelector(".pry-nav ");

    let navBar = document.querySelector(".nav-bar")
    console.log(header.className);


    if(header.classNameE === "header" || Math.ceil(vscroll) > 372 ){

        // for header
        header.className = "header blue-header";

        navBar.className = "nav-bar blue-nav-bar";



        // siteId.innerHTML.replace("<img src=\"img/motiv8x logo.svg\"></img>")
        // console.log(siteId.innerHTML);


        // for primary navigation
        pryNav.className = "pry-nav blue-pry-nav"

    }
    
    else{
        header.className = "header";
        pryNav.className  = "pry-nav"
        navBar.className = "nav-bar";
    };





    // if(Math.ceil(scroll) > 372 ){
    //     // alert("This much");
    //     // console.log("here");
    //     document.querySelector(".header").className = "header blue-header";
    //     // disableScrolling();

    //     // if(xScroll === 81){
    //     //     enableScrolling();
    //     // }    


    // }


})