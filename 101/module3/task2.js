/**
 * compare two number
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function min(a, b) {
	return a < b ? a : b
}

console.log(min(0, 10))
console.log(min(0, -10))

/**
 * is this a even number
 * @param {number} num 
 * @returns {boolean}
 */
function isEven(num) {
	return num % 2 == 0
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

/**
 * read it yourself
 * @param {string} str
 * @returns {number}
 */
function countBs(str) {
	var count = 0
	for (i = 0; i < str.length; i++) {
		if (str[i] == "B") count++
	}
	return count
}

console.log(countBs("BOB"))

/**
 * count how many char in string
 * @param {string} str
 * @param {char} char
 * @returns {number}
 */
function countChar(str, char) {
	var count = 0
	for (i = 0; i < str.length; i++) {
		if (str[i] == char) count++
	}
	return count
}

console.log(countChar("kakkerlak", "k"))
