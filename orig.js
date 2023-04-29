/* OBJECTIVE
1. Calculate if you’re getting enough sleep each week using a sleep debt calculator.
2. The program will determine the actual and ideal hours of sleep for each night of the last week.
3. Finally, it will calculate, in hours, how far you are from your weekly sleep goal. */


// 1. Determine how many hours of sleep you got each night of the week.
const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
  }
}
//console.log(getSleepHours('friday'));

// 2. Get the total sleep hours that you actually slept
const getActualSleepHours = () => //no "{}" to make an implicit return (no return-keyword).
  getSleepHours('monday')
  + getSleepHours('tuesday')
  + getSleepHours('wednesday')
  + getSleepHours('thursday')
  + getSleepHours('friday')
  + getSleepHours('friday')
  + getSleepHours('saturday') 
// console.log(getActualSleepHours());

// 3 Get the ideal sleep hours that you prefer
const getIdealSleepHours = () => {
  const idealHours = 8;
    return idealHours * 7;
}
// console.log(getIdealSleehours());

// 4. Calculate the sleep debt, if any.
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You are getting the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You are getting ${actualSleepHours - idealSleepHours} hours more of sleep than you need.`);
    } else {
      console.log(`You need to sleep ${idealSleepHours - actualSleepHours} hours more.`);
    }
}
// console.log(calculateSleepDebt());

// Run your program.
calculateSleepDebt();









