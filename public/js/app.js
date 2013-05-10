//; Js file

$(document).ready(function(){
	var online = true;
	var socket_url = 'http://localhost:8080';

	if(online){
		socket_url = 'http://50.116.27.203:8080';
	}

	var socket = io.connect(socket_url);

	var serial = $("#meta-data").data('serial');

	socket.emit('boxIsOnline', {'serial':serial});

	socket.on('syncOnBox', function (data){
		//alert("Images Synced");
		
		var html = "";
		$(data[1]).each(function(i, media){
			html +=	"<li><img src='"+media.medium+"' /></li>";
		})
		$('ul.images').html(html);
	});
});