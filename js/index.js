// ITERATION 1

const updateSubtotal = (product) => {
    const price = product.querySelector('.price span').innerHTML;
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
  
   console.log(productList);
 
  
 
   // ITERATION 3
   //... your code goes here
 
   const totalValue = document.querySelector('#total-value span');
   totalValue.innerHTML = total;
 }


// ITERATION 4
const parent = document.querySelector ("#cart");
function removeProduct(event) {
  const target = event.currentTarget;
  console.log(event.currentTarget);
 const borrarLinea = target.parentNode.parentNode;
 const parent = borrarLinea.parentNode;
 parent. removeChild(borrarLinea);

}
// }

// // ITERATION 5

function createProduct() {
  window.addEventListener ('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

});


 const borrarBoton = document.querySelectorAll('.btn-remove');
 borrarBoton.forEach((standars) => (standars.onclick = removeProduct));

}
