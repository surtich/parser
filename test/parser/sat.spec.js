import { expect } from 'chai'
import { Parser } from '../../src'

describe('sat', () => {
  it('should consume one character', () => {
    expect(Parser.char('a')('abc')).to.deep.equal([{x: 'a', xs: 'bc'}])
  })
  it('should fail', () => {
    expect(Parser.char('a')('Abc')).to.deep.equal([])
  })
})
