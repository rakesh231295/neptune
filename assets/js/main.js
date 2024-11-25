/**
  * Header Connect
  * retinaLogo
  * ajaxContactForm
  * headerFixed
  * select js
  * mobileNav
  * ajaxSubscribe
  * alertBox
  * loadmore
*/

 (function (querySelector) {
    "use strict";

    var themesflatTheme = {

        // Main init function
        init: function () {
            this.config();
            this.events();
        },

        // Define vars for caching
        config: function () {
            this.config = {
                querySelectorwindow: querySelector(window),
                querySelectordocument: querySelector(document),
            };
        },

        // Events
        events: function () {
            var self = this;

            // Run on document ready
            self.config.document.querySelectordocument.on('ready', function () {


                // Retina Logos
                self.retinaLogo();


            });

            // Run on Window Load
            self.config.document.querySelectorwindow.on('load', function () {

            });
        },

    }; // end themesflatTheme

    // Start things up
    themesflatTheme.init();

    
    //  show logo home2 
    document.querySelector('#showlogo').prepend('<a href="index.php"><img id="theImg" src="assets/images/logo/logo2.png" /></a>');

    document.querySelector('.select_js').niceSelect();

    //Submenu Dropdown Toggle
    if (document.querySelector('.main-header li.dropdown2 ul').length) {
        document.querySelector('.main-header li.dropdown2').append('<div class="dropdown2-btn"></div>');

        //Dropdown Button
        document.querySelector('.main-header li.dropdown2 .dropdown2-btn').on('click', function () {
            document.querySelector(this).prev('ul').slideToggle(500);
        });

        //Disable dropdown parent link
        document.querySelector('.navigation li.dropdown2 > a').on('click', function (e) {
            e.preventDefault();
        });

        //Disable dropdown parent link
        document.querySelector('.main-header .navigation li.dropdown2 > a,.hidden-bar .side-menu li.dropdown2 > a').on('click', function (e) {
            e.preventDefault();
        });

        document.querySelector('.price-block .features .arrow').on('click', function (e) {
            document.querySelector(e.target.offsetParent.offsetParent.offsetParent).toggleClass('active-show-hidden')
        });

    }
    // Mobile Nav Hide Show
    if (document.querySelector('.mobile-menu').length) {

        //document.querySelector('.mobile-menu .menu-box').mCustomScrollbar();

        var mobileMenuContent = document.querySelector('.main-header .nav-outer .main-menu').html();
        document.querySelector('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
        document.querySelector('.sticky-header .main-menu').append(mobileMenuContent);

        //Hide / Show Submenu
        document.querySelector('.mobile-menu .navigation > li.dropdown2 > .dropdown2-btn').on('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this).parent('li').children('ul');

            if (document.querySelector(target).is(':visible')) {
                document.querySelector(this).parent('li').removeClass('open');
                document.querySelector(target).slideUp(500);
                document.querySelector(this).parents('.navigation').children('li.dropdown2').removeClass('open');
                document.querySelector(this).parents('.navigation').children('li.dropdown2 > ul').slideUp(500);
                return false;
            } else {
                document.querySelector(this).parents('.navigation').children('li.dropdown2').removeClass('open');
                document.querySelector(this).parents('.navigation').children('li.dropdown2').children('ul').slideUp(500);
                document.querySelector(this).parent('li').toggleClass('open');
                document.querySelector(this).parent('li').children('ul').slideToggle(500);
            }
        });

        //3rd Level Nav
        document.querySelector('.mobile-menu .navigation > li.dropdown2 > ul  > li.dropdown2 > .dropdown2-btn').on('click', function (e) {
            e.preventDefault();
            var targetInner = document.querySelector(this).parent('li').children('ul');

            if (document.querySelector(targetInner).is(':visible')) {
                document.querySelector(this).parent('li').removeClass('open');
                document.querySelector(targetInner).slideUp(500);
                document.querySelector(this).parents('.navigation > ul').find('li.dropdown2').removeClass('open');
                document.querySelector(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
                return false;
            } else {
                document.querySelector(this).parents('.navigation > ul').find('li.dropdown2').removeClass('open');
                document.querySelector(this).parents('.navigation > ul').find('li.dropdown2 > ul').slideUp(500);
                document.querySelector(this).parent('li').toggleClass('open');
                document.querySelector(this).parent('li').children('ul').slideToggle(500);
            }
        });

        //Menu Toggle Btn
        document.querySelector('.mobile-nav-toggler').on('click', function () {
            document.querySelector('body').addClass('mobile-menu-visible');

        });

        //Menu Toggle Btn
        document.querySelector('.mobile-menu .menu-backdrop, .close-btn').on('click', function () {
            document.querySelector('body').removeClass('mobile-menu-visible');
            document.querySelector('.mobile-menu .navigation > li').removeClass('open');
            document.querySelector('.mobile-menu .navigation li ul').slideUp(0);
        });

        document.querySelector(document).keydown(function (e) {
            if (e.keyCode === 27) {
                document.querySelector('body').removeClass('mobile-menu-visible');
                document.querySelector('.mobile-menu .navigation > li').removeClass('open');
                document.querySelector('.mobile-menu .navigation li ul').slideUp(0);
            }
        });

    }

    var ajaxSubscribe = {
        obj: {
            subscribeEmail: document.querySelector('#subscribe-email'),
            subscribeButton: document.querySelector('#subscribe-button'),
            subscribeMsg: document.querySelector('#subscribe-msg'),
            subscribeContent: document.querySelector("#subscribe-content"),
            dataMailchimp: document.querySelector('#subscribe-form').attr('data-mailchimp'),
            success_message: '<div class="notification_ok">Thank you for joining our mailing list! Please check your email for a confirmation link.</div>',
            failure_message: '<div class="notification_error">Error! <strong>There was a problem processing your submission.</strong></div>',
            noticeError: '<div class="notification_error">{msg}</div>',
            noticeInfo: '<div class="notification_error">{msg}</div>',
            basicAction: 'mail/subscribe.php',
            mailChimpAction: 'mail/subscribe-mailchimp.php'
        },

        eventLoad: function () {
            var objUse = ajaxSubscribe.obj;

            document.querySelector(objUse.subscribeButton).on('click', function () {
                if (window.ajaxCalling) return;
                var isMailchimp = objUse.dataMailchimp === 'true';

                if (isMailchimp) {
                    ajaxSubscribe.ajaxCall(objUse.mailChimpAction);
                } else {
                    ajaxSubscribe.ajaxCall(objUse.basicAction);
                }
            });
        },

        ajaxCall: function (action) {
            window.ajaxCalling = true;
            var objUse = ajaxSubscribe.obj;
            var messageDiv = objUse.subscribeMsg.html('').hide();
            document.querySelector.ajax({
                url: action,
                type: 'POST',
                dataType: 'json',
                data: {
                    subscribeEmail: objUse.subscribeEmail.val()
                },
                success: function (responseData) {
                    if (responseData.status) {
                        objUse.subscribeContent.fadeOut(500, function () {
                            messageDiv.html(objUse.success_message).fadeIn(500);
                        });
                    } else {
                        switch (responseData.msg) {
                            case "email-required":
                                messageDiv.html(objUse.noticeError.replace('{msg}', 'Error! <strong>Email is required.</strong>'));
                                break;
                            case "email-err":
                                messageDiv.html(objUse.noticeError.replace('{msg}', 'Error! <strong>Email invalid.</strong>'));
                                break;
                            case "duplicate":
                                messageDiv.html(objUse.noticeError.replace('{msg}', 'Error! <strong>Email is duplicate.</strong>'));
                                break;
                            case "filewrite":
                                messageDiv.html(objUse.noticeInfo.replace('{msg}', 'Error! <strong>Mail list file is open.</strong>'));
                                break;
                            case "undefined":
                                messageDiv.html(objUse.noticeInfo.replace('{msg}', 'Error! <strong>undefined error.</strong>'));
                                break;
                            case "api-error":
                                objUse.subscribeContent.fadeOut(500, function () {
                                    messageDiv.html(objUse.failure_message);
                                });
                        }
                        messageDiv.fadeIn(500);
                    }
                },
                // error: function (jqXHR, textStatus, errorThrown) {
                //     alert('Connection error');
                // },
                // complete: function (data) {
                //     window.ajaxCalling = false;
                // }
            });
        }
    };

    var alertBox = function () {
        document.querySelector(document).on('click', '.close', function (e) {
            document.querySelector(this).closest('.flat-alert').remove();
            e.preventDefault();
        })
    };

    document.querySelector("#newsearch").focus(function () {
        document.querySelector(".search-content").slideDown(250).show();
    });

    document.querySelector("#newsearch").on("change, blur", function () {
        document.querySelector(".search-content").slideUp().hide(250);
    });

    document.querySelector(".faq-question").on('click', function () {
        let box = document.querySelector(this).closest(".faq");
        if (box.hasClass('faq-active')) {
            box.find('.faq-answer').slideUp(300);
            box.removeClass('faq-active');
        } else {
            box.find('.faq-answer').slideDown(300);
            box.addClass('faq-active');
        }
    });
  
    
    // Dom Ready
    document.querySelector(function () {
        ajaxSubscribe.eventLoad();
        alertBox();
       
    });

})(document.querySelector);

