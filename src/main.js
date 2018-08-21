import getFiles from './getFiles'
import YamlProcessor from "./YamlProcessor"
import convertMarkdown from "./convertMarkdown"
import writeHtml from "./writeHtml";
import flattenPost from "./flattenPost";
import root from 'root-path'
const DEFAULT_POST = root() + '/posts'

async function execute() {
    return await getFiles(DEFAULT_POST, {})
        .map(YamlProcessor)
        .map(convertMarkdown)
        // .map(flattenPost)
        .map(writeHtml)
        .then(() => {
            return 'Build with success!'
        })
}

export default { execute }

