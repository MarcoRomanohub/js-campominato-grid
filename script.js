const gridContainer = document.querySelector('.grid-container');

reset()


for(i =1; i <= 100; i++){
  const square = getSquare(i);
  console.log(square);
  gridContainer.append(square);
}


// FUNCTIONS ////////

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