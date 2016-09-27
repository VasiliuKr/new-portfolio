'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function () {
    var spriteData = $.gulp.src('./source/sprite/*.png').pipe($.gp.spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite-png.css'
    }));
    return spriteData.pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};