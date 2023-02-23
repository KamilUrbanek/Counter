//set inital count
let count = 0;

//select value
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  //console.log(btn);
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = 'green';
    }
    if (count === 0) {
      value.style.color = 'grey';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    value.textContent = count;
  });
});
