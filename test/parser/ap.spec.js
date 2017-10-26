import { expect } from 'chai'
import { Parser } from '../../src'
import { toUpper } from '../../src/util'

describe('ap', () => {
  it('should applicate a function parser to a parser', () => {
    expect(Parser.pure(x => toUpper(x)).ap(Parser.item).parse('abc')).to.deep.equal([{x: 'A', xs: 'bc'}])
  })
  it('should fail', () => {
    expect(Parser.pure(x => toUpper(x)).ap(Parser.item).parse('')).to.deep.equal([])
  })
  it('should create a Parser that consumes two characters', () => {
    expect(
      Parser.pure(x => _ => z => [x, z])
        .ap(Parser.item)
        .ap(Parser.item)
        .ap(Parser.item)
        .parse('abcdef'))
      .to.deep.equal([{x: ['a', 'c'], xs: 'def'}])
  })
  it('should fail', () => {
    expect(
      Parser.pure(x => _ => z => [x, z])
        .ap(Parser.item)
        .ap(Parser.item)
        .ap(Parser.item)
        .parse('ab'))
      .to.deep.equal([])
  })
})
