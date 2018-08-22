// @flow

import getFiles from './getFiles'
import YamlProcessor from "./YamlProcessor"
import convertMarkdown from "./convertMarkdown"
import writeFile from "./writeHtml";
import flattenPost from "./flattenPost";
import root from 'root-path'
const DEFAULT_POST = root() + '/posts'
import Post from './Post'
import getPathToDist from './getPathToDist'

export default { execute }

async function execute() { // TODO: Receive an Object param to config.
    return await getFiles(DEFAULT_POST, {}) //TODO: Handle empty files
        .map(yamlProcessor)
        .map(converPostToMarkdown)
        .map(writeHtmlToFile)
        // .map(parseToPost)
        // .map(value => { console.log(typeof value); return value })
        // .map(YamlProcessor)
        // .map(convertMarkdown)
        // .map(flattenPost)
        // .map(templateRender)
        // .map(writeHtml) //TODO: Externalize path to save output(Can use an env)
        .then(() => {
            return 'Build with success!'
        })
}

//TODO: Next release with post
// function parseToPost(content: string): Post {
//     return new Post(content)
// }

function yamlProcessor(content: any) : any {
    let post = {}
    let processed = YamlProcessor(content)
    post.title = processed.attributes.title
    post.description= processed.attributes.description
    post.path= processed.attributes.path
    post.body = processed.body
    return post
}

function converPostToMarkdown(post: any): any {
    post.body = convertMarkdown(post.body);
    return post
}

function writeHtmlToFile(post: any) {
    const path = post.path
    const filePath = getPathToDist(path)
    return writeFile(filePath, post.body)
}


