(function($) {
    function setup_collapsible_submenus() {
        $('.et_mobile_nav_menu .menu-item-has-children > a').after('<span class="menu-closed"></span>');
        $('.et_mobile_nav_menu .menu-item-has-children > a').each(function() {
            $(this).next().next('.sub-menu').toggleClass('hide', 1000)
        });
        $('.et_mobile_nav_menu .menu-item-has-children > a + span').on('click', function(event) {
            event.preventDefault();
            $(this).toggleClass('menu-open');
            $(this).next('.sub-menu').toggleClass('hide', 1000)
        })
    }
    $(window).load(function() {
        setTimeout(function() {
            setup_collapsible_submenus()
        }, 700)
    })
})(jQuery);
jQuery(document).ready(function() {
    jQuery("#dct_client_v1").owlCarousel({
        items: 6,
        itemsDesktop: [1000, 6],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 2],
        pagination: !1,
        navigation: !0,
        nav: !0,
        autoplay: !0,
        autoplayTimeout: 5000,
        rewind: !1,
        navigationText: ["", ""]
    })
});
jQuery(document).ready(function() {
    jQuery("#dct_client_v2").owlCarousel({
        items: 6,
        itemsDesktop: [1000, 6],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 2],
        pagination: !1,
        navigation: !0,
        nav: !0,
        autoplay: !0,
        autoplayTimeout: 5000,
        rewind: !1,
        navigationText: ["", ""]
    })
});
jQuery(document).ready(function() {
    jQuery("#dct_client_v4").owlCarousel({
        items: 6,
        itemsDesktop: [1000, 6],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 2],
        pagination: !1,
        navigation: !0,
        nav: !0,
        autoplay: !0,
        autoplayTimeout: 5000,
        rewind: !1,
        navigationText: ["", ""]
    })
});
jQuery(function($) {
    $('.cl-toggler').on('click', function(event) {
        event.preventDefault();
        $(this).parent().parent().toggleClass('opened')
    });
    var presets = $('.cl-presets').find('li');
    presets.each(function() {
        $(this).find('a').on('click', function(event) {
            event.preventDefault();
            var currentColor1 = $(this).find('div.color1').css("background-color");
            var currentColor2 = $(this).find('div.color2').css("background-color");
            $('#lblColorCode1').text(rgba2hex(currentColor1));
            $('#lblColorCode2').text(rgba2hex(currentColor2));
            document.documentElement.style.setProperty("--color-1", currentColor1);
            document.documentElement.style.setProperty("--color-2", currentColor2);
            presets.removeClass('active');
            $(this).parent().addClass('active')
        })
    });
    $('#switcher-menu-primary-color li a').on('click', function(event) {
        event.preventDefault();
        var primaryColor = $(this).css("background-color");
        $('#lblColorCode1').text(rgba2hex(primaryColor));
        document.documentElement.style.setProperty("--color-1", primaryColor)
    });
    $('#switcher-menu-secondary-color li a').on('click', function(event) {
        event.preventDefault();
        var secondaryColor = $(this).css("background-color");
        $('#lblColorCode2').text(rgba2hex(secondaryColor));
        document.documentElement.style.setProperty("--color-2", secondaryColor)
    });
    $('#cl-boxed').on('change', function() {
        if ($(this).is(':checked')) {
            $('body').addClass('layout-boxed')
        } else {
            $('body').removeClass('layout-boxed').removeAttr('style')
        }
    })
});

