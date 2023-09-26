function printHello() {
  console.log( "Hello, World!");
}

// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);

// Now clear the timer
clearTimeout(t);

//Verify the output where you will not find anything printed.
//It ereases the code set in the setTimeout function