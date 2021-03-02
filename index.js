const container = document.querySelector('#container');
const button = document.querySelector('#clearGrid');
var xAxis = ['0','1','2','3','4','5','6','7','8',
             '9','10','11','12','13','14','15','16'];

var defaultGridSize = xAxis.length-1;
var ratio;

createGrid(defaultGridSize);

function createGrid(gridSize){
  for(let vertical = 0 ; vertical < gridSize ; vertical++){
    for(let horizontal = 0 ; horizontal < gridSize ; horizontal++){
      let div = document.createElement('div');
      div.setAttribute('id',`${xAxis[vertical]}_${horizontal}`);
      div.classList.add('whiteGrid');
      container.appendChild(div);
    }
  }
  ratio = 100/gridSize;
  let divs = container.querySelectorAll('div');
  let divsLength = divs.length;
  for(let i = 0 ; i < divsLength ; i++){
    divs[i].setAttribute('style',`flex: 1 1 ${ratio}%`);
  }
}

container.addEventListener('mouseover', (e) => {
  if(e.target.getAttribute('class') == 'whiteGrid'){
    e.target.setAttribute('class','blackGrid');
  }
})

button.addEventListener('click', function(){removeOldAndCreateNew()});

function removeOldAndCreateNew(){
  let blackGrid = document.getElementsByTagName('div');
  let x;
  let finish = blackGrid.length;
  for(x = 0 ; x < finish ; x++){
    blackGrid[x].className = blackGrid[x].
    className.replace('blackGrid', 'whiteGrid');
  }

  var newGridSize = newValidNumber()

  function newValidNumber() {
    number = 0;
    while (number < 1 || number > 100) {
      number = Number(prompt("How many squares per side do you want in your new grid? (1-100)") || '');
    }
    return number
  }
  
  let divs = container.getElementsByTagName('div');

  let max = divs.length;

  while(container.firstChild){

    container.removeChild(container.firstChild);
  }
  createGrid(newGridSize);
}
