import getPathToDist from "../getPathToDist.js";


test('getPathToDist need be a function', function () {
    const received = typeof getPathToDist
    const expected = 'function'

    expect(received).toEqual(expected)
})

test('getPathToDist need return a string', function () {
    const received = typeof getPathToDist()
    const expected = 'string'

    expect(received).toEqual(expected)
})

test('getPathToDist need return path that contains file', function () {
    const expected = '/dist/change.html'
    const received = getPathToDist('index.html').includes(expected)

    expect(received).toEqual(true)
})

