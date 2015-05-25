/*!
 * is-false <https://github.com/jonschlinkert/is-false>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isTrue = require('is-true');

module.exports = function (o, key) {
  return isTrue(o, key) === false;
};
