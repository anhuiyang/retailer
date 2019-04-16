describe(`Voucher`, ()=>{
    it(`will validate the voucher`, ()=>{
        let voucher = new Voucher(`5off`, 99.00, [{itemId: `01`, quantity: 1}])
        expect(voucher.discount()).toBe(5)
    })
    it(`will validate the voucher`, ()=>{
        let voucher = new Voucher(`10off`, 99.00, [{itemId: `01`, quantity: 1}])
        expect(voucher.discount()).toBe(10)
    })
})