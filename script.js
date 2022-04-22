//My three seperate arrays
const numArray = [0, 2, 4, 6, 8, 10];
const stringArray = ['hello', 'my', 'name', 'is', 'matthew'];
const boolArray = [true, false, true, true, false];



/* This function determines what type of data is in the array, and adds an extra value at the end
depending on the type */
function magicArray(array) {
    if (typeof (array[0]) === 'boolean') {

        boolArray.push(false);
        console.log('this is the bool array');

    } else if (typeof (array[0]) === 'string') {

        stringArray.push('trigo');
        console.log('this is the string array');

    } else if (typeof (array[0]) === 'number') {

        numArray.push(12);
        console.log('this is the number array');

    }

    return array;
}

//this runs each array to test if it works
console.log(magicArray(numArray));
console.log(magicArray(stringArray));
console.log(magicArray(boolArray));
