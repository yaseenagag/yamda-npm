import chai from 'chai'
import has from '../lib/has.js'
import R from 'ramda'
const expect = chai.expect

describe('has', () => {
  it('Checks if an object has a key with the specified name', () => {
    let hasName = R.has('name')
    expect(hasName({name: 'alice'})).to.be.true
    expect(hasName({name: 'bob'})).to.be.true
    expect(hasName({})).to.be.false
  })
})
