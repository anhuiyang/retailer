const loadPage = ()=>{
    let productList = document.getElementById("productList")
    let cartList = document.getElementById("cartList")
    let totalBefore = document.getElementById("totalBefore")
    let voucherIntput = document.getElementById("voucherInput")
    let voucherButton = document.getElementById("voucherButton")
    let totalAfter = document.getElementById("totalAfter")    
    const stock = new Stock()

    setInterval(() => {
        productList.innerHTML='';
        productList.appendChild(stock.showStock())
        let pbtn = document.getElementsByClassName('product')
        for(i=0; i<pbtn.length; i++){
            pbtn[i].addEventListener('click', function(){
                stock.decrease(this.id[1]+this.id[2])
                cart.increase(this.id[1]+this.id[2])
            })
        }
        cartList.innerHTML='';
        cartList.appendChild(cart.showStock())
    }, 400);

    // const cart = new Cart()
    // function refreshPage(){
    //     productList.innerHTML='';
    //     productList.appendChild(stock.showStock())
    //     // cartList.innerHTML='';
    //     // cartList.appendChild(cart.showCart())
    // }
    // refreshPage()

    // let pbtn = document.getElementsByClassName('product')
    // for(let each of pbtn){
    //     console.log(each)
    //     each.addEventListener('click', function(){
    //         console.log(each.id)
    //         stock.decrease(each.id[1]+each.id[2])
    //         productList.innerHTML='';
    //         productList.appendChild(stock.showStock())
    //     })
    // }

        // for(let i=0; i<pbtn.length; i++){
        //     (pbtn[i]).addEventListener = ("click", function(){
        //         stock.decrease(pbtn[i].id[1]+pbtn[i].id[2])
        //         productList.innerHTML='';
        //         productList.appendChild(stock.showStock())
        //     })
            // pbtn[i].addEventListener(`click`, function(){
            //     stock.decrease(pbtn[i].id[1]+pbtn[i].id[2])
            //     // cart.increase(this.id[1]+this.id[2])
            // })
            
        // }
}
document.onload = loadPage()