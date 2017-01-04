import chai from 'chai'
import divide from '../lib/divide.js'
import R from 'ramda'
const expect = chai.expect

describe('Divide', () => {
  it('should divide first param by second param', () => {
    expect(divide(70, 100)).to.eql(.7)
  })
  it('should behave the same as ramda divide', () => {
    expect(divide(70, 100)).to.eql(R.divide(70, 100))
  })
})
