import chai from 'chai'
import curry from '../lib/curry.js'
import R from 'ramda'
const expect = chai.expect

// describe('Divide', () => {
//   it('should divide first param by second param', () => {
//     expect(divide(70, 100)).to.eql(.7)
//   })
//   it('should behave the same as ramda divide', () => {
//     expect(divide(70, 100)).to.eql(R.divide(70, 100))
//   })
// })

let uncurriedAdd = (a, b, c) => a + b + c

let answer = uncurriedAdd( 1, 2, 3)

let curriedAdd = R.curry(uncurriedAdd)

let answer2 = curriedAdd(1)(2)

console.log('answer2', answer2)
