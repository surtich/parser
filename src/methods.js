import {
  curry,
  isEmpty,
  head,
  tail,
  isDigit,
  isLower,
  isUpper,
  isAlphanum,
  isSpace,
  toLazy,
  toEager
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
  return isEmpty(res) ? [] : map(res.x, toEager(px))(res.xs)
}

//    flatMap :: Parser a -> (a -> Parser b) -> Parser b
const flatMap = curry((pa, f) => s => {
  const [res] = pa(s)
  if (isEmpty(res)) return []
  const {x, xs} = res
  return f(x)(xs)
})

//    then :: Parser a -> Parser b -> Parser b
const then = (pa, pb) => flatMap(pa, () => pb)

//    empty :: Parser a
const empty = _ => []

//    option :: Parser a -> Parser a -> Parser a
const option = (p, q) => s => {
  const [res] = p(s)
  return isEmpty(res) ? q(s) : [res]
}

//    sat :: (Char -> Bool) -> Parser Char
const sat = f => flatMap(item, x => f(x) ? pure(x) : empty)

//    digit :: Parser Char
const digit = sat(isDigit)

//    lower :: Parser Char
const lower = sat(isLower)

//    upper :: Parser Char
const upper = sat(isUpper)

//    alphanum :: Parser Char
const alphanum = sat(isAlphanum)

//    char :: Char -> Parser Char
const char = c => sat(cc => c === cc)

//    String :: String -> Parser String
const string = xs => isEmpty(xs) ? pure([]) : then(char(head(xs)), then(string(tail(xs)), pure(xs)))

//    many :: Parser a -> Parser [a]
const many = p => {
  return option(some(p), pure(''))
}

//    some :: Parser a -> Parser [a]
const some = p => {
  return ap(map(x => xs => x + xs, p), toLazy(_ => many(p)))
}

//    ident :: Parser String
const ident =
  flatMap(lower, x =>
    flatMap(many(alphanum), xs =>
      pure(x + xs)))

//    nat :: Parser Nat
const nat =
  flatMap(some(digit), xs =>
    pure(parseInt(xs, 10)))

//    int :: Parser Int
const int = option(
  then(char('-'), flatMap(nat, n =>
    pure(-parseInt(n, 10)))),
  nat)

//    space :: Parser ()
const space = then(many(sat(isSpace)), pure([]))

export {
  item,
  map,
  pure,
  ap,
  flatMap,
  then,
  empty,
  option,
  sat,
  digit,
  lower,
  upper,
  alphanum,
  char,
  string,
  many,
  some,
  ident,
  nat,
  int,
  space
}
