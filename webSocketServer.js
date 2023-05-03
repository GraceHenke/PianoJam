//npm install ws  wss://
const WebSocket = require('ws');
const express = require('express')
const port = process.env.PORT || 3000

var app  = express();
app.use(express.static('public')); 
var server = app.listen(port, function(){          
});

const wss = new WebSocket.Server({ server:server });

function broadcastToall(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      
      //console.log("The server sent a message to the client");
      client.send(data);
    }
  });
}


wss.on('connection', function connection(wsnewclient) {
  console.log("a new client connected");
  wsnewclient.on('message', function incoming(data) {
    console.log("client just sent a message to the server" , data) //to broadcast or not
      //broadcastToall(data)

      data = JSON.parse(data);

	  if (data.action == "piano-key") {
			// a key was played, broadcast to all the clients
      //console.log("about to start?")
			broadcastToall(data.activate_key);     //"piano-key": "A"  Example Message from Client
	  }
	  
      
      
    }

  );
});