$(document).ready(function() {

    setTimeout("ga('send', 'event', 'time-spent/+5sec');", 5000);
    setTimeout("ga('send', 'event', 'time-spent/+15sec');", 15000);
    setTimeout("ga('send', 'event', 'time-spent/+30sec');", 30000);

    var language = $('html').attr('lang');

    var data = {
        'en': {
            'spain': {
                'has_multiple_options': true,
                'selector_text': 'Select your province',
                'options' : {'a_coruna': 'A Coruña', 'alava': 'Álava', 'albacete': 'Albacete', 'alicante': 'Alicante', 'almeria': 'Almería', 'asturias': 'Asturias', 'avila': 'Ávila', 'badajoz': 'Badajoz', 'baleares': 'Baleares', 'barcelona': 'Barcelona', 'burgos': 'Burgos', 'cantabria': 'Cantabria', 'castellon': 'Castellón', 'ceuta': 'Ceuta', 'ciudad_real': 'Ciudad Real', 'cuenca': 'Cuenca', 'caceres': 'Cáceres', 'cadiz': 'Cádiz', 'cordoba': 'Córdoba', 'gipuzkoa': 'Gipuzkoa', 'girona': 'Girona', 'granada': 'Granada', 'guadalajara': 'Guadalajara', 'huelva': 'Huelva', 'huesca': 'Huesca', 'jaen': 'Jaén', 'la_rioja': 'La Rioja', 'las_palmas': 'Las Palmas', 'león': 'León', 'lugo': 'Lugo', 'lleida': 'Lleida', 'madrid': 'Madrid', 'melilla': 'Melilla', 'murcia': 'Murcia', 'malaga': 'Málaga', 'navarra': 'Navarra', 'ourense': 'Ourense', 'palencia': 'Palencia', 'pontevedra': 'Pontevedra', 'salamanca': 'Salamanca', 'santa_cruz_de_tenerife': 'Santa Cruz de Tenerife', 'segovia': 'Segovia', 'sevilla': 'Sevilla', 'soria': 'Soria', 'tarragona': 'Tarragona', 'teruel': 'Teruel', 'toledo': 'Toledo', 'valencia': 'Valencia', 'valladolid': 'Valladolid', 'vizcaya': 'Vizcaya', 'zamora': 'Zamora', 'zaragoza': 'Zaragoza'}
            },
            'portugal': {
                'has_multiple_options': true,
                'selector_text': 'Select your region',
                'options' : {'algarve': 'Algarve', 'aveiro': 'Aveiro', 'acores': 'Açores', 'coimbra': 'Coimbra', 'lisboa': 'Lisboa', 'madeira': 'Madeira', 'minho': 'Minho', 'oporto': 'Oporto', 'viseu': 'Viseu'}
            },
            'andorra': {
                'has_multiple_options': false,
                'value': 'andorra',
                'text': 'Andorra'
            },
            'other': {
                'has_multiple_options': false,
                'value': 'other',
                'text': 'Other'
            }
        },
        'es': {
            'spain': {
                'has_multiple_options': true,
                'selector_text': 'Selecciona tu provincia',
                'options' : {'a_coruna': 'A Coruña', 'alava': 'Álava', 'albacete': 'Albacete', 'alicante': 'Alicante', 'almeria': 'Almería', 'asturias': 'Asturias', 'avila': 'Ávila', 'badajoz': 'Badajoz', 'baleares': 'Baleares', 'barcelona': 'Barcelona', 'burgos': 'Burgos', 'cantabria': 'Cantabria', 'castellon': 'Castellón', 'ceuta': 'Ceuta', 'ciudad_real': 'Ciudad Real', 'cuenca': 'Cuenca', 'caceres': 'Cáceres', 'cadiz': 'Cádiz', 'cordoba': 'Córdoba', 'gipuzkoa': 'Gipuzkoa', 'girona': 'Girona', 'granada': 'Granada', 'guadalajara': 'Guadalajara', 'huelva': 'Huelva', 'huesca': 'Huesca', 'jaen': 'Jaén', 'la_rioja': 'La Rioja', 'las_palmas': 'Las Palmas', 'león': 'León', 'lugo': 'Lugo', 'lleida': 'Lleida', 'madrid': 'Madrid', 'melilla': 'Melilla', 'murcia': 'Murcia', 'malaga': 'Málaga', 'navarra': 'Navarra', 'ourense': 'Ourense', 'palencia': 'Palencia', 'pontevedra': 'Pontevedra', 'salamanca': 'Salamanca', 'santa_cruz_de_tenerife': 'Santa Cruz de Tenerife', 'segovia': 'Segovia', 'sevilla': 'Sevilla', 'soria': 'Soria', 'tarragona': 'Tarragona', 'teruel': 'Teruel', 'toledo': 'Toledo', 'valencia': 'Valencia', 'valladolid': 'Valladolid', 'vizcaya': 'Vizcaya', 'zamora': 'Zamora', 'zaragoza': 'Zaragoza'}
            },
            'portugal': {
                'has_multiple_options': true,
                'selector_text': 'Selecciona tu región',
                'options' : {'algarve': 'Algarve', 'aveiro': 'Aveiro', 'acores': 'Açores', 'coimbra': 'Coimbra', 'lisboa': 'Lisboa', 'madeira': 'Madeira', 'minho': 'Minho', 'oporto': 'Oporto', 'viseu': 'Viseu'}
            },
            'andorra': {
                'has_multiple_options': false,
                'value': 'andorra',
                'text': 'Andorra'
            },
            'other': {
                'has_multiple_options': false,
                'value': 'other',
                'text': 'Otro'
            }
        }
    };

    var form_success_message = {
        'en': 'Enjoy your catalogue',
        'es': 'Disfruta tu catálogo'
    };

    // FORM VALIDATION
    $("#catalog-download-form").validate({
        submitHandler: function (form) {
            var catalogue_window = window.open('', '_blank');
            $.ajax({
                type: 'POST',
                url: '/design/checkform',
                data: $(form).serialize(),
                success: function () {
                    catalogue_window.location.href = 'http://www.blogbulthaup.es/design/docs/bulthaup-catalogue-' + language + '.pdf';
                    ga('send', 'event', 'conversion', 'download-catalogue/success');
                    $("#submit-button").addClass("is-downloaded");
                    $("#submit-button").val(form_success_message[language]);
                }
            });
            return false;
        }
    });

    // FORM SELECT COUNTRY-REGION BEHAVIOUR
    $('#user-country').change(function() {
        var country = $(this).val();
        $('#user-region').empty();
        if(data[language][country]['has_multiple_options']) {
            $('#user-region').append('<option value="_none" disabled selected>' + data[language][country]['selector_text'] + '</option>');
            $.each(data[language][country]['options'], function(value, text) {
                var option = $('<option value="' + value + '">' + text + '</option>');
                $('#user-region').append(option);
            });
            $('#user-region').prop('disabled', false);
        } else {
            $('#user-region').append('<option value="' + data[language][country]['value'] + '" selected>' + data[language][country]['text'] + '</option>');
            $('#user-region').prop('disabled', true);
        }
    });

    // SCROLL ANIMATION
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    // LIGHTBOX VIDEO
    $('.js-videoLink').on('click',function() {
        $('.js-lightbox').fadeIn();
        $('.js-video-mobile').get(0).play();
        $('.js-intro').addClass('is-open');
        $('body').addClass('js-fixed');
    });

    $('.js-close').on('click',function() {
        $('.js-lightbox').fadeOut();
        $('.js-video-mobile')[0].pause();
        $('.js-intro').removeClass('is-open');
        $('body').removeClass('js-fixed');
    });

    // CHANGE TEXT
    // $('.js-downloaded-en').val('Enjoy your catalogue');
    // $('.js-downloaded-es').val('Disfruta tu catálogo');


    // VIDEO AUTOPLAY FOR DESKTOP ONLY
    var is_mobile = true;

    if( $('.js-videoLink').css('display')=='none') {
        is_mobile = false;
    }

    if (is_mobile == false) {
        $('.js-Intro-video')[0].autoplay = true;
    }

    // REMOVE TEXT FROM VIDEO INTRO
    // $('.js-Intro-video').on('play',function(){
    //     $('.js-disappear').delay('3000').fadeOut('4000');
    // });

    // var is_desktop = true;
    //
    // if( screen.width <= 768 ) {
    //     is_desktop = false;
    // }
    // if (is_desktop == true) {
    //     // $('.js-Intro-video')[0].autoplay = true;
    //     $('.js-Intro-video').get(0).play();
    // }

    // ANIMATIONS
    // $('.js-Intro-video').hide(0).fadeIn(5000);
    // $('.js-fadeIn').hide().fadeIn(1000);
    // $('.js-Intro-video').hide().fadeIn(1000);

    // (function($) {
    // var selector = $('.js-edition-selector');
    // if(selector.length > 0) {
    //     $('.js-edition-selector > .dropdown a').click(function() {
    //         var edition_name = $(this).html();
    //         $('.js-edition-selector > .btn--dropdown-neg').html(edition_name);
    //         var stores_filtered = null;
    //
    //         for(var i = 0; i < stores.length; i++) {
    //             if(edition_name == stores[i]['name']) {
    //                 stores_filtered = stores[i]['stores'];
    //             }
    //         }
    //
    //         $('.js-edition-stores > .dropdown').empty();
    //
    //         var list_element = '';
    //         $.each(stores_filtered, function(id, store) {
    //             list_element = $('<li>' + store['link'] + '</li>');
    //             $('.js-edition-stores > .dropdown').append(list_element);
    //         });
    //
    //         $('.js-edition-stores > .btn--dropdown').removeClass('is--disabled');
    //
    //         return false;
    //     });
    //
    // }
    // })(jQuery);

});
