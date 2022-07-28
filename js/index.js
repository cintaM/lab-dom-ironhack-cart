// ITERATION 1

const updateSubtotal = (product) => {
    const price = product.querySelector('.price span').innerHMTL;
    const quantity = product.querySelector('.quantity input').value;
    const subtotal = Number(price * quantity);
    const subtotalElement = product.querySelector('.subtotal span');
    subtotalElement.innerHTML = subtotal;
    return subtotal;
  //... your code goes here
}

function calculateAll() {
  
   // ITERATION 2
  
   const productList = document.querySelectorAll('.product');

   let total = 0;
   productList.forEach((products) => {
     total += updateSubtotal(products);
   });
   
 
  
 
   // ITERATION 3
   //... your code goes here
 
   const totalValue = document.querySelector('#total-value span');
   totalValue.innerHTML = total;
 }


// ITERATION 4
const parent = document.querySelector ("#cart");
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
 const buttonMultiple = document.querySelectorAll(".btn btn-remove");
 buttonMultiple.forEach((myMultipleButton) => { 
  myMultipleButton.addEventListener("click", () => {
     parent.removeChild(productList);})
 })
}
// }

// // ITERATION 5

// function createProduct() {
//   // ... your code goes here

// }

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // ... your code goes here
});