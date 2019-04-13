describe(`Stock`, ()=>{
    let stock
    let stockData = [{itemId: "01", quantity: 10}]
    beforeEach(()=>{
        stock = new Stock(stockData)
    })
    it(`will initialize with available stock`, ()=>{
        expect(stock.all.length).toBe(10)
    })
})