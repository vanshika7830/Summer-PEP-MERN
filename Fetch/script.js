
const btn1 = document.querySelector('#btn1')
const postSection = document.querySelector('#posts');
const h2 = document.createElement('h2')
h2.innerText = "Posts";

const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const dataPromise = response.json();
    const data = await dataPromise;
    console.log(data.title);
}

btn1.addEventListener('click',fetchData);