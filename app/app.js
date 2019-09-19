function startGame() {
    // startgin a new game
    var messagesElement = document.getElementById("messages");
    messagesElement.innerText = "Welcome to Jurassic Park";
}
document.getElementById("startGame").addEventListener("click", startGame);
