import main from "../main.js";
import getFiles from "../getFiles";
import BluebirdPromise from 'bluebird'

jest.mock('../getFiles')

const mockArray =  [ '---\ntitle: Just do it \ndescription: Nothing to see here\npath: the-initial.html\n---\n\nThis is some text about some stuff that happened sometime ago\n' ]
getFiles.mockImplementation(() => BluebirdPromise.resolve(mockArray));

test('Main JS finish with Success', () => {
    return main.execute().then((received) => {
        expect(received).toEqual('Build with success!')
    })
})