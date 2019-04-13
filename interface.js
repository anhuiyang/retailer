const loadPage = ()=>{
    let productList = document.getElementById("productList")
    let cartList = document.getElementById("cartList")
    let totalBefore = document.getElementById("totalBefore")
    let voucherIntput = document.getElementById("voucherInput")
    let voucherButton = document.getElementById("voucherButton")
    let totalAfter = document.getElementById("totalAfter")    
    const stock = new Stock
    
    refreshPage = ()=>{
        productList.innerHTML='';
        productList.appendChild(stock.showStock())
        // cartList.innerHTML='';
        // cartList.appendChild(cart.showCart())
    }
}
document.onload = loadPage()