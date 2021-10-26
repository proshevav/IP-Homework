const num = Math.ceil(Math.random() * 10);
console.log(num);
 const guessednum = prompt('Guess the number between 1 and 10!');
 if (guessednum == num)
   document.write('Good work! Number matched.');
  else
   document.write('Not matched');