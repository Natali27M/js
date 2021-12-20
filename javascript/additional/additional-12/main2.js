let divWrap = document.getElementById('wrap');
divWrap.classList.add('wrap');
document.body.appendChild(divWrap);
const show = () => {
    divWrap.innerHTML = '';
    let goods = JSON.parse(localStorage.getItem('good'));
    for (const good of goods) {
        let divGood = document.createElement('div');
        divGood.classList.add('good');
        divWrap.appendChild(divGood);
        let divName = document.createElement('div');
        divName.classList.add('name');
        divName.innerText = `${good.name}`;
        let divNumber = document.createElement('div');
        divNumber.innerText = `Кількість - ${good.number} шт.`;
        let divPrice = document.createElement('div');
        divPrice.innerText = `Ціна - ${good.price} грн`;
        let divImage = document.createElement('img');
        divImage.classList.add('image');
        divImage.src = `${good.image}`;
        let buttonGood = document.createElement('button');
        buttonGood.classList.add('btn');
        buttonGood.innerText = 'Видалити цей товар';
        buttonGood.onclick = function () {
            let arr = JSON.parse(localStorage.getItem('good'));
            let index = arr.findIndex(value => value.id === good.id);
            arr.splice(index, 1)
            localStorage.setItem('good', JSON.stringify(arr))
            show();
        }
        divGood.append(divName, divImage, divNumber, divPrice, buttonGood);
    }
}
show();
let divButton = document.createElement('div');
divButton.classList.add('divButton');
let buttonDelete = document.createElement('button');
buttonDelete.classList.add('buttonDelete');
buttonDelete.innerText = 'Очистити всю історію';
divButton.appendChild(buttonDelete);
divWrap.appendChild(divButton);

    buttonDelete.onclick=function () {
        localStorage.removeItem('good');
        show();
    }

