import { expect } from 'chai'
import { pure } from '../../src/methods'

describe('pure', () => {
  it('should introduce a value into a parser', () => {
    expect(pure(1)('abc')).to.deep.equal([{x: 1, xs: 'abc'}])
  })
})
