/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
	const t1 = version1.includes("-") ? version1.split("-")[1] : "z"
	let v1 = version1.split("-")[0].split(".").map(v => Number(v))
	const t2 = version2.includes("-") ? version2.split("-")[1] : "z"
	let v2 = version2.split("-")[0].split(".").map(v => Number(v))
	const length = Math.max(v1.length, v2.length)
	for (let i = 0; i < length; i++) {
		if (v1.length <= i) v1.push('0')
		if (v2.length <= i) v2.push('0')
		if (v1[i] < v2[i]) return -1
		if (v1[i] > v2[i]) return 1
	}
	if (t1 < t2) return -1
	if (t1 > t2) return 1
	return 0
};

console.log(compareVersion("1.2", "1.10"));
console.log(compareVersion("1.01", "1.001"));
console.log(compareVersion("1.0", "1.0.0.0"));
console.log(compareVersion("1.0.0-alpha", "1.0.0-beta"));
console.log(compareVersion("1.0.0", "1.0.0-alpha"));
console.log(compareVersion("1.10-beta", "1.2-alpha"));

