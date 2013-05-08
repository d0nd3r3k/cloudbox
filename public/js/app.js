//Cloudbox Js file

$(document).ready(function(){
	var online = false;
	var socket_url = 'http://localhost:8080';

	if(online){
		socket_url = 'http://89.17.121.194:8080/';
	}

	var socket = io.connect(socket_url);

	var serial = $("#meta-data").data('serial');

	socket.emit('boxIsOnline', {'serial':serial});

	/*socket.on('authenticate', function (data){
		alert("Synced to Cloud");
	});*/
});