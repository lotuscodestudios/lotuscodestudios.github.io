function toggleanimate() {

  let toggleAnimate = document.querySelector(".ham-nav");
  let nav = document.querySelector(".pry-nav");
  let backdrop = document.querySelector(".back-drop");

  // Ham Nav Animation
  if (toggleAnimate.className === "ham-nav" || nav.className === "pry-nav") {
    toggleAnimate.className += " active";
    nav.className += " open";
    backdrop.style.display = "block";
  } else {
    toggleAnimate.className = "ham-nav";
    nav.className = "pry-nav";
    backdrop.style.display = "none";
  }


  console.log(window.innerWidth);
}


let backdrop = document.querySelector(".back-drop");
backdrop.style.display = "none";