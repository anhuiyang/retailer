class Product{
    constructor(itemID, products = allProducts){
    this.itemID = itemID
    this.matchItem(products)
    this.department;
    this.category;
    this.name;
    this.colour;
    this.price;
    }
    matchItem(products){
        let id = this.itemID
        let matched;
        products.find(function(product){
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
    stringFormat(){
        return `Category: ${this.deptartment} ${this.category} Name: ${this.name} Colour: ${this.colour} Price: ${parseFloat(this.price).toFixed(2)} Quantity: 1`
    }
}