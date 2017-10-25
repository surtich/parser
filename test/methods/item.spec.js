import { expect } from 'chai'
import { item } from '../../src/methods'

describe('item', () => {
  it('should consume one character', () => {
    expect(item('abc')).to.deep.equal([{x: 'a', xs: 'bc'}])
  })
  it('should fail', () => {
    expect(item('')).to.deep.equal([])
  })
})
