import root from 'root-path'
import getFiles from './getFiles'
import YamlProcessor from "./YamlProcessor";

async function execute() {
    await getFiles(root(), {})
        .map(YamlProcessor)

    return 'Build with success!'
}

export default { execute }

