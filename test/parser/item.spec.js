import { expect } from 'chai'
import { Parser } from '../../src'

describe('item', () => {
  it('should consume one character', () => {
    expect(Parser.item.parse('abc')).to.deep.equal([{x: 'a', xs: 'bc'}])
  })
  it('should fail', () => {
    expect(Parser.item.parse('')).to.deep.equal([])
  })
})
