describe(`Cart`, ()=>{
    let cart, cartData = [{itemId: `01`, quantity: 0}]

    it(`can increase in quantity`, ()=>{
        cart = new Cart(cartData)
        cart.increase(`01`)
        expect(cart.all[0].quantity).toBe(1)
    })
})

describe(`Cart`, ()=>{
    let cart, cartData = [{itemId: `01`, quantity: 0}]
    let stringName= `Almond Toe Court Shoes`
    let stringQuantity = `Quantity: 1` 
    it(`can show cart item in array of strings`, ()=>{
        cart = new Cart(cartData)
        cart.increase(`01`)
        expect(cart.stringCart()[0]).toContain(stringName)
        expect(cart.stringCart()[0]).toContain(stringQuantity)
    })
})

describe(`Cart`, ()=>{
    let cart, cartData = [{itemId: `01`, quantity: 0}]
    let stringName= `Almond Toe Court Shoes`
    let stringQuantity = `Quantity: 1` 
    it(`can show cart item in array of strings`, ()=>{
        cart = new Cart(cartData)
        cart.increase(`01`)
        cart.decrease(`01`)
        expect(cart.stringCart()[0]).not.toContain(stringName)
        expect(cart.stringCart()[0]).not.toContain(stringQuantity)
    })
})