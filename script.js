const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'

//создаем класс (образец) для единиц товаров, добавляем в него метод отрисовки.
class GoodsItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"<h1>${this.product_name}</h1><p>${this.price}</p><button>Купить</button></div>`
    }
}

//создаем класс для списка 
class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        fetch(`${API_URL}catalogData.json`)
            .then((response) => {
                return response.json();
            })
            .then((request) => {
                this.goods = request;
                // .map(good => ({ title: good.product_name, price: good.price }))
                this.render();
            })
            .catch(() => {
                console.log("Ошибочка вышла")
                alert("Что-то пошло не так!")
            })
    }
    // fetchGoods() {
    //     this.goods = [
    //         { title: 'Shirt', price: 100 },
    //         { title: 'Socks', price: 500 },
    //         { title: 'Jacket', price: 300 },
    //         { title: 'Shoes', price: 150 },
    //     ]
    // }
    render() {
        let listHtml = "";
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    sumGoods() {
        let sumHtml = "";
        let sum = 0;
        this.goods.forEach(good => {
            const goodItem1 = new GoodsItem(good.product_name, good.price);
            var prezzo = good.price;
            console.log(prezzo)
            sum += prezzo;
            sumHtml = sum;
            console.log(sum);
        }
        );

        document.createTextNode("" + sum);
        document.getElementsByClassName("sum")[0].textContent = "Стоимость всех товаров в каталоге составляет: " + sum + "\u20bd";
    }
}

const list = new GoodsList();
list.fetchGoods(() => {
    list.render();
});

list.sumGoods();
// const list = new GoodsList();
// list.fetchGoods();
// list.render();
var btns = document.getElementsByTagName("button");
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = buy;

    function buy(x) {
        var uppDiv = document.getElementById('cart');
        var buyBut = x.target;
        var card = document.createTextNode("");
        uppDiv.textContent = "<div>" + cart + "</div>";

        //Element('img');
        card.src = buyBut.id.split("_")[1] + ".jpg";
        uppDiv.appendChild(card);
    }
}


