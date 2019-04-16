describe(`Voucher`, ()=>{
    it(`will validate the 5off voucher`, ()=>{
        let voucher = new Voucher(`5off`, 99.00, [{itemId: `01`, quantity: 1}])
        expect(voucher.discount()).toBe(5)
    })
    it(`will validate the 10off voucher`, ()=>{
        let voucher = new Voucher(`10off`, 99.00, [{itemId: `01`, quantity: 1}])
        expect(voucher.discount()).toBe(10)
    })
    it(`will validate the 15off voucher`, ()=>{
        let voucher = new Voucher(`15off`, 99.00, [{itemId: `01`, quantity: 1}])
        expect(voucher.discount()).toBe(15)
    })
    it(`will validate the 15off voucher`, ()=>{
            let voucher = new Voucher(`15Off`, 99.00, [{itemId: `01`, quantity: 1}])
            expect(voucher.discount()).toBe("invalid input");
    })
})