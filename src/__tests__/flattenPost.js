import flattenPost from '../flattenPost'

test('Should flatten return function', function () {
    const received = typeof flattenPost
    const expected = 'function'
    
    expect(received).toEqual(expected)
})

test('Should flatten call return object', function () {
    const received = typeof flattenPost({})
    const expected = 'object' 
    
    expect(received).toEqual(expected)
})

test('Should flattenPost return correct Structure', function () {
    const post = { data :  {title : 'test', description : 'other'} , content : 'content' }
    const received = flattenPost(post)
    const expected = { title : 'test', description : 'other', content : 'content' }

    expect(received).toEqual(expected)
})


