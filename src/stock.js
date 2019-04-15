class Stock{
    constructor(stocks = stockData){
        this.all = []
        this.initializeStock(stocks)
        this.grouped = []
    }
    initializeStock = (stocks, product = Product)=>{
        stocks.map((stock)=>{
            for(let i=0; i<stock.quantity; i++){
                this.all.push(new product(stock.itemId))
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

    stringStock = ()=>{
        let output = []
        this.all.map(function(product){
            output.push(product.stringFormat())
        })
        return output
    }
    groupStock = ()=>{
        this.all.forEach((product)=>{
            product.itemID
            
        })
    }
    
}
