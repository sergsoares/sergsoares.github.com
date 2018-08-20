import main from "../main.js";
import getFiles from "../getFiles";
import BluebirdPromise from 'bluebird'

jest.mock('../getFiles')

getFiles.mockImplementation(() => BluebirdPromise.resolve([ 'test\nline1\nline2\nline3' ]));

test('Main JS finish with Success', () => {
    return main.execute().then((received) => {
        expect(received).toEqual('Build with success!')
    })
})