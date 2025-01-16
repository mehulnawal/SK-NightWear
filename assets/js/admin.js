// dropdown toggle srt
$(document).ready(function () {
    $(".catalog-li").click(function () {
        $(".catalog-dropdown").toggleClass("catalog-dropdown-toggle");
        $(".catalog-up").toggleClass("toggle-angle-none");
        $(".catalog-down").toggleClass("toggle-angle-block");;
        return false;
    })

    $(".international-li").click(function () {
        $(".international-dropdown").toggleClass("catalog-dropdown-toggle");
        $(".international-up").toggleClass("toggle-angle-none");
        $(".international-down").toggleClass("toggle-angle-block");;
        return false;
    })

    $(".online-store-li").click(function () {
        $(".online-store-dropdown").toggleClass("catalog-dropdown-toggle");
        $(".online-store-up").toggleClass("toggle-angle-none");
        $(".online-store-down").toggleClass("toggle-angle-block");;
        return false;
    })
})
// dropdown toggle end

// sidebar toggle srt
$(document).ready(function () {
    $(".menu").click(function () {
        $(".sidebar").toggleClass("sidebar-toggle")
        $(".head-inner").toggleClass("margin-left")
        $(".nav").toggleClass("nav-toggle")
    })
})
// sidebar toggle end