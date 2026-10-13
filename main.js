document.body.style.display = "flex";
document.body.style.flexWrap = "wrap";
document.body.style.gap = "20px";

//card1
let card = document.createElement("div");
card.className = "card";
card.style.backgroundColor = 'lightgrey'
card.style.width = '300px'
card.style.paddingBottom = '10px'
card.style.borderRadius = '8px'

let img = document.createElement("img");
img.src = "https://images.uzum.uz/db2u0g6347r1j1ll5s5g/t_product_540_low.jpg";
img.className = "product-img";
img.style.width = '300px'
img.style.borderTopLeftRadius = '8px'
img.style.borderTopRightRadius = '8px'

let oldPrice = document.createElement("p");
oldPrice.textContent = "29 000";
oldPrice.className = "price";
oldPrice.style.paddingLeft = '23px'

let newPrice = document.createElement("p");
newPrice.textContent = "38 000";
newPrice.className = "old-price";
newPrice.style.paddingLeft = '23px'

let monthly = document.createElement("span");
monthly.textContent = "2 054 сум/мес";
monthly.className = "monthly";
monthly.style.paddingLeft = '23px'

let name = document.createElement("p");
name.textContent = "Очиститель двигателя Ахma Autopreseries, 600 г";
name.className = "name";
name.style.paddingLeft = '23px'

let rating = document.createElement("p");
rating.textContent = "⭐ 4.8 (606 отзывов)";
rating.className = "rating";
rating.style.paddingLeft = '23px'

let button = document.createElement("button");
button.textContent = "♧ Завтра";
button.className = "button";
button.style.backgroundColor = 'blueviolet'
button.style.border = 'none'
button.style.padding = '5px 95px'
button.style.borderRadius = '5px'
button.style.marginLeft = '23px'

card.append(img, oldPrice, newPrice, monthly, name, rating, button);
document.body.append(card);

//card2
let card2 = document.createElement("div");
card2.className = "card";
card2.style.backgroundColor = 'lightgrey'
card2.style.width = '300px'
card2.style.paddingBottom = '10px'
card2.style.borderRadius = '8px'

let img2 = document.createElement("img");
img2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk01P6aDTVPDXPt2T9TSk-o3-TxyvXn0kEK1TM1Sb28w&s";
img2.className = "product-img";
img2.style.width = '300px'
img2.style.borderTopLeftRadius = '8px'
img2.style.borderTopRightRadius = '8px'

let oldPrice2 = document.createElement("p");
oldPrice2.textContent = "37 610";
oldPrice2.className = "price";
oldPrice2.style.paddingLeft = '23px'

let newPrice2 = document.createElement("p");
newPrice2.textContent = "37 990";
newPrice2.className = "old-price";
newPrice2.style.paddingLeft = '23px'

let monthly2 = document.createElement("span");
monthly2.textContent = "2 691 сум/мес";
monthly2.className = "monthly";
monthly2.style.paddingLeft = '23px'

let name2 = document.createElement("p");
name2.textContent = "Подводка водостойкая для глаз Dip Eyeliner, чёрный, 5.1 мл";
name2.className = "name";
name2.style.paddingLeft = '23px'

let rating2 = document.createElement("p");
rating2.textContent = "⭐ 4.9 (2794 отзыва)";
rating2.className = "rating";
rating2.style.paddingLeft = '23px'

let button2 = document.createElement("button");
button2.textContent = "♧ Завтра";
button2.className = "button";
button2.style.backgroundColor = 'blueviolet'
button2.style.border = 'none'
button2.style.padding = '5px 95px'
button2.style.borderRadius = '5px'
button2.style.marginLeft = '23px'

card2.append(img2, oldPrice2, newPrice2, monthly2, name2, rating2, button2);
document.body.append(card2);

//card3
let card3 = document.createElement("div");
card3.className = "card";
card3.style.backgroundColor = 'lightgrey'
card3.style.width = '300px'
card3.style.paddingBottom = '10px'
card3.style.borderRadius = '8px'

let img3 = document.createElement("img");
img3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd8Gx60ULYJc4d6YCDOOzqDCgULhAbF8kZ86ShffIVHA&s";
img3.className = "product-img";
img3.style.width = '300px'
img3.style.borderTopLeftRadius = '8px'
img3.style.borderTopRightRadius = '8px'

let oldPrice3 = document.createElement("p");
oldPrice3.textContent = "47 300";
oldPrice3.className = "price";
oldPrice3.style.paddingLeft = '23px'

let newPrice3 = document.createElement("p");
newPrice3.textContent = "55 000";
newPrice3.className = "old-price";
newPrice3.style.paddingLeft = '23px'

