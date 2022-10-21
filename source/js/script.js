/*const nojsElement = document.querySelector('.nojs');
nojsElement.classList.remove('nojs');
*/

const buttonUp = document.querySelector('.button-up');
const buttonDown = document.querySelector('.button-down');
const imgSelector = document.querySelector('.table__tabletop-img');

//buttonToggle.classList.remove('navigation__list--closed');

console.dir('buttonUp');

const up = function(){
  imgSelector.classList.toggle('table__tabletop-img--static');
  imgSelector.classList.toggle('table__tabletop-img--up');
}
const down = function(){
  imgSelector.classList.toggle('table__tabletop-img--static');
  imgSelector.classList.toggle('table__tabletop-img--down');
}

buttonUp.addEventListener('click', up);
buttonDown.addEventListener('click', down);
