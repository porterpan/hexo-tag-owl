'use strict';

var config = require('./config');
// vimeo
module.exports = function (hexo, args) {
  var id = args[0];
  return '<div class="owl-media owl-video owl-vimeo"><iframe src="//player.vimeo.com/video/' + id + '" ' + config.iframe + '></iframe></div>';
}