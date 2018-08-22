// @flow

import pug from 'pug'

export default function renderBasedOnTemplate(templatePath: string = '', post: any): any {
    const postRenderer = pug.compileFile(templatePath)
    post.content = postRenderer(post)
    return post
}

