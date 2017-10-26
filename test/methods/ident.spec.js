import { expect } from 'chai'
import { ident } from '../../src/methods'

describe('ident', () => {
  it('should extract a variable identificator', () => {
    expect(ident('abc$ def')).to.deep.equal([{x: 'abc$', xs: ' def'}])
  })
  it('should fail', () => {
    expect(ident('1abc$ def')).to.deep.equal([])
  })
})
