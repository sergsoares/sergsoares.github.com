// @flow
const markdown = require('markdown-it')('commonmark');

//FIXME: Remove couple with post structure
export default function (post: any) {
    console.log('asdfjlsadfj')

    post.body = markdown.render(post.body);
    return post;
}