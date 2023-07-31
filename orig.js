// OBJECTIVE
// 1. Get actual sleep
// 2. Define Ideal sleep
// 3. Calculate debt, or surplus

/* 2nd version
1. getActualSleepHours() could be implemented without calling getSleepHours(). Use literal numbers and the + operator to rewrite getActualSleepHours(). 
It should still return the total actual hours slept in the week.
2. Some people need to sleep longer than others. Rewrite getIdealSleepHours() so that you can pass it an argument, like getIdealSleepHours(8) where 8 is the ideal hours per night. 
Update the call to getIdealSleepHours() in calculateSleepDebt() too. */

// 1. Actual sleep
let getSleepHours = (day) => {
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
// console.log(getSleepHours('friday'));


/* Version 1 of getActualSleepHours
let getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
// console.log(getActualSleepHours());
*/

// Version 2 of getActualSleepHours
let getActualSleepHours = () => 8+8+8+8+8+8+8;



/* 2.1 Ideal sleep
let getIdealSleepHours = (8) => {
  let idealHours = 2.3;
  return idealHours * 7;  
}
console.log(idealSleepHours());  */

// 2.2 Ideal sleep
const getIdealSleepHours = (idealHours) => idealHours * 7;



// 3. Calculate debt
let calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(7.2);    // calling the function with an argument for it to work with the alternative way in getIdealSleepHours and getActualSleepHours.
  if (actualSleepHours === idealSleepHours) {
    return 'You slept as many hours as you need.';
  } else if (actualSleepHours > idealSleepHours) {
    return (`You slept ${(actualSleepHours - idealSleepHours).toFixed(1)} hours more than you need.`);
  } else if (actualSleepHours < idealSleepHours) {
    return (`You slept ${(idealSleepHours - actualSleepHours).toFixed(1)} hours less than you need.`);
  }
}
 console.log(calculateSleepDebt());










