$(function(){"use strict";$(window).on("load",function(){$(".loader-wrapper").fadeOut("slow"),$(".loader-wrapper").remove("slow")}),$(window).on("scroll",function(){$(this).scrollTop()>600?$(".tap-top").fadeIn():$(".tap-top").fadeOut()}),$(document).ready(function(){$(window).width()>"1200"&&$(".hover-cls").hover(function(){$(".sm").addClass("hover-unset")}),$(".mobile-search .ti-close").hide(),$(".search_box_btn").on("click",function(){$(this).hide(),$(".mobile-search .ti-close").show(),$("#search-overlay").slideDown()}),$(".mobile-search .ti-close").on("click",function(){$(this).hide(),$(".search_box_btn").show(),$("#search-overlay").slideUp()}),$(".ajax-loader").css("display","none"),$(".tap-top").on("click",function(){return $("html, body").animate({scrollTop:0},600),!1}),$(".close_shipping_bar").on("click",function(){return $(".shipping-info").slideUp("slow"),!1});var contentwidth=jQuery(window).width();contentwidth<"750"?(jQuery(".footer-title h4").append('<span class="according-menu"></span>'),jQuery(".footer-title").click(function(){jQuery(".footer-title").removeClass("active"),jQuery(".footer-contant").slideUp("normal"),jQuery(this).next().is(":hidden")==!0&&(jQuery(this).addClass("active"),jQuery(this).next().slideDown("normal"))}),jQuery(".footer-contant").hide()):jQuery(".footer-contant").show();var contentwidth=jQuery(window).width();if(contentwidth<"1183"?(jQuery(".menu-title h5").append('<span class="according-menu"></span>'),jQuery(".menu-title").click(function(){jQuery(".menu-title").removeClass("active"),jQuery(".menu-content").slideUp("normal"),jQuery(this).next().is(":hidden")==!0&&(jQuery(this).addClass("active"),jQuery(this).next().slideDown("normal"))}),jQuery(".menu-content").hide()):jQuery(".menu-content").show(),$("button.add-button").click(function(){$(this).next().addClass("open"),$(".qty-input").val("1")}),$(".quantity-right-plus").on("click",function(){var $qty=$(this).siblings(".qty-input"),currentVal=parseInt($qty.val());isNaN(currentVal)||$qty.val(currentVal+1)}),$(".quantity-left-minus").on("click",function(){var $qty=$(this).siblings(".qty-input"),_val=$($qty).val();if(_val=="1"){var _removeCls=$(this).parents(".cart_qty");$(_removeCls).removeClass("open")}var currentVal=parseInt($qty.val());!isNaN(currentVal)&&currentVal>0&&$qty.val(currentVal-1)}),$(".product-description .quantity-right-plus").on("click",function(){var $qty=$(".qty-box .input-number"),currentVal=parseInt($qty.val(),10);isNaN(currentVal)||$qty.val(currentVal+1)}),$(".product-description .quantity-left-minus").on("click",function(){var $qty=$(".qty-box .input-number"),currentVal=parseInt($qty.val(),10);!isNaN(currentVal)&&currentVal>1&&$qty.val(currentVal-1)}),$(".zoom-gallery").magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,mainClass:"mfp-with-zoom mfp-img-mobile",image:{verticalFit:!0,titleSrc:function(item){return item.el.attr("title")+" &middot;"}},gallery:{enabled:!0},zoom:{enabled:!0,duration:300,opener:function(element){return element.find("img")}}}),$(".filter-button").click(function(){$(this).addClass("active").siblings(".active").removeClass("active");var value=$(this).attr("data-filter");value=="all"?$(".filter").show("1000"):($(".filter").not("."+value).hide("3000"),$(".filter").filter("."+value).show("3000"))}),$("#formButton").click(function(){$("#form1").toggle()}),$(window).width()>767){var mouseWheel=function($slider2){$(window).on("wheel",{$slider:$slider2},mouseWheelHandler)},mouseWheelHandler=function(event){event.preventDefault();var $slider2=event.data.$slider,delta=event.originalEvent.deltaY;delta>0?$slider2.slick("slickNext"):$slider2.slick("slickPrev")},$slider=$(".full-slider");$slider.on("init",function(){mouseWheel($slider)}).slick({dots:!0,nav:!1,vertical:!0,infinite:!1})}else{var mouseWheel=function($slider2){$(window).on("wheel",{$slider:$slider2},mouseWheelHandler)},mouseWheelHandler=function(event){event.preventDefault();var $slider2=event.data.$slider,delta=event.originalEvent.deltaY;delta>0?$slider2.slick("slickNext"):$slider2.slick("slickPrev")},$slider=$(".full-slider");$slider.on("init",function(){mouseWheel($slider)}).slick({dots:!0,nav:!1,vertical:!1,infinite:!1})}$(".slide-1").slick(),$(".slick_carousel").slick(),$(".slick_carousel_verticle").slick(),$(".slide-2").slick({infinite:!0,slidesToShow:2,slidesToScroll:2,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slide-3").slick({infinite:!0,speed:300,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".team-4").slick({infinite:!0,speed:300,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:586,settings:{slidesToShow:2,slidesToScroll:1}}]}),$(".slide-4").slick({infinite:!0,speed:300,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:586,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".product_4").slick({infinite:!0,speed:300,slidesToShow:4,slidesToScroll:4,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:420,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".product-3").slick({infinite:!0,speed:300,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:420,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slide-5").slick({dots:!1,infinite:!0,speed:300,slidesToShow:5,slidesToScroll:5,responsive:[{breakpoint:1367,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:3}}]}),$(".slide-6").slick({dots:!1,infinite:!0,speed:300,slidesToShow:6,slidesToScroll:6,responsive:[{breakpoint:1367,settings:{slidesToShow:5,slidesToScroll:5,infinite:!0}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slide-7").slick({dots:!1,infinite:!0,speed:300,slidesToShow:7,slidesToScroll:7,responsive:[{breakpoint:1367,settings:{slidesToShow:6,slidesToScroll:6}},{breakpoint:1024,settings:{slidesToShow:5,slidesToScroll:5,infinite:!0}},{breakpoint:600,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:3}}]}),$(".slide-8").slick({infinite:!0,slidesToShow:8,slidesToScroll:8,responsive:[{breakpoint:1200,settings:{slidesToShow:6,slidesToScroll:6}}]}),$(".product-slick-gallery").slick({slidesToShow:3,slidesToScroll:1,arrows:!0,infinite:!0,dots:!1,focusOnSelect:!0,responsive:[{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$("#tab-1").css("display","Block"),$(".default").css("display","Block"),$(".tabs li a").click(function(event){event.preventDefault(),$(".slick_carousel").slick("unslick"),$(".product-3").slick("unslick"),$(".product_4").slick("unslick"),$(this).parent().parent().find("li").removeClass("current"),$(this).parent().addClass("current");var currunt_href=$(this).attr("href");$("#"+currunt_href).show(),$(this).parent().parent().parent().parent().find(".tab-content").not("#"+currunt_href).css("display","none"),$(".slick_carousel").slick(),$(".product-3").slick({arrows:!1,dots:!1,autoplay:!0,infinite:!1,speed:300,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:420,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".product_4").slick({infinite:!0,speed:300,slidesToShow:4,slidesToScroll:4,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:420,settings:{slidesToShow:1,slidesToScroll:1}}]})}),$("ul.tabs li:first-child a").trigger("click"),$("#RecoverPassword").on("click",function(evt){console.log("click"),evt.preventDefault(),toggleRecoverPasswordForm(),$("#RecoverPasswordForm").toggleClass()}),$("#HideRecoverPasswordLink").on("click",function(evt){console.log("click"),evt.preventDefault(),toggleRecoverPasswordForm()});function toggleRecoverPasswordForm(){$("#RecoverPasswordForm").toggleClass("hide"),$("#CustomerLoginForm").toggleClass("hide")}var hash=window.location.hash;hash==="#recover"&&toggleRecoverPasswordForm();var $formState=$(".reset-password-success");$formState.length&&$("#ResetSuccess").removeClass("hide")})}),$(function(){$("#main-menu").smartmenus({subMenusSubOffsetX:1,subMenusSubOffsetY:-8}),$("#sub-menu").smartmenus({subMenusSubOffsetX:1,subMenusSubOffsetY:-8})}),$(".toggle-nav").click(function(){$(".sm-horizontal").css("right","0px")}),$(".mobile-back").click(function(){$(".sm-horizontal").css("right","-410px")}),$(".filter-btn").on("click",function(e){$(".collection-filter").css("left","-15px")}),$(".filter-back").on("click",function(e){$(".collection-filter").css("left","-365px")}),$(".sidebar-popup").on("click",function(e){$(".collection-filter").css("left","-15px")}),$(".filter-back").on("click",function(e){$(".collection-filter").css("left","-365px")}),$(".sidebar-popup").on("click",function(e){$(".open-popup").toggleClass("open"),$(".collection-filter").css("left","-15px")}),$(".filter-back").on("click",function(e){$(".collection-filter").css("left","-365px"),$(".sidebar-popup").trigger("click")}),$(".fixed_cart").on("click",function(e){$("#cart_side").addClass("open-side")}),$("#cart_side .close-cart, #cart_side .overlay").on("click",function(e){$("#cart_side").removeClass("open-side")}),window.theme=theme||{},theme.customerTemplates=function(){function customerAddressForm(){var $newAddressForm=$("#AddressNewForm");$newAddressForm.length&&(Shopify&&new Shopify.CountryProvinceSelector("AddressCountryNew","AddressProvinceNew",{hideElement:"AddressProvinceContainerNew"}),$(".address-country-option").each(function(){var formId=$(this).data("form-id"),countrySelector="AddressCountry_"+formId,provinceSelector="AddressProvince_"+formId,containerSelector="AddressProvinceContainer_"+formId;new Shopify.CountryProvinceSelector(countrySelector,provinceSelector,{hideElement:containerSelector})}),$(".address-new-toggle").on("click",function(){$newAddressForm.toggleClass("hide")}),$(".address-edit-toggle").on("click",function(){var formId=$(this).data("form-id");$("#EditAddress_"+formId).toggleClass("hide")}),$(".address-delete").on("click",function(){var $el=$(this),formId=$el.data("form-id"),confirmMessage=$el.data("confirm-message");confirm(confirmMessage||"Are you sure you wish to delete this address?")&&Shopify.postLink("/account/addresses/"+formId,{parameters:{_method:"delete"}})}))}return{init:function(){customerAddressForm()}}}(),theme.init=function(){theme.customerTemplates.init()},$(theme.init);
//# sourceMappingURL=/cdn/shop/t/2/assets/script.js.map?v=128868077511713899001580386419