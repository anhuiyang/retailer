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
                let cartString = eachProduct.stringFormat() + ` Quantity: ${cart.quantity}` + `<button class='cart' id=p${cart.itemId}>Reduce From Cart</button>`
                output.push(cartString)
            }
        })
        return output
    }

    showCart = ()=>{
        let ul = document.createElement(`ul`)
        this.stringCart().map((text)=>{
            let li = document.createElement(`li`)
            li.innerHTML = text
            ul.appendChild(li)
        })
        return ul
    }
}