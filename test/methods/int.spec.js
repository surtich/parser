import { expect } from 'chai'
import { int } from '../../src/methods'

describe('int', () => {
  it('should extract a positive number', () => {
    expect(int('127abc')).to.deep.equal([{x: 127, xs: 'abc'}])
  })
  it('should extract a negative number', () => {
    expect(int('-127abc')).to.deep.equal([{x: -127, xs: 'abc'}])
  })
  it('should fail', () => {
    expect(int('--127abc')).to.deep.equal([])
  })
})
