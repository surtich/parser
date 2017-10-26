import { expect } from 'chai'
import { Parser } from '../../src'

describe('empty', () => {
  it('should always fail', () => {
    expect(Parser.empty.parse('abc')).to.deep.equal([])
  })
})
