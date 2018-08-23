import main from "../main.js";
import getFiles from "../getFiles";
import getPathToDist from '../getPathToDist'
const BluebirdPromise = require('bluebird');
import fileSystem from 'fs'

const fs = BluebirdPromise.promisifyAll(fileSystem);

// jest.mock('../getFiles')
//
// const mockArray = [ '---\ntitle: Just do it \ndescription: Nothing to see here\npath: the-initial.html\n---\n\nAn h1 header\n============\n\nParagraphs are separated by a blank line.\n\n2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists\nlook like:\n\n  * this one\n  * that one\n  * the other one\n\nNote that --- not considering the asterisk --- the actual text\ncontent starts at 4-columns in.\n\n> Block quotes are\n> written like so.\n>\n> They can span multiple paragraphs,\n> if you like.\n\nThis is some text about some stuff that happened sometime ago\n' ]
//
// getFiles.mockImplementation(() => BluebirdPromise.resolve(mockArray));

test('Main JS finish with Success', () => {
    return main.execute().then((received) => {
        expect(received).toEqual('Build with success!')
    })
})

//TODO: Fix test to assert file was created with correct content
// test('Main JS should create file in Html inside dist', async function (done) {
//     const expected = `
//     <h1>An h1 header</h1>
// <p>Paragraphs are separated by a blank line.</p>
// <p>2nd paragraph. <em>Italic</em>, <strong>bold</strong>, and <code>monospace</code>. Itemized lists
// look like:</p>
// <ul>
// <li>this one</li>
// <li>that one</li>
// <li>the other one</li>
// </ul>
// <p>Note that --- not considering the asterisk --- the actual text
// content starts at 4-columns in.</p>
// <blockquote>
// <p>Block quotes are
// written like so.</p>
// <p>They can span multiple paragraphs,
// if you like.</p>
// </blockquote>
// <p>This is some text about some stuff that happened sometime ago</p>`
//
//     console.log('começou')
//     await main.execute()
//     console.log('Main Executou')
//     await fs.readFileAsync(getPathToDist() + '/thenitial.html', (err, data) => {
//         if (err) throw err;
//     }).then((data) => {
//         console.log('teste')
//         const expected = 'object'
//         expect(typeof data).toEqual(expected)
//     })
//
//     done()
// }, 60000)

