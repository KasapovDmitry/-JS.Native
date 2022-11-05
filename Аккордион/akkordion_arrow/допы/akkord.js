//---- faq settings ----//
jQuery(document).ready(function ($) {
    $(".faq-acc__title").click(function (j) {
        var dropDown = $(this).closest(".faq-acc__item").find(".faq-acc__panel");
        $(this).closest(".faq-acc").find(".faq-acc__panel").not(dropDown).slideUp();
 
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).closest(".faq-acc").find(".faq-acc__title.active").removeClass("active");
            $(this).addClass("active");
        }
 
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });
});