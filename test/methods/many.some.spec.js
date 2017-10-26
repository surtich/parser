import { expect } from 'chai'
import { many, some, digit } from '../../src/methods'

describe('many', () => {
  it('should extract the number', () => {
    expect(many(digit)('123abc')).to.deep.equal([{x: '123', xs: 'abc'}])
  })
  it('should not fail', () => {
    expect(many(digit)('abc')).to.deep.equal([{x: '', xs: 'abc'}])
  })
})

describe('some', () => {
  it('should extract the number', () => {
    expect(some(digit)('123abc')).to.deep.equal([{x: '123', xs: 'abc'}])
  })
  it('should fail', () => {
    expect(some(digit)('abc')).to.deep.equal([])
  })
})
