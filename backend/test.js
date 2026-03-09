import assert from "assert";

function add(a,b){
    return a+b;
}

// basic addition
assert(add(2,3) === 5);
assert(add(10,5) === 15);

// negative numbers
assert(add(-1,-1) === -2);
assert(add(-5,3) === -2);

// zero cases
assert(add(0,5) === 5);
assert(add(0,0) === 0);

// large numbers
assert(add(1000000,2000000) === 3000000);

// decimal numbers
assert(add(2.5,1.5) === 4);

// edge case
assert(add(-10,10) === 0);

console.log("All tests passed successfully ✅");