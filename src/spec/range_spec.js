import chai from 'chai'
import range from '../lib/range.js'
import R from 'ramda'
const expect = chai.expect

describe('Range', () => {
  it('Returns a list of numbers from first (inclusive) to second (exclusive).', () => {
    expect(range(1, 5)).to.eql([1, 2, 3, 4])
  })
})
