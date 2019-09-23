# Test Toutes Mes Aides

## Rules
* You have until Friday midnight to send the files compressed.
* You can choose to use [Angular](https://angular.io/) or whatever you want.`
* Two views : Signin/Signup + Chat. The design is up to you to decide. Try to do your best. 
* Use the node server for connection and [Socket.io](https://socket.io), The socket will send data after authentication..

## Node Server
* [Node](https://nodejs.org/fr/download/) version: 10.16.0 or later
* To run the server : `np run dev`
* Port: 3000
* API swagger : run the server and ask the endpoints `api-doc`
* User test: `{login:'test', password:'test', uid:'test'}`
* Cors white list : `[ 'http://localhost:4200', 'http://localhost:3001']` if you want to change it, modified it in `cors.config.js`

There is no connection with a DB, so it's fake data. If you stop and run again the server the data will be empty.
There is an auth security, you have to set Authorization with `Bearer {uid}` to access endpoints which are not `auth`
The two events for Socket.io are `'users'` and `'messages'`


## With Angular
* Last version of [Angular](https://angular.io/)
* The service are already made in `/services`. You have to create the two view with the routing and to call the good functions.

## Without Angular
* Please use [Socket.io](https://socket.io) to communicate with the server.
* The socket will send data after authentication.
* Use whatever you want (framework, js Vanilla, jquery, bootstrap ect..)
