//set inital count
let count = 0;

//set variables
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
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
      value.style.Color = 'green';
    }
    if (count === 0) {
      value.style.Color = 'grey';
    }
    if (count < 0) {
      value.style.Color = 'red';
    }

    value.textContent = count;
  });
});
