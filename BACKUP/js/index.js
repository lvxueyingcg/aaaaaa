/*
 * 处理音乐
 */
~ function () {
    // 获取需要操作的元素
    var musicBox = document.querySelector('.musicBox'),
        musicAdudio = document.querySelector('#musicAdudio');

    function musicPlay() {
        musicAdudio.play();
        musicBox.className = 'musicBox move';
        document.removeEventListener("touchstart", musicPlay, false);
    }
    // 加载页面就开始播放：IOS手机微信端对于音乐的自动播放存在BUG（经常没有声音），我们需要单独的处理一下
    musicPlay();
    document.addEventListener("WeixinJSBridgeReady", musicPlay, false);
    document.addEventListener("touchstart", musicPlay, false);

    // 点击控制播放
    musicBox.onclick = function () {
        if (musicAdudio.paused) {
            // 当前出于暂停状态：控制播放
            musicAdudio.play();
            musicBox.className = 'musicBox move';
            return;
        }
        // 当前出于播放状态：控制暂停
        musicAdudio.pause();
        musicBox.className = 'musicBox';
    };
}();

/*
 * 初始化SWIPER，基于一些参数配置实现滑屏的效果
 * https://www.swiper.com.cn/api/
 */
var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    on: {
        init: function () {
            swiperAnimateCache(this);
            swiperAnimate(this);
        },
        slideChangeTransitionEnd: function () {
            swiperAnimate(this);
        }
    }
});