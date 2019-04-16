class Total{
    constructor(){
        this.before = 0
        this.after = 0
    }
    increase=(itemId, product = Product)=>{
        let eachProduct = new product(itemId)
        this.before += eachProduct.price
    }
    decrease=(itemId, product = Product)=>{
        let eachProduct = new product(itemId)
        this.before -= eachProduct.price
    }
    beforeString=()=>{
        return `<h3>Total before discount: ${parseFloat(this.before).toFixed(2)}</h3>`
    }
    apply=(discount)=>{
        this.after = this.before - discount
    }
}