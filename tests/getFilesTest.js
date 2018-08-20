import tape from 'tape'
import _test from 'tape-promise'
const test = _test(tape)

import BluebirdPromise from 'bluebird'
import getFiles from "../src/getFiles";
import root from "root-path";
const test_fixture_path = root() + "/tests/fixtures"

test('should getFiles return Bluebird Promise', function (assert) {
    const value = getFiles(test_fixture_path, {})
    assert.true(BluebirdPromise.resolve(value) === value)
    assert.end()
})

test('should getFiles return Error when invalid path passed', function (assert) {
    return getFiles("", {}).catch(function (value) {
        assert.true(value instanceof Error)
    })
})

test('should getFiles return Promise with array', function (assert) {
    return getFiles(test_fixture_path, {}).then(function (value) {
        assert.true(Array.isArray(value))
    })
})

test('should getFiles return Promise with array of Strings', function (assert) {
    return getFiles(test_fixture_path, {}).then(function (value) {
        assert.false(value.find((item) => typeof item !== 'string' ))
    })
})
