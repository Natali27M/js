// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
let divWrap = document.createElement('div');
divWrap.classList.add('wrap');
document.body.appendChild(divWrap);
let users = JSON.parse(localStorage.getItem('users'));
for (const user of users) {
        let divUser=document.createElement('div');
        let divUserId = document.createElement('div');
        divUserId.innerText = user.user.id;
        let divUserName = document.createElement('div');
        divUserName.innerText = user.user.name;
        let divUserUsername = document.createElement('div');
        divUserUsername.innerText = user.user.username;
        let divEmail = document.createElement('div');
        divEmail.innerText = user.user.email;
        let divAddress = document.createElement('div');
        let divAddressStreet = document.createElement('div');
        divAddressStreet.innerText = user.user.address.street;
        let divAddressSuite = document.createElement('div');
        divAddressSuite.innerText = user.user.address.suite;
        let divAddressCity = document.createElement('div');
        divAddressCity.innerText = user.user.address.city;
        let divAddressZipcode = document.createElement('div');
        divAddressZipcode.innerText = user.user.address.zipcode;
        let divAddressGeo = document.createElement('div');
        let divGeoLat = document.createElement('div');
        divGeoLat.innerText = user.user.address.geo.lat;
        let divGeoLng = document.createElement('div');
        divGeoLng.innerText = user.user.address.geo.lng;
        let divPhone = document.createElement('div');
        divPhone.innerText = user.user.phone;
        let divWebsite = document.createElement('div');
        divWebsite.innerText = user.user.website;
        let divCompany = document.createElement('div');
        let divCompanyName = document.createElement('div');
        divCompanyName.innerText = user.user.company.name;
        let divCompanyCatchPhrase = document.createElement('div');
        divCompanyCatchPhrase.innerText = user.user.company.catchPhrase;
        let divCompanyBs = document.createElement('div');
        divCompanyBs.innerText = user.user.company.bs;
        let buttonPost = document.createElement('button');
        buttonPost.innerText = 'post of current user';
        buttonPost.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/users/' + 2 + '/posts')
                    .then(response => response.json())
                    .then(posts => {
                            for (const post of posts) {
                                    let divPost = document.createElement('div');
                                    let divPostTitle = document.createElement('div');
                                    divPostTitle.innerText = post.title;
                                    let buttonPostInfo = document.createElement('button');
                                    buttonPostInfo.innerText='All posts'

                                    divPost.append(divPostTitle,buttonPostInfo)
                                    divUser.appendChild(divPost);

                            }
                    })
        };

        divCompany.append(divCompanyName, divCompanyCatchPhrase, divCompanyBs);
        divAddressGeo.append(divGeoLat, divGeoLng);
        divAddress.append(divAddressStreet, divAddressSuite, divAddressCity, divAddressZipcode, divAddressGeo);
        divUser.append(divUserId, divUserName, divUserUsername, divEmail, divAddress, divPhone, divWebsite, divCompany,
            buttonPost);
        divWrap.appendChild(divUser);




}