let monthly3 = document.createElement("span");
monthly3.textContent = "3 896 сум/мес";
monthly3.className = "monthly";
monthly3.style.paddingLeft = '23px'

let name3 = document.createElement("p");
name3.textContent = "Шорты для девочек Diva Kids DVKID46";
name3.className = "name";
name3.style.paddingLeft = '23px'

let rating3 = document.createElement("p");
rating3.textContent = "⭐ 5.0 (6 отзывов)";
rating3.className = "rating";
rating3.style.paddingLeft = '23px'

let button3 = document.createElement("button");
button3.textContent = "♧ Завтра";
button3.className = "button";
button3.style.backgroundColor = 'blueviolet'
button3.style.border = 'none'
button3.style.padding = '5px 95px'
button3.style.borderRadius = '5px'
button3.style.marginLeft = '23px'

card3.append(img3, oldPrice3, newPrice3, monthly3, name3, rating3, button3);
document.body.append(card3);

//card4
let card4 = document.createElement("div");
card4.className = "card";
card4.style.backgroundColor = 'lightgrey'
card4.style.width = '300px'
card4.style.paddingBottom = '10px'
card4.style.borderRadius = '8px'

let img4 = document.createElement("img");
img4.src = "https://images.uzum.uz/cupefjs5j42bjc4eq1rg/original.jpg";
img4.className = "product-img";
img4.style.width = '300px'
img4.style.borderTopLeftRadius = '8px'
img4.style.borderTopRightRadius = '8px'

let oldPrice4 = document.createElement("p");
oldPrice4.textContent = "248 970";
oldPrice4.className = "price";
oldPrice4.style.paddingLeft = '23px'

let newPrice4 = document.createElement("p");
newPrice4.textContent = "289 500";
newPrice4.className = "old-price";
newPrice4.style.paddingLeft = '23px'

let monthly4 = document.createElement("span");
monthly4.textContent = "20 506 сум/мес";
monthly4.className = "monthly";
monthly4.style.paddingLeft = '23px'

let name4 = document.createElement("p");
name4.textContent = "Кроссовки для мальчиков Adidas GV7946";
name4.className = "name";
name4.style.paddingLeft = '23px'

let rating4 = document.createElement("p");
rating4.textContent = "⭐ 4.5 (2 отзыва)";
rating4.className = "rating";
rating4.style.paddingLeft = '23px'

let button4 = document.createElement("button");
button4.textContent = "♧ Завтра";
button4.className = "button";
button4.style.backgroundColor = 'blueviolet'
button4.style.border = 'none'
button4.style.padding = '5px 95px'
button4.style.borderRadius = '5px'
button4.style.marginLeft = '23px'

card4.append(img4, oldPrice4, newPrice4, monthly4, name4, rating4, button4);
document.body.append(card4);

//card5
let card5 = document.createElement("div");
card5.className = "card";
card5.style.backgroundColor = 'lightgrey'
card5.style.width = '300px'
card5.style.paddingBottom = '10px'
card5.style.borderRadius = '8px'

let img5 = document.createElement("img");
img5.src = "https://images.uzum.uz/cdmhq40l08kcldtnlpag/t_product_540_low.jpg";
img5.className = "product-img";
img5.style.width = '300px'
img5.style.borderTopLeftRadius = '8px'
img5.style.borderTopRightRadius = '8px'

let oldPrice5 = document.createElement("p");
oldPrice5.textContent = "51 740";
oldPrice5.className = "price";
oldPrice5.style.paddingLeft = '23px'

let newPrice5 = document.createElement("p");
newPrice5.textContent = "52 800";
newPrice5.className = "old-price";
newPrice5.style.paddingLeft = '23px'

let monthly5 = document.createElement("span");
monthly5.textContent = "3 740 сум/мес";
monthly5.className = "monthly";
monthly5.style.paddingLeft = '23px'

let name5 = document.createElement("p");
name5.textContent = "Футболка для детей Diva Kids DVKID10";
name5.className = "name";
name5.style.paddingLeft = '23px'

let rating5 = document.createElement("p");
rating5.textContent = "⭐ 5.0 (3 отзыва)";
rating5.className = "rating";
rating5.style.paddingLeft = '23px'

let button5 = document.createElement("button");
button5.textContent = "♧ Завтра";
button5.className = "button";
button5.style.backgroundColor = 'blueviolet'
button5.style.border = 'none'
button5.style.padding = '5px 95px'
button5.style.borderRadius = '5px'
button5.style.marginLeft = '23px'

