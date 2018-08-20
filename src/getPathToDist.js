import path from 'path'
import root from 'root-path'

export default function (filePath = '') {
    return path.join(root(), './dist', filePath)
}