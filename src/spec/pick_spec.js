import chai from 'chai'
import pick from '../lib/pick.js'
import R from 'ramda'
const expect = chai.expect

describe('Pick', () => {
  it('Returns a partial copy of an object containing only the keys specified.', () => {
    let answer = pick([ 'a', 'd' ], { a: 1, b: 2, c: 3, d: 4 })
    expect(answer).to.eql( { a: 1, d: 4 } )
  })
})
