const loadPage = ()=>{
    let productList = document.getElementById("productList")
    let cartList = document.getElementById("cartList")
    let totalBefore = document.getElementById("totalBefore")
    let voucherIntput = document.getElementById("voucherInput")
    let voucherButton = document.getElementById("voucherButton")
    let totalAfter = document.getElementById("totalAfter")    
    const stock = new Stock()
    refreshPage()
    function refreshPage(){
        productList.innerHTML='';
        productList.appendChild(stock.showStock())
        // cartList.innerHTML='';
        // cartList.appendChild(cart.showCart())
    }
    let pbtn = document.getElementsByClassName('product')
        for(let i=0; i<pbtn.length; i++){
            pbtn[i].addEventListener('click', function(){
                stock.decrease(this.id[1]+this.id[2])
                cart.increase(this.id[1]+this.id[2])
            })
        }
}
document.onload = loadPage()