export const and = (p, q) => x => p(x) && q(x)
export const or = (p, q) => x => p(x) || q(x)
export const isEmpty = xs => !xs || xs.length === 0
export const head = xs => xs[0]
export const tail = xs => xs.slice(1)
export const toUpper = xs => xs.toUpperCase()
export const isDigit = x => x.length === 1 && x >= '0' && x <= '9'
export const isLower = x => x.length === 1 && x >= 'a' && x <= 'z'
export const isUpper = x => x.length === 1 && x >= 'A' && x <= 'Z'
export const isAlpha = or(isLower, isUpper)
export const isAlphanum = or(isAlpha, isDigit)

export const toLazy = f => {
  const g = _ => f()
  g.isLazy = true
  return g
}

export const toEager = f => f.isLazy ? f() : f
