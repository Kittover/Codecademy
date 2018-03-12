const getUserChoice = userInput => {
    
    userInput = userInput.toLowerCase();
    
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
        } else {
        console.log('Error!');
        }
  }


const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() *3);
 		
    switch (randomNumber) {
        case 0:
          return 'rock';
        case 1:
          return 'paper';
        case 2:
          return 'scissors';                
    }
 
}
    
    const determineWinner = (userChoice, computerChoice) => {
      if (userChoice === computerChoice) {
        return 'The game is a tie!';
      }  // Cierro userChoice == computerChoice
  
      if (userChoice === 'rock') {
          if (computerChoice === 'paper') {
              return 'The computer won!';
          }else {
              return 'You won!';
          }  // Cierro computerChoice
      } // Cierro userChoice
  
    
      if (userChoice === 'paper') {
          if (computerChoice === 'scissors') {
              return 'The computer won!';
          } else {
              return 'You won!';
          } // Cierro computerChoice
      }  // Cierro userChoice
    
    
    if (userChoice === 'scissors') {
          if (computerChoice === 'rock') {
              return 'The computer won!';
          } else {
              return 'You won!';
          }  // Cierro computerChoice
      }  // Cierro userChoice
  }  // Cierre funcion
    
    
    const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));  
  }
    
    playGame();
