import main from "../main.js";
import getFiles from "../getFiles";
import BluebirdPromise from 'bluebird'

jest.mock('../getFiles')

const mockArray = [ '---\ntitle: Just do it \ndescription: Nothing to see here\npath: the-initial.html\n---\n\nAn h1 header\n============\n\nParagraphs are separated by a blank line.\n\n2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists\nlook like:\n\n  * this one\n  * that one\n  * the other one\n\nNote that --- not considering the asterisk --- the actual text\ncontent starts at 4-columns in.\n\n> Block quotes are\n> written like so.\n>\n> They can span multiple paragraphs,\n> if you like.\n\nThis is some text about some stuff that happened sometime ago\n' ]

getFiles.mockImplementation(() => BluebirdPromise.resolve(mockArray));

test('Main JS finish with Success', () => {
    return main.execute().then((received) => {
        expect(received).toEqual('Build with success!')
    })
})