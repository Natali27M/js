// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули
let wrap = document.getElementById('wrap');
let key = 'users';
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
            for (const user of users) {
                let divUserWrap = document.createElement('div');
                divUserWrap.classList.add('divUserWrap', 'hAuto', 'display', 'justify', 'align', 'backgroundPlum');
                let divUser = document.createElement('div');
                divUser.classList.add('divUser', 'display', 'align');
                let divUserId = document.createElement('div');
                divUserId.classList.add('divUserId', 'border1', 'backgroundWhite', 'w40', 'marginY5', 'text');
                divUserId.innerText = `User id - ${user.id}`;
                let divUserName = document.createElement('div');
                divUserName.classList.add('divUserName', 'text', 'border1', 'backgroundWhite', 'w90', 'marginY5');
                divUserName.innerText = `${user.name}`;
                let buttonUserInfo = document.createElement('button');
                buttonUserInfo.classList.add('backgroundPlum', 'w80', 'marginY5');
                buttonUserInfo.innerText = 'User information';
                buttonUserInfo.onclick = function (e) {
                    e.preventDefault();
                    let userInfo = JSON.parse(localStorage.getItem('user')) || [];
                    userInfo.push({user});
                    localStorage.setItem(key, JSON.stringify(userInfo));
                    document.location.href = 'user-details.html';
                }
                divUser.append(divUserId, divUserName, buttonUserInfo);
                divUserWrap.appendChild(divUser);
                wrap.appendChild(divUserWrap);
            }
        }
    );


//
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их
// блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

