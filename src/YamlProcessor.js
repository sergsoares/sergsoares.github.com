// @flow

import fm from "front-matter";
import Post from './Post'

function YamlProcessor(post: string): any{
    return fm(post)
}

export default YamlProcessor