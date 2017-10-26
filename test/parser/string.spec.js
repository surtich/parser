import { expect } from 'chai'
import { Parser } from '../../src'

describe('string', () => {
  it('should extract the three first characters', () => {
    expect(Parser.string('abc')('abcdef')).to.deep.equal([{x: 'abc', xs: 'def'}])
  })
  it('should fail', () => {
    expect(Parser.string('abc')('abCdef')).to.deep.equal([])
  })
})
