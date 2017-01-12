import chai from 'chai'
import binary from '../lib/binary.js'
import R from 'ramda'
const expect = chai.expect

describe('Binary', () => {
  it('wraps a ternary function such that it only accepts 2 arguments', () => {
    let takesThreeArgs = (a, b, c) => [a, b, c]
    let takesTwoArgs = binary(takesThreeArgs)
    let twoArgs = takesTwoArgs( 1, 2, 3 )
    expect( takesTwoArgs.length ).to.eql( 2 )
    expect( takesTwoArgs( 1, 2, 3 ) ).to.eql( [ 1, 2, undefined ] )
  })

  it('wraps a ternary function such that it only accepts 2 arguments', () => {
    let takesThreeArgs = (a, b, c) => [a, b, c]
    let takesTwoArgs = binary(takesThreeArgs)
    let twoArgs = takesTwoArgs( 1, 2, 3 )
    expect( takesTwoArgs.length ).to.eql( 2 )
    expect( takesTwoArgs( 1, 2, 3 ) ).to.eql( [ 1, 2, undefined ] )
  })

  it('wraps a ternary function such that it only accepts 2 arguments', () => {
    let takesThreeArgs = (a, b, c) => [a, b, c]
    let takesTwoArgs = binary(takesThreeArgs)
    let twoArgs = takesTwoArgs( 1, 2, 3 )
    expect( takesTwoArgs.length ).to.eql( 2 )
    expect( takesTwoArgs( 1, 2, 3 ) ).to.eql( [ 1, 2, undefined ] )
  })
})
