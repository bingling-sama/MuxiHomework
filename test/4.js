/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
	const ret = await promise1 + await promise2
	return Promise.resolve(ret)
};

addTwoPromises(Promise.resolve(2), Promise.resolve(5)).then(console.log)
addTwoPromises(Promise.resolve(10), Promise.resolve(-12)).then(console.log)

