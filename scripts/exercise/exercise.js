import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export function exercise()
{
    
    //exercise 15a
    const today = dayjs();
    const fiveDaysAfter = today.add(5, 'day');
    const fiveDaysAfterDateString = fiveDaysAfter.format('MMMM D');
    console.log(`Exercise 15a: ${fiveDaysAfterDateString}`);

    //exercise 15b
    const oneMonthAfter = today.add(1, 'month');
    const oneMonthAfterDateString = oneMonthAfter.format('MMMM D');
    console.log(`Exercise 15b: ${oneMonthAfterDateString}`);


    //exercise 15c
    const oneMonthBefore = today.subtract(1, 'month');
    const oneMonthBeforeDateString = oneMonthBefore.format('MMMM D');
    console.log(`Exercise 15c: ${oneMonthBeforeDateString}`);

    //exercise 15d
    const dayOfWeekDateString = today.format('dddd');
    console.log(dayOfWeekDateString);

}