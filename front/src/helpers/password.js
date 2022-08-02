export default class Password {
  static validate(password) {
    if (password.length > 32) return false;
    if (!/^[a-hj-km-z]*$/.test(password)) return false;
    if (
      !/(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/.test(
        password
      )
    )
      return false;
    if (
      !/(aa|bb|cc|dd|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|xx|yy|zz)/.test(
        password
      )
    )
      return false;

    return true;
  }
}
