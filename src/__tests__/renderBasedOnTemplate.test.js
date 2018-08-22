import renderBasedOnTemplate from '../renderBasedOnTemplate'
import root from 'root-path'
const templatePath : string = root() + '/templates/post.pug'

test('Should renderBasedOnTemplate be a function', function () {
    const received = typeof renderBasedOnTemplate
    const expected = 'function'

    expect(received).toEqual(expected)
})

test('Should renderBasedOnTemplate call be a object', function () {
    const received = typeof renderBasedOnTemplate(templatePath, {})
    const expected = 'object'

    expect(received).toEqual(expected)
})

test('Should renderBasedOnTemplate return post with content string assigned', function () {
    const received = typeof renderBasedOnTemplate(templatePath, {}).content
    console.log(received)
    const expected = 'string'

    expect(received).toEqual(expected)
})

test('Should renderBasedOnTemplate return post with content string assigned', function () {
    const received = renderBasedOnTemplate(templatePath, {}).content
    const expected = `<!--templates/post.pug--><!DOCTYPE html><html lang=\"en\"><head><title></title><meta name=\"description\"></head><body><h1></h1><footer>&copy;  2018</footer></body></html>`

    expect(received).toEqual(expected)
})






