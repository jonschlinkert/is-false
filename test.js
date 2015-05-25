/*!
 * is-false <https://github.com/jonschlinkert/is-false>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var isFalse = require('./');

describe('isFalse', function () {
  it('should return true if the value is strictly false:', function () {
    assert.equal(isFalse({a: false}, 'a'), true);
  });

  it('should return true if the value is not strictly true:', function () {
    assert.equal(isFalse({a: 'true'}, 'a'), true);
    assert.equal(isFalse({a: 'false'}, 'a'), true);
    assert.equal(isFalse({a: 5}, 'a'), true);
    assert.equal(isFalse({a: []}, 'a'), true);
  });

  it('should return true if the value is strictly false:', function () {
    assert.equal(isFalse({a: false}, 'a'), true);
  });

  it('should return true if the inverse is strictly true:', function () {
    assert.equal(isFalse({noa: true}, 'a'), true);
  });

  it('should return true if the value is false and the inverse is true:', function () {
    assert.equal(isFalse({noa: true, a: false}, 'a'), true);
    assert.equal(isFalse({noa: true, a: true}, 'a'), true);
    assert.equal(isFalse({noa: false, a: false}, 'a'), true);
    assert.equal(isFalse({noa: false, a: true}, 'a'), false);
  });

  it('should throw an error when the first argument is not an object:', function () {
    assert.throws(function () {
      isFalse(null);
    }, 'is-false expects the first argument to be an object.');

    assert.throws(function () {
      isFalse('');
    }, 'is-false expects the first argument to be an object.');
  });

  it('should throw an error when the second argument is not a string:', function () {
    assert.throws(function () {
      isFalse({});
    }, 'is-false expects the second argument to be a string.');

    assert.throws(function () {
      isFalse({}, {});
    }, 'is-false expects the second argument to be a string.');

    assert.throws(function () {
      isFalse({}, null);
    }, 'is-false expects the second argument to be a string.');
  });
});
