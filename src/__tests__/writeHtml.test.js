import writeHtml from "../writeHtml.js";
import getPathToDist from '../getPathToDist'
import root from 'root-path'

const BluebirdPromise = require('bluebird');
import fileSystem from 'fs'

const fs = BluebirdPromise.promisifyAll(fileSystem);

const mockedConverted = {
    attributes:
        {
            title: 'Just do it',
            description: 'Nothing to see here',
            path: 'the-initial.html'
        },
    body: '<p>This is some text about some stuff that happened sometime ago</p>\n',
    frontmatter: 'title: Just do it \ndescription: Nothing to see here\npath: the-initial.html'
}


jest.mock('../getPathToDist')
const mockDistDirectory = root() + '/src/__tests__/dist/test'
getPathToDist.mockImplementation(() => mockDistDirectory)

test('WriteHtml need be a function', function () {
    const received = typeof writeHtml
    const expected = 'function'

    expect(received).toEqual(expected)
})

test('writeHtml should return object', function () {
    const received = typeof writeHtml(mockedConverted)
    const expected = 'object'

    expect(received).toEqual(expected)
})

test('writeHtml should write a file to system', function () {
    writeHtml(mockedConverted)

    return fs.readFileAsync(mockDistDirectory, (err, data) => {
        if (err) throw err;
    }).then((data) => {
        const expected = 'object'
        expect(typeof data).toEqual(expected)
    })
})

