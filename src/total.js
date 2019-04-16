class Total{
    constructor(){
        this.before = 0
    }
    increase=(itemId, product = Product)=>{
        let eachProduct = new product(itemId)
        this.before += eachProduct.price
    }
}