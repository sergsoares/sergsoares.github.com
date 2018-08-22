import convertMarkdown from "../convertMarkdown";

test('convertMarkdown need be a function', function () {
    expect(typeof convertMarkdown).toEqual('function')
})

test('convertMarkdown call need return object', function () {
    const text = 'You will like those projects!'
    expect(typeof convertMarkdown(text)).toEqual('string')
})

test('convertMarkdown call return correct structure', function () {
    const param = 'You will like those projects!'
    const expected =  "<p>You will like those projects!</p>\n"
    const received = convertMarkdown(param)

    expect(received).toEqual(expected)
})




