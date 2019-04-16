describe(`Total`, ()=>{
    let total;
    beforeEach(()=>{
        total = new Total()
    })

    it(`will initialize with total 0`, ()=>{
        expect(total.before).toBe(0)
    })

    it(`will increase amount and change before`, ()=>{
        total.increase(`01`)
        expect(total.before).toBe(99.00)
    })
})