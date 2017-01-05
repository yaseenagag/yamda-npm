import chai from 'chai'
import sort from '../lib/sort.js'
import R from 'ramda'
const expect = chai.expect

describe('Sort', () => {
  it('Sorts the list in ascending order based on difference function', () => {
    let diff = function(a, b) { return a - b }
    expect(sort(diff, [4,2,7,5])).to.eql([2, 4, 5, 7])
  })
  it('returns a new array', () => {
    let diff = function(a, b) { return a - b }
    let inputArray = [2, 4, 5, 7]
    expect(sort(diff, [2, 4, 5, 7])).not.to.equal(inputArray)
  })
})
