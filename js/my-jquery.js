$(function () {

    // Lang Change
    $('#flg-jp').on('click', function () {
        if ($('#flg-gb').hasClass('active-flg')) {
            $('#flg-jp').addClass(('active-flg'));
            $('#flg-gb').removeClass('active-flg');
            $('.lang-jp').addClass('active-lang');
            $('.lang-gb').removeClass('active-lang');
        }
    })

    $('#flg-gb').on('click', function () {
        if ($('#flg-jp').hasClass('active-flg')) {
            $('#flg-gb').addClass(('active-flg'));
            $('#flg-jp').removeClass('active-flg');
            $('.lang-gb').addClass('active-lang');
            $('.lang-jp').removeClass('active-lang');
        }
    });

    // Topへ戻るボタン表示切替
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#go-to-top').fadeIn();
        } else {
            $('#go-to-top').fadeOut();
        }
    });


    // ハンバーガーメニュー
    $('#drawer-icon, #drawer-close').on('click', function () {
        $('#drawer-icon').toggleClass('open');
        $('#drawer-content').toggleClass('active');
        $('#drawer-close').toggleClass('show');
    })

    $('.main-nav a').click(function () {//ナビゲーションのリンクがクリックされたら
        $('#drawer-icon').removeClass('open');
        $('#drawer-content').removeClass('active');
        $('#drawer-close').removeClass('show');
    });

    // Slick
    $('.header-slider').slick({
        arrows: true,
        dots: true,
        responsive: [{
            breakpoint: 640,
            settings: {
                arrows: true
            }
        }]
    });

    // jd-slider
    $('.jd-slider').slick({
    })

    //je-slider
    $('.je-slider').slick({
    })

    // three-people-slider
    $('.three-people').slick({
        mobileFirst: true,
        dots: false,
        responsive: [{
            breakpoint: 640,
            settings: 'unslick'
        }]
    })
    //リサイズした時に実行
    $(window).on('resize orientationchange', function () {
        $('.three-people').slick('resize');
    });


    // スムーススクロール
    $('a[href^="#"]').click(function () {
        let speed = 2000;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });

    //アコーディオンをクリックした時の動作
    $('.title').on('click', function () {//タイトル要素をクリックしたら
        if (!$(this).hasClass('open')
            || window.matchMedia('(max-width:640px)').matches) {//タイトル要素にクラス名openがない、またはスマホモードの時
            $('.a-box').slideUp(500);//クラス名.a-boxがついたすべてのアコーディオンを閉じる
            var findElm = $(this).next(".a-box");//タイトル直後のアコーディオンを行うエリアを取得
            if ($(this).hasClass('open')) {//タイトル要素にクラス名openがあれば
                $(this).removeClass('open');//クラス名除去
            } else {
                $('.open').removeClass('open'); //クラス名openを全て除去した後
                $(this).addClass('open');//クリックしたタイトルにクラス名openを付与し
                $(findElm).slideDown(500);//アコーディオンを開く
            }
        }
    });

    // LEARN MORE をhoverした時の動作
    $(".learn-more").hover(// hoverする要素のclass名
        function () {
            $(".header-gradation").addClass("lm-hover");// hoverした時の処理(classを付与)
        },
        function () {
            $(".header-gradation").removeClass("lm-hover");// hoverを外した時の処理(classを外す)
        });


    //.header-contents部分をclickするとキーボードの矢印キーが効かなくなる対策
    $(".header-contents").on('click', function () {
        $(".header-slider .slick-next").focus();
    });



});