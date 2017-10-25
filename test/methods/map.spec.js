import { expect } from 'chai'
import { map, item } from '../../src/methods'
import { toUpper } from '../../src/util'

describe('map', () => {
  it('should consume one character and then upper', () => {
    expect(map(toUpper, item)('abc')).to.deep.equal([{x: 'A', xs: 'bc'}])
  })
  it('should fail', () => {
    expect(map(toUpper, item)('')).to.deep.equal([])
  })
})
