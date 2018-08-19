import BluebirdPromise from 'bluebird'
import { readFiles } from 'node-dir'

export default function getFiles(root, options) {
    let contents = []
    return new BluebirdPromise((resolve, reject) => {
        readFiles(root, options,
            function(err, content, next) {
                if (err) { throw err }
                contents.push(content)
                next()
            },
            function(err, filenames) {
                if (err) { reject(err) }
                resolve(contents)
            })
    })
}
