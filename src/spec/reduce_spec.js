import chai from 'chai'
import reduce from '../lib/reduce.js'
import R from 'ramda'
const expect = chai.expect

describe('Reduce', () => {
  it('reduces', () => {
    let subtract = ( a, b ) => a - b
    expect(reduce( subtract, 0, [1, 2, 3, 4] )).to.eql( -10 )
  })
})
