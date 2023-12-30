// console.log("welcome to javascript");

// document.getElementsByClassName('bx-heart')[0].addEventListner("click", function(){
//     this.style.color = "red";
// });

// var wishlist_button = document.querySelectorAll('.wishlistbtn');

// Array.from(wishlist_button).forEach(function(element){
//     element.addEventListener("click", function(){
//         if(this.style.color=="red")
//             this.style.color = "black";
//         else
//             this.style.color = "red";
//         wishlist_additem();
//     });
// });

let wishlist = [];

    const products = document.getElementsByClassName('wishlistbtn');
    Array.from(products).forEach(function(ele){
        ele.addEventListener("click", function(ele){
            if(this.style.color=="red")
            this.style.color = "black";
        else{
            this.style.color = "red";
            addItem(this);
        }
        });
    });

function addItem(ele)
{
    const productId = ele.getAttribute('id');
    const productDiv = document.getElementById("item" + productId);


    const wishDiv = document.createElement("div");
    wishDiv.setAttribute("id", "wish" + productId);
    wishDiv.setAttribute("class", "wishProduct");
    wishDiv.innerHTML = productDiv.innerHTML;

    const removeBtn = document.createElement("input");
    removeBtn.setAttribute("type", "button");
    removeBtn.setAttribute("value", "Remove");
    removeBtn.onclick = function() {removeItem(productId)};
    wishDiv.appendChild(removeBtn);
    console.log(wishDiv);

    setItem(wishDiv);
}

function setItem(wishDiv)
{
    let wishContainer = document.getElementById('WC-container');
        wishContainer.appendChild(wishDiv);
}

function removeItem(prodictId)
{

}
// window.addEventListener('load', setup);