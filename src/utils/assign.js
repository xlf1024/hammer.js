/**
 * @private
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
let assign;
if (typeof Object.assign !== 'function') {
  assign = function assign(target) {
    let output = Object(target);
    for (let index = 1; index < arguments.length; index++) {
      const source = arguments[index];
        for (const nextKey in source) {
          if (source.hasOwnProperty(nextKey)) {
            output[nextKey] = source[nextKey];
          }
      }
    }
    return output;
  };
} else {
  assign = Object.assign;
}

export default assign;
