import root from 'root-path'
import getFiles from './getFiles'
import YamlProcessor from "./YamlProcessor"
import convertMarkdown from "./convertMarkdown"

async function execute() {
    await getFiles(root(), {})
        .map(YamlProcessor)
        .map(convertMarkdown)

    return 'Build with success!'
}

export default { execute }

