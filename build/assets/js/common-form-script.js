// 1. Contry Fleg dropdown on  click //
$(".dropdown_click .selected").on('click', function() {
    $(".dropdown_click .drop-content ul").slideToggle();
});

$(".dropdown_click .drop-content ul li span").on('click', function() {
    // var bindText = $(this).html();
    $(".dropdown_click .selected  span").html($(this).html());
    $(".dropdown_click .drop-content ul").slideUp();
});

// 3. Contry Fleg dropdown on  click //
function rangeSlide(value) {
    document.getElementById('price_range').innerHTML = value;
}


// 2. Range Slider Comment  //
var rangeSlider = function() {
    var slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');

    slider.each(function() {

        value.each(function() {
            var value = $(this).prev().attr('value');
            $(this).html(value);
        });

        range.on('input', function() {
            $(this).next(value).html(this.value);
        });
    });
};

rangeSlider();