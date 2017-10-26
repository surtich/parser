import { expect } from 'chai'
import { Parser } from '../../src'

describe('option', () => {
  it('should consume from the first parser', () => {
    expect(Parser.item.option(Parser.pure('d'))('abc')).to.deep.equal([{x: 'a', xs: 'bc'}])
  })
  it('should consume from the second parser', () => {
    expect(Parser.empty.option(Parser.pure('d'))('abc')).to.deep.equal([{x: 'd', xs: 'abc'}])
  })
  it('should consume from the second parser', () => {
    expect(Parser.item.option(Parser.pure('d'))('')).to.deep.equal([{x: 'd', xs: ''}])
  })
})
