import root from 'root-path'
import getFiles from './getFiles'
import YamlProcessor from "./YamlProcessor"
import convertMarkdown from "./convertMarkdown"
import writeHtml from "./writeHtml";

async function execute() {
    return await getFiles(root(), {})
        .map(YamlProcessor)
        .map(convertMarkdown)
        .map(writeHtml)
        // .map(value => { console.log(value) })
        .then(() => {
            return 'Build with success!'
        })

}

export default { execute }

