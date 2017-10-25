import { expect } from 'chai'
import { Parser } from '../src'

describe('pure', () => {
  it('should introduce a value into a parser', () => {
    expect(Parser.pure(1).parse('abc')).to.deep.equal([{x: 1, xs: 'abc'}])
  })
})
