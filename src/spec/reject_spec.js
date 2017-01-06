import chai from 'chai'
import reject from '../lib/reject.js'
import R from 'ramda'
const expect = chai.expect

describe('Reject', () => {
  it('Returns an array filtered by a function, where function(value)=false', () => {
    let isOdd = (n) => n % 2 === 1
    expect(reject(isOdd, [1, 2, 3, 4])).to.eql([2, 4])
    expect(reject(isOdd, {a: 1, b: 2, c: 3, d: 4})).to.eql({b: 2, d: 4})
  })
})
