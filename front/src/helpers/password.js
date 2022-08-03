export default class Password {
  static validate(password) {
    return password.length <= 32
      && /^[a-hj-km-z]*$/.test(password)
      && /(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/.test(password)
      && /(aa|bb|cc|dd|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|xx|yy|zz)/.test(password);
  }
}
