const { distributeGifts } = require('./index')

test('Test #01', () => {
  expect(typeof distributeGifts(['a', 'b', 'c'], ['d', 'e'])).toBe('number')
})

test('Test #02', () => {
  expect(distributeGifts(['book', 'doll', 'ball'], ['dasher', 'dancer'])).toBe(2)
})

test('Test #03', () => {
  expect(distributeGifts(['a', 'b', 'c'], ['d', 'e'])).toBe(1)
})

test('Test #04', () => {
  expect(distributeGifts(['videogames', 'console'], ['midu'])).toBe(0)
})

test('Test #05', () => {
  expect(distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])).toBe(5)
})

test('Test #06', () => {
  expect(distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])).toBe(26)
})
