$(document).ready(function() {
    // ローディングアニメーションの制御
    function initLoading() {
        const loading = $('#loading');
        const hasVisited = localStorage.getItem('metaleaf-visited');
        
        // デバッグ用：localStorageをクリアしたい場合は下記のコメントアウトを外す
        localStorage.removeItem('metaleaf-visited');

        // 初回訪問の場合のみローディングを表示
        if (!hasVisited) {
            // showでローディングを表示
            loading.addClass('show');

            // 2秒後にフェードアウト開始
            setTimeout(function() {
                loading.addClass('fade-out');
                
                setTimeout(function() {
                    // 訪問済みフラグを設定
                    localStorage.setItem('metaleaf-visited', 'true');
                    // ローディング要素を非表示
                }, 2000); // CSSのtransition時間（2秒）に合わせる
            }, 2000); // 表示時間2秒
        } else {
        }
    }
    
    // ローディング初期化
    initLoading();

    // FAQスライダーの初期化
    $('.faq__slider').slick({
        slidesToShow: 3,        // デスクトップで4枚表示
        slidesToScroll: 1,      // 1枚ずつスクロール
        autoplay: true,         // 自動再生
        autoplaySpeed: 6000,    // 6秒間隔
        infinite: true,         // 無限ループ
        centerMode: true,      // センターモード有効
        centerPadding: '15%',   // センターモードのパディング
        variableWidth: true,   // 可変幅有効
        arrows: false,           // 矢印を非表示
        responsive: [
            {
                breakpoint: 768,    // タブレット
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,    // スマートフォン
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // useセクションスライダーの初期化
    $('.use__slider').slick({
        slidesToShow: 3,        // デスクトップで3枚表示
        slidesToScroll: 1,      // 1枚ずつスクロール
        autoplay: true,         // 自動再生
        autoplaySpeed: 5000,    // 5秒間隔
        infinite: true,         // 無限ループ
        centerMode: true,      // センターモード有効
        centerPadding: '15%',   // センターモードのパディング
        variableWidth: true,   // 可変幅有効
        arrows: false,           // 矢印を非表示
        responsive: [
            {
                breakpoint: 768,    // タブレット
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,    // スマートフォン
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // 上に戻るボタンの制御
    const pageTop = $('#pageTop');
    
    // スクロール位置に応じてボタンの表示/非表示を切り替え
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            pageTop.addClass('show');
        } else {
            pageTop.removeClass('show');
        }
    });
    
    // ボタンクリック時の動作
    pageTop.click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});