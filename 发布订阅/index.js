var Bus = {
    events: {},
    on(event, fn) {
        if(!this.events[event]){
            this.events[event] = []
        }
        this.events[event].push(fn)
    },
    emit(event, data) {
        if(this.events[event]){
            this.events[event].forEach(fn => fn(data))
        }else{
            throw 'not defined'
        }
    }
}

Bus.on('event', function(data){
    console.log(data)
})
Bus.on('hi',function(data){
    console.log(data)
})
Bus.emit('event', {name: 'hello'})
Bus.emit('hi', {to: 'hunger'})
Bus.emit('h', {to: 'valley'})