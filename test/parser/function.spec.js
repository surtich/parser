import { expect } from 'chai'
import { Parser } from '../../src'
import { toUpper } from '../../src/util'

describe('optional use of parse', () => {
  it('Parser class should be a function (parse method is optional)', () => {
    expect(Parser.item.map(toUpper).parse('abc')).to.deep.equal([{x: 'A', xs: 'bc'}])
    expect(Parser.item.map(toUpper)('abc')).to.deep.equal([{x: 'A', xs: 'bc'}])
  })
})
