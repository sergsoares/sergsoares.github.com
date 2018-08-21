const BluebirdPromise = require('bluebird');
import fileSystem from 'fs'
const fs = BluebirdPromise.promisifyAll(fileSystem);
import getPathToDist from './getPathToDist'

export default function (post) {
    //TODO: Decouple resolve path to receive path in param.
    const filePath = getPathToDist(post.attributes.path) // TODO: remove couple with post Structure

    return fs.writeFileAsync(filePath, post.body);
}