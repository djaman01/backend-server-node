//Nous allons créer un server Http avec Node

var http = require("http");
//Here, you're using the require function to import the built-in Node.js http module. This module provides the functionality to create an HTTP server and handle HTTP requests and responses.

http.createServer(function (request, response) {
  
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Send the response body as "Hello World"
  response.end('Great Teacher Jaafar\nAnd Great developer'); //(\n) = newline character, pour revenir à la ligne après la phrase
}).listen(8081); //c'et le port: il doit avoir 4 nombres et supérieur à 3000
//This part of the code creates an HTTP server. It uses the http.createServer method, which takes a callback function as an argument. This function is executed every time a request is made to the server. Inside the callback function:
//response.writeHead(200, {'Content-Type': 'text/plain'}); sets the HTTP response status to 200 (OK) and specifies the content type as plain text.
//response.end('Hello World\n'); sends the text "Hello World" as the response body.

// This line prints a message to the console indicating that the server is running and listening on port 8081 of the local machine (http://127.0.0.1).
//We just have to write on the terminal: node main.js and it will appear
console.log('Server running at http://127.0.0.1:8081/');

//si on fait node main.js et qu'on follow le link, on verra apparaitre le message dans response.end(): c'est le serveur qui aura envoyé ce message au front-end


