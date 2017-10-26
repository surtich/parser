import { expect } from 'chai'
import { string } from '../../src/methods'

describe('string', () => {
  it('should extract the three first characters', () => {
    expect(string('abc')('abcdef')).to.deep.equal([{x: 'abc', xs: 'def'}])
  })
  it('should fail', () => {
    expect(string('abc')('abCdef')).to.deep.equal([])
  })
})
