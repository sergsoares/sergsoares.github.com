import BluebirdPromise from 'bluebird'
import getFiles from "../getFiles";
import root from "root-path";
const test_fixture_path = root() + "/tests/fixtures"

test('should getFiles return Bluebird Promise', function () {
    const filesReceived = getFiles(test_fixture_path, {})
    expect(BluebirdPromise.resolve(filesReceived)).toEqual(filesReceived)
})

test('should getFiles return Error when invalid path passed', function () {
    return getFiles("", {}).catch(function (value) {
        expect(typeof value).toEqual('object')
    })
})

test('should getFiles return Promise with array', function () {
    return getFiles(test_fixture_path, {}).then(function (value) {
        expect(Array.isArray(value)).toEqual(true)
    })
})

test('should getFiles return Promise with array of Strings', function () {
    return getFiles(test_fixture_path, {}).then(function (value) {
        const notContainsString = !!value.find((item) => typeof item !== 'string' )
        expect(notContainsString).toEqual(false)
    })
})
