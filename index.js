require('console.table')

const mc =[
  [0.4, 0.6, 0.0, 0.0],  // a, b, c, d
  [0.6, 0.2, 0.2, 0.0],  // e, f, g, h
  [0.0, 0.5, 0.3, 0.2],  // i, j, k, l
  [0.0, 0.0, 0.2, 0.8]   // m, n, o, p
]

const x2tox1_part1 = ((mc[2][1]*(1 - mc[0][0])) + (mc[2][0]*mc[0][1]))
const x2tox1_part2 = ((mc[2][0]*(1 - mc[1][1])) + (mc[2][1]*mc[1][0]))
const x2tox1 = (x2tox1_part1/x2tox1_part2)

const x4tox3_part1 = ((mc[1][3]*(1 - mc[2][2])) + (mc[1][2]*mc[2][3]))
const x4tox3_part2 = ((mc[1][2]*(1 - mc[3][3])) + (mc[1][3]*mc[3][2]))
const x4tox3 = (x4tox3_part1/x4tox3_part2)

const x3tox2_part1 = ((1 - mc[1][1]) - (mc[0][1] * (1/x2tox1)))
const x3tox2_part2 = (mc[2][1] + (mc[3][1] * x4tox3))
const x3tox2 = (x3tox2_part1/x3tox2_part2)

let x1 = (1/(1 + x2tox1 + (x2tox1*x3tox2) + (x2tox1*x3tox2*x4tox3)))
let x2 = (x1/x2tox1)
let x3 = (x2/x3tox2)
let x4 = (x3/x4tox3)

console.log('Input is:')
console.table(mc)
console.log(`The state distribution is [ ${x1} ${x2} ${x3} ${x4} ]`)
