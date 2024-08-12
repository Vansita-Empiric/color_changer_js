const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);

    let color = event.target.id;

    switch (color) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
    }

    // if (event.target.id === 'grey') {
    //   body.style.backgroundColor = event.target.id;
    // } else if (event.target.id === 'white') {
    //   body.style.backgroundColor = event.target.id;
    // } else if (event.target.id === 'blue') {
    //   body.style.backgroundColor = event.target.id;
    // } else if (event.target.id === 'yellow') {
    //   body.style.backgroundColor = event.target.id;
    // }
  });
});
