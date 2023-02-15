// function toggle(){
//     let testText = document.querySelector(".test-text");
//     console.log(testText.className);
//     if(testText.className === "test-text"){
//         testText.className += " open"

//     }else{
//         testText.className = "test-text";
//     };
// }

// let testText = document.querySelector(".test-toggle");
// testText.addEventListener('click', toggle);

function linkToggle() {
  document.querySelector(".link").classList.toggle("toggleopen");
  console.log(document.querySelector(".link").className);
}

function backDropToggle() {
  document.querySelector(".back-drop").classList.toggle("toggleopen");
}

function testToggle() {
  document.querySelector(".test-text").classList.toggle("test-text-open");
  console.log(document.querySelector(".link").className);
}


let testText = document.querySelector(".test-toggle");
testText.addEventListener('click', testToggle);