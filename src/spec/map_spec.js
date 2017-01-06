import chai from 'chai'
import map from '../lib/map.js'
import R from 'ramda'
const expect = chai.expect

describe('Map', () => {
  it('Takes a function and a functor, applies the function to each of the functors values, and returns a functor of the same shape.', () => {
    let double = x => x * 2
    expect(map(double, [1, 2, 3])).to.eql([2, 4, 6])
  })
  it('also works with objects', () => {
    let double = x => x * 2
    let answer = R.map(double, 3)
    console.log('answer', answer)
    expect(map(double, {x: 1, y: 2, z: 3})).to.eql({x: 2, y: 4, z: 6})
  })
})
