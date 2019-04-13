describe(`Stock`, ()=>{
    let stock
    let product = [{}]
    beforeEach(()=>{
        stock = new Stock(product)
    })
    it(`will initialize with available stock`, ()=>{
        expect(stock.all.length).toBe(1)
    })
})