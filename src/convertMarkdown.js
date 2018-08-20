const markdown = require('markdown-it')('commonmark');

//FIXME: Remove couple with post structure
export default function (post) {
    post.content = markdown.render(post.content);
    return post;
}