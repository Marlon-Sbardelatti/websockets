const ws = new WebSocket("ws://localhost:8081/ws");

ws.onmessage = function (e) {
	const msg = JSON.parse(e.data);
	const item = document.createElement("li");
	item.textContent = msg.username + ": " + msg.message;
	document.getElementById("messages").appendChild(item);
};

document.getElementById("form").onsubmit = function (e) {
	e.preventDefault();
	const username = document.getElementById("username").value;
	const message = document.getElementById("message").value;
	ws.send(JSON.stringify({ username, message }));
	document.getElementById("message").value = "";
};
