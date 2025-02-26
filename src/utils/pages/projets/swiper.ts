import 'swiper/css';

import { Swiper } from 'swiper/bundle';

export function swiperPromotions() {
  const swiperContainers = document.querySelectorAll('.swiper.is-projets, swiper.is-galerie');

  swiperContainers.forEach((container) => {
    new Swiper(container as HTMLElement, {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 1.5 * 16,
      autoHeight: true,
      speed: 500,
      mousewheel: {
        forceToAxis: true,
      },
      pagination: {
        el: container.parentElement?.querySelector(
          '.swiper-controls .swiper-pagination-wrapper'
        ) as HTMLElement,
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
      },
      navigation: {
        nextEl: container.parentElement?.querySelector(
          '.swiper-controls .swiper-navigation.is-next'
        ) as HTMLElement,
        prevEl: container.parentElement?.querySelector(
          '.swiper-controls .swiper-navigation.is-prev'
        ) as HTMLElement,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  });
}

export function swiperGalerie() {
  const swiperContainers = document.querySelectorAll('.swiper.is-galerie');

  swiperContainers.forEach((container) => {
    new Swiper(container as HTMLElement, {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 1.5 * 16,
      autoHeight: true,
      speed: 500,
      mousewheel: {
        forceToAxis: true,
      },
      pagination: {
        el: container.parentElement?.querySelector(
          '.swiper-controls .swiper-pagination-wrapper'
        ) as HTMLElement,
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
      },
      navigation: {
        nextEl: container.parentElement?.querySelector(
          '.swiper-controls .swiper-navigation.is-next'
        ) as HTMLElement,
        prevEl: container.parentElement?.querySelector(
          '.swiper-controls .swiper-navigation.is-prev'
        ) as HTMLElement,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  });
}
