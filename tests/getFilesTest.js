import tape from 'tape'
import BluebirdPromise from 'bluebird'
import getFiles from "../src/getFiles";
import _test from 'tape-promise'
const test = _test(tape)
import root from "root-path";
const root_path = root()

test('should getFiles return Bluebird Promise', function (test) {
    const value = getFiles(root_path, {})
    test.true(BluebirdPromise.resolve(value) === value)
    test.end()
})

test('should getFiles return Error when invalid path passed', function (test) {
    return getFiles("", {}).catch(function (value) {
        test.true(value instanceof Error)
    })
})

test('should getFiles return Promise with array', function (test) {
    return getFiles(root_path, {}).then(function (value) {
        test.true(Array.isArray(value))
    })
})