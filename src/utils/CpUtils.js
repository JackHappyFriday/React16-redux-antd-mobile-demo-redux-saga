/**
 * 公用函数
 * @param obj
 * @returns {string}
 */
export function stringify(obj) {
  return JSON.stringify(obj, function (key, value) {
    if (key && value === null) {
      return undefined;
    } if (key && /^_/.test(key)) {
      return undefined;
    } if (key && typeof value === 'string') {
      return value.trim();
    } if (
      /_id$/.test(key)
      && value === 0
      && key !== 'supervisor_id'
      && key !== 'type_id'
      && key !== 'header_type_id'
    ) {
      return undefined;
    } if (/attachment/.test(key) && Array.isArray(value)) {
      return value.filter(function (v) {
        return v;
      });
    }
    return value;
  });
}
