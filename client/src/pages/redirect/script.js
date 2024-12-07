let link = document.getElementById('link')
let seconds = document.getElementById('seconds')
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let redirectory_page = urlParams.get('url')

let num = 5

let countdown = setInterval(async () => {
    if (num === 0) {
        if (!redirectory_page) {
            location.href = '../'
        } else {
            location.href = redirectory_page
        }
        clearInterval(countdown)
    }
    seconds.innerHTML = num
    num -= 1
}, 1000)

window.addEventListener('pageshow', function (event) {
    if (event.persisted || ( typeof window.performance != 'undefined' && window.performance.navigation.type === 2 )) {
    window.location.reload();
    }
});