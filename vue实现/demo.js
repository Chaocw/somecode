function Vue(options){
    this.options = options
    for(let key in this.options){
        this.setProperty(key)
    }
    
}
Vue.prototype.setProperty = function(key){
        let proxyData = this.options[key]
        Object.keys(proxyData).forEach((item) => {
            Object.defineProperty(this, item, {
                enumerable: true,
                get() {
                    return proxyData[item]
                },
                set(newVal) {
                    console.log(item + ' --> ' + newVal)
                    this.options[key][item] = newVal
                }
            })
        })
    }

var app = new Vue({
    data: { message: 'hi' },
    methods: {
        hello(name) {
            console.log(`${this.message},${name}`)
        }
    }
})
console.log(app.message)