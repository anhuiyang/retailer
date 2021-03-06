describe(`Total`, ()=>{
    let total;
    beforeEach(()=>{
        total = new Total()
    })

    it(`will initialize with total 0`, ()=>{
        expect(total.before).toBe(0)
    })
})
describe(`Total`, ()=>{
    let total;
    let beforeString = `<h3>Total before discount: 99.00</h3>`
    beforeEach(()=>{
        total = new Total()
        total.increase(`01`)

    })
    it(`will increase amount and change before`, ()=>{
        expect(total.before).toBe(99.00)
    })

    it(`will return total before string`, ()=>{
        expect(total.beforeString()).toBe(beforeString)
    })
})
describe(`Total`, ()=>{
    let total, afterString = `<h3>Total after discount: 169.00</h3>`

    beforeEach(()=>{
        total = new Total()
    })
    it(`will increase amount and change before`, ()=>{
        total.increase(`01`)
        total.increase(`10`)
        total.decrease(`01`)
        expect(total.before).toBe(75.00)
    })
    it(`can apply voucher showing price before and after`, ()=>{
        total.increase(`01`)
        total.increase(`10`)
        total.apply(5)
        expect(total.before).toBe(174.00)
        expect(total.after).toBe(169.00)
        expect(total.afterString()).toBe(afterString)
    })
})