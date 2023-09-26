//This code is written in Node.js and demonstrates the use of the events module to create and manage custom events and event listeners.

//In this step, the events module is imported. This module is built into Node.js and provides a way to work with events and event-driven programming.
var events = require('events');

//Here, an eventEmitter object is created using the EventEmitter constructor from the events module. This object will be used to emit events and manage event listeners.
var eventEmitter = new events.EventEmitter();

//This code adds an event listener to the eventEmitter object. It listens for the event named 'connection'. When the 'connection' event is emitted, the provided function is executed, which logs the message "hello connection" to the console.
eventEmitter.on('connection',function(){
    console.log("hello connection")
});

//This part of the code counts the number of listeners attached to the 'connection' event using the listenerCount method from the EventEmitter class. The result is stored in the eventListeners variable, and then the number of listeners is logged to the console.
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection'); //listenerCount est barré car obsolète: vs code nous informe qu'on peut utiliser autre chose
console.log(eventListeners + " Listner(s) listening to connection event");

//To summarize, this code sets up an event listener for a custom 'connection' event using the events module in Node.js. When the 'connection' event is emitted, it prints "hello connection" to the console. The code also checks and logs the number of listeners listening to the 'connection' event.
