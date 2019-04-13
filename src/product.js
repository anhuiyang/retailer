class Product{
    constructor(itemID){
    this.itemID = itemID
    this.matchItem()
    this.department;
    this.category;
    this.name;
    this.colour;
    this.price;
    }
    matchItem(){
        let id = this.itemID
        let matched;
        allProducts.find(function(product){
            if(product.id === id){
                matched = product
            }
        })
        this.department = matched.department
        this.category = matched.category
        this.name = matched.name
        this.colour = matched.colour
        this.price = matched.price
    }
}