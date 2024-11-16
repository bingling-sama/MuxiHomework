/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
	if (obj.length === 0) return true
	if (Object.keys(obj).length === 0) return true
	return false
};

const obj1 = { "x": 5, "y": 42 }
console.log(isEmpty(obj1));
const obj2 = {}
console.log(isEmpty(obj2));
const obj3 = [null, false, 0]
console.log(isEmpty(obj3));
