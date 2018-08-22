const BluebirdPromise = require('bluebird');
import fileSystem from 'fs'
const fs = BluebirdPromise.promisifyAll(fileSystem);

export default function (filePath: string, content: string) {
    return fs.writeFileAsync(filePath, content).catch(exception => {
        console.log(exception)
    });
}