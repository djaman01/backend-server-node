// let's demonstrates an asynchronous way of reading a file using the fs.readFile function with a callback. 


var fs = require("fs");
//Just like in the previous synchronus example, we import the 'fs' module to work with the file system.

//Instead of fs.readFileSync, this code uses fs.readFile to read the contents of the "input.txt" file. However, unlike fs.readFileSync, fs.readFile operates asynchronously. It accepts a callback function as its second argument, which will be executed when the file reading operation is complete.
fs.readFile('input.txt', function (err, data) {
//this is the callBack function
   if (err) return console.error(err);
  //If an error occurred during the file reading operation, err will contain an error object. The code checks if err is truthy (i.e., an error occurred), and if so, it prints the error message using console.error and exits the callback using return. This prevents the code inside the if block from executing.
   console.log(data.toString());
   //If no error occurred, the data parameter contains the contents of the file as a Buffer object. It is converted to a string using data.toString() and printed to the console using console.log. This is where you see the file's content displayed.
});

console.log("Program Ended");
//After starting the asynchronous file reading operation with fs.readFile, this line of code is executed immediately without waiting for the file reading to complete. It prints "Program Ended" to the console.

//The key difference between this code and the previous example (synchronus.js) is that fs.readFile is non-blocking. It initiates the file reading operation and registers a callback function to be executed when the operation is finished. As a result, "Program Ended" is printed before the file contents because the code continues to execute while the file is being read in the background. When the file reading is complete, the callback function is called, and the file's content is displayed. This asynchronous approach allows your program to remain responsive and handle multiple operations simultaneously.





