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
		var mediaObj = [];
		
		$(data[1]).each(function(i, media){
			mediaObj.push({id: i, url: media});
			html +=	"<li><img src='"+media.medium+"' /></li>";
		})
		$('ul.images').html(html);
		
		$.ajax({
		  type: "POST",
		  dataType:"application/json",
		  url: "/cloudbox/sync",
		  data: JSON.stringify(mediaObj)
		}).done(function( msg ) {
		 	 console.log(msg);
		});
		
	});
});