Griglia Campo Minato
===
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## Svolgimento
1. seleziono container e bottone e li salvo in una costante
2. resetto
3. faccio un ciclo di 100 ripetizioni
4. ad ogni ciclo creo un quadrato e lo stampo sulla griglia
5. al click di ogni quadrato aggiungo una classe clicked con colore azzurro e faccio console log num quadrato

## Creazione quadrato 
1. creo l'elemento html
2. associo la classe square
3. associo il valore (numero) 