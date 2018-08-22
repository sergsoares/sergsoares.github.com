// @flow
const markdown = require('markdown-it')('commonmark');

export default function (post: string) : any {
    return markdown.render(post);
}