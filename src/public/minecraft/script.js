let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');

button1.addEventListener('click', (event) => {
  window.location.href = '../redirect?url=https://youtube.com/c/iangaming101hd';
});

button2.addEventListener('click', (event) => {
  window.scrollTo({
    top: 875,
    left: 0,
    behavior: 'smooth',
  });
});
