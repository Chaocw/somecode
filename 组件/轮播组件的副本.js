var Carousel = (function(){
  function _Carousel($ct) {
    this.$ct = $ct;
    this.init();
  }
  _Carousel.prototype.init = function(){
    var $imgCt = this.$imgCt = this.$ct.find($('.img-ct')),
        $first = $imgCt.children().eq(0),
        $last = $imgCt.children().eq(3),
        imgWidth = this.imgWidth = $first.width(),
        $pre = this.$pre = this.$ct.find($('.pre')),
        $next = this.$next = this.$ct.find($('.next')),
        _this = this,
        $bullet = this.$bullet = this.$ct.find('.bullet');

    this.lock = false,
    this.curPageIndex = 0,
    this.imgLength = $imgCt.children().length

    $imgCt.prepend($last.clone());
    $imgCt.append($first.clone());
    $imgCt.css('margin-left', '-350px');
    $pre.on('click', function(e){

      _this.preImg(1)
    })
    $next.on('click', function(e){

      _this.nextImg(1)
    })
    $bullet.on('click', 'li', function(){
      var num = _this.curPageIndex - $(this).index()
      if(num > 0){
        _this.preImg(num)
      }else{
        _this.nextImg(-num)
      }
    })
  }
  _Carousel.prototype.preImg = function(num){
    var _this = this

    if(this.lock) return;
    this.lock = true;
    this.$imgCt.animate({
      'margin-left': '+=' + this.imgWidth * num
    }, function(){
      _this.curPageIndex-=num;
      console.log(_this.curPageIndex);
      if(_this.curPageIndex < 0){
        _this.$imgCt.css('margin-left', -(_this.imgLength * _this.imgWidth));
        _this.curPageIndex = 3;
      }
      _this.lock = false;
      _this.setBullet()
    })
  }
  _Carousel.prototype.nextImg = function(num){
    var _this = this;

    if(this.lock) return;
    this.lock = true;
    this.$imgCt.animate({
      'margin-left': '-=' + this.imgWidth * num
    }, function(){
      _this.curPageIndex+=num;
      console.log(_this.curPageIndex);
      if(_this.curPageIndex > 3){
        _this.$imgCt.css('margin-left', -(_this.imgWidth));
        _this.curPageIndex = 0;
      }
      _this.lock = false;
      _this.setBullet()
    })
  }
  _Carousel.prototype.setBullet = function(){
    this.$bullet.children().removeClass('active')
    .eq(this.curPageIndex).addClass('active')
  }
  return {
    init: function($ct){
      $ct.each(function(index, node){
        new _Carousel($(node))
      })
    }
  }
})()
Carousel.init($('.ct'))




















