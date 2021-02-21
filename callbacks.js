const posts = [
    { title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post one'},
];

// mimicking how to fetch from a server
function getPost(){
    // delaying a function
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;

    }, 1000)
    // 1000 milliseconds = 1second

}

createPost(post) {
    setTimeout(() => {
        posts.push(posts);
    }, 2000);
}


getPost();