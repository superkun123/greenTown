document.addEventListener("DOMContentLoaded", function() {
    

  // меню

  // const hamburger = document.querySelector('.main-header__hamburger')

  //   hamburger.addEventListener('click', function() {
  //       const headerMenu = document.querySelector('.header-menu')
  //       headerMenu.style.transition = "1s"
  //       headerMenu.classList.toggle('show-header-menu')
  //   })



  $('.showmore-btn').on('click', function() {
    $('.showmore-mask').toggleClass('no-bg')
  })



  // input range

  var sliderRange = document.getElementById('slider-range');
  var sliderRangePrice = document.getElementById('slider-range-price')

  if (sliderRange) {
  noUiSlider.create(sliderRangePrice, {
    start: [1500000, 8000000],
    tooltips: [wNumb({decimals: 0, thousand: ' ', suffix: ' ₽'}), wNumb({decimals: 0, thousand: ' ', suffix: ' ₽'})],
    range: {
        'min': 0,
        'max': 10000000
    },
    step: 1,
    behaviour: 'tap-drag',
    connect: true,
});

}


if (sliderRange) {
  noUiSlider.create(sliderRange, {
    start: [15, 50],
    tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
    range: {
        'min': 0,
        'max': 200
    },
    step: 1,
    behaviour: 'tap-drag',
    connect: true,
});
}





$('.dropdown-option').on('click', function() {
  $('.dropdown-choice-hidden').css('display', 'none')
})


$('.dropdown-option').on('click', function() {
  $('.dropdown-choice-hidden').css('display', 'none')
})


$('.dropdown-label').on('click', function() {
  $('.dropdown-choice-hidden').css('display', 'block')
})




var sliderRangeM = document.getElementById('slider-rangeM');
var sliderRangePriceM = document.getElementById('slider-range-priceM')

if (sliderRangeM) {
noUiSlider.create(sliderRangePriceM, {
  start: [1500000, 8000000],
  tooltips: [wNumb({decimals: 0, thousand: ' ', suffix: ' ₽'}), wNumb({decimals: 0, thousand: ' ', suffix: ' ₽'})],
  range: {
      'min': 0,
      'max': 10000000
  },
  step: 1,
  behaviour: 'tap-drag',
  connect: true,
});
}


if (sliderRangeM) {
noUiSlider.create(sliderRangeM, {
  start: [15, 50],
  tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
  range: {
      'min': 0,
      'max': 200
  },
  step: 1,
  behaviour: 'tap-drag',
  connect: true,
});
}





// cutom select
$('.dropdown-option').on('click', function() {
  console.log($(this).text())
  $('.dropdown-value').html($(this).text())
})


// room-btns
$('.room-value').click(function() {
  console.log('click value')
  $('.room-value').removeClass('room-value-active')
  $(this).addClass('room-value-active')
});


$('.sort-arrow').click(function() {
  $('.sort-arrow').removeClass('arrow-active')
  $(this).addClass('arrow-active')
})




$('#exampleModalCenter').on('hide.bs.modal', function (e) {
  console.log('hide-modal')
  const video = document.querySelector('.video-in-modal')
  video.pause()
})


$('.hamburger').click(function(e) {
  e.preventDefault()
  $('.mobile-menu').toggleClass('show-menu')
  $('body').toggleClass('body-overflow')
  $('.main-header__nav').toggleClass('bg-for-mob-menu')
  $('.firstline').toggleClass('line-close-one')
  $('.secondline').toggleClass('line-close-two')
  $('.two-number').toggleClass('green-two')
})


$(".play-btn").click(function(e) {
  e.preventDefault()
})



$('body').on('click', 'a.up', function(e){
  e.preventDefault()
  var id  = $(this).attr('href'),
  top = $(id).offset().top;
   $('body,html').animate({scrollTop: top}, 1500);
  
});


    // слайдер





        // $('.your-class').slick({
        //   infinite: true
        // });
   
          


      // var mySwiperTimeline = new Swiper('.swiper-container-timeline', {
      //   autoHeight: true,
      //   direction: 'horizontal',
      //   loop: true,
      //   effect: 'fade',
      
      
      //   navigation: {
      //     nextEl: '.swiper-button-next-timeline',
      //     prevEl: '.swiper-button-prev-timeline',
      //   },
      
      
       
      // })


      const monthArray = document.querySelectorAll('.month-tabs__li')
      // const monthArray = $('.month-tabs__li')
      console.log(monthArray)
      let progress = 0
      monthArray.forEach((element, index) => {
        let currentDate = new Date
        let currentMonth = currentDate.getMonth()
        if (index == currentMonth) {
          element.classList.add('currentMonth')
        }
        element.addEventListener('click', function() {
          if (index == currentMonth) {
            // console.log('Да, это ноябрь')
            // element.classList.add('currentMonth')
          }
          // const progressLine = document.querySelector('.progress-line-active')
          const progressLine = $('.progress-line-active')
          console.log(element.textContent)
          if(element.textContent.trim() == 'Январь') {
            progress = 2.5
          } else if(element.textContent.trim() == 'Февраль') {
            progress = 12
          }
          else if(element.textContent.trim() == 'Март') {
            progress = 21
          }
          else if(element.textContent.trim() == 'Апрель') {
            progress = 29
          }
          else if(element.textContent.trim() == 'Май') {
            progress = 36.5
          }
          else if(element.textContent.trim() == 'Июнь') {
            progress = 44
          }
          else if(element.textContent.trim() == 'Июль') {
            progress = 52
          }
          else if(element.textContent.trim() == 'Август') {
            progress = 60
          }
          else if(element.textContent.trim() == 'Сентябрь') {
            progress = 69
          }
          else if(element.textContent.trim() == 'Октябрь') {
            progress = 79
          }
          else if(element.textContent.trim() == 'Ноябрь') {
            progress = 88
          }
          else if(element.textContent.trim() == 'Декабрь') {
            progress = 100
          }
          // switch (index) {
          //   case 0:
          //     progress = 2.5
          //     break
          //   case 1:
          //     progress = 12
          //     break
          //   case 2:
          //     progress = 21
          //     break
          //   case 3:
          //     progress = 29
          //     break
          //   case 4:
          //     progress = 36.5
          //     break
          //   case 5:
          //     progress = 44
          //     break
          //   case 6:
          //     progress = 52
          //     break
          //   case 7:
          //     progress = 60
          //     break
          //   case 8:
          //     progress = 69
          //     break
          //   case 9:
          //     progress = 79
          //     break
          //   case 10:
          //     progress = 88
          //     break
          //   case 11:
          //     progress = 100
          //     break
          // }
            // progressLine.style.width = `${progress}%`
            progressLine.css('width', `${progress}%`)
         
        })
      });


      
  // let slideBullet = document.querySelectorAll('.swiper-pagination-bullet')
  // console.log(slideBullet)
  // let slideValue = 1
  // const swiperNext = document.querySelector('.swiper-button-next')
  // const swiperBack = document.querySelector('.swiper-button-prev')

  // swiperNext.addEventListener('click', function() {
  //   if(slideValue < 4) {
  //   slideValue += 1
  //   slideBullet.forEach((element, index) =>  {
  //     console.log(index)
  //     if (index == 0) {
  //       element.innerHTML = `${slideValue}`
      
  //     }
      
  //   });
  // }
  // })

  // swiperBack.addEventListener('click', function() {
  //   if (slideValue >= 2) {
  //   slideValue -= 1
  //   slideBullet.forEach((element, index) =>  {
  //     console.log(index)
  //     if (index == 0) {
  //       element.innerHTML = `${slideValue}`
  //       if (slideValue >= 4) {
  //         slideValue == 4
  //       }
  //     }
      
  //   });
  // }
  // })


  // табы для карт

	$.each($('.slider-js'), function() {

		$(this).slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			speed: 500,
			fade: true,
			cssEase: 'linear',
			nextArrow: `<button type="button" class="slick-next"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="2.00602" height="8.48077" rx="1.00301" transform="matrix(-0.707106 0.707107 0.707107 0.707106 1.41846 0)" fill="white"/>
      <rect width="1.98962" height="8.48521" rx="0.994808" transform="matrix(0.707107 0.707106 0.707106 -0.707107 0.0078125 10.5898)" fill="white"/>
      </svg></button>`,
			prevArrow: `<button type="button" class="slick-prev"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="2.00602" height="8.48077" rx="1.00301" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 6.58154 12)" fill="white"/>
      <rect width="1.98962" height="8.48521" rx="0.994808" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 7.99219 1.41016)" fill="white"/>
      </svg>
      </button>`,
		});
	});





  $('.js-tab-trigger').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="'+ id +'"]');
    
    $('.js-tab-trigger.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2
    
    $('.js-tab-content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
 });


