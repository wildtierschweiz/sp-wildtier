/*!
 * sp-wildtier v1.0.0 (https://www.wildtier.ch)
 * Copyright 2017-2023 Daniel Dürsteler
 * Licensed under the GPL-2.0-or-later license
 */
//console.log("WE LOVE TYPO3");
/* ------------------------------------------------------ *\
    LANGUAGE MENU
\* ------------------------------------------------------ */
$('.language-menu').appendTo('nav#mainnavigation');
$('.language-menu').addClass('pull-right');

/* ------------------------------------------------------ *\
    HOME PAGE: TRANSFORM NEWS LIST
\* ------------------------------------------------------ */

// for every news item in the list
$('.page-37 .frame.frame-default.frame-background-light .news .news-list-view .news-list-item').each(function () {

    // get image and anchor from first column
    // $img_link = $(this).find('.col-md-3 a');

    if ($(this).find('img.img-dummy').length) {

        // remove first column
        $(this).find('.col-md-3').remove();

        // exchange column class
        $(this).find('.col-md-9').removeClass('col-md-9').addClass('col-md-12');

    }
});


/* ------------------------------------------------------ *\
    REHKITZ FORMULAR FEHLERMELDUNG
\* ------------------------------------------------------ */

var errMessage = "Die Angaben sind fehlerhaft oder unvollständig und wurden daher nicht versendet.<br />Bitte beachten sie die <span style='text-transform:none !important;background:#f7f8e4;line-height: 1em;padding:5px 5px 5px 5px !important;margin:0;color:#9f3620;font-size:15px;'>Fehlermeldungen</span> und korrigieren oder vervollständigen Sie Ihre Eingaben.";

// wiederfund
if ($('html[lang="de"] .page-240 .has-error').length) {
    $('form').prepend('<div class="alert alert-danger">' + errMessage + '</div>');
}
if ($('html[lang="fr"] .page-240 .has-error').length) {
    $('form').prepend('<div class="alert alert-danger">' + errMessage + '</div>');
}

// markierung
if ($('html[lang="de"] .page-239 .has-error').length) {
    $('form').prepend('<div class="alert alert-danger">' + errMessage + '</div>');
}
if ($('html[lang="fr"] .page-239 .has-error').length) {
    $('form').prepend('<div class="alert alert-danger">' + errMessage + '</div>');
}
