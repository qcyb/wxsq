(function(k, e) {
    var d = ["#微笑#", "#喜欢#", "#晕#", "#尴尬#", "#汗#", "#惊讶#", "#郁闷#", "#疑问#", "#书呆子#", "#悲伤#", "#口罩#", "#再见#", "#冷#", "#奸诈#", "#困#", "#被打#", "#财迷#", "#大哭#", "#无聊#", "#中毒#", "#可爱#", "#呲牙#", "#大笑#", "#馋#", "#吵闹#", "#愤怒#", "#怀疑#", "#闭嘴#", "#鄙视#", "#不屑#", "#色#", "#无聊#", "#斜眼#", "#酸#", "#亲#", "#恐吓#", "#左鄙夷#", "#右鄙夷#", "#嘘#", "#委屈#", "#可怜#", "#感动#", "#酷#", "#逗趣#", "#黑#"];
    var i = function(C, B) {
        e.each(d, 
        function(D, E) {
            if (C.indexOf(E) > -1) {
                flg = true;
                C = C.replace(new RegExp(E, "g"), p(D, B))
            }
        });
        return C
    };
    var w;
    var s = 64;
    var p = function(C, B) {
        if (!w) {
            w = e(".faceicon")
        }
        return '<span class="faceicon" style="width:' + B + "px;height: " + B + 'px;display: inline-block"><img style="width:' + (2880 * B/s) + "px;height:" + B + "px;left:-" + B * C + 'px" src="' + w.find(".icon-seed").attr("src") + '" ></span>'
    };
    var A = k.WBActivity.resize = function() {
        if (!g) {
            return
        }
        var C = 20;
        var B = g.height();
        h.each(function(G, I) {
            var M = e(I);
            if (G == x) {
                M.css({
                   "margin-bottom": (B - M.outerHeight() * MSG_NUM) / (MSG_NUM-1)
                })
            } else {
                M.css({
                    "margin-bottom": (B - M.outerHeight() * MSG_NUM) / (MSG_NUM-1)
                })
            }
            var K = M.width(),
            J = M.height();
            var F = (M.height() - C * 2),
            H = F;
            // M.find(".head").css({
            //     width: F + "px",
            //     height: H + "px",
            //     top: C + "px",
            //     left: C + "px"
            // });

            // M.find(".head").css({
            //     width: F + "px",
            //     height: H + "px",
            //     top: C + "px",
            //     left: C + "px"
            // });

            var N = K - F - C * 3,
            D = H / 4;
            // M.find(".nickname").css({
            //     width: N + "px",
            //     height: D + "px",
            //     top: C + "px",
            //     left: F + C * 2 + "px"
            // });
            var O = N,
            L = J - C * 3 - D,
            E = D + C * 2;
            // M.find(".msgword").css({
            //     width: O + "px",
            //     height: L + "px",
            //     top: E + "px",
            //     left: M.height() + "px"
            // })
        })
    };


    function y(C, E, nickname, F, D, T) {
        C.attr("msg_id", D);
        C.find(".u-head img").attr("src",E);
        C.find(".u-nickname").html(nickname);
		if(T==2){//图片类型的消息
			var height=C.find('.u-msgword').height()-5;
			F = "<div class='msg-pic'><img src = " + F+ " width=auto height = "+height+"px onClick='showthis("+D+")' /></div>";
		}
        C.find(".u-msgword").html(F).toFillText();
        C.find(".u-msgword").html(i(F, parseInt(C.find(".u-msgword").css("font-size")) + 10));
    }
    var a = 0;
    var h;
    function o(E, C, F, D, T, L) {
        if(getMsgItemById(D)){
            return ;
        }
        var B = e(h[a]);
        B.fadeOut(function() {
            B.css({
                visibility: "hidden",
                display: "block"
            });
            y(B, E, C, F, D, T);
            B.css({
                visibility: "visible"
            });
            B.addClass("msgin");
            k.setTimeout(function() {
                B.removeClass("msgin")
            },
            2000);
            a++;
            if (a > x) {
                a = 0
            }
        })
		if ($.isFunction(L)) {
            L.call(this)
        }
    }
    //
    var q = 0;
    //显示文字消息
    function l(E, C, F, D, T, L) {
        if(getMsgItemById(D)){
            return ;
        }
        h = g.children();
        if (q <= x) {
            var B = e(h[q]);
            B.fadeIn();
            y(B, E, C, F, D, T)
        } else {
            var B = e(h[0]);
            B.fadeOut(function() {
                e(h[2]).css({
                    "margin-bottom": B.css("margin-bottom")
                });
                B.css({
                    "margin-bottom": B.css("margin-bottom"),
                    visibility: "hidden",
                    display: "block"
                });
                y(B, E, C, F, D, T);
                B.slideUp(function() {
                    B.remove().css({
                        visibility: "visible",
                        display: "none"
                    }).appendTo(g).fadeIn()
                })
            })
        }
        q++;
		if ($.isFunction(L)) {
            L.call(this)
        }
    }
	
    //期初r和v均为空
    function t() {
        var B;
        if (r.length > 0) {
			//是否加载过来了数据
            B = r.pop();//删除并返回最后一个元素 顺序
            v.push(B)//把其中的第一或者最后的一个元素插入变量V
        } else {
			//若为随机循环
            if (v.length > 0 && st==1) {
                B = u()
            }
			//没有数据 那么去查询
        }
        if (B) {
            if (sstyle == "0") {
                l(B.avatar, B.nick_name, B.content, B.shenhetime ,B.type)
            } else {

                o(B.avatar, B.nick_name, B.content, B.shenhetime ,B.type)
            }
			if(B.type==2 && !$(".jbshow").hasClass('view') && sb==1){//sb show_big
				clearInterval(show_msg_2);
				$(".jbleft").css({"background":"url("+ B.content +") no-repeat center center","background-size":"auto 100%"});
				$("#hdimg").attr("src",B.avatar);
				$("#zsmc").html(B.nick_name);
				$(".jbshow").addClass('view');
				setTimeout(function() {
						$(".jbshow").removeClass('view');
						//if(show_msg_2==null){
						show_msg_2 = setInterval(function() {
								t()
						},m);
						//}
				},
				sbt);
									 
			}
        }
    }
    function u() {
        var C = v.length,
        D = Math.floor(Math.random() * C),
        E = v[D],
        //B = e(".MsgItem[msg_id=" + E.id + "]", ".Panel.MsgList");
        B = e(".MsgItem[msg_id=" + E.shenhetime + "]", ".Panel.MsgList");
        if (B.length <= 1) {
            return E
        } else {
            return u()
        }
    }
    
    
    
    var f = 0;
    function getnewmessage(B) {
        e.getJSON(PATH_ACTIVITY + Path_url('ajax_act_new_msg.php'), {
            shenhetime:f
        },
        function(json) {
        	//C是异步回传消息数组
            if (json && json.ret == 0 && e.isArray(json.data)) {
                if (json.data.length > 0) {
                	//r是所有上墙消息的数组
                    r = json.data.concat(r);
                    f = json.data[0].shenhetime
                }
            }
        }).complete(function() {
            if (B && typeof B == "function") {
                B.call()
            }
        })
    }
    var g,
    x;
    var r = [],
    v = [],
	new_1 = [];
    var m = WALL_INFO.re_time * 1000,//每条滚动时间
    sstyle = WALL_INFO.show_style,//滚动 或者 翻转 0滚动1反转
    st = WALL_INFO.show_type;//最新不循环或者随机循环0最新不循环1随机循环
	var sb = WALL_INFO.show_big;
	var sbt = WALL_INFO.show_big_time * 1000;
    var j = (WALL_INFO.chistory) ? (WALL_INFO.chistory * 1) : 0;//无消息时显示历史记录数
    var c = k.WBActivity.start = function() {
    	bindhotkey();
        g = e(".Panel.MsgList"),
        x = g.children().length - 1,
        h = g.children();
       getnewmessage(function() {
            k.WBActivity.hideLoading();
            e(".Panel.Top").css({
                top: 0
            });
            e(".Panel.Bottom").css({
                bottom: 0
            });
            e(".Panel.MsgList").css({
                display: "block",
                opacity: 1
            });
            A();
            h.hide();
            show_msg_2 = setInterval(function() {
                t()
            },m);
            check_msg = setInterval(function() {
               getnewmessage()
            },m)
        })
    }
})(window, jQuery);

function showthis(id){
	 var msgitem=getMsgItemById(id);
	 var head=$(msgitem).find('.u-head').eq(0);
	 var avatar=$(head).find('img').attr('src');
	 // avatar=avatar.substring(5,avatar.length-2);
	 var nickname=$(msgitem).find('.u-nickname').eq(0);
	 nickname=$(nickname).text();
	 var imgurl=$(msgitem).find('.u-msgword').find('img').attr('src');//
	 $("#hdimg").attr("src",avatar);
	 $("#zsmc").html(nickname);
	 $(".jbmz").html('大图');
	 $(".jbshow").addClass('view');
	 $(".jbleft").css({"background":"url("+ imgurl +") no-repeat center center","background-size":"auto 100%"});
	 $(".jbshow").addClass('view');
}

function getMsgItemById(msg_id){
	var item=$('.MsgItem');
	for(var i=0,l=item.length;i<l;i++){
		if($(item[i]).attr('msg_id')==msg_id){
			return item[i];
		}
	}
    return false;
}
function closeit(){
	 $(".jbshow").removeClass('view');
	 
}
 