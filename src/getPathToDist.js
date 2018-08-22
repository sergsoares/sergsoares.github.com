// @flow

import path from 'path'
import root from 'root-path'

export default function (filePath :string = ''):string {
    return path.join(root(), './dist', filePath)
}