/**
 * print a triangle
 * @param {number} depth - depth of triangle
 */

function triangle(depth) {
	for (let i = 1; i <= depth; i++) {
		console.log("#".repeat(i))
	}
}

triangle(7)

/**
 * fizz 3 buzz 5
 */
function fizzBuzz() {
	for (let i = 1; i <= 100; i++) {
		console.log(
			((i % 3 == 0 ? "Fizz" : "") +
				(i % 5 == 0 ? "Buzz" : ""))
			|| i)
	}
}

fizzBuzz()

/**
 * generate a chessboard
 * @param {number} size 	
 */
function chessboard(size) {
	var board = ""
	for (let i = 1; i <= size; i++) {
		for (let j = 1; j <= size; j++) {
			board += i % 2 == j % 2 ? " " : "#"
		}
		board += "\n"
	}
	console.log(board)
}

chessboard(8)