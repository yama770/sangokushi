$(document).ready(function() {
    // ローディングアニメーションの制御
    function initLoading() {
        const loading = $('#loading');
        const hasVisited = localStorage.getItem('metaleaf-visited');
        
        // デバッグ用：localStorageをクリアしたい場合は下記のコメントアウトを外す
        // localStorage.removeItem('metaleaf-visited');

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
                    // body要素を表示（初回ローディング完了）
                    $('body').css('visibility', 'visible');
                }, 2000); // CSSのtransition時間（2秒）に合わせる
            }, 2000); // 表示時間2秒
        } 
    }
    
    // ローディング初期化
    initLoading();

    // FAQスライダーの初期化
    $('.faq__slider').slick({
        slidesToShow: 3,        // デスクトップで4枚表示
        slidesToScroll: 1,      // 1枚ずつスクロール
        autoplay: true,         // 自動再生
        autoplaySpeed: 3000,    // 3秒間隔
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
        autoplaySpeed: 3000,    // 3秒間隔
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
        smoothScrollTo(0, 1000);
    });

    // ページ遷移ローディング機能
    function showPageTransitionLoading() {
        const loadingHtml = `
            <div class="page-transition-loading" id="pageTransitionLoading">
                <div class="page-transition-loading__container">
                    <div class="page-transition-loading__img-box">
                        <div class="page-transition-loading__img">
                            <img src="img/loading-ham01.png" alt="〇">
                        </div>
                        <div class="page-transition-loading__img">
                            <img src="img/loading-ham02.png" alt="〇">
                        </div>
                        <div class="page-transition-loading__img">
                            <img src="img/loading-ham03.png" alt="〇">
                        </div>
                    </div>
                    <div class="page-transition-loading__bar">
                        <div class="page-transition-loading__progress"></div>
                    </div>
                </div>
            </div>
        `;
        
        // ローディング要素が存在しない場合のみ追加
        if ($('#pageTransitionLoading').length === 0) {
            $('body').append(loadingHtml);
        }
        
        // 表示
        setTimeout(() => {
            $('#pageTransitionLoading').addClass('show');
        }, 10);
    }

    function hidePageTransitionLoading() {
        setTimeout(() => {
            $('#pageTransitionLoading').removeClass('show');
        }, 1800);

        // body要素を表示する
        $('body').css('visibility', 'visible');
        
        setTimeout(() => {
            $('#pageTransitionLoading').remove();
        }, 2000);
    }

    // スムーススクロール関数
    function smoothScrollTo(targetPosition, duration = 800) {
        const startPosition = $(window).scrollTop();
        const distance = targetPosition - startPosition;
        const startTime = performance.now();

        function animation(currentTime) {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // イージング関数（ease-out）
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentPosition = startPosition + (distance * easeOut);
            
            window.scrollTo(0, currentPosition);
            
            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }
        
        requestAnimationFrame(animation);
    }

    // ナビゲーションリンクのスムーススクロール
    function initSmoothScroll() {
        // アンカーリンク、guide.htmlリンク、index.htmlリンクを対象にする
        $('a[href^="#"], a[href*="index.html#"], a[href="guide.html"], a[href="index.html"]').click(function(e) {
            const href = $(this).attr('href');
            
            // guide.htmlへの遷移の場合
            if (href === 'guide.html') {
                e.preventDefault();
                
                // ページ遷移フラグを設定
                sessionStorage.setItem('pageTransition', 'true');
                
                // ページ遷移（ローディング表示なし）
                window.location.href = href;
                
                return false;
            }
            
            // index.htmlへの遷移の場合（guide.htmlから）
            if (href === 'index.html' && window.location.pathname.includes('guide.html')) {
                e.preventDefault();
                
                // ページ遷移フラグを設定
                sessionStorage.setItem('pageTransition', 'true');
                
                // ページ遷移（ローディング表示なし）
                window.location.href = href;
                
                return false;
            }
            
            // 外部ページのアンカーリンクの場合
            if (href.includes('index.html#') || (window.location.pathname.includes('guide.html') && href.startsWith('#'))) {
                e.preventDefault();
                
                // ページ遷移フラグを設定
                sessionStorage.setItem('pageTransition', 'true');
                
                // ページ遷移（ローディング表示なし）
                if (href.includes('index.html#')) {
                    window.location.href = href;
                } else {
                    // guide.htmlからindex.htmlへの遷移
                    window.location.href = 'index.html' + href;
                }
                
                return false;
            }
            
            // 同ページ内のスクロール
            if (href !== '#' && href !== '#top') {
                e.preventDefault();
                const target = $(href);
                
                if (target.length) {
                    const targetOffset = target.offset().top - 100; // ヘッダー分のオフセット
                    smoothScrollTo(targetOffset, 800);
                }
            } else if (href === '#' || href === '#top') {
                e.preventDefault();
                smoothScrollTo(0, 800);
            }
        });
    }

    // URLハッシュに基づくスクロール（ページ読み込み時）
    function handleHashScroll() {
        const hash = window.location.hash;
        const isPageTransition = sessionStorage.getItem('pageTransition') === 'true';
        
        if (isPageTransition) {
            // ページ遷移の場合はローディングを表示
            showPageTransitionLoading();
        }
        
        if (hash && hash !== '#' && hash !== '#top') {
            setTimeout(() => {
                const target = $(hash);
                if (target.length) {
                    const targetOffset = target.offset().top - 100;
                    
                    if (isPageTransition) {
                        // 外部ページからの遷移：直接ジャンプ
                        window.scrollTo(0, targetOffset);
                        
                        // セクション移動完了後にローディングを非表示
                        setTimeout(() => {
                            hidePageTransitionLoading();
                            sessionStorage.removeItem('pageTransition');
                        }, 500);
                    } else {
                        // 同ページ内：スムーススクロール
                        smoothScrollTo(targetOffset, 1000);
                    }
                }
            }, isPageTransition ? 200 : 100); // ページ遷移の場合は少し遅延
        } else if (hash === '#top' || hash === '#') {
            if (isPageTransition) {
                setTimeout(() => {
                    window.scrollTo(0, 0);
                    
                    // トップ移動完了後にローディングを非表示
                    setTimeout(() => {
                        hidePageTransitionLoading();
                        sessionStorage.removeItem('pageTransition');
                    }, 500);
                }, 200);
            } else {
                smoothScrollTo(0, 1000);
            }
        } else if (isPageTransition) {
            // ハッシュがない場合でもページ遷移フラグがある場合
            setTimeout(() => {
                hidePageTransitionLoading();
                sessionStorage.removeItem('pageTransition');
            }, 500);
        }
    }

    // 初期化
    initSmoothScroll();
    
    // ページ読み込み完了時のハッシュ処理
    $(window).on('load', function() {
        // 初回訪問でない場合、またはページ遷移でない場合はbody要素を表示
        const hasVisited = localStorage.getItem('metaleaf-visited');
        const isPageTransition = sessionStorage.getItem('pageTransition') === 'true';
        
        if (hasVisited && !isPageTransition) {
            $('body').css('visibility', 'visible');
        }
        
        handleHashScroll();
        
        // ページ遷移フラグがない場合のみ、既存のローディングを非表示
        if (!isPageTransition) {
            setTimeout(() => {
                hidePageTransitionLoading();
            }, 100);
        }
    });

    // スクロールアニメーション機能
    function initScrollAnimation() {
        const animationElements = $('.scroll-animation');
        
        // 要素が画面に入ったかを判定する関数
        function checkAnimation() {
            const windowHeight = $(window).height();
            const scrollTop = $(window).scrollTop();
            
            animationElements.each(function() {
                const $element = $(this);
                const elementTop = $element.offset().top;
                // 要素の上端が画面の80%（2割）の位置に達したらアニメーション開始
                const triggerPoint = scrollTop + windowHeight * 0.8;
                
                if (triggerPoint > elementTop && !$element.hasClass('is-visible')) {
                    $element.addClass('is-visible');
                }
            });
        }
        
        // スクロール時とページ読み込み時にチェック
        $(window).on('scroll', checkAnimation);
        $(window).on('load', checkAnimation);
        checkAnimation(); // 初回実行
    }
    
    // スクロールアニメーション初期化
    initScrollAnimation();
});