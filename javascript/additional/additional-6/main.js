// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
class User {
    constructor(id,name,username,email,street,suite,city,zipcode,lat,lng,phone,website,nameCompany,catchPhase,bs) {
        this.userInformation = {
            id:id,
            name:name,
            username:username,
            email:email,
            address:{
                street:street,
                suite:suite,
                city:city,
                zipcode:zipcode,
                geo:{
                    lat:lat,
                    lng:lng
                }
            },
        };
        this.userWork = {
            phone:phone,
            website:website,
            company:{
                name:nameCompany,
                catchPhrase:catchPhase,
                bs:bs
            }
        };
    }
}

let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556',
    'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442',
    'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net',
    'harness real-time e-markets');

console.log(user);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
class DescriptionTeg {
    constructor(titleOfTag, action, titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [{
            titleOfAttr1: titleOfAttr1,
            actionOfAttr1: actionOfAttr1
        },
            {
                titleOfAttr2: titleOfAttr2,
                actionOfAttr2: actionOfAttr2
            }];
    }
}


let a = new DescriptionTeg('a', 'является одним из важных элементов HTML и предназначен для создания ссылок...', 'accesskey',
    'Активация ссылки с помощью комбинации клавиш.', 'coords',
    'Устанавливает координаты активной области.');
console.log(a);
let div = new DescriptionTeg('div', 'является блочным элементом и предназначен для выделения фрагмента ' +
    'документа с целью изменения вида содержимого.', 'align', 'Задает выравнивание содержимого тега.',
    'title', 'Добавляет всплывающую подсказку к содержимому.');
console.log(div);
let h1 = new DescriptionTeg('h1', 'представляет собой наиболее важный заголовок первого уровня',
    'align', 'Определяет выравнивание заголовка.');
console.log(h1);
let span = new DescriptionTeg('span', 'предназначен для определения строчных элементов документа.',
    'accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.',
    'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
console.log(span);
let input = new DescriptionTeg('input', 'является одним из разносторонних элементов формы и позволяет' +
    ' создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', 'accept',
    'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.',
    'alt', 'Альтернативный текст для кнопки с изображением.');
console.log(input);
let form = new DescriptionTeg('form', 'Связывает поле с формой по её идентификатору. Такая связь необходима' +
    ' в случае, когда поле располагается за пределами form, например, при создании её программно или по соображениям дизайна.');
console.log(form);
let option = new DescriptionTeg('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера' +
    'select', 'disabled', 'Заблокировать для доступа элемент списка.', 'label',
    'Указание метки пункта списка.');
console.log(option);
let select = new DescriptionTeg('select', 'позволяет создать элемент интерфейса в виде раскрывающегося' +
    ' списка, а также список с одним или множественным выбором, как показано далее.', 'autofocus',
    'Устанавливает, что список получает фокус после загрузки страницы.', 'disabled',
    'Блокирует доступ и изменение элемента.');
console.log(select);
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }