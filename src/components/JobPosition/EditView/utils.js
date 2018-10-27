import some from 'lodash.some';
import isEmpty from 'lodash.isempty';

export function objectHasTruthyValue(obj) {
  return !isEmpty(obj) && some(obj, item => item);
}
