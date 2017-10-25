import { expect } from 'chai'
import { Parser } from '../../src'
import { toUpper } from '../../src/util'

describe('map', () => {
  it('should consume one character and then upper', () => {
    expect(Parser.item.map(toUpper).parse('abc')).to.deep.equal([{x: 'A', xs: 'bc'}])
  })
  it('should fail', () => {
    expect(Parser.item.map(toUpper).parse('')).to.deep.equal([])
  })
})
