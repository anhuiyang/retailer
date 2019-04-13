const initialStock = []
const initStock = [
    {itemId: "01", quantity: 5},
    {itemId: "02", quantity: 4},
    {itemId: "03", quantity: 12},
    {itemId: "04", quantity: 6},
    {itemId: "05", quantity: 0},
    {itemId: "06", quantity: 6},
    {itemId: "07", quantity: 5},
    {itemId: "08", quantity: 9},
    {itemId: "09", quantity: 3},
    {itemId: "10", quantity: 2},
    {itemId: "11", quantity: 1},
    {itemId: "12", quantity: 10},
    {itemId: "13", quantity: 5}
]
function origin(){
    initStock.map((stock)=>{
        for(i=0; i<stock.quantity; i++){
            initialStock.push(new Product(stock.itemId))
        }
    })
}
origin()