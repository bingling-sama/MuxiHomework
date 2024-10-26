var arrays = [[1, 2, 3], [4, 5], [6]]

console.log(arrays.reduce((pre, cur) => pre.concat(cur), []))

function loop(init, test, update, action) {
	for (let ; test(init); init = update(init)) {
		action(init)
	}
}

loop(3, n => n > 0, n => n - 1, console.log)

function everyLoop(arr, test) {
	for (let a of arr) {
		if (!test(a)) return false
	}
	return true
}

console.log(everyLoop([1, 3, 5], n => n < 10))
console.log(everyLoop([2, 4, 16], n => n < 10))
console.log(everyLoop([], n => n < 10))

function everySome(arr, test) {
	return !arr.some(a => !test(a))
}

console.log(everySome([1, 3, 5], n => n < 10))
console.log(everySome([2, 4, 16], n => n < 10))
console.log(everySome([], n => n < 10))

const SCRIPTS = [
	{ name: "Latin", ranges: [[0, 127]], direction: "ltr" },
	{ name: "Arabic", ranges: [[1536, 1791]], direction: "rtl" },
]

function characterScript(code) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => code >= from && code < to)) {
			return script
		}
	}
	return null
}

function countBy(items, groupName) {
	let counts = []
	for (let item of items) {
		let name = groupName(item)
		let known = counts.findIndex(c => c.name === name)
		if (known === -1) {
			counts.push({ name, count: 1 })
		} else {
			counts[known].count++
		}
	}
	return counts
}

function dominantDirection(text) {
	const scripts = countBy(text, char => {
		const script = characterScript(char.codePointAt(0))
		return script ? script.direction : "none"
	}).filter(({ name }) => name !== "none")
	if (scripts.length === 0) {
		return "ltr"
	}
	const dominant = scripts.reduce((a, b) => (a.count > b.count) ? a : b)
	return dominant.name
}

console.log(dominantDirection("Hello!"))
console.log(dominantDirection("مرحبا"))

class Vec {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	plus(vec) {
		this.x += vec.x
		this.y += vec.y
		return this
	}
	minus(vec) {
		this.x -= vec.x
		this.y -= vec.y
		return this
	}
	get length() {
		return Math.sqrt(this.x ** 2 + this.y ** 2)
	}
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)))
console.log(new Vec(1, 2).minus(new Vec(2, 3)))
console.log(new Vec(3, 4).length)

class Group {
	constructor() {
		this.group = []
	}

	add(item) {
		if (!this.group.includes(item)) {
			this.group.push(item)
		}
	}

	delete(item) {
		let index = this.group.indexOf(item)
		if (index !== -1) {
			this.group.splice(index, 1)
		}
	}

	has(item) {
		return this.group.includes(item)
	}

	static from(a) {
		let g = new Group()
		for (let item of a) {
			g.add(item)
		}
		return g
	}

	[Symbol.iterator]() {
		return new GroupIterator(this)
	}
}

var group = Group.from([10, 20])
console.log(group.has(10))
console.log(group.has(30))
group.add(10)
group.delete(10)
console.log(group.has(10))

class GroupIterator {
	constructor(group) {
		this.index = 0
		this.group = group.group
	}

	next() {
		if (this.index >= this.group.length) {
			return { done: true }
		}
		let value = this.group[this.index]
		this.index++
		return { value, done: false }
	}
}

for (let value of Group.from(["a", "b", "c"])) {
	console.log(value)
}
