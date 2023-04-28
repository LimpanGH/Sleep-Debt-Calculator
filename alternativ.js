
/* OBJECTIVE
1. Calculate if you’re getting enough sleep each week using a sleep debt calculator.
2. The program will determine the actual and ideal hours of sleep for each night of the last week.
3. Finally, it will calculate, in hours, how far you are from your weekly sleep goal. */

/* In this version:

1. getActualSleepHours() could be implemented without calling getSleepHours(). Use literal numbers and the + operator to rewrite getActualSleepHours(). 
It should still return the total actual hours slept in the week.
2. Some people need to sleep longer than others. Rewrite getIdealSleepHours() so that you can pass it an argument, like getIdealSleepHours(8) where 8 is the ideal hours per night. 
Update the call to getIdealSleepHours() in calculateSleepDebt() too.

3. Hint!
Put the daily sleep hours directly into getActualSleepHours().
 - const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

Make idealHours a parameter and multiply it by 7.
 - const getIdealSleepHours = idealHours => idealHours * 7;

When you call the updated function in calculateSleepDebt(), call it like this:
 - const calculateSleepDebt = () => {
  ...
  - const idealSleepHours = getIdealSleepHours(8);
 ...
};



________________________________________________________________________________________
// 1. Determine how many hours of sleep you got each night of the week and get the total sleep hours that you actually slept.
const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;  //no "{}" to make an implicit return (no return-keyword).
// console.log(getActualSleepHours());

// 2. Get the ideal sleep hours that you prefer
const getIdealSleepHours = idealHours => idealHours  * 7;
// console.log(getIdealSleehours());

// 3. Now it’s time to calculate sleep debt.
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours) {
      console.log('You are getting the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You are getting ${actualSleepHours - idealSleepHours} hours more of sleep than you need.`);
    } else {
      console.log(`You need to sleep ${idealSleepHours - actualSleepHours} hours more.`);
    }
}
// console.log(calculateSleepDebt());

// 4. Run the program.
calculateSleepDebt();









