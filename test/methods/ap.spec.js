import { expect } from 'chai'
import { ap, item, pure } from '../../src/methods'
import { toUpper } from '../../src/util'

//    three :: Parser (Char, Char)
const tree = s => {
  const g = x => _ => z => [x, z]
  return ap(ap(ap(pure(g), item), item), item)(s)
}

describe('ap', () => {
  it('should applicate a function parser to a parser', () => {
    expect(ap(pure(x => toUpper(x)), item)('abc')).to.deep.equal([{x: 'A', xs: 'bc'}])
  })
  it('should fail', () => {
    expect(ap(pure(x => toUpper(x)), item)('')).to.deep.equal([])
  })
  it('should create a Parser that consumes to characters', () => {
    expect(tree('abcdef')).to.deep.equal([{x: ['a', 'c'], xs: 'def'}])
  })
  it('should fail', () => {
    expect(tree('ab')).to.deep.equal([])
  })
})
