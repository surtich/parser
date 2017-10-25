import { expect } from 'chai'
import { Parser } from '../../src'

describe('lazyness', () => {
  it('The parser should be reusable', () => {
    const p = Parser.pure(1)
    const q = p.map(x => x + x)
    const r = q.map(x => x * 5)
    const s = Parser.pure(x => [x, x]).ap(r)
    expect(p.parse('abc')).to.deep.equal([{x: 1, xs: 'abc'}])
    expect(q.parse('def')).to.deep.equal([{x: 2, xs: 'def'}])
    expect(r.parse('hij')).to.deep.equal([{x: 10, xs: 'hij'}])
    expect(s.parse('abc')).to.deep.equal([{x: [10, 10], xs: 'abc'}])
  })
})
