describe(`Total`, ()=>{
    let total;
    beforeEach(()=>{
        total = new Total()
    })

    it(`will initialize with total 0`, ()=>{
        expect(total.before).toBe(0)
    })
})