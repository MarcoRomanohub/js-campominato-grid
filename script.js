const gridContainer = document.querySelector('.grid-container');
const btnStart = document.querySelector('.btn-start');

const input = document.querySelector('.form-select');
console.log(input);
let difficultyLevel;

input.addEventListener('click', function(){
  difficultyLevel = input.value;
  console.log(difficultyLevel);
});
btnStart.addEventListener('click', init);

// FUNCTIONS ////////

function init(){
  reset();
  if(difficultyLevel == 1){
    for(let i =1; i <= 100; i++){
      const square = getSquare(i);
      gridContainer.append(square);
    }
  }else if(difficultyLevel == 2){
    for(let i =1; i <= 81; i++){
      const square = getSquare(i);
      gridContainer.append(square);
    }
  }else{
    for(let i =1; i <= 49; i++){
      const square = getSquare(i);
      gridContainer.append(square);
    }
  }
  
}

function getSquare(numero){
  const sq = document.createElement('div');
  sq.className = 'square';

  sq._sqID = numero;

  sq.addEventListener('click', function(){
    console.log(this._sqID);
    // Mostro il numero nel quadrato
    // metodo classico :

    // if(this.innerHTML === ''){
    //   this.innerHTML = this._sqID;
    // }else{
    //   this.innerHTML = '';
    // } 

    // Metodo ternario :
    this.innerHTML = (!this.classList.contains('clicked'))
                      ? this.innerHTML = this._sqID       
                      : this.innerHTML = '';

    this.classList.toggle('clicked');

  })

  return sq;
}


function reset (){ 
  gridContainer.innerHTML = '';
}