card5.append(img5, oldPrice5, newPrice5, monthly5, name5, rating5, button5);
document.body.append(card5);

//card6
let card6 = document.createElement("div");
card6.className = "card";
card6.style.backgroundColor = 'lightgrey'
card6.style.width = '300px'
card6.style.paddingBottom = '10px'
card6.style.borderRadius = '8px'

let img6 = document.createElement("img");
img6.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-y0gyPxWoZOjRK1gScGV_6fC7FUC-VOeywTf8TJi3pA&s";
img6.className = "product-img";
img6.style.width = '300px'
img6.style.borderTopLeftRadius = '8px'
img6.style.borderTopRightRadius = '8px'

let oldPrice6 = document.createElement("p");
oldPrice6.textContent = "74 300";
oldPrice6.className = "price";
oldPrice6.style.paddingLeft = '23px'

let newPrice6 = document.createElement("p");
newPrice6.textContent = "86 400";
newPrice6.className = "old-price";
newPrice6.style.paddingLeft = '23px'

let monthly6 = document.createElement("span");
monthly6.textContent = "6 120 сум/мес";
monthly6.className = "monthly";
monthly6.style.paddingLeft = '23px'

let name6 = document.createElement("p");
name6.textContent = "Шорты для мальчика Diva Kids DVKID15";
name6.className = "name";
name6.style.paddingLeft = '23px'

let rating6 = document.createElement("p");
rating6.textContent = "⭐ 5.0 (3 отзыва)";
rating6.className = "rating";
rating6.style.paddingLeft = '23px'

let button6 = document.createElement("button");
button6.textContent = "♧ Завтра";
button6.className = "button";
button6.style.backgroundColor = 'blueviolet'
button6.style.border = 'none'
button6.style.padding = '5px 95px'
button6.style.borderRadius = '5px'
button6.style.marginLeft = '23px'

card6.append(img6, oldPrice6, newPrice6, monthly6, name6, rating6, button6);
document.body.append(card6);

//card7
let card7 = document.createElement("div");
card7.className = "card";
card7.style.backgroundColor = 'lightgrey'
card7.style.width = '300px'
card7.style.paddingBottom = '10px'
card7.style.borderRadius = '8px'

let img7 = document.createElement("img");
img7.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpKy5NeCvvJVbMg96HUheJVENFMeKFRsconheUjmjDOQ&s";
img7.className = "product-img";
img7.style.width = '300px'
img7.style.borderTopLeftRadius = '8px'
img7.style.borderTopRightRadius = '8px'

let oldPrice7 = document.createElement("p");
oldPrice7.textContent = "95 370";
oldPrice7.className = "price";
oldPrice7.style.paddingLeft = '23px'

let newPrice7 = document.createElement("p");
newPrice7.textContent = "112 200";
newPrice7.className = "old-price";
newPrice7.style.paddingLeft = '23px'

let monthly7 = document.createElement("span");
monthly7.textContent = "7 948 сум/мес";
monthly7.className = "monthly";
monthly7.style.paddingLeft = '23px'

let name7 = document.createElement("p");
name7.textContent = "Поло для мальчика Diva Kids DVKID14";
name7.className = "name";
name7.style.paddingLeft = '23px'

let rating7 = document.createElement("p");
rating7.textContent = "⭐ 5.0 (1 отзыв)";
rating7.className = "rating";
rating7.style.paddingLeft = '23px'

let button7 = document.createElement("button");
button7.textContent = "♧ Завтра";
button7.className = "button";
button7.style.backgroundColor = 'blueviolet'
button7.style.border = 'none'
button7.style.padding = '5px 95px'
button7.style.borderRadius = '5px'
button7.style.marginLeft = '23px'

card7.append(img7, oldPrice7, newPrice7, monthly7, name7, rating7, button7);
document.body.append(card7);

//card8
let card8 = document.createElement("div");
card8.className = "card";
card8.style.backgroundColor = 'lightgrey'
card8.style.width = '300px'
card8.style.paddingBottom = '10px'
card8.style.borderRadius = '8px'

let img8 = document.createElement("img");
img8.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDldHst-zu31gAa2RxuQoENbA_pqkJJmoc0oUghUjIg&s";
img8.className = "product-img";
img8.style.width = '300px'
img8.style.borderTopLeftRadius = '8px'
img8.style.borderTopRightRadius = '8px'

let oldPrice8 = document.createElement("p");
oldPrice8.textContent = "162 850";
oldPrice8.className = "price";
oldPrice8.style.paddingLeft = '23px'

let newPrice8 = document.createElement("p");
newPrice8.textContent = "652 000";
newPrice8.className = "old-price";
newPrice8.style.paddingLeft = '23px'

