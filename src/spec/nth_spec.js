import chai from 'chai'
import nth from '../lib/nth.js'
import R from 'ramda'
const expect = chai.expect

describe('Nth', () => {
  let list = [ 'foo', 'bar', 'baz', 'quux' ]
  it('Returns the nth element of the given array.', () => {
    expect( nth( 1, list )).to.eql( 'bar' )
  })
  it('Returns the nth character of the given string.', () => {
    expect( nth( 1, 'banana' )).to.eql('a')
  })
  it('Returns the element at index length + n if n is negative', () => {
    expect( nth( -1, list )).to.eql( 'quux' )
  })
  it('Returns undefined if out of range', () => {
    expect( nth( 99, list )).to.be.undefined
  })
})
