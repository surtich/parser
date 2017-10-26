import { expect } from 'chai'
import { char } from '../../src/methods'

describe('sat', () => {
  it('should consume one character', () => {
    expect(char('a')('abc')).to.deep.equal([{x: 'a', xs: 'bc'}])
  })
  it('should fail', () => {
    expect(char('a')('Abc')).to.deep.equal([])
  })
})
