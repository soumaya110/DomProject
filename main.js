
var plusBtn = Array.from(document.querySelectorAll(".plus-btn"));
var minusBtn = document.querySelectorAll(".minus-btn");

var totalPrice = document.querySelector(".total-price");
var hearts = document.querySelectorAll(".fa-heart");
var removebtns = document.querySelectorAll(".fa-trash-alt");

// total price
function TotalPrice(){
    var qute = document.querySelectorAll(".qute");
    var unitPrice = document.querySelectorAll(".unit-price");
    var sum =0;
    for ( i =0; i<plusBtn.length;i++){
        sum = sum + qute[i].innerText *unitPrice[i].innerText;
        totalPrice.innerText = sum;

    }
    return totalPrice;
    
}

for (let i in plusBtn) {
    plusBtn[i].addEventListener("click", function () {
      plusBtn[i].nextElementSibling.innerText++
      TotalPrice();
    });
     
    minusBtn[i].addEventListener("click", function () {
      if (minusBtn[i].previousElementSibling.innerText > 0) {
        
        minusBtn[i].previousElementSibling.innerText--
        TotalPrice();
       
      }
    });
    
  }
  //heart red black

  for (let heart of hearts) {
    heart.addEventListener("click", function () {
      if (heart.style.color !== "red") {
        heart.style.color = "red";
      } else heart.style.color = "black";
    });
  }

  // remove card 

  for (let removebtn of removebtns) {
    removebtn.addEventListener("click", function(){
        removebtn.parentNode.parentNode.parentNode.remove();
        TotalPrice();
    })
  }