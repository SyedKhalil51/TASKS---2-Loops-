//Suppose you are given an array: [1, 8, 7, 3, 2, 9, 10, 12]. You need to find out whether a number is prime or not (Hint: a prime number is a number that is divisible by 1 and itself). What approach would you take to do that? Support it with the relevant code.

var ary = [1, 8, 7, 3, 2, 9, 10, 12];
let isPrime = true;

// check if number is equal to 1
if (ary === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (ary > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < ary; i++) {
        if (ary % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${ary} is a prime number`);
    } else {
        console.log(`${ary} is a not prime number`);
    }
}

//You are given an array of pet animals like [‘cat’, ‘rabbit’, ‘pigeon’, ‘parrot’, ‘goldfish’]. You need to loop over it and then if you encounter the name of rabbit, print out ‘this is rabbit’. When you don’t get the name of a rabbit, print ‘this is not a rabbit’. 



//Consider you are given an array [2,0,1,6,45,89]. You need to find the largest element in the array. How’d you do that?
// Consider the above array again and find the smallest element in the array.


var array_min_max = [2,0,1,6,45,89];

console.log(Math.max(...array_min_max));
console.log(Math.min(...array_min_max));


