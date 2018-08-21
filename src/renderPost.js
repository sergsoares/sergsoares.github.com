import pug from 'pug'
import root from 'root-path'
const postRenderer = pug.compileFile(root() + '/templates/post.pug')

export default function renderPost(post) {
    post.content = postRenderer(post)
    return post
}