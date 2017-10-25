import {
  isEmpty,
  head,
  tail
} from './util'

export class Parser {
  constructor (f) {
    this.f = f
  }
  static item = new Parser(s => isEmpty(s) ? [] : [{x: head(s), xs: tail(s)}])
  static pure = x => new Parser(xs => [{x, xs}])
  map (f) {
    return new Parser(s => {
      const [res] = this.parse(s)
      return isEmpty(res) ? [] : [{x: f(res.x), xs: res.xs}]
    })
  }
  ap (px) {
    return new Parser(s => {
      const [res] = this.parse(s)
      return isEmpty(res) ? [] : px.map(res.x).parse(res.xs)
    })
  }
  parse (s) {
    return this.f(s)
  }
}
