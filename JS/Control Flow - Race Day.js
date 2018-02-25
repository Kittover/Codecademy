let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = false;
let runnerAge = 42;
if (earlyRegister === false){
  console.log(raceNumber += 1000);
}
if (runnerAge >= 18 && earlyRegister){
  console.log('You will race at 9:30am and your race number is ' + raceNumber);
}
if (runnerAge > 18 || earlyRegister){
  console.log('You will race at 11am and your race number is ' + raceNumber);
}
if (runnerAge < 18 && earlyRegister===false){
  console.log('You will race at 12.30pm and your race number is ' + raceNumber); 
}


                
    