
/**
 * @return {Function}
 */
var createHelloWorld = function () {
	return function (...args) {
		return "Hello World"
	}
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
const f1 = createHelloWorld()
console.log(f1())

const f2 = createHelloWorld([{}, null, 42])
console.log(f2())
