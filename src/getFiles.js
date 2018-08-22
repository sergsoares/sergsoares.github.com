// @flow

import BluebirdPromise from 'bluebird'
import { readFiles } from 'node-dir'
import Post from './Post'

//TODO: return Array<string> with File
export default function getFiles(root: string, options: any) {
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
                // let posts: Array<Post> = contents.map( (content) => new Post(content))
                resolve(contents)
            })
    })
}
