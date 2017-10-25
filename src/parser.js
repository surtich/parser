import {
  item,
  map,
  pure,
  ap
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
  map (f) {
    return create(map(f, this))
  }
  ap (p) {
    return create(ap(this, p))
  }
  parse (s) {
    return this(s)
  }
}
