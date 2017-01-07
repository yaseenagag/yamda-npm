import chai from 'chai'
import memoize from '../lib/memoize.js'
import R from 'ramda'
const expect = chai.expect

describe('Memoize', () => {
  it('Creates a new function that, when invoked, caches the result of calling fn for a given argument set and returns the result.',
  () => {
    var count = 0
    var factorial = memoize(n => {
      count++
      return R.product(R.range(1, n + 1))
    })
    factorial(5)
    factorial(5)
    expect(factorial(5)).to.eql(120)
    expect(count).to.eql(1)
  })
})
