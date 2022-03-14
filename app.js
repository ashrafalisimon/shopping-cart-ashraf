function updateProductNumber(product, isIncreasing, price){
    const productInput = document.getElementById(product+'-number');
    let productNumber = productInput.value;
    if(isIncreasing){
        productNumber = parseInt(productNumber) + 1;
    }else if(productNumber>0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
     // update total
    const productTotal = document.getElementById(product+'-total');
    // const productTotalNumber = productTotal.innerText;
    productTotal.innerText = productNumber * price;
    // update total price
    toCalculate();
}
function getInputValue (product){
    const productInput = document.getElementById(product+'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function toCalculate(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal +caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal+tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total-amount').innerText = totalPrice;
}

// handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone',true, 1219);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone',false, 1219 );
});
// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case',true, 59); 
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case',false, 59 );
});