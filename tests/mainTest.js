import test from 'tape'
import main from "../src/main";

test('Main JS finish with Success', function (assert) {
    assert.equal(main.execute(), 'Build with success!')
    assert.end()
})