function rgba2hex(color_value) {
    if (!color_value) return !1;
    var parts = color_value.toLowerCase().match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),
        length = color_value.indexOf('rgba') ? 3 : 2;
    delete(parts[0]);
    for (var i = 1; i <= length; i++) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length === 1) parts[i] = '0' + parts[i]
    }
    return '#' + parts.join('').toUpperCase()
}
jQuery(function($) {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.dct_header2_1').addClass('dct_sticky_sec');
            $('#dct_sticky_row').addClass('dct_increase_row')
        } else {
            $('.dct_header2_1').removeClass('dct_sticky_sec');
            $('.dct_header2_1').addClass('slow-transition');
            $('#dct_sticky_row').removeClass('dct_increase_row');
            $('#dct_sticky_row').addClass('slow-transition')
        }
    })
});
jQuery(function($) {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.dct_header2_1').addClass('dct_sticky_sec');
            $('#dct_sticky_row').addClass('dct_increase_row')
        } else {
            $('.dct_header2_1').removeClass('dct_sticky_sec');
            $('.dct_header2_1').addClass('slow-transition');
            $('#dct_sticky_row').removeClass('dct_increase_row');
            $('#dct_sticky_row').addClass('slow-transition')
        }
    })
});
jQuery(function($) {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.dct_header2_1').addClass('dct_sticky_sec');
            $('#dct_sticky_row').addClass('dct_increase_row')
        } else {
            $('.dct_header2_1').removeClass('dct_sticky_sec');
            $('.dct_header2_1').addClass('slow-transition');
            $('#dct_sticky_row').removeClass('dct_increase_row');
            $('#dct_sticky_row').addClass('slow-transition')
        }
    })
});
jQuery(function($) {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.dct_header1_4').addClass('dct_sticky_sec');
            $('#dct_sticky_row').addClass('dct_increase_row')
        } else {
            $('.dct_header1_4').removeClass('dct_sticky_sec');
            $('.dct_header1_4').addClass('slow-transition');
            $('#dct_sticky_row').removeClass('dct_increase_row');
            $('#dct_sticky_row').addClass('slow-transition')
        }
    })
});
jQuery(function($) {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 70) {
            $('.dct_header1_3').addClass('dct_sticky_sec');
            $('#dct_sticky_row').addClass('dct_increase_row')
        } else {
            $('.dct_header1_3').removeClass('dct_sticky_sec');
            $('.dct_header1_3').addClass('slow-transition');
            $('#dct_sticky_row').removeClass('dct_increase_row');
            $('#dct_sticky_row').addClass('slow-transition')
        }
    })
});
jQuery(function($) {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 80) {
            $('.dct_header2_5').addClass('dct_sticky_sec');
            $('#dct_sticky_row').addClass('dct_increase_row')
        } else {
            $('.dct_header2_5').removeClass('dct_sticky_sec');
            $('.dct_header2_5').addClass('slow-transition');
            $('#dct_sticky_row').removeClass('dct_increase_row');
            $('#dct_sticky_row').addClass('slow-transition')
        }
    })
});
jQuery(document).ready(function() {
    jQuery(".dct_ptf_v1 .et_pb_portfolio_item").each(function() {
        jQuery(this).find(".et_pb_module_header,.post-meta").wrapAll('<div class="project_title"></div>')
    })
});
jQuery(document).ready(function() {
    jQuery(".dct_ptf_v3 .et_pb_portfolio_item").each(function() {
        jQuery(this).find(".et_pb_module_header,.post-meta").wrapAll('<div class="project_title"></div>')
    })
});
jQuery(document).ready(function() {
    jQuery(".dct_ptf_v5 .et_pb_portfolio_item").each(function() {
        jQuery(this).find(".et_pb_module_header,.post-meta").wrapAll('<div class="project_title"></div>')
    })
});
jQuery(document).ready(function() {
    jQuery(".dct_blog_v5 .et_pb_post").each(function() {
        jQuery(this).find(".entry-title,.post-meta,.post-content").wrapAll('<div class="blog_detail"></div>')
    })
});
jQuery(document).ready(function() {
    jQuery('#checkbox-1').bind("change", function() {
        if (jQuery('#checkbox-1').prop('checked')) {
            jQuery('.dct_year').removeClass('dct_active');
            jQuery('.dct_month').addClass('dct_active');
            jQuery('.dct_m_btn').removeClass('dct_text_active');
            jQuery('.dct_y_btn').addClass('dct_text_active')
        } else {
            jQuery('.dct_m_btn').addClass('dct_text_active');
            jQuery('.dct_y_btn').removeClass('dct_text_active');
            jQuery('.dct_month').removeClass('dct_active');
            jQuery('.dct_year').addClass('dct_active')
        }
    })
})