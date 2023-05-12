"use strict"


// food price selection
let foodPrice = document.querySelector(".menu-name-price h4");



//food price extracted here
let intPrice = parseInt(foodPrice.textContent);
// debugger: log intPrice val and type
// console.log(`price: ${intPrice}\nType: ${typeof(intPrice)}`);


// Quantity extraction
let qtyBox = document.querySelector(".qty");



// //Quantity extracted here                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
// let qty = parseInt(qtyBox.innerText);
// // debugger: log qty & price
// console.log(`Quantity: ${qty}\nType: ${typeof(qty)}`);


let addBtn = document.querySelector(".menu-spoon-box-plus");
let minusBtn = document.querySelector(".menu-spoon-box-minus"); 

function increment() {
    //Quantity extracted here                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    let qty = parseInt(qtyBox.innerText)
    
    let shell = qtyBox.textContent = qty + 1;  
    // console.log(qtyBox.textContent );

    // update price with derived quatity
    let newPrice = intPrice * shell ;
    foodPrice.textContent = newPrice;

    //updating cart functions: embed in func and call reusable FIX!! 
    // update food_qty in cart
    cart["food_quantity"] = qty
    // console.log(cart);

    // update food_price in cart
    cart["food_price"] = newPrice
    // console.log(cart);
    // debugger
    console.log(`Food Quantity: ${cart["food_quantity"]}\nFood Price: ${ cart["food_price"]}`);
   

  
    // return shell; 
}

// debugger: log func. return value
// console.log(add());

let cart = {
    "food_quantity": qtyBox.textContent,
    "food_price": foodPrice.textContent,
}


function decrement() {
    //Quantity extracted here                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    let qty = parseInt(qtyBox.innerText)

    if(qty === 1){
        qtyBox.textContent = 1; 
    }

    qtyBox.textContent = qty - 1;  
    // debugger: log text content
    // console.log(qtyBox.textContent );

    // update price with derived quatity
    let newPrice = intPrice * qty ;
    foodPrice.textContent = newPrice;


    //updating cart functions: embed in func and call reusable FIX!! 
    // update food_qty in cart
    cart["food_quantity"] = qty
    // console.log(cart);

    // update food_price in cart
    cart["food_price"] = newPrice
    // console.log(cart);
    // debugger
    console.log(`Food Quantity: ${cart["food_quantity"]}\nFood Price: ${ cart["food_price"]}`);

    // return shell;
}


addBtn.addEventListener("onclick", increment)
minusBtn.addEventListener("onclick", decrement);

 console.log(qtyBox.textContent );

// cart data structure









