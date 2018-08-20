import convertMarkdown from "../convertMarkdown";

test('convertMarkdown need be a function', function () {
    expect(typeof convertMarkdown).toEqual('function')
})

test('convertMarkdown call need return object', function () {
    const text = { body: 'You will like those projects!'}
    expect(typeof convertMarkdown(text)).toEqual('object')
})

test('convertMarkdown call return correct structure', function () {
    const text = { body: 'You will like those projects!'}

    const expected = { body: "<p>You will like those projects!</p>\n"}
    const received = convertMarkdown(text)

    expect(received).toEqual(expected)
})



