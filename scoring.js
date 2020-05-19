function isEquals5(a, b, c, d, e, f) {
	return a == b && b == c && c == d && d == e && e == f;
}

function isEquals4(a, b, c, d, e) {
	return a == b && b == c && c == d && d == e;
}

function isEquals3(a, b, c, d) {
	return a == b && b == c && c == d;
}

function isEquals2(a, b, c) {
	return a == b && b == c;
}

function setScore() {
	let score = -1;

	// X almost win
	for (let i = 0; i < 5; i++) {
		if ((isEquals2(board[i][0], board[i][1], ai) && board[i][2] == "" && board[i][3] == "" && board[i][4] == "") ||
			(isEquals2(board[i][0], board[i][2], ai) && board[i][1] == "" && board[i][3] == "" && board[i][4] == "") ||
			(isEquals2(board[i][0], board[i][3], ai) && board[i][1] == "" && board[i][2] == "" && board[i][4] == "") ||
			(isEquals2(board[i][0], board[i][4], ai) && board[i][1] == "" && board[i][2] == "" && board[i][3] == "") ||
			(isEquals2(board[i][1], board[i][2], ai) && board[i][0] == "" && board[i][3] == "" && board[i][4] == "") ||
			(isEquals2(board[i][1], board[i][3], ai) && board[i][0] == "" && board[i][2] == "" && board[i][4] == "") ||
			(isEquals2(board[i][1], board[i][4], ai) && board[i][0] == "" && board[i][2] == "" && board[i][3] == "") ||
			(isEquals2(board[i][2], board[i][3], ai) && board[i][0] == "" && board[i][1] == "" && board[i][4] == "") ||
			(isEquals2(board[i][2], board[i][4], ai) && board[i][0] == "" && board[i][1] == "" && board[i][3] == "") ||
			(isEquals2(board[i][3], board[i][4], ai) && board[i][0] == "" && board[i][1] == "" && board[i][2] == "")) {
			score = 2;
		}
	}
	for (let i = 0; i < 5; i++) {
		if ((isEquals2(board[0][i], board[1][i], ai) && board[2][i] == "" && board[3][i] == "" && board[4][i] == "") ||
			(isEquals2(board[0][i], board[2][i], ai) && board[1][i] == "" && board[3][i] == "" && board[4][i] == "") ||
			(isEquals2(board[0][i], board[3][i], ai) && board[1][i] == "" && board[2][i] == "" && board[4][i] == "") ||
			(isEquals2(board[0][i], board[4][i], ai) && board[1][i] == "" && board[2][i] == "" && board[3][i] == "") ||
			(isEquals2(board[1][i], board[2][i], ai) && board[0][i] == "" && board[3][i] == "" && board[4][i] == "") ||
			(isEquals2(board[1][i], board[3][i], ai) && board[0][i] == "" && board[2][i] == "" && board[4][i] == "") ||
			(isEquals2(board[1][i], board[4][i], ai) && board[0][i] == "" && board[2][i] == "" && board[3][i] == "") ||
			(isEquals2(board[2][i], board[3][i], ai) && board[0][i] == "" && board[1][i] == "" && board[4][i] == "") ||
			(isEquals2(board[2][i], board[4][i], ai) && board[0][i] == "" && board[1][i] == "" && board[3][i] == "") ||
			(isEquals2(board[3][i], board[4][i], ai) && board[0][i] == "" && board[1][i] == "" && board[2][i] == "")) {
			score = 2;
		}
	}
	if ((isEquals2(board[0][0], board[1][1], ai) && board[2][2] == "" && board[3][3] == "" && board[4][4] == "") ||
		(isEquals2(board[0][0], board[2][2], ai) && board[1][1] == "" && board[3][3] == "" && board[4][4] == "") ||
		(isEquals2(board[0][0], board[3][3], ai) && board[1][1] == "" && board[2][2] == "" && board[4][4] == "") ||
		(isEquals2(board[0][0], board[4][4], ai) && board[1][1] == "" && board[2][2] == "" && board[3][3] == "") ||
		(isEquals2(board[1][1], board[2][2], ai) && board[0][0] == "" && board[3][3] == "" && board[4][4] == "") ||
		(isEquals2(board[1][1], board[3][3], ai) && board[0][0] == "" && board[2][2] == "" && board[4][4] == "") ||
		(isEquals2(board[1][1], board[4][4], ai) && board[0][0] == "" && board[2][2] == "" && board[3][3] == "") ||
		(isEquals2(board[2][2], board[3][3], ai) && board[0][0] == "" && board[1][1] == "" && board[4][4] == "") ||
		(isEquals2(board[2][2], board[4][4], ai) && board[0][0] == "" && board[1][1] == "" && board[3][3] == "") ||
		(isEquals2(board[3][3], board[4][4], ai) && board[0][0] == "" && board[1][1] == "" && board[2][2] == "")) {
		score = 2;
	}
	if ((isEquals2(board[0][4], board[1][3], ai) && board[2][2] == "" && board[3][1] == "" && board[4][0] == "") ||
		(isEquals2(board[0][4], board[2][2], ai) && board[1][3] == "" && board[3][1] == "" && board[4][0] == "") ||
		(isEquals2(board[0][4], board[3][1], ai) && board[1][3] == "" && board[2][2] == "" && board[4][0] == "") ||
		(isEquals2(board[0][4], board[4][0], ai) && board[1][3] == "" && board[2][2] == "" && board[3][1] == "") ||
		(isEquals2(board[1][3], board[2][2], ai) && board[0][4] == "" && board[3][1] == "" && board[4][0] == "") ||
		(isEquals2(board[1][3], board[3][1], ai) && board[0][4] == "" && board[2][2] == "" && board[4][0] == "") ||
		(isEquals2(board[1][3], board[4][0], ai) && board[0][4] == "" && board[2][2] == "" && board[3][1] == "") ||
		(isEquals2(board[2][2], board[3][1], ai) && board[0][4] == "" && board[1][3] == "" && board[4][0] == "") ||
		(isEquals2(board[2][2], board[4][0], ai) && board[0][4] == "" && board[1][3] == "" && board[3][1] == "") ||
		(isEquals2(board[3][1], board[4][0], ai) && board[0][4] == "" && board[1][3] == "" && board[2][2] == "")) {
		score = 2;
	}
	
	for (let i = 0; i < 5; i++) {
		if ((isEquals3(board[i][0], board[i][1], board[i][2], ai) && board[i][3] == "" && board[i][4] == "") ||
			(isEquals3(board[i][0], board[i][1], board[i][3], ai) && board[i][2] == "" && board[i][4] == "") ||
			(isEquals3(board[i][0], board[i][1], board[i][4], ai) && board[i][2] == "" && board[i][3] == "") ||
			(isEquals3(board[i][0], board[i][2], board[i][3], ai) && board[i][1] == "" && board[i][4] == "") ||
			(isEquals3(board[i][0], board[i][2], board[i][4], ai) && board[i][1] == "" && board[i][3] == "") ||
			(isEquals3(board[i][0], board[i][3], board[i][4], ai) && board[i][1] == "" && board[i][2] == "") ||
			(isEquals3(board[i][1], board[i][2], board[i][3], ai) && board[i][0] == "" && board[i][4] == "") ||
			(isEquals3(board[i][1], board[i][2], board[i][4], ai) && board[i][0] == "" && board[i][3] == "") ||
			(isEquals3(board[i][1], board[i][3], board[i][4], ai) && board[i][0] == "" && board[i][2] == "") ||
			(isEquals3(board[i][2], board[i][3], board[i][4], ai) && board[i][0] == "" && board[i][1] == "")) {
			score = 3;
		}
	}
	for (let i = 0; i < 5; i++) {
		if ((isEquals3(board[0][i], board[1][i], board[2][i], ai) && board[3][i] == "" && board[4][i] == "") ||
			(isEquals3(board[0][i], board[1][i], board[3][i], ai) && board[2][i] == "" && board[4][i] == "") ||
			(isEquals3(board[0][i], board[1][i], board[4][i], ai) && board[2][i] == "" && board[3][i] == "") ||
			(isEquals3(board[0][i], board[2][i], board[3][i], ai) && board[1][i] == "" && board[4][i] == "") ||
			(isEquals3(board[0][i], board[2][i], board[4][i], ai) && board[1][i] == "" && board[3][i] == "") ||
			(isEquals3(board[0][i], board[3][i], board[4][i], ai) && board[1][i] == "" && board[2][i] == "") ||
			(isEquals3(board[1][i], board[2][i], board[3][i], ai) && board[0][i] == "" && board[4][i] == "") ||
			(isEquals3(board[1][i], board[2][i], board[4][i], ai) && board[0][i] == "" && board[3][i] == "") ||
			(isEquals3(board[1][i], board[3][i], board[4][i], ai) && board[0][i] == "" && board[2][i] == "") ||
			(isEquals3(board[2][i], board[3][i], board[4][i], ai) && board[0][i] == "" && board[1][i] == "")) {
			score = 3;
		}
	}
	if ((isEquals3(board[0][0], board[1][1], board[2][2], ai) && board[3][3] == "" && board[4][4] == "") ||
		(isEquals3(board[0][0], board[1][1], board[3][3], ai) && board[2][2] == "" && board[4][4] == "") ||
		(isEquals3(board[0][0], board[1][1], board[4][4], ai) && board[2][2] == "" && board[3][3] == "") ||
		(isEquals3(board[0][0], board[2][2], board[3][3], ai) && board[1][1] == "" && board[4][4] == "") ||
		(isEquals3(board[0][0], board[2][2], board[4][4], ai) && board[1][1] == "" && board[3][3] == "") ||
		(isEquals3(board[0][0], board[3][3], board[4][4], ai) && board[1][1] == "" && board[2][2] == "") ||
		(isEquals3(board[1][1], board[2][2], board[3][3], ai) && board[0][0] == "" && board[4][4] == "") ||
		(isEquals3(board[1][1], board[2][2], board[4][4], ai) && board[0][0] == "" && board[3][3] == "") ||
		(isEquals3(board[1][1], board[3][3], board[4][4], ai) && board[0][0] == "" && board[2][2] == "") ||
		(isEquals3(board[2][2], board[3][3], board[4][4], ai) && board[0][0] == "" && board[1][1] == "")) {
		score = 3;
	}
	if ((isEquals3(board[0][4], board[1][3], board[2][2], ai) && board[3][1] == "" && board[4][0] == "") ||
		(isEquals3(board[0][4], board[1][3], board[3][1], ai) && board[2][2] == "" && board[4][0] == "") ||
		(isEquals3(board[0][4], board[1][3], board[4][0], ai) && board[2][2] == "" && board[3][1] == "") ||
		(isEquals3(board[0][4], board[2][2], board[3][1], ai) && board[1][3] == "" && board[4][0] == "") ||
		(isEquals3(board[0][4], board[2][2], board[4][0], ai) && board[1][3] == "" && board[3][1] == "") ||
		(isEquals3(board[0][4], board[3][1], board[4][0], ai) && board[1][3] == "" && board[2][2] == "") ||
		(isEquals3(board[1][3], board[2][2], board[3][1], ai) && board[0][4] == "" && board[4][0] == "") ||
		(isEquals3(board[1][3], board[2][2], board[4][0], ai) && board[0][4] == "" && board[3][1] == "") ||
		(isEquals3(board[1][3], board[3][1], board[4][0], ai) && board[0][4] == "" && board[2][2] == "") ||
		(isEquals3(board[2][2], board[3][1], board[4][0], ai) && board[0][4] == "" && board[1][3] == "")) {
		score = 3;
	}

	for (let i = 0; i < 5; i++) {
		if ((isEquals4(board[i][0], board[i][1], board[i][2], board[i][3], ai) && board[i][4] == "") ||
			(isEquals4(board[i][0], board[i][1], board[i][2], board[i][4], ai) && board[i][3] == "") ||
			(isEquals4(board[i][0], board[i][1], board[i][3], board[i][4], ai) && board[i][2] == "") ||
			(isEquals4(board[i][0], board[i][2], board[i][3], board[i][4], ai) && board[i][1] == "") ||
			(isEquals4(board[i][4], board[i][1], board[i][2], board[i][3], ai) && board[i][0] == "")) {
			score = 4;
		}
	}
	for (let i = 0; i < 5; i++) {
		if ((isEquals4(board[0][i], board[1][i], board[2][i], board[3][i], ai) && board[4][i] == "") ||
			(isEquals4(board[0][i], board[1][i], board[2][i], board[4][i], ai) && board[3][i] == "") ||
			(isEquals4(board[0][i], board[1][i], board[3][i], board[4][i], ai) && board[2][i] == "") ||
			(isEquals4(board[0][i], board[2][i], board[3][i], board[4][i], ai) && board[1][i] == "") ||
			(isEquals4(board[4][i], board[1][i], board[2][i], board[3][i], ai) && board[0][i] == "")) {
			score = 4;
		}
	}
	if ((isEquals4(board[0][0], board[1][1], board[2][2], board[3][3], ai) && board[4][4] == "") ||
		(isEquals4(board[0][0], board[1][1], board[2][2], board[4][4], ai) && board[3][3] == "") ||
		(isEquals4(board[0][0], board[1][1], board[3][3], board[4][4], ai) && board[2][2] == "") ||
		(isEquals4(board[0][0], board[4][4], board[2][2], board[3][3], ai) && board[1][1] == "") ||
		(isEquals4(board[4][4], board[1][1], board[2][2], board[3][3], ai) && board[0][0] == "")) {
		score = 4;
	}
	if ((isEquals4(board[4][0], board[3][1], board[2][2], board[1][3], ai) && board[4][0] == "") ||
		(isEquals4(board[4][0], board[3][1], board[2][2], board[0][4], ai) && board[3][1] == "") ||
		(isEquals4(board[4][0], board[0][4], board[2][2], board[1][3], ai) && board[2][2] == "") ||
		(isEquals4(board[0][4], board[3][1], board[2][2], board[1][3], ai) && board[1][3] == "") ||
		(isEquals4(board[4][0], board[3][1], board[0][4], board[1][3], ai) && board[0][4] == "")) {
		score = 4;
	}

	// X win
	for (let i = 0; i < 5; i++) {
		if (isEquals5(board[i][0], board[i][1], board[i][2], board[i][3], board[i][4], ai)) {
			score = 5;
		}
	}
	for (let i = 0; i < 5; i++) {
		if (isEquals5(board[0][i], board[1][i], board[2][i], board[3][i], board[4][i], ai)) {
			score = 5;
		}
	}
	if (isEquals5(board[0][0], board[1][1], board[2][2], board[3][3], board[4][4], ai)) {
		score = 5;
	}
	if (isEquals5(board[4][0], board[3][1], board[2][2], board[1][3], board[0][4], ai)) {
		score = 5;
	}

	// O almost win
	for (let i = 0; i < 5; i++) {
		if ((isEquals2(board[i][0], board[i][1], human) && board[i][2] == "" && board[i][3] == "" && board[i][4] == "") ||
			(isEquals2(board[i][0], board[i][2], human) && board[i][1] == "" && board[i][3] == "" && board[i][4] == "") ||
			(isEquals2(board[i][0], board[i][3], human) && board[i][1] == "" && board[i][2] == "" && board[i][4] == "") ||
			(isEquals2(board[i][0], board[i][4], human) && board[i][1] == "" && board[i][2] == "" && board[i][3] == "") ||
			(isEquals2(board[i][1], board[i][2], human) && board[i][0] == "" && board[i][3] == "" && board[i][4] == "") ||
			(isEquals2(board[i][1], board[i][3], human) && board[i][0] == "" && board[i][2] == "" && board[i][4] == "") ||
			(isEquals2(board[i][1], board[i][4], human) && board[i][0] == "" && board[i][2] == "" && board[i][3] == "") ||
			(isEquals2(board[i][2], board[i][3], human) && board[i][0] == "" && board[i][1] == "" && board[i][4] == "") ||
			(isEquals2(board[i][2], board[i][4], human) && board[i][0] == "" && board[i][1] == "" && board[i][3] == "") ||
			(isEquals2(board[i][3], board[i][4], human) && board[i][0] == "" && board[i][1] == "" && board[i][2] == "")) {
			score = -2;
		}
	}
	for (let i = 0; i < 5; i++) {
		if ((isEquals2(board[0][i], board[1][i], human) && board[2][i] == "" && board[3][i] == "" && board[4][i] == "") ||
			(isEquals2(board[0][i], board[2][i], human) && board[1][i] == "" && board[3][i] == "" && board[4][i] == "") ||
			(isEquals2(board[0][i], board[3][i], human) && board[1][i] == "" && board[2][i] == "" && board[4][i] == "") ||
			(isEquals2(board[0][i], board[4][i], human) && board[1][i] == "" && board[2][i] == "" && board[3][i] == "") ||
			(isEquals2(board[1][i], board[2][i], human) && board[0][i] == "" && board[3][i] == "" && board[4][i] == "") ||
			(isEquals2(board[1][i], board[3][i], human) && board[0][i] == "" && board[2][i] == "" && board[4][i] == "") ||
			(isEquals2(board[1][i], board[4][i], human) && board[0][i] == "" && board[2][i] == "" && board[3][i] == "") ||
			(isEquals2(board[2][i], board[3][i], human) && board[0][i] == "" && board[1][i] == "" && board[4][i] == "") ||
			(isEquals2(board[2][i], board[4][i], human) && board[0][i] == "" && board[1][i] == "" && board[3][i] == "") ||
			(isEquals2(board[3][i], board[4][i], human) && board[0][i] == "" && board[1][i] == "" && board[2][i] == "")) {
			score = -2;
		}
	}
	if ((isEquals2(board[0][0], board[1][1], human) && board[2][2] == "" && board[3][3] == "" && board[4][4] == "") ||
		(isEquals2(board[0][0], board[2][2], human) && board[1][1] == "" && board[3][3] == "" && board[4][4] == "") ||
		(isEquals2(board[0][0], board[3][3], human) && board[1][1] == "" && board[2][2] == "" && board[4][4] == "") ||
		(isEquals2(board[0][0], board[4][4], human) && board[1][1] == "" && board[2][2] == "" && board[3][3] == "") ||
		(isEquals2(board[1][1], board[2][2], human) && board[0][0] == "" && board[3][3] == "" && board[4][4] == "") ||
		(isEquals2(board[1][1], board[3][3], human) && board[0][0] == "" && board[2][2] == "" && board[4][4] == "") ||
		(isEquals2(board[1][1], board[4][4], human) && board[0][0] == "" && board[2][2] == "" && board[3][3] == "") ||
		(isEquals2(board[2][2], board[3][3], human) && board[0][0] == "" && board[1][1] == "" && board[4][4] == "") ||
		(isEquals2(board[2][2], board[4][4], human) && board[0][0] == "" && board[1][1] == "" && board[3][3] == "") ||
		(isEquals2(board[3][3], board[4][4], human) && board[0][0] == "" && board[1][1] == "" && board[2][2] == "")) {
		score = -2;
	}
	if ((isEquals2(board[0][4], board[1][3], human) && board[2][2] == "" && board[3][1] == "" && board[4][0] == "") ||
		(isEquals2(board[0][4], board[2][2], human) && board[1][3] == "" && board[3][1] == "" && board[4][0] == "") ||
		(isEquals2(board[0][4], board[3][1], human) && board[1][3] == "" && board[2][2] == "" && board[4][0] == "") ||
		(isEquals2(board[0][4], board[4][0], human) && board[1][3] == "" && board[2][2] == "" && board[3][1] == "") ||
		(isEquals2(board[1][3], board[2][2], human) && board[0][4] == "" && board[3][1] == "" && board[4][0] == "") ||
		(isEquals2(board[1][3], board[3][1], human) && board[0][4] == "" && board[2][2] == "" && board[4][0] == "") ||
		(isEquals2(board[1][3], board[4][0], human) && board[0][4] == "" && board[2][2] == "" && board[3][1] == "") ||
		(isEquals2(board[2][2], board[3][1], human) && board[0][4] == "" && board[1][3] == "" && board[4][0] == "") ||
		(isEquals2(board[2][2], board[4][0], human) && board[0][4] == "" && board[1][3] == "" && board[3][1] == "") ||
		(isEquals2(board[3][1], board[4][0], human) && board[0][4] == "" && board[1][3] == "" && board[2][2] == "")) {
		score = -2;
	}

	for (let i = 0; i < 5; i++) {
		if ((isEquals3(board[i][0], board[i][1], board[i][2], human) && board[i][3] == "" && board[i][4] == "") ||
			(isEquals3(board[i][0], board[i][1], board[i][3], human) && board[i][2] == "" && board[i][4] == "") ||
			(isEquals3(board[i][0], board[i][1], board[i][4], human) && board[i][2] == "" && board[i][3] == "") ||
			(isEquals3(board[i][0], board[i][2], board[i][3], human) && board[i][1] == "" && board[i][4] == "") ||
			(isEquals3(board[i][0], board[i][2], board[i][4], human) && board[i][1] == "" && board[i][3] == "") ||
			(isEquals3(board[i][0], board[i][3], board[i][4], human) && board[i][1] == "" && board[i][2] == "") ||
			(isEquals3(board[i][1], board[i][2], board[i][3], human) && board[i][0] == "" && board[i][4] == "") ||
			(isEquals3(board[i][1], board[i][2], board[i][4], human) && board[i][0] == "" && board[i][3] == "") ||
			(isEquals3(board[i][1], board[i][3], board[i][4], human) && board[i][0] == "" && board[i][2] == "") ||
			(isEquals3(board[i][2], board[i][3], board[i][4], human) && board[i][0] == "" && board[i][1] == "")) {
			score = -3;
		}
	}
	for (let i = 0; i < 5; i++) {
		if ((isEquals3(board[0][i], board[1][i], board[2][i], human) && board[3][i] == "" && board[4][i] == "") ||
			(isEquals3(board[0][i], board[1][i], board[3][i], human) && board[2][i] == "" && board[4][i] == "") ||
			(isEquals3(board[0][i], board[1][i], board[4][i], human) && board[2][i] == "" && board[3][i] == "") ||
			(isEquals3(board[0][i], board[2][i], board[3][i], human) && board[1][i] == "" && board[4][i] == "") ||
			(isEquals3(board[0][i], board[2][i], board[4][i], human) && board[1][i] == "" && board[3][i] == "") ||
			(isEquals3(board[0][i], board[3][i], board[4][i], human) && board[1][i] == "" && board[2][i] == "") ||
			(isEquals3(board[1][i], board[2][i], board[3][i], human) && board[0][i] == "" && board[4][i] == "") ||
			(isEquals3(board[1][i], board[2][i], board[4][i], human) && board[0][i] == "" && board[3][i] == "") ||
			(isEquals3(board[1][i], board[3][i], board[4][i], human) && board[0][i] == "" && board[2][i] == "") ||
			(isEquals3(board[2][i], board[3][i], board[4][i], human) && board[0][i] == "" && board[1][i] == "")) {
			score = -3;
		}
	}
	if ((isEquals3(board[0][0], board[1][1], board[2][2], human) && board[3][3] == "" && board[4][4] == "") ||
		(isEquals3(board[0][0], board[1][1], board[3][3], human) && board[2][2] == "" && board[4][4] == "") ||
		(isEquals3(board[0][0], board[1][1], board[4][4], human) && board[2][2] == "" && board[3][3] == "") ||
		(isEquals3(board[0][0], board[2][2], board[3][3], human) && board[1][1] == "" && board[4][4] == "") ||
		(isEquals3(board[0][0], board[2][2], board[4][4], human) && board[1][1] == "" && board[3][3] == "") ||
		(isEquals3(board[0][0], board[3][3], board[4][4], human) && board[1][1] == "" && board[2][2] == "") ||
		(isEquals3(board[1][1], board[2][2], board[3][3], human) && board[0][0] == "" && board[4][4] == "") ||
		(isEquals3(board[1][1], board[2][2], board[4][4], human) && board[0][0] == "" && board[3][3] == "") ||
		(isEquals3(board[1][1], board[3][3], board[4][4], human) && board[0][0] == "" && board[2][2] == "") ||
		(isEquals3(board[2][2], board[3][3], board[4][4], human) && board[0][0] == "" && board[1][1] == "")) {
		score = -3;
	}
	if ((isEquals3(board[0][4], board[1][3], board[2][2], human) && board[3][1] == "" && board[4][0] == "") ||
		(isEquals3(board[0][4], board[1][3], board[3][1], human) && board[2][2] == "" && board[4][0] == "") ||
		(isEquals3(board[0][4], board[1][3], board[4][0], human) && board[2][2] == "" && board[3][1] == "") ||
		(isEquals3(board[0][4], board[2][2], board[3][1], human) && board[1][3] == "" && board[4][0] == "") ||
		(isEquals3(board[0][4], board[2][2], board[4][0], human) && board[1][3] == "" && board[3][1] == "") ||
		(isEquals3(board[0][4], board[3][1], board[4][0], human) && board[1][3] == "" && board[2][2] == "") ||
		(isEquals3(board[1][3], board[2][2], board[3][1], human) && board[0][4] == "" && board[4][0] == "") ||
		(isEquals3(board[1][3], board[2][2], board[4][0], human) && board[0][4] == "" && board[3][1] == "") ||
		(isEquals3(board[1][3], board[3][1], board[4][0], human) && board[0][4] == "" && board[2][2] == "") ||
		(isEquals3(board[2][2], board[3][1], board[4][0], human) && board[0][4] == "" && board[1][3] == "")) {
		score = -3;
	}

	for (let i = 0; i < 5; i++) {
		if ((isEquals4(board[i][0], board[i][1], board[i][2], board[i][3], human) && board[i][4] == "") ||
			(isEquals4(board[i][0], board[i][1], board[i][2], board[i][4], human) && board[i][3] == "") ||
			(isEquals4(board[i][0], board[i][1], board[i][3], board[i][4], human) && board[i][2] == "") ||
			(isEquals4(board[i][0], board[i][2], board[i][3], board[i][4], human) && board[i][1] == "") ||
			(isEquals4(board[i][4], board[i][1], board[i][2], board[i][3], human) && board[i][0] == "")) {
			score = -4;
		}
	}
	for (let i = 0; i < 5; i++) {
		if ((isEquals4(board[0][i], board[1][i], board[2][i], board[3][i], human) && board[4][i] == "") ||
			(isEquals4(board[0][i], board[1][i], board[2][i], board[4][i], human) && board[3][i] == "") ||
			(isEquals4(board[0][i], board[1][i], board[3][i], board[4][i], human) && board[2][i] == "") ||
			(isEquals4(board[0][i], board[2][i], board[3][i], board[4][i], human) && board[1][i] == "") ||
			(isEquals4(board[4][i], board[1][i], board[2][i], board[3][i], human) && board[0][i] == "")) {
			score = -4;
		}
	}
	if ((isEquals4(board[0][0], board[1][1], board[2][2], board[3][3], human) && board[4][4] == "") ||
		(isEquals4(board[0][0], board[1][1], board[2][2], board[4][4], human) && board[3][3] == "") ||
		(isEquals4(board[0][0], board[1][1], board[3][3], board[4][4], human) && board[2][2] == "") ||
		(isEquals4(board[0][0], board[4][4], board[2][2], board[3][3], human) && board[1][1] == "") ||
		(isEquals4(board[4][4], board[1][1], board[2][2], board[3][3], human) && board[0][0] == "")) {
		score = -4;
	}
	if ((isEquals4(board[4][0], board[3][1], board[2][2], board[1][3], human) && board[4][0] == "") ||
		(isEquals4(board[4][0], board[3][1], board[2][2], board[0][4], human) && board[3][1] == "") ||
		(isEquals4(board[4][0], board[0][4], board[2][2], board[1][3], human) && board[2][2] == "") ||
		(isEquals4(board[0][4], board[3][1], board[2][2], board[1][3], human) && board[1][3] == "") ||
		(isEquals4(board[4][0], board[3][1], board[0][4], board[1][3], human) && board[0][4] == "")) {
		score = -4;
	}

	// O win
	for (let i = 0; i < 5; i++) {
		if (isEquals5(board[i][0], board[i][1], board[i][2], board[i][3], board[i][4], human)) {
			score = -5;
		}
	}
	for (let i = 0; i < 5; i++) {
		if (isEquals5(board[0][i], board[1][i], board[2][i], board[3][i], board[4][i], human)) {
			score = -5;
		}
	}
	if (isEquals5(board[0][0], board[1][1], board[2][2], board[3][3], board[4][4], human)) {
		score = -5;
	}
	if (isEquals5(board[4][0], board[3][1], board[2][2], board[1][3], board[0][4], human)) {
		score = -5;
	}

	let count = 0;
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (board[i][j] != "") count++;
		}
	}
	if (score == -1 && count == 25) score = 0;

	return score;
}