function _lazyman(name) {
	this.orderPromise = Promise.resolve()
	this.insertPromise = Promise.resolve()
	this.order((resolve) => {
		console.log(name)
		resolve()
	})
}
_lazyman.prototype = {
	order(fn) {
		this.orderPromise = this.orderPromise.then(()=>{
			return new Promise(resolve=>{
				this.choke ? this.insertPromise.then(()=>fn(resolve)) : fn(resolve)
			})
		})
	},
	insert(fn) {
		this.choke = true
		this.insertPromise = this.insertPromise.then(()=>{
			return new Promise(resolve=>{
				fn(resolve)
				this.choke = false
			})
		})
	},
	firstSleep(time) {
		this.insert((resolve)=>{
			setTimeout(()=>{
				console.log('wait '+time+'s')
				resolve()
			},time*1000)
		})
		return this
	},
	sleep(time) {
		this.order((resolve)=>{
			setTimeout(()=>{
				console.log('wait '+time+'s')
				resolve()
			},time*1000)
		})
		return this
	},
	eat(sth) {
		this.order((resolve) => {
			console.log(sth+'~~')
			resolve()
		})
		return this
	}
}

function lazyman(name){
	return new _lazyman(name)
}

lazyman('miying').firstSleep(1).eat('apple').sleep(2).eat('banana').firstSleep(3)