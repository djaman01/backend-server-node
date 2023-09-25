//This code is written in Node.js and demonstrates how to use the events module to create and handle custom events. 

// Import events module
//Here, you are importing the built-in Node.js module called events. This module provides an EventEmitter class that allows you to work with events in a Node.js application.
var events = require('events');

// Create an eventEmitter object
//You create an instance of the EventEmitter class named eventEmitter. This object will be used to manage and emit events.
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
//Here, you define a function called connectHandler. This function is meant to be an event handler for the 'connection' event. When this event is emitted, the connectHandler function will be executed. In this function, it logs a message and then emits a 'data_received' event using eventEmitter.emit('data_received').
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
//This line associates the 'connection' event with the connectHandler function. When the 'connection' event is emitted later in the code, connectHandler will be called.
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
//Here, you're binding the 'data_received' event to an anonymous function. This function will execute when the 'data_received' event is emitted and simply logs a message.
eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});

// Fire the connection event 
//This line explicitly emits the 'connection' event, which triggers the connectHandler function. As a result, you'll see the "connection successful." message in the console.
eventEmitter.emit('connection');

//After emitting the 'connection' event, this line prints "Program Ended." to the console. It's important to note that this will be printed before or after the event handling functions, depending on the Node.js event loop's execution order.
console.log("Program Ended.");