import add from './add.js'
import { minus } from './minus.js'
import { chunk } from 'lodash-es'
import { a } from './util'

const sum = add(1, 2)
const division = minus(2, 1)

console.log(sum)
console.log(division)
console.log(chunk(['a', 'b', 'c'], 2))
console.log(a())