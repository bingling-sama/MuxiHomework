// function range(start, end) {
// 	var arr = []
// 	for (let i = start; i <= end; i++) {
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
		for (let i = start; i <= end; i += step) {
			arr.push(i)
		}
	} else {
		for (let i = start; i >= end; i += step) {
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
	for (let n of nums) {
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
	for (let i = arr.length - 1; i >= 0; i--) {
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
	for (let i = 0; i <= arr.length / 2; i++) {
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
	if (arr.length > 1) {
		var [first, ...rest] = arr
		return {
			value: first,
			rest: arrayToList(rest)
		}
	} else {
		return {
			value: arr[0],
			rest: null
		}
	}
}

console.log(arrayToList([1, 2, 3, 4, 5]))

function listToArray(list, arr = []) {
	if (list.rest == null) {
		arr.push(list.value)
		return arr
	} else {
		arr.push(list.value)
		return listToArray(list.rest, arr)
	}
}

console.log(listToArray(arrayToList([1, 2, 3, 4, 5])))

function prepend(value, list) {
	return {
		value: value,
		rest: list
	}
}

console.log(prepend(10, prepend(20, null)))

function nth(list, index) {
	var pointer = list
	for (let i = 0; i < index; i++) {
		pointer = list.rest
	}
	return pointer.value
}

console.log(nth(arrayToList([1, 2, 3]), 1))

function deepEqual(a, b) {
	if (a === b) return true
	if (a === null || b === null || a === undefined || b === undefined) {
		return a === b
	}
	if (typeof a !== typeof b) return false
	if (typeof a !== "object" || typeof b !== "object") return a === b
	const ka = Object.keys(a)
	const kb = Object.keys(b)
	if (ka.length !== kb.length) return false

	for (let key of ka) {
		if (!deepEqual(a[key], b[key])) return false
	}

	return true
}


let obj = { here: { is: "an" }, object: 2 };
let obj2 = { here: { is: "an" }, object: 2 }
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
