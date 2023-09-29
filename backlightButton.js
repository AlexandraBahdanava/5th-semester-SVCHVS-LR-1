const buttons = document.querySelectorAll('.shop-now');

buttons.forEach(function (button) {
  button.classList.remove('active');
});

buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    buttons.forEach(function (btn) {
      btn.classList.remove('active');
    });

    event.target.classList.add('active');
  });
});
