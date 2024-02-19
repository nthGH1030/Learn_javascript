export function isWeekendExerciseF(dayjsObject)
{
    const dayOfWeekDateString = dayjsObject.format('dddd');
    if (dayOfWeekDateString === 'Sunday' || 'Saturaday')
    {
        return dayOfWeekDateString
    }
    
}