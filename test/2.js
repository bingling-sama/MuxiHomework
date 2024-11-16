/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	for (let i in nums) {
		if (nums[i] === 0) {
			nums.push(0)
			nums.splice(i, 1)
		}
	}
};

const nums1 = [0, 1, 0, 3, 12]
moveZeroes(nums1)
console.log(nums1)
const nums2 = [0]
moveZeroes(nums2)
console.log(nums2)