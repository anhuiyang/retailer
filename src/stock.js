class Stock{
    constructor(stocks = stockData){
        this.all = []
        this.initializeStock(stocks)
    }
    initializeStock = (stocks, product = Product)=>{
        stocks.map((stock)=>{
            for(let i=0; i<stock.quantity; i++){
                this.all.push(new product(stock.itemId))
            }
        })
    }

}