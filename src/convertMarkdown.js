const markdown = require('markdown-it')('commonmark');

//FIXME: Remove couple with post structure
export default function (post) {
    post.body = markdown.render(post.body);
    return post;
}