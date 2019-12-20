let randNumber = (min,max)=>{
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

    let inputNum = document.querySelector('.inputNum');
    let submit = document.querySelector('.submit');
    let count = 1;
    let guess = document.querySelector('.guess');
    let lastGuess = document.querySelector('.lastGuess');
    let border = document.querySelector('.border');
    let randomNum = randNumber(1,100);
    let firstBorder = 1;
    let secondBorder = 100;
    console.log(randomNum);
 
 let checkGuess = ()=>{
   let userGuess = Math.round(Number(inputNum.value));

   if (count === 1) {
     guess.textContent = 'Previous guess: ';
   }
 
   guess.textContent += userGuess + ' ';
 
   if (userGuess === randomNum) {
    lastGuess.textContent = `Congrats! You tried ${+count} times.`;
   } else {
    lastGuess.textContent = 'Wrong!';

     if(userGuess < randomNum) {
       if((+userGuess)> firstBorder)firstBorder = (+userGuess);
     }

     if(userGuess > randomNum) {
       if((+userGuess)<secondBorder) secondBorder = (+userGuess);
     }
   }
   
   border.textContent = `Guessing border is from: ${firstBorder} to ${secondBorder}`;
   count++;
   inputNum.value = '';
   inputNum.focus();
 }
 submit.addEventListener('click', checkGuess);