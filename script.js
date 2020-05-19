let board = 
[
	["","","","",""],
	["","","","",""],
	["","","","",""],
	["","","","",""],
	["","","","",""]
];

let players = ["X", "O"];
let ai = players[0];
let human = players[1];
let currentPlayer;
let score;
let w, h;

function setup() {
	createCanvas(500, 500);
	currentPlayer = ai;
	score = 0;
}

function mousePressed() {
	let y = floor(mouseX/w);
	let x = floor(mouseY/h);

	if (currentPlayer == human) {
		if (x < 5 && x >= 0 && y < 5 && y >= 0) {
			if (board[x][y] == "") {
				board[x][y] = currentPlayer;
				currentPlayer = ai;
			}
		}
	}
}

function draw() {
	background(220);

	w = width / 5;
	h = height / 5;

	strokeWeight(2);
	// border
	line(0, 0, width, 0);
	line(0, 0, 0, height);
	line(width, 0, width, height);
	line(0, height, width, height);

	line(w, 0, w, height);
	line(w*2, 0, w*2, height);
	line(w*3, 0, w*3, height);
	line(w*4, 0, w*4, height);

	line(0, h, width, h);
	line(0, h*2, width, h*2);
	line(0, h*3, width, h*3);
	line(0, h*4, width, h*4);
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			let x = j * w + (w / 2);
			let y = i * h + (h / 2);
			if (board[i][j] == players[0]) {
				line(x-(w/3), y+(w/3), x+(w/3), y-(w/3));
				line(x+(w/3), y+(w/3), x-(w/3), y-(w/3));
				
			} else if (board[i][j] == players[1]) {
				ellipseMode(CENTER);
				noFill();
				ellipse(x, y, w*(3/4), h*(3/4));
			}
		}
	}
	let score = setScore();
	if (score == 5) {
		createP("X win");
		noLoop();
	} else if (score == -5) {
		createP("O win");
		noLoop();
	} else if (score == 0) {
		createP("Tie");
		noLoop();
	}
	bestMove();
}

// function move() {

// 	if (currentPlayer == ai) {
// 		let i = floor(random(5));
// 		let j = floor(random(5));

// 		while (board[i][j] != "") {
// 			i = floor(random(5));
// 			j = floor(random(5));
// 		}
// 		board[i][j] = currentPlayer;
// 		currentPlayer = human;
// 	}
// }