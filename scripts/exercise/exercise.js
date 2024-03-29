import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {isWeekendExerciseF} from './exercise15f.js';
import {isWeekendExerciseF as isSatSun} from './exercise15f.js';

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
    console.log(`Exercise 15d : ${dayOfWeekDateString}`);

    //exercise 15e
    function isWeekend(dayjsObject)
    {
        const dayOfWeekDateString = dayjsObject.format('dddd');
        if (dayOfWeekDateString === 'Sunday' || 'Saturaday')
        {
            return dayOfWeekDateString
        }
        
    }

    console.log(`Exercise 15e : ${isWeekend(today)}`);

    //exercise 15f
    console.log(`Exercise 15f : ${isWeekendExerciseF(today)}`);

    //exercise 15g
    console.log(`Exercise 15g : ${isSatSun(today)}`);

}
