// @flow

import getFiles from './getFiles'
import YamlProcessor from "./YamlProcessor"
import convertMarkdown from "./convertMarkdown"
// import renderBasedOnTemplate from './renderBasedOnTemplate'
import writeFile from "./writeHtml";
import root from 'root-path'
import getPathToDist from './getPathToDist'
import handlebars from 'handlebars'

const POSTS_PATH : string = root() + '/posts'
const TEMPLATE_PATH: string = root() + '/templates/post.pug' //TODO: Get post from config
const INDEX_PATH: string = root() + '/templates/index.pug' //TODO: Get post from config

export default { execute }

async function execute() { // TODO: Receive an Object param to config.
    return await getFiles(POSTS_PATH, {}) //TODO: Handle empty files
        .map(yamlProcessor)
        .map(converPostToMarkdown)
        .map(renderPostFromTemplate)
        .map(writeHtmlToFile)//TODO: Externalize path to save output(Can use an env)
        .then(renderIndexPage)
        .then(() => {
            return 'Build with success!'
        })
}

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

function renderIndexPage(posts: any) {
    const arrayLinks = posts.map(post => `<a href="${post.path}"> ${post.title} </a>`)
    const links = arrayLinks.join(' ')

    let indexPage = { path : 'index.html' , body: links}

    const templateString = `<div className="entry">
        <div className="body">
            <a href="{{path}}"> {{title}} </a>
        </div>
    </div>`

    indexPage.body= renderBasedOnTemplate(templateString, posts[0])
    const filePath = getPathToDist(indexPage.path)
    writeFile(filePath, indexPage.body)
}

function renderPostFromTemplate(post: any) {
    const postTemplate = `<html> <head> </head> <body> {{ body }}</body> </html>`
    post.body = renderBasedOnTemplate(postTemplate, post)
    return post
}

function writeHtmlToFile(post: any) {
    const path = post.path
    const filePath = getPathToDist(path)
    writeFile(filePath, post.body)
    return post
}

function renderBasedOnTemplate(templateString: string = '', post: any): any {
    const template = handlebars.compile(templateString);
    return template(post)
}

