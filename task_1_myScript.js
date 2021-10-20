//создаем класс (образец) для единиц товаров, добавляем в него метод отрисовки.

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"<h1>${this.title}</h1><p>${this.price}</p></div>`
    }
}

//создаем класс для списка 
class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 100 },
            { title: 'Socks', price: 500 },
            { title: 'Jacket', price: 300 },
            { title: 'Shoes', price: 150 },
        ]
    }
    render() {
        let listHtml = "";
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    sumGoods() {
        let sumHtml = "";
        var sum = 0;
        this.goods.forEach(good => {
            var goodItem = new GoodsItem(good.title, good.price);
            var prezzo = good.price;
            console.log(prezzo)
            sum += prezzo;
            //   sumHtml = sum;
            console.log(sum);
            // sumHtml = document.createTextNode("Sum " + sum);
        }

        );

        document.createTextNode("" + sum);
        document.getElementsByClassName("sum")[0].textContent = "Стоимость всех товаров в каталоге составляет: " + sum + "\u20bd";

        //sumHtml = document.createTextNode("Sum " + sum);
        //var sumHtml = sum.cre
        //document.querySelector('.sum').innerText = sumHtml;

    }

}

//создаем класс для элемента корзины  - отложенного в нее товара 

class CartItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="cart-item"<h1>${this.title}</h1><p>${this.price}</p></div>`
    }
    //добавляем метод для удаления товара из корзины
    removeCartItem() { }
}

//создаем класс для списка товаров, находящихся в корзине
class CartList {
    constructor() {
        this.goods = [];
    }

    //рисуем список отложенных в корзину товаров
    render() {
        let listHtml = "";
        this.goods.forEach(good => {
            const goodItem = new CartItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    //считаем сумму товаров в корзине
    sumCartGoods() {
        let sumHtml = "";
        var sum = 0;
        this.goods.forEach(good => {
            var goodItem = new GoodsItem(good.title, good.price);
            var prezzo = good.price;
            console.log(prezzo)
            sum += prezzo;
            console.log(sum);
        }
        );

        document.createTextNode("" + sum);
        document.getElementsByClassName("sum")[0].textContent = "Стоимость всех товаров в каталоге составляет: " + sum + "\u20bd";
    }
    //очищаем всю корзину
    clearCart() {

    }
    //перенаправляем на страницу оплаты
    checkOut() {
    }
}




const list = new GoodsList();
list.fetchGoods();
list.render();
list.sumGoods();


// const goods = [
//     { title: 'Shirt', price: 150 },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
// ];


// const $goodsList = document.querySelector('.goods-list');

// const renderGoodsItem = ({ title, price }) => {
//     return `<div class="goods-item"><h2>${title}</h2><p>${price}</p></div>`;
// };

// const renderGoodsList = (list = goods) => {
//     let goodsList = list.map(
//         item => renderGoodsItem(item)
//     ).join(" ");

//     $goodsList.insertAdjacentHTML('beforeend', goodsList);
// }

// renderGoodsList();