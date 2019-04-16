class Stock{
    constructor(stocks = stockData){
        this.all = []
        stocks.map((stock)=>{
            if(stock.quantity!==0){
                this.all.push(stock)
            }
        })
    }

    showStock = ()=>{
        let ul = document.createElement('ul')
        this.stringStock().map(function(text){
        let li = document.createElement('li')
        li.innerHTML = text
        ul.appendChild(li)
        })
        return ul

    }

    stringStock = (product = Product)=>{
        let output = []
        this.all.map(function(stock){
            let eachProduct = new product(stock.itemId)
            let stockString = eachProduct.stringFormat() + ` Quantity: ${stock.quantity}` + `<button class='product' id=p${stock.itemId}>Add To Cart</button>`
            output.push(stockString)
        })
        return output

    }
    
    decrease = (itemId)=>{
        this.all.forEach((stock)=>{
            if(stock.itemId===itemId){
                stock.quantity-=1
            }
        })
    }

}
