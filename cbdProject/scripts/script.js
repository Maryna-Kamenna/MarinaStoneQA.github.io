function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("about__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("about__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



//slick slider для 'products'

$('.featured__slide').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    arrows: true,
    prevArrow: '<div class="featured__prev-arrow"><img src="/images/left_green.png" alt="arrow left" class="prev-arrow"></div>',
    nextArrow: '<div class="featured__next-arrow"><img src="/images/right_green.png" alt="arrow right" class="next-arrow"></div>',
    responsive: [{
        breakpoint: 1300,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 1000,
        settings: {
            slidesToShow: 1,
        }
    },
    ]

});
// slick slider для отзывов
$('.testimonials__slider').slick({
    autoplay: true,
   autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<div class="featured__prev-arrow"><img src="/images/left_green.png" alt="arrow left" class="prev-arrow"></div>',
    nextArrow: '<div class="featured__next-arrow"><img src="/images/right_green.png" alt="arrow right" class="next-arrow"></div>',
});