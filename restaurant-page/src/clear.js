let clear = () => {
  let content = document.querySelector('body');
  let container = document.getElementsByClassName('container')[0];
  container.remove();
  let buttons = document.getElementsByTagName('button');
  for (let i = 0; i< buttons.length; i++) {
    buttons[i].className = "";
  }
}

export default clear;