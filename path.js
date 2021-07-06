const path = require('path');

const out = path.join('./figures','/pics');

console.log(out);

console.log(path.extname('.base'));

obj = {

    separator:path.posix.sep ,
    resolve: path.resolve('./gif/image.gif')
};

console.log(obj)