# A Clothing Retailer Web Page
A responsive web page for a clothing retailer

## Description
A single page application in Vanilla JavaScript fully TDD   
With a index.html page as user interface, a interface.js to control content in index, 5 classes

## Tech Stack
[Javscript]  
[Jasmine]

## Getting Started
1. Clone this repo `git clone git@github.com:anhuiyang/retailer.git`
2. Change directory  `cd retailer`
3. Run bundle install dependencies `npm install`
4. Run the test `open specRunner.html`
5. Open index page `open index.html`


You'll see:
![index](https://github.com/anhuiyang/retailer/blob/master/img/Screenshot%202019-04-16%20at%205.28.39%20pm.png?raw=true)


## Requirement
```
1. As a User I can add a product to my shopping cart.
2. As a User I can remove a product from my shopping cart.
3. As a User I can view the total price for the products in my shopping cart.
4. As a User I can apply a voucher to my shopping cart.
5. As a User I can view the total price for the products in my shopping cart with discounts applied.
6. As a User I am alerted when I apply an invalid voucher to my shopping cart.
7. As a User I am unable to Out of Stock products to the shopping cart.
```
Raw Data:
![rawData](https://github.com/anhuiyang/retailer/blob/master/img/Screenshot%202019-04-16%20at%205.32.29%20pm.png?raw=true)


## Approach
Raw Data above was sorted into this table:
![products](https://github.com/anhuiyang/retailer/blob/master/img/Screenshot%202019-04-16%20at%205.25.02%20pm.png?raw=true)

I started off a design structure of index then interface page to control the content showing there.
Following the user story to add functionality to interface and test driven to implement each class and functions along the way.
It's working alright at the moment
But with more time, I would like to
1. add a new productlist class which can seperate the concern 
2. stop invalid voucher code alert from popping up non-stop
3. use react.js instead of vanilla javascript
