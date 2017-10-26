import { expect } from 'chai'
import { flatMap, then, item, pure } from '../../src/methods'

describe('flatMap', () => {
  //    three :: Parser (Char, Char)
  const tree = flatMap(item, x => flatMap(item, _ => flatMap(item, z => pure([x, z]))))

  it('should create a Parser that consumes two characters', () => {
    expect(tree('abcdef')).to.deep.equal([{x: ['a', 'c'], xs: 'def'}])
  })
  it('should fail', () => {
    expect(tree('ab')).to.deep.equal([])
  })
})

describe('then', () => {
  //    three :: Parser (Char, Char)
  const tree = flatMap(item, x => then(item, flatMap(item, z => pure([x, z]))))

  it('should create a Parser that consumes two characters', () => {
    expect(tree('abcdef')).to.deep.equal([{x: ['a', 'c'], xs: 'def'}])
  })
  it('should fail', () => {
    expect(tree('ab')).to.deep.equal([])
  })
})
