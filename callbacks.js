const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post one'},
];

// mimicking how to fetch from a server
function getPosts(){
    // delaying a function
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            // append += with template literal
            output += `<li>${post.title}</li>`
        });
        // insert in the body
        document.body.innerHTML = output;
    }, 1000)
    // 1000 milliseconds = 1second - After 1s it will load the 2 posts

}

// CreatePost not showing becasue the DOM has already been rendered and only POst 1 and 2 are displayed. 
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// To make this work we can create a callback parameter in the createPost function. 

// getPost();
 // can become the callback and we can remove it

// and add another parameter getPosts to the call
createPost({title: 'Post Three', body: 'This is post three' }, getPosts);