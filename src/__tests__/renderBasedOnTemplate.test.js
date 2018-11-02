import renderBasedOnTemplate from '../renderBasedOnTemplate'
import root from 'root-path'
const templatePath : string = root() + '/templates/post.pug'

const mockPost = { title: 'Just do it',
    description: 'Nothing to see here',
    path: 'the-initial.html',
    body: '<h1>An h1 header</h1>\n<p>Paragraphs are separated by a blank line.</p>\n<p>2nd paragraph. <em>Italic</em>, <strong>bold</strong>, and <code>monospace</code>. Itemized lists\nlook like:</p>\n<ul>\n<li>this one</li>\n<li>that one</li>\n<li>the other one</li>\n</ul>\n<p>Note that --- not considering the asterisk --- the actual text\ncontent starts at 4-columns in.</p>\n<blockquote>\n<p>Block quotes are\nwritten like so.</p>\n<p>They can span multiple paragraphs,\nif you like.</p>\n</blockquote>\n<p>This is some text about some stuff that happened sometime ago</p>\n'
}


test('Should renderBasedOnTemplate be a function', function () {
    const received = typeof renderBasedOnTemplate
    const expected = 'function'

    expect(received).toEqual(expected)
})

test('Should renderBasedOnTemplate return post with content string assigned', function () {
    const received = typeof renderBasedOnTemplate(templatePath, mockPost)
    const expected = 'string'

    expect(received).toEqual(expected)
})
