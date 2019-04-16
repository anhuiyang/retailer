describe(`Cart`, ()=>{
    let cart;
    beforeEach(()=>{
        cart = new Cart()
    })
    it(`can increase in quantity`, ()=>{
        cart.increase(`01`)
        expect(cart.all[0].quantity).toBe(1)
    })
})