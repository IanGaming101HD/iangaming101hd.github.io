let link = document.getElementById('link')
let seconds = document.getElementById('seconds')
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let redirectory_page = urlParams.get('redirect_uri')

console.log(redirectory_page)

let num = 5

let countdown = setInterval(async () => {
    if (num === 0) {
        location.href = redirectory_page
        clearInterval(countdown)
    }
    seconds.innerHTML = num
    num -= 1
}, 1000)