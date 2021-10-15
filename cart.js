var goods = [
    {
        title: "shoes",
        price: 300
    },
    {
        title: "skirt",
        price: 250
    },
    {
        title: "furcoat",
        price: 900
    }
];
console.log(goods);

var renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><h2>${title}</h2><p>${price}</p></div>`;
    //console.log(goodsItem);
};

var renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join(" ");
    document.querySelector(".goods-list").innerHTML = goodsList;
}
renderGoodsList(goods);





