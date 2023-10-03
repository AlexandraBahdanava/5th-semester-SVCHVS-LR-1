function addClickHandlerToButtons(selector) {
  const buttons = document.querySelectorAll(selector);

  buttons.forEach(function (button) {
    button.classList.remove('active');
    button.addEventListener('click', function (event) {
      buttons.forEach(function (btn) {
        btn.classList.remove('active');
      });

      event.target.classList.add('active');
    });
  });
}

addClickHandlerToButtons('.backlightButton');
