//サムネイル
const topThumbnail = new Swiper('.p-swiper__thumbnail', {
  slidesPerView: 3,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});


//スライダー
const topSwiper = new Swiper('.p-swiper', {
  loop: true,
  slidesPerView: 1,
 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  thumbs: {
    swiper: topThumbnail
  }
 
});