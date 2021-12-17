// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули
let wrap = document.getElementById('wrap');
let key = 'users';
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=>{
        for (const user of users) {
            let divUser = document.createElement('div');
            let divUserId = document.createElement('div');
            divUserId.innerText = `${user.id}`;
            let divUserName = document.createElement('div');
            divUserName.innerText = `${user.name}`;
            let buttonUserInfo = document.createElement('button');
            buttonUserInfo.innerText = 'User information';
            buttonUserInfo.onclick=function (e) {
                e.preventDefault();
                let userInfo = JSON.parse(localStorage.getItem('user')) || [];
                userInfo.push({user});
                localStorage.setItem(key, JSON.stringify(userInfo));
                document.location.href = 'user-details.html';

            }

            divUser.append(divUserId,divUserName,buttonUserInfo);
            wrap.appendChild(divUser);

        }
        }
    )


//
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их
// блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

