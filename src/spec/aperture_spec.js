import chai from 'chai'
import aperture from '../lib/aperture.js'
import R from 'ramda'
const expect = chai.expect

describe('Aperture', () => {
  it('Returns a new list, composed of n-tuples of consecutive elements!', () => {
    expect(aperture(2, [1, 2, 3, 4, 5]))
      .to.eql([[1, 2], [2, 3], [3, 4], [4, 5]])
  })
  it('Returns a new list, composed of n-tuples of consecutive elements', () => {
    expect(aperture(3, [1, 2, 3, 4, 5]))
      .to.eql([[1, 2, 3], [2, 3, 4], [3, 4, 5]])
  })
  it('If predicate is greater than the lenght of the array, returns empty array',
    () => { expect(aperture(9, [1, 2, 3, 4, 5])).to.eql([])
  })
})
