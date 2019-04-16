class Cart{
    constructor(cart = cartData){
        this.all = cart
    }

    increase = (itemId)=>{
        this.all.forEach((cart)=>{
            if(cart.itemId===itemId){
                cart.quantity+=1
            }
        })
    }

    stringCart = (product = Product)=>{
        let output = []
        this.all.map((cart)=>{
            if(cart.quantity>0){
                let eachProduct = new product(cart.itemId)
                let cartString = eachProduct.stringFormat() + ` Quantity: ${cart.quantity}` + `<button class='cart' id=p${cart.itemId}>Remove From Cart</button>`
                output.push(cartString)
            }
        })
        return output
    }
}