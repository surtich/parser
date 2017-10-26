import { expect } from 'chai'
import { empty } from '../../src/methods'

describe('empty', () => {
  it('should always fail', () => {
    expect(empty('abc')).to.deep.equal([])
  })
})
