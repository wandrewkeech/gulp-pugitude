'use strict';

var path = require('path');
var utils = require('./utils');

module.exports = function destPath(dest, fn, options) {
  if (typeof fn !== 'function') {
    options = fn;
    fn = null;
  }

  if (typeof dest !== 'string') {
    options = dest;
    dest = '.';
  }

  return utils.through.obj(function (file, enc, cb) {
    var opts = utils.extend({}, options);
    var parsed = utils.extend(utils.parse(file.path), opts);
    if (typeof fn === 'function') {
      parsed = fn(parsed, file);
    }

    try {
      if (dest.indexOf(':') !== -1) {
        var interpolate = utils.placeholders(opts);
        file.path = interpolate(dest, parsed);
      } else {
        // get the new dest extension based on the engine extension
        var ext = opts.ext || opts.extname || path.extname(file.path);
        var name = opts.basename || file.relative;
        var base = opts.base || opts.dirname || file.base;

        // calculate the new destination path
        file.path = utils.rewrite(path.join(base, dest, name), ext);
      }

      this.push(file);
    } catch (err) {
      this.emit('error', new utils.gutil.PluginError('gulp-dest', err));
    }

    return cb();
  });
};
