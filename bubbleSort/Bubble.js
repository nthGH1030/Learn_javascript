//Wrte a function that Generate random array nubmer of 5
//Wrte a function to perform a bubble sort for 5 numbers
//Print out the result in console

function sort(array)
{
    for (let i = 0; i < array.length - 1 ; i++)
    {
        for (let j = 0; j < array.length - i - 1 ; j++)
        {
            if (array[j] > array[j + 1])
            {
                temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

function printArray(array)
{
    for (let i = 0; i < array.length; i++)
    {
        console.log(array[i] + ' ');
    }
}

function randomArray()
{
    arrayLength = 10;
    array = [];

    for(let i = 0; i < arrayLength; i++)
    {
        let randomNumber = Math.floor((Math.random() * 100) + 1);
        array.push(randomNumber);
    }
    return array;
}

let randomArr = randomArray();
let sortedArray = sort(randomArr);
printArray(sortedArray);