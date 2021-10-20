const SIZES = {
    SMALL: {
        type: 'burger',
        price: 50,
        calories: 20
    },
    LARGE: {
        type: 'burger',
        price: 100,
        calories: 40
    }
}

const STUFFINGS = {
    CHEESE: {
        type: 'stuffing',
        price: 10,
        calories: 20
    },
    SALAD: {
        type: 'stuffing',
        price: 15,
        calories: 5
    },
    POTATO: {
        type: 'stuffing',
        price: 15,
        calories: 10
    },
}

const TOPPINGS = {
    PAPPER: {
        type: 'topping',
        price: 15,
        calories: 0
    },
    MAYONEESE: {
        type: 'topping',
        price: 20,
        calories: 5
    }
}

class Ingridient {
    constructor({ type, price, calories }) { //почему аргументы класса Ingredients заключены в фигурные скобки? 
        this._type = type
        this._price = price
        this._calories = calories
    }

    getPrice() {
        return this._price
    }

    getCal() {
        return this._calories
    }
}


class Hamburger {
    constructor(size, stuffing, topping) {
        this._size = size
        this._stuffing = stuffing
        this._topping = topping
    }
    addTopping(topping) {
        this._toppings.push(topping)
    }

    calculatePrice() {
        return this._size.getPrice() + this._stuffing.getPrice() + this._topping.getPrice();
    }
    calculateCalories() {
        return this._size.getCal() + this._stuffing.getCal() + this._topping.getCal();
    }
}

const myHamburger = new Hamburger(new Ingridient(SIZES.SMALL), new Ingridient(STUFFINGS.POTATO), new Ingridient(TOPPINGS.MAYONEESE));


console.log(myHamburger)
console.log('price: ' + myHamburger.calculatePrice())
console.log('calories: ' + myHamburger.calculateCalories())