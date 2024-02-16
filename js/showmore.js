
$(document).ready(function () {
    $('.showToggle li:lt(3)').show();
    $('.less').hide();
    var items =  4;
    var shown =  3;
    $('.show-more').click(function () {
        //  $('.less').show();
        shown = $('.showToggle li:visible').length+1;
        if(shown< items) {
          $('.showToggle li:lt('+shown+')').show(300);
        } else {
          $('.showToggle li:lt('+items+')').show(300);
          $('.show-more').hide();
        }
    });
    $('.less').click(function () {
        $('.showToggle li').not(':lt(3)').hide(300);
        $('.show-more').show();
        $('.less').hide();
    });
});