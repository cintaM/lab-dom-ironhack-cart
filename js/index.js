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
console.log(updateSubtotal(price, quantity));
function calculateAll() {
  
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector ('.product');

 updateSubtotal (singleProduct);
    // end of test

  // ITERATION 2
  //... your code goes here
  const productList = document. getElementsByClassName ('create-product');

  let total = 0;
  productList.forEach((singleProduct) => {
    total += updateSubtotal(singleProduct);
  });
 

  // ITERATION 3
  //... your code goes here

  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;
}
console.log(calculateAll())


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const removeBtn2 =document.querySelector ('btn btn-remove');
  removeBtn2.forEach((button) => (button.onclick = removeProduct));
}
console.log(removeProduct())

// ITERATION 5

function createProduct() {
  //... your code goes here
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
}