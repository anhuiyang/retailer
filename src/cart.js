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
}