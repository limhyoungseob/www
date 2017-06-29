// 서브 메뉴 제어를 위한 스크립트
// jquery와 같은 기능한다. $// 여기서 this는 li 다.
$(function() {
    $(".main-menu>li").hover(function() {
            // $("main-menu > li").children("ul").css("display", "block");
            // $(this).children("ul").css("display", "block");
            $(this).find("ul").css("display", "block");

        },
        function() {
            // $("main-menu > li").children("ul").css("display", "none");
            // $(this).children("ul").css("display", "none");
            $(this).find("ul").css("display", "none");
        }
    );


    //
    // $(".main-menu span").focusin(
    //     function() {
    //         $(this).siblings("ul").css("display", "block");
    //     }
    // );
    $(".main-menu>li").focusin(
        function() {
            $(this).children("ul").css("display", "block");
        }
    );
    $(".main-menu ul li:last-child a").focusout(
        function() {
            $(this).parent().parent().css("display", "none");
            // $(this).parents("li").css("display", "none"); // 실패
        }
    );

    // $(".main-menu > li").focusin(
    //     function() {
    //         $(this).children("ul").css("display", "block");
    //     }
    // );
    // $(".main-menu >li").focusout(
    //     function() {
    //         $(this).parent("li").css("display", "none");
    //     }
    // );
});