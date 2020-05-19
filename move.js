let maxDepth = 8;

function bestMove() {
	let move;
	let bestScore = -Infinity;
	let alpha = -Infinity;
	let beta = Infinity;

	let available = 0;

	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (board[i][j] == "") {
				available++;
			}
		}
	}
	if (currentPlayer == ai) {
		if (available == 25) {
			move = {i:2, j:2};
		} else {
			for (let i = 0; i < 5; i++) {
				for (let j = 0; j < 5; j++) {
					if (board[i][j] == "") {
						board[i][j] = ai;
						// let score = minimax(0, alpha, beta, false);
						let score = ABmin(0, alpha, beta);
						board[i][j] = "";
						if (score > bestScore) {
							bestScore = score;
							move = {i, j};
						}
						alpha = max(alpha, bestScore);
						if (beta <= alpha) break;
					}
				}
			}
		}
		board[move.i][move.j] = ai;
		currentPlayer = human;
	}
}

// function minimax(depth, alpha, beta, isMax) {
// 	let score = setScore();

// 	if (score == 5 || score == -5 || score == 0 || depth == maxDepth) return score;
	
// 	let bestScore;
// 	if (isMax) {
// 		bestScore = -Infinity;
// 		for (let i = 0; i < 5; i++) {
// 			for (let j = 0; j < 5; j++) {
// 				if (board[i][j] == "") {
// 					board[i][j] = ai;
// 					let score = minimax(depth+1, alpha, beta, false);
// 					board[i][j] = "";
// 					bestScore = max(score, bestScore);
// 					alpha = max(alpha, bestScore);
// 					if (beta <= alpha) break;
// 				}
// 			}
// 		}
// 		return bestScore;
// 	} else {
// 		bestScore = Infinity;
// 		for (let i = 0; i < 5; i++) {
// 			for (let j = 0; j < 5; j++) {
// 				if (board[i][j] == "") {
// 					board[i][j] = human;
// 					let score = minimax(depth+1, alpha, beta, true);
// 					board[i][j] = "";
// 					bestScore = min(score, bestScore);
// 					beta = min(beta, bestScore);
// 					if (beta <= alpha) break;
// 				}
// 			}
// 		}
// 		return bestScore;
// 	}
// }


function ABmax(depth, alpha, beta) {
	let val = setScore();
	if (val != -1 || depth == maxDepth) return val;

	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (board[i][j] == "") {
				board[i][j] = ai;
				let score = ABmin(depth+1, alpha, beta);
				board[i][j] = "";
				if (score >= beta) return beta; // fail hard beta-cutoff
				if (score > alpha) alpha = score; // alpha acts like max in MiniMax
			}
		}
	}
	return alpha;
}

function ABmin(depth, alpha, beta) {
	let val = setScore();
	if (val != -1 || depth == maxDepth) return val;

	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (board[i][j] == "") {
				board[i][j] = human;
				let score = ABmax(depth+1, alpha, beta);
				board[i][j] = "";
				if (score <= alpha) return alpha; // fail hard alpha-cutoff
				if (score < beta) beta = score; // beta acts like min in MiniMax
			}
		}
	}
	return beta;
}