const http = require("http");

const port = 3000;

const page = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Rock Paper Scissors</title>
	<style>
		body { font-family: Arial, sans-serif; text-align: center; margin: 40px; }
		button { font-size: 1.1rem; padding: 10px 18px; margin: 6px; cursor: pointer; }
		#result { margin: 24px 0 10px; font-size: 1.2rem; font-weight: bold; }
		#score { color: #444; }
	</style>
</head>
<body>
	<h1>Rock Paper Scissors</h1>
	<p>Choose your move:</p>
	<button onclick="play('rock')">Rock</button>
	<button onclick="play('paper')">Paper</button>
	<button onclick="play('scissors')">Scissors</button>
	<div id="result">Make a choice to start.</div>
	<div id="score">You: 0 | Computer: 0 | Draws: 0</div>

	<script>
		let playerScore = 0;
		let computerScore = 0;
		let draws = 0;

		function play(player) {
			const choices = ['rock', 'paper', 'scissors'];
			const computer = choices[Math.floor(Math.random() * choices.length)];
			let message;

			if (player === computer) {
				draws++;
				message = 'Draw!';
			} else if (
				(player === 'rock' && computer === 'scissors') ||
				(player === 'paper' && computer === 'rock') ||
				(player === 'scissors' && computer === 'paper')
			) {
				playerScore++;
				message = 'You win!';
			} else {
				computerScore++;
				message = 'Computer wins!';
			}

			document.getElementById('result').textContent =
				message + ' You chose ' + player + ', computer chose ' + computer + '.';
			document.getElementById('score').textContent =
				'You: ' + playerScore + ' | Computer: ' + computerScore + ' | Draws: ' + draws;
		}
	</script>
</body>
</html>`;

http.createServer((request, response) => {
	response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
	response.end(page);
}).listen(port, () => {
	console.log(`Rock Paper Scissors running at http://localhost:${port}`);
});
