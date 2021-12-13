// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб
// отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let wrap = document.getElementById('wrap');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        for (const valueElement of value) {
            let divPost = document.createElement('div');
            divPost.classList.add('post');
            let divUserId = document.createElement('div');
            divUserId.innerText = `userId - ${valueElement.userId}`;
            divUserId.classList.add('userId');
            let divId = document.createElement('div');
            divId.innerText = `Id - ${valueElement.id}`;
            let h2 = document.createElement('h4');
            h2.classList.add('header');
            h2.innerText = `${valueElement.title}`;
            let p = document.createElement('p');
            p.innerText = `${valueElement.body}`;

            divPost.append(divUserId, divId, h2, p);
            wrap.appendChild(divPost);
        }
    });



// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// let wrap = document.getElementById('wrap');
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => value.json())
//     .then(value => {
//         for (const valueElement of value) {
//             let divComment = document.createElement('div');
//             divComment.classList.add('comment');
//             let divPostId = document.createElement('div');
//             divPostId.innerText = `PostId - ${valueElement.postId}`;
//             let divId = document.createElement('div');
//             divId.innerText = `Id - ${valueElement.id}`;
//             let h4Name = document.createElement('h4');
//             h4Name.innerText = `${valueElement.name}`;
//             let h4Email = document.createElement('h4');
//             h4Email.innerText = `${valueElement.email}`;
//             let p = document.createElement('p');
//             p.innerText = `${valueElement.body}`;
//
//             divComment.append(divPostId, divId, h4Name, h4Email, p);
//             wrap.appendChild(divComment);
//         }
//     });




