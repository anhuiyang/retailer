const loadPage = ()=>{
    let productList = document.getElementById("productList")
    let cartList = document.getElementById("cartList")
    let totalBefore = document.getElementById("totalBefore")
    let voucherIntput = document.getElementById("voucherInput")
    let voucherButton = document.getElementById("voucherButton")
    let totalAfter = document.getElementById("totalAfter")    
    const stock = new Stock()
    const cart = new Cart()
    const total = new Total()
    const voucher = new voucher()

    setInterval(() => {
        productList.innerHTML='';
        productList.appendChild(stock.showStock())
        cartList.innerHTML='';
        cartList.appendChild(cart.showCart())
        let pbtn = document.getElementsByClassName('product')
        let cbtn = document.getElementsByClassName('cart')
        for(i=0; i<pbtn.length; i++){
            pbtn[i].addEventListener('click', function(){
                stock.decrease(this.id[1]+this.id[2])
                cart.increase(this.id[1]+this.id[2])
                total.increase(this.id[1]+this.id[2])
            })
        }
        for(i=0; i<cbtn.length; i++){
            cbtn[i].addEventListener('click', function(){
                stock.increase(this.id[1]+this.id[2])
                cart.decrease(this.id[1]+this.id[2]) 
                total.decrease(this.id[1]+this.id[2]) 
            })
        }
        totalBefore.innerHTML = '';
        totalBefore.innerHTML = total.beforeString()
        voucherButton.addEventListener('click', function(){
            console.log(cart.all)
            let voucher = new Voucher(voucherIntput, total.before, cart.all)
            total.apply(voucher.discount)
        })
    }, 400);
}
document.onload = loadPage()