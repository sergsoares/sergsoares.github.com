import renderPost from "../renderPost";

test('Should renderPost be a function', function () {
    const received = typeof renderPost
    const expected = 'function'

    expect(received).toEqual(expected)
})

test('Should renderPost call be a object', function () {
    const received = typeof renderPost({})
    const expected = 'object'
    
    expect(received).toEqual(expected)
})

test('Should rendePost return post with content string assigned', function () {
    const received = typeof renderPost({}).content
    const expected = 'string'

    expect(received).toEqual(expected)
})



