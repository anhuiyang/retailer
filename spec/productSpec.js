describe(`Product`, ()=>{
    let product;
    beforeEach(()=>{product = new Product(("01")
    )})
    it(`will initialize with itemID state`, ()=>{
        expect(product.itemID).toBe("01")
    })
    it(`will initialize with department state`, ()=>{
        expect(product.department).toBe("Women's")
    })
    it(`will initialize with category state`, ()=>{
        expect(product.category).toBe("Footwear")
    })
    it(`will initialize with name state`, ()=>{
        expect(product.name).toBe("Almond Toe Court Shoes")
    })
    it(`will initialize with colour state`, ()=>{
        expect(product.colour).toBe("Patent Black")
    })
    it(`will initialize with price state`, ()=>{
        expect(product.price).toBe(99.00)
    })
})