// - Імітуємо наповнення інтернет магазину товарами :
//   Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на
// сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let key = 'good';
let input = document.getElementsByTagName('input');
let button = document.getElementsByClassName('btn');
let {form1} = document.forms;
button[0].onclick=function (e) {
    e.preventDefault();
    let goods = JSON.parse(localStorage.getItem('good')) || [];
    goods.push({
        id: new Date(), name: input.name.value, number: input.number.value, price: input.price.value,
        image: input.image.value
    });
    localStorage.setItem(key, JSON.stringify(goods));
    form1.reset();
}