/**
@param {number} x
@return {boolean}
*/
var isPalindrome = function (x) {
	var s = x.toString()
	var arr = s.split("")
	var ret = ""
	for (let i = arr.length - 1; i >= 0; i--) {
		ret += arr[i]
	}
	return s === ret
};

/**
Definition for singly-linked list.
function ListNode(val, next) {
		this.val = (val===undefined ? 0 : val)
		this.next = (next===undefined ? null : next)
}
*/
/**
@param {ListNode} head
@param {number} n
@return {ListNode}
*/
var removeNthFromEnd = function (head, n) {
	var pre = ListNode(0, head)
	var start = pre
	var end = pre
	while (n != 0) {
		start = start.next
		n--
	}
	while (start.next != null) {
		start = start.next
		end = end.next
	}
	end.next = end.next.next
	return pre.next
};