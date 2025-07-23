$(document).ready(function() {
    // FAQスライダーの初期化
    $('.faq__slider').slick({
        slidesToShow: 3,        // デスクトップで4枚表示
        slidesToScroll: 1,      // 1枚ずつスクロール
        autoplay: true,         // 自動再生
        autoplaySpeed: 3000,    // 3秒間隔
        dots: true,             // ドット表示
        arrows: true,           // 矢印表示
        infinite: true,         // 無限ループ
        centerMode: true,      // センターモード有効
        centerPadding: '15%',   // センターモードのパディング
        variableWidth: false,   // 可変幅無効
        responsive: [
            {
                breakpoint: 768,    // タブレット
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false   // スマホでは矢印非表示
                }
            },
            {
                breakpoint: 480,    // スマートフォン
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false   // スマホでは矢印非表示
                }
            }
        ]
    });
});