export default function flattenPost(post) {
    return Object.assign({}, post.data, { content : post.content });
}