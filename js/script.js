(function() {

    var myheader =$(".header");

    $(".link li").click(function() {
        $(this).addclass("active").siblings().removeclass("active");
    })
});