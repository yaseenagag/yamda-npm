import chai from 'chai'
import flatten from '../lib/flatten.js'
import R from 'ramda'
const expect = chai.expect

describe('flatten', () => {
  it('should flatten a multi-layered array into a single-dimentioned array', () => {
    expect(flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]))
      .to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  })
  it ('returns the new array of filtered values', () => {
    expect ( flatten([1, [2, [3], 4], 5])).to.eql([1, 2, 3, 4, 5])
  })

  it ('returns the new array of filtered values', () => {
    expect ( flatten([[1, 2], [3, [4], 6], 5])).to.eql([1, 2, 3, 4, 6, 5])
  })

  it ('returns the new array of filtered values', () => {
    expect ( flatten([1, [2, [3, [4, [5, [6, [7]]]]]]])).to.eql([1, 2, 3, 4, 5, 6, 7])
  })

  it( 'returns empty array when input is not an array', () => {
    expect( flatten( 1 ) ).to.eql( [] )
  })
})
