/*
 * name:base.js
 * intro:常见公用方法
 */
var $ = require('jquery');
(function ($) {
    var base_url = window.location.href;
    var base_url_come = base_url.indexOf(".com");
    var base_url_protocol = location.protocol;
    var base_url_domain = base_url.substr(0,base_url_come+4);
    var base_url_cookie_arr = base_url_domain.split(".");
    var base_url_cookie = base_url_cookie_arr[base_url_cookie_arr.length - 2];

    $.zheui = function () {
    };
    //公共接口地址配置
    $.zheui.domain = base_url_domain;
    //获取URL上指定参数值
    $.zheui.getUrlKeyVal = function (name) {
        var regex = new RegExp("[?&]" + encodeURIComponent(name) + "\\=([^&#]+)");
        var value = (location.search.match(regex) || ["", ""])[1];
        return decodeURIComponent(value);
    };

    //toast提示，2秒后自动消失
    var timer = null;
    $.zheui.toast=function(txt){
        var ct = $("#ct");
        if(!$('.toast_box').length){
            ct.append('<div class="toast_box"></div>');
        }
        var _toast = $(".toast_box");
        _toast.text(txt);
        _toast.show();
        setTimeout(function(){
            _toast.css("opacity","1");
        },1);
        var wh = window.innerHeight;
        var ww = window.document.body.clientWidth;
        var max = Math.max(wh,document.body.clientHeight);
        var _toast_h  = _toast.height();
        var _toast_w  = _toast.width();
        var _top = (wh-_toast_h)/2;
        var _left = (ww-_toast_w)/2;
        _toast.css({"top":_top+"px","left":_left+"px"});
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(function(){
            _toast.css("opacity","0");
            setTimeout(function(){
                _toast.hide();
            },200);
        },2000);
    };
    //为一个或多个元素绑定touch跳转事件，不适用列表页
    var touch_pre_time = 0;
    var touch_startX = 0,
        touch_startY = 0,
        touch_moveEndX = 0,
        touch_moveEndY = 0,
        touch_X = 0,
        touch_Y = 0;
    $.zheui.bindTouchGoto = function (arr, gotofun) {
        var x_ismove, x_finger;
        arr.each(function (index, ele) {
            $(ele).bind("touchstart",function (e) {
                x_ismove = false;
                x_finger = e.touches.length;
                touch_startX = e.touches[0].pageX;
                touch_startY = e.touches[0].pageY;
                $(this).addClass('hover');
                e.stopPropagation();
            }).bind("touchmove",function (e) {
                    // x_ismove = true;
                    touch_moveEndX = e.touches[0].pageX;
                    touch_moveEndY = e.touches[0].pageY;
                    touch_X = touch_moveEndX - touch_startX;
                    touch_Y = touch_moveEndY - touch_startY;
                    if (Math.abs(touch_X) >= 3 || Math.abs(touch_Y) >= 3) {
                        x_ismove = true;
                    }
                    $(this).removeClass('hover');
                    e.stopPropagation();
                }).bind("touchend",function (e) {
                    var touch_now = Date.now();
                    if(touch_now - touch_pre_time < 250){
                        $(this).removeClass('hover');
                        touch_pre_time = touch_now;
                        return;
                    }
                    touch_pre_time = touch_now;
                    $(this).removeClass('hover');
                    if (x_ismove || x_finger > 1) {
                        e.stopPropagation();
                        return;
                    }
                    e.stopPropagation();
                    if (typeof gotofun == "function") {
                        gotofun($(this), index);
                    }
                }).bind("touchcancel", function () {
                    $(this).removeClass('hover');
                });
        });
    };
})(Zepto);

