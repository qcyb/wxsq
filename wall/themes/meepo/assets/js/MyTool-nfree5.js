/*! weixinwall 2017-07-06 */

var MyTool={ID:"MyTool_",Root:"/js/MyTool/"};MyTool.ShadowID=MyTool.ID+"shadow",MyTool.LoadingID=MyTool.ID="dlgLoading",MyTool.DlgBoxHtml=function(a,b){return'<div id="'+a+'" style="font-size: 1rem;display:block;position:fixed;width:100%;height:100%;z-index:99010;left:0;top:0;text-align:center;" >'+b+"</div>"},MyTool.DlgContentHtml=function(a){var b=.7;return $(".dlg_ct_box_area").length>0&&(b=1),'<div class="dlg_ct_box_area" style="border: solid 1px;padding: 20px;color: #fff;position: absolute;display: inline-block;top: 0;left: 0;margin-top: -30px;margin-left: -55px;border-radius: 5px;max-width:80%;"><div style="position:absolute;z-index:-1;width:100%;height:100%;left:0;top:0;background-color:rgb(45,45,45);filter:alpha(opacity='+100*b+");-moz-opacity:"+b+";-khtml-opacity:"+b+";opacity:"+b+';"></div>'+a+"</div>"},MyTool.ShadowShow=function(){var a=$('<div id="'+this.ShadowID+'" style="position:fixed;width:100%;height:100%;left:0;top:0;z-index:99000;filter:alpha(opacity=50);-moz-opacity:0.5;-khtml-opacity: 0.5;opacity: 0.5;background-color:#000;"></div>');$("body").append(a)},MyTool.ShadowClose=function(){$("#"+this.ShadowID).remove()},MyTool.LoadingShow=function(){var a='<img style="top:50%;margin-top:-64px;left:50%;margin-left:-64px;position:absolute;" src="'+MyTool.Root+'alert-loading.gif" />',b=$(this.DlgBoxHtml(this.LoadingID,a));return MyTool.ShadowShow(),$("body").append(b),b},MyTool.LoadingClose=function(){this.ShadowClose(),$("#"+this.LoadingID).remove()},MyTool.Alert=function(a,b){var c=this.ID+"dlgAlert",d='<div style="padding:10px 10px 20px 10px;min-width:100px;">'+a+'</div><button type="button" class="dlg_bt_sure" style="display:inline-block;border:solid 1px;padding: 5px 20px;cursor: pointer;border-radius: 5px;" >确定</button>',e=$(this.DlgBoxHtml(c,this.DlgContentHtml(d)));this.ShadowShow(),this.AppendDlg(e),e.find(".dlg_bt_sure").focus(),e.find(".dlg_bt_sure").click(function(){if("function"==typeof b){var a=b();(a||void 0==a)&&(MyTool.ShadowClose(),e.remove())}else MyTool.ShadowClose(),e.remove()})},MyTool.AlertRedirect=function(a,b,c){var d=this.ID+"dlgAlertRedirect",e='<div style="padding:10px 10px 20px 10px;min-width:100px;">'+a+'<span class="dlg_msg_second" style="display:inline-block;width:30px;">'+b+'</span>秒后关闭</div><button type="button" class="dlg_bt_sure" style="display:inline-block;border:solid 1px;padding: 5px 20px;cursor: pointer;border-radius: 5px;" >确定</button>',f=$(this.DlgBoxHtml(d,this.DlgContentHtml(e)));this.ShadowShow(),this.AppendDlg(f),f.find(".dlg_bt_sure").focus(),f.find(".dlg_bt_sure").click(function(){window.location=c});var g=f.find(".dlg_msg_second"),h=setInterval(function(){b<=1?(clearInterval(h),window.location=c):(b--,g.text(b))},1e3)},MyTool.IframeClose=function(){},MyTool.IframeShow=function(a,b,c,d){var e=this.ID+"dlgIframe",f=d?"auto":"no",g='<div style="color:#fff;position:absolute;display:inline-block;top:50%;margin-top:-'+(b/2+30)+"px;left:50%;margin-left:-"+(a/2+30)+'px;border-radius:5px;" ><div style="position:absolute;z-index:-1;width:100%;height:100%;left:0;top:0;background-color:rgb(45,45,45);filter:alpha(opacity=70);-moz-opacity:0.7;-khtml-opacity: 0.7;opacity: 0.7;"></div><div style="position: relative; height: 30px;line-height: 30px;"><span style="position: absolute;right:10px;">[<a class="dlg_btn_close" style="cursor: pointer;color: #fff;text-decoration: none;display: inline-block;">&nbsp;关闭&nbsp;</a>]</span></div><div style="padding:10px;min-width:100px;"><iframe src="'+c+'" width="'+a+'" height="'+b+'" scrolling="'+f+'"></iframe></div></div>',h=$(this.DlgBoxHtml(e,g));this.ShadowShow(),$("body").append(h),h.find(".dlg_btn_close").click(function(){MyTool.IframeClose()}),this.IframeClose=function(){MyTool.ShadowClose(),h.remove()}},MyTool.Confirm=function(a,b,c){var d=this.ID+"dlgConfirm",e='<div style="padding:10px 10px 20px 10px;min-width:100px;">'+a+'</div><button type="button" class="dlg_bt_sure" style="display:inline-block;border:solid 1px;padding: 5px 20px;cursor: pointer;border-radius: 5px;margin:0 5px 0 5px;" >确定</button><button type="button" class="dlg_bt_cancel" style="display:inline-block;border:solid 1px;padding: 5px 20px;cursor: pointer;border-radius: 5px;margin:0 5px 0 5px;" >取消</button>',f=$(this.DlgBoxHtml(d,this.DlgContentHtml(e)));this.ShadowShow(),this.AppendDlg(f),f.find(".dlg_bt_sure").click(function(){"function"==typeof b&&b(),MyTool.ShadowClose(),f.remove()}),f.find(".dlg_bt_cancel").click(function(){"function"==typeof c&&c(),MyTool.ShadowClose(),f.remove()})},MyTool.AppendDlg=function(a){$("body").append(a);var b=a.find(".dlg_ct_box_area"),c=-b.outerWidth()/2,d=-b.outerHeight()/2;b.css({left:"50%",top:"50%","margin-left":c,"margin-top":d})};
//# sourceMappingURL=MyTool-nfree5.js.map