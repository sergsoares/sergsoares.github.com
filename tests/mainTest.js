import test from 'tape'
import main from "../src/main";
import BluebirdPromise from 'bluebird'

// mockedGetFiles = () => BluebirdPromise.resolve([ 'test\nline1\nline2\nline3' ])

test('Main JS finish with Success', function (assert) {
    assert.equal(main.execute(), 'Build with success!')
    assert.end()
})