import getFiles from './getFiles'
import YamlProcessor from "./YamlProcessor"
import convertMarkdown from "./convertMarkdown"
import writeHtml from "./writeHtml";
import flattenPost from "./flattenPost";
import root from 'root-path'
const DEFAULT_POST = root() + '/posts'

// TODO:

async function execute() { // TODO: Receive an Object param to config.
    return await getFiles(DEFAULT_POST, {}) //TODO: Handle empty files
        .map(YamlProcessor)
        .map(convertMarkdown)
        // .map(flattenPost)
        .map(writeHtml) //TODO: Externalize path to save output(Can use an env)
        .then(() => {
            return 'Build with success!'
        })
}

export default { execute }

