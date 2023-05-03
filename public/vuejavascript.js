//TO DO:
//How Fix Token Error [x]
//Styling []
//Play Key Once Not FOREVER! [x]

var app = new Vue ({
	el: '#app',

	data: {
		socket: null,
		consent: false
		
	
	},

	methods: {
		
		playKey: function(key) {
				console.log(key);
			if (key == "A1") {
				var A1 = new Audio ('A1.ogg');
				
				A1.play();
			}

			else if (key == "A2") {
				var A2 = new Audio ('A2.ogg');
				
				A2.play();
			}

			else if (key == "A#") {
				var AS = new Audio ('Asharp.ogg');
				
				AS.play();
			}

			else if (key == "A1#") {
				var A2S = new Audio ('A2sharp.ogg');
				
				A2S.play();
			}


			else if (key == "B1") {
				var B1 = new Audio ('B1.ogg');
				B1.play();
			}

			else if (key == "B2") {
				var B2 = new Audio ('B2.ogg');
				B2.play();
			}

			else if (key == "C1") {
				var C1 = new Audio ('C1.ogg')
				C1.play();
			}

			else if (key == "C#") {
				var CS = new Audio ('Csharp.ogg');
				
				CS.play();
			}

			else if (key == "C1#") {
				var C2S = new Audio ('C2sharp.ogg');
				
				C2S.play();
			}

			else if (key == "D1") {
				var D1 = new Audio ('D1.ogg')
				D1.play();

			}

			else if (key == "D2") {
				var D2 = new Audio ('D2.ogg')
				D2.play();

			}

			else if (key == "D#") {
				var DS = new Audio ('Dsharp.ogg');
				
				DS.play();
			}

			else if (key == "D1#") {
				var D2S = new Audio ('D2sharp.ogg');
				
				D2S.play();
			}

			else if (key == "E1") {
				var E1 = new Audio ('E1.ogg')
				
				E1.play();
				
			}

			else if (key == "E2") {
				var E2 = new Audio ('E2.ogg')
				E2.play();
				
			}

			else if (key == "F1") {
				var F1 = new Audio ('F1.ogg')
				F1.play();

				
				
			}

			else if (key == "F2") {
				var F2 = new Audio ('F2.ogg')
				F2.play();

				
				
			}

			else if (key == "F#") {
				var FS = new Audio ('Fsharp.ogg');
				
				FS.play();
			}

			else if (key == "F1#") {
				var F2S = new Audio ('F2sharp.ogg');
				
				F2S.play();
			}

			else if (key == "G1") {
				var G1 = new Audio ('G1.ogg')
				G1.play();
				
			}
			else if (key == "G#") {
				var GS = new Audio ('Gsharp.ogg');
				
				GS.play();
			}

			else if (key == "G1#") {
				var G2S = new Audio ('G2sharp.ogg');
				
				G2S.play();
			}

			else {
				var G2 = new Audio ('G2.ogg')
				G2.play();
			}

			

			

		},

		consentButton: function () {
				this.consent = true;
				
		},
		
		connectSocket: function () {
			this.socket = new WebSocket ("wss://mysterious-basin-81197.herokuapp.com/");  // wss://herokuaddress

			
			this.socket.onmessage = (event) => {
				
				this.recievedKey(event);
				
			}
		},

		recievedKey: function (event) {
			
			var data = event.data;
			this.playKey(data);
		},

		sendKey: function (key)  {
			var data = {
				action: "piano-key",
				activate_key: key
			};

			this.socket.send(JSON.stringify(data));
		},

		
	},

	

	created: function () {
		this.connectSocket();

		
	}

});