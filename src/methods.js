import {
  isEmpty,
  head,
  tail
} from './util'

//    item :: Parser Char
const item = s => isEmpty(s) ? [] : [{x: head(s), xs: tail(s)}]

//    map :: (a -> b) -> Parser a -> Parser b
const map = (f, p) => s => {
  const [res] = p(s)
  return isEmpty(res) ? [] : [{x: f(res.x), xs: res.xs}]
}

//    pure :: a -> Parser a
const pure = x => xs => [{x, xs}]

//    ap :: Parser (a -> b) -> Parser a -> Parser b
const ap = (pf, px) => s => {
  const [res] = pf(s)
  return isEmpty(res) ? [] : map(res.x, px)(res.xs)
}

export {
  item,
  map,
  pure,
  ap
}
