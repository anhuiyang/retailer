describe(`Stock`, ()=>{
    let stock, stockData = [{itemId: `01`, quantity: 10}]
    let stringName= `Almond Toe Court Shoes`

    it(`will initialize with available stock`, ()=>{
        stock = new Stock(stockData)
        expect(stock.all.length).toBe(1)
    })
    it(`can show stocks in array of strings`, ()=>{
        stock = new Stock(stockData)
        expect(stock.stringStock()[0]).toContain(stringName)
    })
    it(`can decrease a stock`, ()=>{
        stock = new Stock(stockData)
        stock.decrease(`01`)
        expect(stock.all[0].quantity).toBe(9)
    })
    it(`can increase a stock`, ()=>{
        stock = new Stock(stockData)
        stock.increase(`01`)
        expect(stock.all[0].quantity).toBe(10)
    })
})