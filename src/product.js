class Product{
    constructor(itemId, products = productList){
    this.itemId = itemId
    this.matchItem(products)
    this.department;
    this.category;
    this.name;
    this.colour;
    this.price;
    }
    matchItem(products){
        let id = this.itemId
        let matched;
        products.find(function(product){
            if(product.itemId === id){
                matched = product
            }
        })
        this.department = matched.department
        this.category = matched.category
        this.name = matched.name
        this.colour = matched.colour
        this.price = matched.price
    }
    stringFormat(){
        return `Category: ${this.department} ${this.category} | Name: ${this.name} | Colour: ${this.colour} | Price: ${parseFloat(this.price).toFixed(2)}`
    }
}