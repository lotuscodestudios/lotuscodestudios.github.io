function toggleanimate() {

  let nav = document.querySelector(".pry-nav");
  let backdrop = document.querySelector(".back-drop");

  // Ham Nav Animation
  if (nav.className === "pry-nav") {
    
    nav.className += " open";
    backdrop.style.display = "block";
  } else {
    nav.className = "pry-nav";
    backdrop.style.display = "none";
  }

  console.log("function activated");
  

//   console.log("hi");
}

// reset backdrop

let screenWidth = window.innerWidth

// if (screenWidth <= 760) {
//   backdrop.style.display = "none";
//   console.log(window.innerWidth);
// };



// let navToggle = document.getElementById("ham");

// let backdrop = document.querySelector(".back-drop");
// backdrop.style.display = "none";

// navToggle.addEventListener('click', toggleanimate);