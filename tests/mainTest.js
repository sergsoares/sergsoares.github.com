import test from 'tape'
import main from "../src/main";

test('Main JS finish with Success', function (test) {
    test.equal(main.execute(), 'Build with success!')
    test.end()
})
