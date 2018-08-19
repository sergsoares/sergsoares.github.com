import tape from 'tape'
import BluebirdPromise from 'bluebird'
import getFiles from "../src/getFiles";
import _test from 'tape-promise'
const test = _test(tape)
import root from "root-path";
const test_fixture_path = root() + "/tests/fixtures"

test('should getFiles return Bluebird Promise', function (test) {
    const value = getFiles(test_fixture_path, {})
    test.true(BluebirdPromise.resolve(value) === value)
    test.end()
})

test('should getFiles return Error when invalid path passed', function (test) {
    return getFiles("", {}).catch(function (value) {
        test.true(value instanceof Error)
    })
})

test('should getFiles return Promise with array', function (test) {
    return getFiles(test_fixture_path, {}).then(function (value) {
        test.true(Array.isArray(value))
    })
})

test('should getFiles return Promise with array of Strings', function (test) {
    return getFiles(test_fixture_path, {}).then(function (value) {
        test.false(value.find((item) => typeof item !== 'string' ))
    })
})
