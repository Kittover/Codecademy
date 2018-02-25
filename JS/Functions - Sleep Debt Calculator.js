 const getSleepHours = day => {
    let hours = console.log ('How many hours of sleep did you get on ' + day + '?');
      

  if (day === 'Monday') {
      return 8;
  } else if (day === 'Tuesday'){
      return 8;
  } else if (day === 'Wednesday'){
      return 6;
  } else if (day === 'Thursday'){
      return 7;
  } else if (day === 'Friday'){
      return 7;
  } else if (day === 'Saturday'){
      return 6;
  } else if (day === 'Sunday'){
      return 7;
  }
 
    
}

const getActualSleepHours = () => {
   return (getSleepHours('Monday') + 
   getSleepHours('Tuesday') +  
   getSleepHours('Wednesday') +
   getSleepHours('Thursday') + 
   getSleepHours('Friday') +
   getSleepHours('Saturday') +  
   getSleepHours('Sunday'));
}

const getIdealSleepHours = () => {
    let idealHours = '7';
    console.log("idealHours: " + idealHours);
    return idealHours *7;

}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  console.log("actualSleepHours: " + actualSleepHours);
  console.log("idealSleepHours: " + idealSleepHours);
  
  if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed");
  }
  if (actualSleepHours < idealSleepHours) {
    console.log("You should get some rest");
  }
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of time!");
  }
};

calculateSleepDebt();