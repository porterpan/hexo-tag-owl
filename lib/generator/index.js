'use strict';

var fs       = require('fs');
var path     = require('path');
var stylus   = require('stylus');
var optioner = require('../util/optioner');

/**
 * Generator: owl
 *
 *   A hexo generator plugin. Used to generate default css written in
 * Stylus for owl tags.
**/
module.exports = function(locals) {
  var ctx     = this;
  var option  = optioner(ctx.config.owl);
  // generate css
  if ('default' === option.css) {
    var str = fs.readFileSync(
      path.join(__dirname, '../asset/css.styl'),
      { encoding: 'utf8' });
    return {
      path: option.file,
      data: stylus.render(str)
    }
  }
  return {}
}