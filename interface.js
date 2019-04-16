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
            var voucher = new Voucher(voucherIntput.value, total.before, cart.all)
            if(voucher.discount()===`invalid input`){
                alert(voucher.discount())
            }else{
                total.apply(voucher.discount())
            }
            voucherIntput, totalAfter.innerHTML = '';
            totalAfter.innerHTML = total.afterString()
        })
    }, 400);
}
document.onload = loadPage()