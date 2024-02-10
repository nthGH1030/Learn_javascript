import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export function exercise()
{
    
    //exercise 15a
    const today = dayjs();
    const fiveDaysAfter = today.add(5, 'days');
    const fiveDaysAfterDateString = fiveDaysAfter.format('MMMM D');
    console.log(fiveDaysAfterDateString);

    

}