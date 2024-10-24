// function range(start, end) {
// 	var arr = []
// 	for (i = start; i <= end; i++) {
// 		arr.push(i)
// 	}
// 	return arr
// }
//
// console.log(range(1, 10))

/**
 * generate a arr from start to end
 * @param {number} start 
 * @param {number} end 
 * @param {number} step - step width
 * @returns {number[]}
 */
function range(start, end, step = 1) {
	var arr = []
	if (start <= end) {
		for (i = start; i <= end; i += step) {
			arr.push(i)
		}
	} else {
		for (i = start; i >= end; i += step) {
			arr.push(i)
		}
	}
	return arr
}

console.log(range(1, 10))
console.log(range(5, 2, -1))

/**
 * calc the sum of an array's element
 * @param {number[]} nums 
 * @returns {number} - sum
 */
function sum(nums) {
	var sum = 0
	for (n of nums) {
		sum += n
	}
	return sum
}

console.log(sum(range(1, 10)))

/**
 * reverse array and return a new array
 * @param {number[]} arr 
 */
function reverseArray(arr) {
	var n = []
	for (i = arr.length - 1; i >= 0; i--) {
		n.push(arr[i])
	}
	return n
}

var myArray = ["A", "B", "C"]
console.log(reverseArray(myArray))
console.log(myArray)

/**
 * reverse array in place
 * @param {number[]} arr 
 */
function reverseArrayInPlace(arr) {
	for (i = 0; i <= arr.length / 2; i++) {
		[arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
	}
}

var arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)

/**
 * generate list with array
 * @param {number[]} arr 
 */
function arrayToList(arr) {
	const [first, ...rest] = arr
	function createNode(value, arr) {
		const [next, ...rest] = arr
		return { value: value, rest: createNode(next, rest) }
	}
	return createNode(first, rest)
}

console.log(arrayToList(1, 2, 3, 4, 5))