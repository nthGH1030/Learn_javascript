import {cart, removeFromCart, calculateCartQuantity, UpdateQuantity} from '../data/cart.js';
import {products} from '../data/products.js';
import formatCurrency from './utils/money.js';
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions} from '../data/deliveryOption.js';

let cartSummaryHTML = '';

//handle date
const today = dayjs();

const deliveryDate = today.add(7, 'day');
console.log(deliveryDate.format('dddd, MMMM D'));

//Generate deliverydate

//hello();

cart.forEach((cartItem) => {
    const productId = cartItem.productId;
  
    let matchingProduct;
  
    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });
  
    cartSummaryHTML += `
      <div class="cart-item-container
        js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: Tuesday, June 21
        </div>
  
        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingProduct.image}">
  
          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">
              $${formatCurrency(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary js-update-link"
                data-product-id="${matchingProduct.id}">
                Update
              </span>
              <input class = "quantity-input js-quantity-input-${matchingProduct.id}">
              <span class ="save-quantity-link link-primary"
              data-product-id="${matchingProduct.id}">
              Save
              </span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                Delete
              </span>
            </div>
          </div>
  
          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            ${deliveryOptionHTML(matchingProduct)}
          </div>
        </div>
      </div>
    `;
  });

function deliveryOptionHTML(matchingProduct){
    let html ='';

    deliveryOptions.forEach((deliveryOption)=>{
        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
        const dayString = deliveryDate.format('dddd, MMMM D');
        const priceString = deliveryOption.priceCent 
        === 0 
        ? 'FREE'
        : `$${formatCurrency(deliveryOption.priceCents)} -`;
        html += ` 
            <div class="delivery-option">
            <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
            <div>
                <div class="delivery-option-date">
                ${dayString}
                </div>
                <div class="delivery-option-price">
                ${priceString} Shipping
                </div>
            </div>
            </div>
        `
    });

    return html;
}


document.querySelector('.js-order-summary')
.innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link')
.forEach((link) => {
    link.addEventListener('click', () => {
        
        const productId = link.dataset.productId;
        removeFromCart(productId);
        
        const container = document.querySelector(
            `.js-cart-item-container-${productId}`
        );

        container.remove();
        updateCartQuantity();
 
    })
})


function updateCartQuantity(){

    let cartQuantity = calculateCartQuantity();

    document.querySelector('.js-cart-quantity')
    .innerHTML = `Checkout(${cartQuantity} items)`;

}



document.querySelectorAll('.js-update-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      
      //Get the quantity container and add a class
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
        );
        //the class make the element status change from none -> initial
      container.classList.add('is-editing-quantity');

    });
  });

  
  document.querySelectorAll('.save-quantity-link')
    .forEach((link) => {
        link.addEventListener('click', () => {

            const productId = link.dataset.productId;

            //Get the container and remove a class
            const container = document.querySelector(
            `.js-cart-item-container-${productId}`
            );
            
            //change the class from initial -> none by removing it
            container.classList.remove('is-editing-quantity');

            //Get the quantity in the input field
            const quantityInput = document.querySelector(
                `.js-quantity-input-${productId}`
                );
            
            const newQuantity = Number(quantityInput.value);
            if (newQuantity > 0)
            {
                UpdateQuantity(productId, newQuantity);

                document.querySelector(
                `.js-quantity-label-${productId}`).innerHTML = newQuantity;
            }
            else
            {
                alert('The number is invalid');
            }
  
        });
        const productId = link.dataset.productId;

        //Get the container and remove a class
        const container = document.querySelector(
        `.js-cart-item-container-${productId}`
        );

        const quantityInput = document.querySelector(
            `.js-quantity-input-${productId}`
            );
        quantityInput.addEventListener('keypress', (event) => {

            if (event.key === 'Enter')
            {
                //change the class from initial -> none by removing it
                container.classList.remove('is-editing-quantity');

                const newQuantity = Number(quantityInput.value);
                if (newQuantity > 0)
                {
                    UpdateQuantity(productId, newQuantity);
    
                    document.querySelector(
                    `.js-quantity-label-${productId}`).innerHTML = newQuantity;
                }
                else
                {
                    alert('The number is invalid');
                }
                
            }
        })
    });
    
    
    updateCartQuantity();




