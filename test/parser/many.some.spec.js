import { expect } from 'chai'
import { Parser } from '../../src'

describe('many', () => {
  it('should consume all start digits', () => {
    expect(Parser.many(Parser.digit).parse('123abc')).to.deep.equal([{x: '123', xs: 'abc'}])
  })
  it('should not fail', () => {
    expect(Parser.many(Parser.digit).parse('abc')).to.deep.equal([{x: '', xs: 'abc'}])
  })
})

describe('some', () => {
  it('should consume all start digits', () => {
    expect(Parser.some(Parser.digit).parse('123abc')).to.deep.equal([{x: '123', xs: 'abc'}])
  })
  it('should fail', () => {
    expect(Parser.some(Parser.digit).parse('abc')).to.deep.equal([])
  })
})
