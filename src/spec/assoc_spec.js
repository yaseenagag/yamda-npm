import chai from 'chai'
import assoc from '../lib/assoc.js'
import R from 'ramda'
const expect = chai.expect

describe.only('Assoc', () => {
  it('Accepts a key and a value, and adds it to a clone of { 3rd arg }', () => {
    expect( assoc('c', 3, {a: 1, b: 2})).to.eql( {a: 1, b: 2, c: 3} )
  })
  it('Accepts an array as a first argument', () => {
    expect( assoc([4], 5, {a: 1, b: 2})).to.eql( {a: 1, b: 2, 4: 5} )
  })
})