//  Табы для годов

 $('.tab-year-item-title').click(function() {
  var id = $(this).attr('data-tab'),
      content = $('.year-tab-content[data-tab="'+ id +'"]');
  // $('.slider-js').slick('setPosition')
  // $('.slider-js').slick('reinit')
  // $('.slider-js').slick(getSliderSettings())
  
  $('.tab-year-item-title.active').removeClass('active'); // 1
  $(this).addClass('active'); // 2
  $('.tab-year-item-title.active .slider-js').slick('setPosition')
  
  $('.year-tab-content.active').removeClass('active'); // 3
  content.addClass('active'); // 4
});

// Reinit slider in tab
$('.tab-year-item-title').on('click', function() {
  $(".slider-js").slick('reinit');
  console.log('reinit')
})


// Табы месяцев

$('.month-tabs__li').click(function() {
  var id = $(this).attr('data-tab'),
      content = $('.month-content[data-tab="'+ id +'"]');
  
  $('.month-tabs__li.active').removeClass('active'); // 1
  $(this).addClass('active'); // 2
  
  $('.month-content.active').removeClass('active'); // 3
  content.addClass('active'); // 4
});






 $('.da').click(function(e) {
   e.preventDefault()
   $('.progress-line-active').css('width', '100%')
 })


 $('.main-aside-menu-btn').on('click', function(e) {
   e.preventDefault()
   $('.aside-menu').addClass('showAsideMenu')
   $('.aside-menu__mask').addClass('showMask')
   $('body').addClass('menu-open')
 })

 $('.aside-menu__close-btn').on('click', function() {
   $('.aside-menu').removeClass('showAsideMenu')
   $('.aside-menu__mask').removeClass('showMask')
   $('body').removeClass('menu-open')
 })


 $('.form-btn').on('click', function(e) {
   e.preventDefault()
   console.log('click')
   $('.modal-for-form').addClass('show-modal')
   $('body').addClass('body-overflow')

 })


 $('.modal-for-form__close-btn').on('click', function(e) {
  e.preventDefault()
  $('.modal-for-form').removeClass('show-modal')
  $('body').removeClass('body-overflow')
})



// Фильтры меню для мобилок

const navExpandFilter = [].slice.call(document.querySelectorAll('.nav-expand-filter'))
console.log(navExpandFilter)
const backLinkFilter = ``

navExpandFilter.forEach(item => {
	item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLinkFilter)
	item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
	item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
})


const filterBtn = document.getElementById('filter-btn')
const filterCross = document.querySelector('.cross-filter')
if (filterBtn) {
filterBtn.addEventListener('click', function() {
  document.body.classList.toggle('nav-is-toggled-filter')
})

}


// Закрыть фильтр

$('.cross-filter').on('click', function() {
  console.log('click-filter')
  $('body').toggleClass('nav-is-toggled-filter')
})



});