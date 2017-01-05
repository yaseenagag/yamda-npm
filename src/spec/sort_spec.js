import chai from 'chai'
import sort from '../lib/sort.js'
import R from 'ramda'
const expect = chai.expect

describe('sort', () => {
  it('Returns a new list, composed of n-tuples of consecutive elements!', () => {
    var diff = function(a, b) { return a - b; };
    expect(sort(diff, [4,2,7,5]))
      .to.eql([2, 4, 5, 7])
  })
  it('Returns a new list, composed of n-tuples of consecutive elements', () => {
    expect(aperture(3, [1, 2, 3, 4, 5]))
      .to.eql([[1, 2, 3], [2, 3, 4], [3, 4, 5]])
  })
  it('If predicate is greater than the lenght of the array, returns empty array',
    () => { expect(aperture(9, [1, 2, 3, 4, 5])).to.eql([])
  })
})
