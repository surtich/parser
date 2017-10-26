import { expect } from 'chai'
import { option, item, pure, empty } from '../../src/methods'

describe('option', () => {
  it('should consume from the first parser', () => {
    expect(option(item, pure('d'))('abc')).to.deep.equal([{x: 'a', xs: 'bc'}])
  })
  it('should consume from the second parser', () => {
    expect(option(empty, pure('d'))('abc')).to.deep.equal([{x: 'd', xs: 'abc'}])
  })
  it('should consume from the second parser', () => {
    expect(option(item, pure('d'))('')).to.deep.equal([{x: 'd', xs: ''}])
  })
})
