describe(`Stock`, ()=>{
    let stock, stockData = [{itemId: `01`, quantity: 10}]
    let stringName= `Almond Toe Court Shoes`
        beforeEach(()=>{
        stock = new Stock(stockData)
    })
    it(`will initialize with available stock`, ()=>{
        expect(stock.all.length).toBe(10)
    })
    it(`can show stocks in array of strings`, ()=>{
        expect(stock.stringStock()[0]).toContain(stringName)
    })
})