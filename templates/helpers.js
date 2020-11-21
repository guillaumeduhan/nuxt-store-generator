module.exports = {
  formatToGetters(storeName, sing, camelCase) {
    let result = storeName.split('-').map(function (x, i) {
      if (camelCase) {
        if (i > 0) {
          return x = x.capitalize()
        }
        return x
      }
      return x = x.capitalize()
    }).join('')
    if (sing) {
      return this.sing(result)
    }
    return result
  },
  generateStoreName(processArgs) {
    let finalArray = [];
    processArgs.forEach((x, i) => {
      if (i > 1) {
        finalArray.push(this.removeNumber(x.toLowerCase()))
      }
    })
    return this.toKebabCase(finalArray)
  },
  removeNumber(s) {
    return s.replace(/\d/g, "");
  },
  sing(str) {
    if (str.slice(-1) === 's' || 'S') {
      return str.substring(0, str.length - 1);
    }
  },
  toKebabCase(arr) {
    return arr.join('-')
  },
  toSnakeCase(arr) {
    return arr.join('_')
  },
}