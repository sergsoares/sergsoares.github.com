import YamlProcessor from "../YamlProcessor";

const yamlText = `---
title: Just hack'n
description: Nothing to see here
---

This is some text about some stuff that happened sometime ago`

test('Yaml Processor need be a function', function () {
    expect(typeof YamlProcessor).toEqual('function')
})

test('Yaml Processor call return object', function () {
    expect(typeof YamlProcessor()).toEqual('object')
})

test('Yaml Processor call return correct structure', function () {
    const expected = {
        attributes: {
            title: 'Just hack\'n',
                description: 'Nothing to see here'
        },
        body:'\nThis is some text about some stuff that happened sometime ago',
        frontmatter: 'title: Just hack\'n\ndescription: Nothing to see here'
    }

    expect(YamlProcessor(yamlText)).toEqual(expected)
})
