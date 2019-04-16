describe(`Voucher`, ()=>{
    it(`will validate the voucher`, ()=>{
        let voucher = new Voucher(`5off`, 174.00, [{itemId: `01`, quantity: 1}])
        expect(voucher.discount()).toBe(5)
    })
})