import { expect } from 'chai'
import { Parser } from '../../src'

describe('flatMap', () => {
  it('should create a Parser that consumes two characters', () => {
    const p =
      Parser.item.flatMap(x =>
        Parser.item.then(
          Parser.item.flatMap(z =>
            Parser.pure([x, z]))))
    expect(p.parse('abcdef')).to.deep.equal([{x: ['a', 'c'], xs: 'def'}])
  })
  it('should fail', () => {
    const p =
      Parser.item.flatMap(x =>
        Parser.item.then(
          Parser.item.flatMap(z =>
            Parser.pure([x, z]))))
    expect(p.parse('ab')).to.deep.equal([])
  })
})
