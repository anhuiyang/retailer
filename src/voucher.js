class Voucher{
    constructor(code, totalB, cart){
        this.code = code
        this.totalB = totalB
        this.cart = cart
    }
    discount=()=>{
        let total = this.totalB
        let cartNow = this.cart
        switch(this.code){
            case `5off`:
            return 5
            case `10off`:
            if(total>=50){
                console.log(cartNow)
                return 10
            }

        }
    }
}