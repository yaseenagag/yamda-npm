import chai from 'chai'
import apply from '../lib/apply.js'
import R from 'ramda'
const expect = chai.expect

describe('Apply', () => {
  it('should apply the max function', () => {
    var nums = [1, 2, 3, -99, 42, 6, 7];
    expect(apply(Math.max, nums)).to.eql(42)
  })
})
describe('Apply', () => {
  it('should apply the max function', () => {
    var nums = [1, 2, 3, -99, 42, 6, 7];
    expect(apply(Math.max, nums)).to.eql(42)
  })
})
describe('Apply', () => {
  it('should apply the max function', () => {
    var nums = [1, 2, 3, -99, 42, 6, 7];
    expect(apply(Math.max, nums)).to.eql(42)
  })
})
