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
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            // if true = reject will render

            if (!error){
                resolve();
            } else {
                reject('Error: Something went wrong!')
            }
        }, 2000);
    });
}
// Promises are on most libraries: Axios, Mongoose w/ MongoDB, Node.js, fetch API, Dealing more with the response then creating them.
// createPost ({title: 'Post Three', body: ' This is post three'})
// .then(getPosts)
// .catch(err => console.log(err));

// Async await = more elegant way to handle promises
async function init() {
    await createPost ({title: 'Post Three', body: ' This is post three'});
// wait for the above to be done before calling getPosts()

getPosts();
}
init()

// Async / Await with fetch: cleaner than 
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
// fetch need to create the json file and then read it.
    const data = await res.json();
    console.log(data);
}
fetchUsers()

// Promise.all 
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()); // this returns a promise - with fetch it needs 2 .then : formating to json and then the second will give the data.

// Promise.all([promise1,promise2, promise3, promise4]).then((values => console.log(values)));

