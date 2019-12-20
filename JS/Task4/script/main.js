let randNumber = (min,max)=>{
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

let guessSubmit = document.querySelector('.guessSubmit');
let guessCount = 1
let guess = document.querySelector('.guess');
let lastResult = document.querySelector('.lastResult');
let border = document.querySelector('.border');
let firstBorder = 1;
let secondBorder = 100;
let randomNum;

let guessANumber = ()=>{
    randomNum = randNumber(firstBorder,secondBorder);
  }

 
  let start = () =>{
    document.querySelector('.guessSubmit').style.display = 'none';
    document.querySelector('.guess').style.display = 'inline-block';
    document.querySelector('.more').style.display = 'inline-block';
    document.querySelector('.less').style.display = 'inline-block';
    guessANumber();
    lastGuess();
    guessABorder();
    previousGuess();
    guessedFields.guessCount++;
  }  
  
 let more = () =>{
    if((+randomNum)>firstBorder) firstBorder = (+randomNum);
    guessANumber();
    lastGuess();
    guessABorder();
    previousGuess();
    guessedFields.guessCount++;
  }
  let less = () =>{
    if((+randomNum)<secondBorder) secondBorder = (+randomNum);
    guessANumber();
    lastGuess();
    guessABorder();
    previousGuess();
    guessedFields.guessCount++;
  }
  let guessed = () =>{
    document.querySelector('.success').style.display = 'block';
    document.querySelector('.success').style.background = 'green';
    document.querySelector('.success').textContent = `Success! Computer tried ${guessedFields.guessCount-1} times. Your numer is ${randomNum}.`;
  }
  let previousGuess = () =>{
    if (count === 1) {
      guess.textContent = 'Previous guesses: ';
    }
    guess.textContent += randomNum + ' ';
  }
  let lastGuess = () =>{
    lastResult.textContent = `Your number is: ${randomNum}?`;
  }
  let guessABorder = () =>{
    border.textContent = `Guessing border is from: ${firstBorder} to ${secondBorder}`;
  }