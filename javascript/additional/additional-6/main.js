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