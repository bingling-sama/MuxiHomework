/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	for (let n of nums) {
		if (nums.filter(i => i === n).length === 1) return n
	}
};

const nums1 = [2, 2, 1]
console.log(singleNumber(nums1))
const nums2 = [4, 1, 2, 1, 2]
console.log(singleNumber(nums2))
const nums3 = [1]
console.log(singleNumber(nums3))
