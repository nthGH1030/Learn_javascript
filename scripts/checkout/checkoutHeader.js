export function renderCheckoutHeader(cartTotalQuantity){
    const headerHTML =
    `<header> 
    <p>
    Checkout (${cartTotalQuantity} items)
    </p>
    </header>`

    return headerHTML
}