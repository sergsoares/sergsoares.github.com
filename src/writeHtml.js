const BluebirdPromise = require('bluebird');
import fileSystem from 'fs'
const fs = BluebirdPromise.promisifyAll(fileSystem);
import getPathToDist from './getPathToDist'

export default function (post) {
    const filePath = getPathToDist(post.attributes.path)

    return fs.writeFileAsync(filePath, post.body);
}