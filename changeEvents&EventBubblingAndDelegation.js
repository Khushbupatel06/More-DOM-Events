//                     INPUT & CHANGE EVENTS
// ==========================================================
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('change', function(e) {
    console.log("hello")
})

input.addEventListener('input', function(e) {
    h1.innerText = input.value
})

const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function () {
    if (input.value === '') {
        h1.innerText = `Enter Your Username`
    } else {
        h1.innerText = `Welcome,  ${input.value}`;
    }
});

input.addEventListener('input', function () {
    if (!this.value) {
        h1.innerText = `Enter Your Username`;
    } else {
        h1.innerText = `Welcome,  ${this.value}`;
    }
});

input.addEventListener('input', function () {
    if (!this.value) {
        return h1.innerText = `Enter Your Username`
    } 
        h1.innerText = `Welcome,  ${input.value}`;
});

// =============================================================
//                     EVENTS BUBBLING
// =============================================================

const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function(e) {
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation();
})
container.addEventListener('click', function(){
    container.classList.toggle('hide');
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// ===============================================================
//                         EVENTS DELEGATION
// ===============================================================

const lis = document.querySelectorAll('li');
    for(let li of lis){
    li.addEventListener('click', function(){
        li.remove();
    }) 
}

const tweetForm = document.querySelector('#tweetForm');
const tweetContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement ('li');
    const bTag = document.createElement ('b');
    bTag.append(username);
    newTweet.append(bTag); 
    newTweet.append(` - ${tweet}`);
    tweetContainer.append(newTweet);
}

tweetContainer.addEventListener('click', function (e) {
    e.target.noneName === 'LI' && e.targer.remove();
})




