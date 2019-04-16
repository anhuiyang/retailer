class Voucher{
    constructor(code, totalB, cart){
        this.code = code
        this.totalB = totalB
        this.cart = cart
    }
    discount=()=>{
        let total = this.totalB
        let cartFoot = this.footwear()
        switch(this.code){
            case `5off`:
            return 5
            case `10off`:
            if(total>=50){
                return 10
            }
            case `15off`:
            if(total>=75&&cartFoot){
                return 15
            }
        }
    }
    footwear=()=>{
        let result;
        this.cart.forEach((cartItem)=>{
            let eachProduct = new Product(cartItem.itemId)
            if(eachProduct.category===`Footwear`){
                result = true
            }else{
                result = false
            }
        })
        return result
    }
}