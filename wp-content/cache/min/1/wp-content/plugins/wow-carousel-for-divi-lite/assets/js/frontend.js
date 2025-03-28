jQuery((function(e) {
    var a, t, i = e(".dcm-container");
    i.length && i.each((function() {
        ! function(e) {
            var a = e.data("items-scroll").split("|"),
                t = e.data("center-padding").split("|");
            a[1] = a[1] || a[0], a[2] = a[2] || a[1], t[1] = t[1] || t[0], t[2] = t[2] || t[1];
            var i = {
                slides: e.data("slides"),
                slidesTablet: e.data("slides-tablet"),
                slidesPhone: e.data("slides-phone"),
                isVariableWidth: "on" === e.data("variable-width"),
                isCenter: "on" === e.data("center"),
                centerModeType: e.data("center-mode-type"),
                isAutoHeight: "on" === e.data("auto-height"),
                isVertical: "on" === e.data("vertical"),
                fade: e.data("fade"),
                dir: e.data("dir"),
                iconLeft: e.data("icon-left"),
                iconRight: e.data("icon-right"),
                isPagi: e.data("pagi"),
                isPagiTablet: e.data("pagi-tablet"),
                isPagiPhone: e.data("pagi-phone"),
                isNav: e.data("nav"),
                isNavTablet: e.data("nav-tablet"),
                isNavPhone: e.data("nav-phone"),
                isAutoplay: "on" === e.data("autoplay"),
                autoplaySpeed: e.data("autoplay-speed"),
                speed: e.data("speed"),
                isInfinite: "on" === e.data("infinite")
            };
            i.isVariableWidth && (i.slides = 1, i.slidesTablet = 1, i.slidesPhone = 1);
            var s = {
                swipeToSlide: 1,
                focusOnSelect: !1,
                focusOnChange: !1,
                edgeFriction: .35,
                useTransform: !0,
                cssEase: "ease-in-out",
                adaptiveHeight: i.isAutoHeight,
                touchThreshold: 600,
                swipe: !i.isCenter,
                draggable: 0,
                waitForAnimate: !0,
                variableWidth: i.isVariableWidth,
                dots: i.isPagi,
                arrows: i.isNav,
                infinite: i.isInfinite,
                autoplay: i.isAutoplay,
                autoplaySpeed: parseInt(i.autoplaySpeed),
                touchMove: !0,
                speed: parseInt(i.speed),
                slidesToShow: parseInt(i.slides),
                fade: "off" !== i.fade,
                rtl: "ltr" !== i.dir,
                slidesToScroll: parseInt(a[0]),
                centerMode: i.isCenter,
                centerPadding: i.isVariableWidth || "classic" !== i.centerModeType ? 0 : t[0],
                vertical: i.isVertical,
                prevArrow: '<button type="button" data-icon="'.concat(i.iconLeft, '" class="slick-arrow slick-prev">Prev</button>'),
                nextArrow: '<button type="button" data-icon="'.concat(i.iconRight, '" class="slick-arrow slick-next">Next</button>'),
                responsive: [{
                    breakpoint: 980,
                    settings: {
                        slidesToShow: parseInt(i.slidesTablet),
                        dots: i.isPagiTablet,
                        arrows: i.isNavTablet,
                        centerPadding: i.isVariableWidth || "classic" !== i.centerModeType ? 0 : t[1],
                        slidesToScroll: parseInt(a[1])
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: parseInt(i.slidesPhone),
                        dots: i.isPagiPhone,
                        arrows: i.isNavPhone,
                        centerPadding: i.isVariableWidth || "classic" !== i.centerModeType ? 0 : t[2],
                        slidesToScroll: parseInt(a[2])
                    }
                }]
            };
            e.slick(s)
        }(e(this))
    })), a = e(".dcm-lightbox-enabled .dcm-lightbox-ctrl img"), t = e(".dcm-lightbox-disabled .dcm-lightbox-ctrl img"), a.magnificPopup({
        type: "image",
        mainClass: "mfp-with-zoom",
        gallery: {
            enabled: !1
        },
        zoom: {
            enabled: !0,
            duration: 300,
            easing: "ease-in-out"
        }
    }), t.each((function() {
        e(this).removeAttr("data-mfp-src")
    })), "undefined" != typeof et_link_options_data && et_link_options_data.forEach((function(a) {
        e(document).on("click", ".".concat(a.class), (function() {
            window.open(a.url, a.target)
        }))
    }))
}))