let monthly8 = document.createElement("span");
monthly8.textContent = "11 535 сум/мес";
monthly8.className = "monthly";
monthly8.style.paddingLeft = '23px'

let name8 = document.createElement("p");
name8.textContent = "Комплект для мальчиков MAYORAL 3659";
name8.className = "name";
name8.style.paddingLeft = '23px'

let rating8 = document.createElement("p");
rating8.textContent = "✨ новинка";
rating8.className = "rating";
rating8.style.paddingLeft = '23px'

let button8 = document.createElement("button");
button8.textContent = "♧ Завтра";
button8.className = "button";
button8.style.backgroundColor = 'blueviolet'
button8.style.border = 'none'
button8.style.padding = '5px 95px'
button8.style.borderRadius = '5px'
button8.style.marginLeft = '23px'

card8.append(img8, oldPrice8, newPrice8, monthly8, name8, rating8, button8);
document.body.append(card8);

//card9
let card9 = document.createElement("div");
card9.className = "card";
card9.style.backgroundColor = 'lightgrey'
card9.style.width = '300px'
card9.style.paddingBottom = '10px'
card9.style.borderRadius = '8px'

let img9 = document.createElement("img");
img9.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBl0vjEIEvMTZ_BZ1q46FKSooTcobfXFygPlUBswAKZA&s";
img9.className = "product-img";
img9.style.width = '300px'
img9.style.borderTopLeftRadius = '8px'
img9.style.borderTopRightRadius = '8px'

let oldPrice9 = document.createElement("p");
oldPrice9.textContent = "123 450";
oldPrice9.className = "price";
oldPrice9.style.paddingLeft = '23px'

let newPrice9 = document.createElement("p");
newPrice9.textContent = "143 550";
newPrice9.className = "old-price";
newPrice9.style.paddingLeft = '23px'

let monthly9 = document.createElement("span");
monthly9.textContent = "10 168 сум/мес";
monthly9.className = "monthly";
monthly9.style.paddingLeft = '23px'

let name9 = document.createElement("p");
name9.textContent = "Блузка для девочек Mayoral 3134";
name9.className = "name";
name9.style.paddingLeft = '23px'

let rating9 = document.createElement("p");
rating9.textContent = "✨ новинка";
rating9.className = "rating";
rating9.style.paddingLeft = '23px'

let button9 = document.createElement("button");
button9.textContent = "♧ Завтра";
button9.className = "button";
button9.style.backgroundColor = 'blueviolet'
button9.style.border = 'none'
button9.style.padding = '5px 95px'
button9.style.borderRadius = '5px'
button9.style.marginLeft = '23px'

card9.append(img9, oldPrice9, newPrice9, monthly9, name9, rating9, button9);
document.body.append(card9);

//card10
let card10 = document.createElement("div");
card10.className = "card";
card10.style.backgroundColor = 'lightgrey'
card10.style.width = '300px'
card10.style.paddingBottom = '10px'
card10.style.borderRadius = '8px'

let img10 = document.createElement("img");
img10.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGECe4AYRRt3qnN5FqJBKYqVCcxzevVax4pqNdQ6GcIA&s";
img10.className = "product-img";
img10.style.width = '300px'
img10.style.borderTopLeftRadius = '8px'
img10.style.borderTopRightRadius = '8px'

let oldPrice10 = document.createElement("p");
oldPrice10.textContent = "158 000";
oldPrice10.className = "price";
oldPrice10.style.paddingLeft = '23px'

let newPrice10 = document.createElement("p");
newPrice10.textContent = "301 000";
newPrice10.className = "old-price";
newPrice10.style.paddingLeft = '23px'

let monthly10 = document.createElement("span");
monthly10.textContent = "11 192 сум/мес";
monthly10.className = "monthly";
monthly10.style.paddingLeft = '23px'

let name10 = document.createElement("p");
name10.textContent = "Комплект Diva Kids майка, 2 шт";
name10.className = "name";
name10.style.paddingLeft = '23px'

let rating10 = document.createElement("p");
rating10.textContent = "⭐ 5.0 (1 отзыв)";
rating10.className = "rating";
rating10.style.paddingLeft = '23px'

let button10 = document.createElement("button");
button10.textContent = "♧ Завтра";
button10.className = "button";
button10.style.backgroundColor = 'blueviolet'
button10.style.border = 'none'
button10.style.padding = '5px 95px'
button10.style.borderRadius = '5px'
button10.style.marginLeft = '23px'

card10.append(img10, oldPrice10, newPrice10, monthly10, name10, rating10, button10);
document.body.append(card10);