const eventEmitter = require('events');
const emitter = new eventEmitter();


emitter.on('logging',(arg) => {

    console.log(arg.message);
});

emitter.emit('logging',{message: "Hello from Client!"});