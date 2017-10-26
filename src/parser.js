import {
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
  some
} from './methods'

const create = f => new Parser(f)

export class Parser {
  constructor (f) {
    const g = (...xs) => f(...xs)
    Object.setPrototypeOf(g, Parser.prototype)
    return g
  }

  static item = create(item)
  static pure = x => create(pure(x))
  static empty = create(empty)
  static sat = f => create(sat(f))
  static digit = create(digit)
  static lower = create(lower)
  static upper = create(upper)
  static alphanum = create(alphanum)
  static char = c => create(char(c))
  static string = s => create(string(s))
  static many = p => create(many(p))
  static some = p => create(some(p))

  map (f) {
    return create(map(f, this))
  }
  ap (p) {
    return create(ap(this, p))
  }
  flatMap (f) {
    return create(flatMap(this, f))
  }
  then (p) {
    return create(then(this, p))
  }
  option (p) {
    return create(option(this, p))
  }

  parse (s) {
    return this(s)
  }
}
