// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//   кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//   Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
let wrap = document.getElementById('wrap');
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(users=>{
    for (const user of users) {
        let divUser = document.createElement('div');
        divUser.classList.add('user', 'flex', 'border');
        let userId = document.createElement('div');
        userId.innerText = `${user.id}`;
        userId.classList.add('flex', 'justify');
        let name = document.createElement('h3');
        name.innerText = `${user.name}`;
        name.classList.add('flex', 'justify', 'h10', 'm10');
        let username = document.createElement('h4');
        username.innerText = `${user.username}`;
        username.classList.add('flex', 'justify', 'h10', 'm10');
        let userEmail = document.createElement('h5');
        userEmail.innerText = `${user.email}`;
        userEmail.classList.add('flex', 'justify', 'h10', 'm10');
        let userAddress = document.createElement('div');
        userAddress.classList.add('userAddress', 'border');
        let userStreet = document.createElement('h6');
        userStreet.innerText = `Address : ${user.address.street}`;
        userStreet.classList.add('flex', 'justify', 'm10');
        let userSuite = document.createElement('h6');
        userSuite.innerText = `${user.address.suite}`;
        userSuite.classList.add('flex', 'justify', 'm10');
        let userCity = document.createElement('h6');
        userCity.innerText = `${user.address.city}`;
        userCity.classList.add('flex', 'justify', 'm10');
        let userZipcode = document.createElement('h6');
        userZipcode.innerText = `${user.address.zipcode}`;
        userZipcode.classList.add('flex', 'justify', 'm10');
        let userGeo = document.createElement('div');
        let userLat = document.createElement('h6');
        userLat.classList.add('flex', 'justify', 'm10');
        userLat.innerText = `${user.address.geo.lat}`;
        let userLng = document.createElement('h6');
        userLng.classList.add('flex', 'justify', 'm10');
        userLng.innerText = `${user.address.geo.lng}`;
        let userPhone = document.createElement('h5');
        userPhone.classList.add('flex', 'justify', 'm10');
        userPhone.innerText = `${user.phone}`;
        let userWebsite = document.createElement('h5');
        userWebsite.classList.add('flex', 'justify', 'm10');
        userWebsite.innerText = `${user.website}`;
        let userCompany = document.createElement('div');
        userCompany.classList.add('userCompany', 'border');
        let userCompanyName = document.createElement('h6');
        userCompanyName.classList.add('flex', 'justify', 'm10');
        userCompanyName.innerText = `Company : ${user.company.name}`;
        let userCatchPhrase = document.createElement('h6');
        userCatchPhrase.classList.add('flex', 'justify', 'm10');
        userCatchPhrase.innerText = `${user.company.catchPhrase}`;
        let userCompanyBs = document.createElement('h6');
        userCompanyBs.classList.add('flex', 'justify', 'm10');
        userCompanyBs.innerText = `${user.company.bs}`;
        let userBtn = document.createElement('button');
        userBtn.classList.add('userBtn');
        userBtn.innerText = 'User posts';

        userCompany.append(userCompanyName, userCatchPhrase, userCompanyBs);
        userGeo.append(userLat, userLng);
        userAddress.append(userStreet, userSuite, userCity, userZipcode, userGeo);
        divUser.append(userId, name, username, userEmail, userAddress, userPhone, userWebsite, userCompany, userBtn);
        wrap.appendChild(divUser);

        userBtn.onclick = function () {
            fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                .then(response => response.json())
                .then(posts => {
                    for (const post of posts) {
                        if (user.id === post.userId) {
                            let posts = document.createElement('div');
                            posts.classList.add('flex', 'posts');
                            let postId = document.createElement('div');
                            postId.classList.add('flex', 'justify', 'text', 'm10', 'h10');
                            postId.innerText = `${post.id}`;
                            let postTitle = document.createElement('h5');
                            postTitle.classList.add('flex', 'justify', 'text', 'm10', 'postTitle', 'h50');
                            postTitle.innerText = `${post.title}`;
                            let postBody = document.createElement('p');
                            postBody.classList.add('flex', 'justify', 'text', 'm10', 'h150');
                            postBody.innerText = `${post.body}`;
                            let postBtn = document.createElement('button');
                            postBtn.innerText = 'Comments post';
                            postBtn.classList.add('postBtn');

                            posts.append(postId, postTitle, postBody, postBtn);
                            divUser.appendChild(posts);

                            postBtn.onclick = function () {
                                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                                    .then(response => response.json())
                                    .then(comments => {
                                        for (const comment of comments) {
                                            if (post.id === comment.postId) {
                                                let comments = document.createElement('div');
                                                comments.classList.add('comments');
                                                let commentId = document.createElement('div');
                                                commentId.classList.add('flex', 'justify', 'm10');
                                                commentId.innerText = `${comment.id}`;
                                                let commentName = document.createElement('div');
                                                commentName.classList.add('flex', 'justify', 'm10', 'text', 'colorBlue',
                                                    'h50');
                                                commentName.innerText = `${comment.name}`;
                                                let commentEmail = document.createElement('div');
                                                commentEmail.classList.add('flex', 'justify', 'm10', 'colorBlue');
                                                commentEmail.innerText = `${comment.email}`;
                                                let commentBody = document.createElement('div');
                                                commentBody.classList.add('flex', 'justify', 'm10', 'text');
                                                commentBody.innerText = `${comment.body}`;

                                                comments.append(commentId, commentName, commentEmail, commentBody);
                                                posts.appendChild(comments);
                                            }
                                        }
                                    });
                            };
                        }
                    }
                });

        };
    }
})