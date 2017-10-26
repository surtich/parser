import { expect } from 'chai'
import { space } from '../../src/methods'

describe('space', () => {
  it('should left spaces', () => {
    expect(space('  abc def')).to.deep.equal([{x: [], xs: 'abc def'}])
  })
})
