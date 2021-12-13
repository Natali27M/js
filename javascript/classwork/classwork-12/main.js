// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let wrap = document.getElementById('wrap');
        for (const post of posts) {
            let postUser = document.createElement('div');
            postUser.classList.add('postUser' , 'hAuto' , 'flex' );
            let userId = document.createElement('div');
            userId.innerText = `UsersId - ${post.userId}`;
            let postId = document.createElement('div');
            postId.innerText = `Id - ${post.id}`;
            let title = document.createElement('h4');
            title.innerText = `${post.title}`;
            let bodyPost = document.createElement('p');
            bodyPost.innerText = `${post.body}`;
            userId.classList.add('postStyle' , 'w100' , 'flex' , 'justify' , 'h20' , 'userId');
            postId.classList.add('postStyle' , 'w100' , 'flex' , 'justify' , 'h20' , 'id');
            title.classList.add('postStyle' , 'w100' , 'flex' , 'justify' , 'title');
            bodyPost.classList.add('postStyle' , 'w100' , 'flex' , 'justify' , 'body');
            let button = document.createElement('button');
            button.innerText = 'Показати коментарі';
            button.classList.add('btn');
            let divNone = document.createElement('div');
            divNone.classList.add('none');

            postUser.append(userId, postId, title, bodyPost, button , divNone);
            wrap.appendChild(postUser);

            button.onclick = function () {
                divNone.style.display = 'flex';
                divNone.classList.add('w100' , 'hAuto');
                    fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (post.id === comment.postId) {
                                let divCommentId = document.createElement('div');
                                divCommentId.classList.add('w100' , 'flex' , 'justify' , 'commentId');
                                divCommentId.innerText = `${comment.id}`;
                                let h4Name = document.createElement('h4');
                                h4Name.classList.add('w100' , 'flex' , 'justify' , 'h20' , 'name');
                                h4Name.innerText = `${comment.name}`;
                                let h4Email = document.createElement('h4');
                                h4Email.classList.add('w100' , 'flex' , 'justify' , 'h20' , 'email');
                                h4Email.innerText = `${comment.email}`;
                                let pCommentBody = document.createElement('p');
                                pCommentBody.classList.add('w100' , 'flex' , 'justify' , 'commentBody');
                                pCommentBody.innerText = `${comment.body}`;

                                divNone.append(divCommentId , h4Name , h4Email , pCommentBody);
                            }
                        }
                    });
            }
        }
    })


