let userName = 'Rocio';
userName ? console.log('Hello, userName!') : console.log('Hello!');
let userQuestion = 'Will I ever learn Javascript?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
  case 0:
    eightball = 'It is certain';
    break;
  case 1:
    eightball = 'It is decidely so';
    break;
  case 2:
    eightball = 'Reply hazy try again';
    break;
  case 3:
    eightball = 'Cannot predict now';
    break;
  case 4:
    eightball = "Don't count on it";
    break;
  case 5:
    eightball = 'My sources say no';
    break;
  case 6:
    eightball = 'Esto es una mierda';
    break;
  case 7:
    eightball = 'Te vas a cagar';
    break;
  case 8:
    eightball = 'Tengo cosas mejores que adivinar';
    break;
  }
console.log('The user asked: ' + userQuestion);
console.log('The eight ball aswered: ' + eightBall);