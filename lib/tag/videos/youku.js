'use strict';

var config = require('./config');
// youku
module.exports = function (hexo, args) {
  var id = args[0].match(/^(id_|)(.+)$/);
  return '<div class="owl-media owl-video owl-youku"><iframe src="http://player.youku.com/embed/' + id[2] + '" ' + config.iframe + '></iframe></div>';
}