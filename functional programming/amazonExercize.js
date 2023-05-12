// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
  }

function initializeCart () {
    let object = { ...user }
    return function () {
        return object
    }
}

function addItemToCart(items, cart) {
    items.forEach(element => {
        cart.push(element) 
    })
}

function addTaxesToList() {
    return function (items, persents) {
        return items.map(function(element) {
            return {name: element, taxes: persents}
        })
    }
}

function buyItem(itemsToPurchase, cartList, purchaseList) {
    const cartMap = new Map()
    cartList.forEach(element => {
        cartMap.set(element.name, element)
    })
    itemsToPurchase.forEach(element => {
        if(cartMap.has(element)) {
            purchaseList.push(cartMap.get(element))
        }
    })
}

function cleanCartList(user) {
    user.cart = []
}

let kimCart = initializeCart()

addItemToCart(['watch', 'meat'], kimCart().cart)

const add3PersentsOfTaxes = addTaxesToList()

kimCart().cart = add3PersentsOfTaxes(kimCart().cart, 3)

buyItem(['watch', 'meat'], kimCart().cart, kimCart().purchases)

cleanCartList(kimCart())




console.log(26, kimCart())

  
  //Implement a cart feature:
  // 1. Add items to cart.
  // 2. Add 3% tax to item in cart
  // 3. Buy item: cart --> purchases
  // 4. Empty cart
  
  //Bonus:
  // accept refunds.
  // Track user history.