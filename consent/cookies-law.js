"undefined"==typeof Optanon&&(Optanon={});
(function(){function G(){var a=[],b;for(b=0;b<m.length;b+=1){var d=m[b];-1!=d.indexOf(":1",d.length-2)&&X(m[b].replace(":1",""))&&a.push(m[b].replace(":1",""))}window.OptanonActiveGroups=","+a.toString().toLowerCase()+",";"undefined"!=typeof dataLayer?dataLayer.constructor===Array&&dataLayer.push({OptanonActiveGroups:","+a.toString().toLowerCase()+","}):window.dataLayer=[{event:"OptanonLoaded",OptanonActiveGroups:","+a.toString().toLowerCase()+","}]}function A(a){w("OptanonConsent","landingPath",
a)}function na(){$.fn.on||($.fn.on=function(a,b,d){return $(b).live(a,d)});$.fn.prop||($.fn.prop=function(a,b){return this.attr(a,b)});$(window).on("load",function(){H();var a,b=n(),d,e,f;Y(b);$("body").append('\x3cdiv id\x3d"optanon" class\x3d"modern"\x3e\x3c/div\x3e');$("#optanon").html('\x3cdiv id\x3d"optanon-popup-bg"\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-popup-wrapper" role\x3d"dialog" aria-modal\x3d"true" tabindex\x3d"-1"\x3e\x3cdiv id\x3d"optanon-popup-top"\x3e\x3ca href\x3d"#" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Preferences Close Button\');" class\x3d"optanon-close-link optanon-close optanon-close-ui" title\x3d"Close Preference Centre"\x3e\x3cdiv id\x3d"optanon-close" style\x3d"background: url(https://optanon.blob.core.windows.net/skins/default_flat_bottom_two_button_black/v2/images/optanon-pop-up-close.png);width:34px;height:34px;"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-popup-body"\x3e\x3cdiv id\x3d"optanon-popup-body-left"\x3e\x3cdiv id\x3d"optanon-popup-body-left-shading"\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-branding-top-logo" style\x3d"background-image: url(https://optanon.blob.core.windows.net/skins/default_flat_bottom_two_button_black/v2/images/cookie-collective-top-logo.svg) !important;"\x3e\x3c/div\x3e\x3cul id\x3d"optanon-menu"\x3e\x3c/ul\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
b.Language&&b.Language.Culture&&$("#optanon-popup-wrapper").attr("lang",b.Language.Culture);for(f=0;f<b.Groups.length;f+=1)if(a=b.Groups[f],q(a)==x||a&&null==a.Parent&&u(a)){d=q(a)==x;e=-1!=$.inArray(p(a)+":1",m);d=$('\x3cli class\x3d"menu-item-necessary '+(d||e?"menu-item-on":"menu-item-off")+'" title\x3d"'+q(a)+'"\x3e\x3cp\x3e\x3ca href\x3d"#"\x3e'+q(a)+"\x3c/a\x3e\x3c/p\x3e\x3c/li\x3e");q(a)==x&&d.removeClass("menu-item-necessary").addClass("menu-item-about");switch(a.OptanonGroupId){case 2:d.removeClass("menu-item-necessary").addClass("menu-item-performance");
break;case 3:d.removeClass("menu-item-necessary").addClass("menu-item-functional");break;case 4:d.removeClass("menu-item-necessary").addClass("menu-item-advertising");break;case 8:d.removeClass("menu-item-necessary").addClass("menu-item-social")}d.data("group",a);d.data("optanonGroupId",p(a));d.click(oa);$("#optanon #optanon-menu").append(d)}a=$('\x3cli class\x3d"menu-item-moreinfo menu-item-off" title\x3d"'+b.AboutText+'"\x3e\x3cp\x3e\x3ca target\x3d"_blank" href\x3d"'+b.AboutLink+"\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Cookie Policy');\"\x3e"+
b.AboutText+"\x3c/a\x3e\x3c/p\x3e\x3c/li\x3e");$("#optanon #optanon-menu").append(a);$("#optanon #optanon-popup-body").append('\x3cdiv id\x3d"optanon-popup-body-right"\x3e\x3ch2 aria-label\x3d"true"\x3e'+b.MainText+'\x3c/h2\x3e\x3ch3\x3e\x3c/h3\x3e\x3cdiv id\x3d"optanon-popup-more-info-bar"\x3e\x3cdiv class\x3d"optanon-status"\x3e'+pa(b,"chkMain")+('\x3cdiv class\x3d"optanon-status-always-active optanon-status-on"\x3e\x3cp\x3e'+b.AlwaysActiveText+"\x3c/p\x3e\x3c/div\x3e")+'\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-main-info-text"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-bottom-spacer"\x3e\x3c/div\x3e');
$("#optanon #optanon-popup-wrapper").append('\x3cdiv id\x3d"optanon-popup-bottom"\x3e \x3ca href\x3d"https://onetrust.com/poweredbyonetrust" target\x3d"_blank"\x3e\x3cdiv id\x3d"optanon-popup-bottom-logo" style\x3d"background: url(https://optanon.blob.core.windows.net/skins/default_flat_bottom_two_button_black/v2/images/cookie-collective-top-bottom.png);width:155px;height:35px;" title\x3d"powered by OneTrust"\x3e\x3c/div\x3e\x3c/a\x3e\x3cdiv class\x3d"optanon-button-wrapper optanon-save-settings-button optanon-close optanon-close-consent"\x3e\x3cdiv class\x3d"optanon-white-button-left"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-middle"\x3e\x3ca href\x3d"#" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Preferences Save Settings\');"\x3e'+
b.AllowAllText+'\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-right"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-button-wrapper optanon-allow-all-button optanon-allow-all"\x3e\x3cdiv class\x3d"optanon-white-button-left"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-middle"\x3e\x3ca href\x3d"#" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Preferences Allow All\');"\x3e'+b.ConfirmText+'\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-right"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
O();qa();b=n();a='\x3cdiv class\x3d"optanon-alert-box-wrapper  hide-cookie-setting-button" style\x3d"display:none"\x3e\x3cdiv class\x3d"optanon-alert-box-bottom-top"\x3e\x3cdiv class\x3d"optanon-alert-box-corner-close"\x3e\x3ca class\x3d"optanon-alert-box-close" href\x3d"#" title\x3d"Close Banner" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Banner Close Button\');"\x3e\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-bg"\x3e\x3cdiv class\x3d"optanon-alert-box-logo"\x3e \x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-body"\x3e';
b.BannerTitle&&(a=a+'\x3cp class\x3d"optanon-alert-box-title"\x3e'+b.BannerTitle+"\x3c/p\x3e");a=a+"\x3cp\x3e"+b.AlertNoticeText+'\x3c/p\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-clearfix"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-button-container"\x3e\x3cdiv class\x3d"optanon-alert-box-button optanon-button-close"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle"\x3e\x3ca class\x3d"optanon-alert-box-close" href\x3d"#"\x3e'+b.AlertCloseText+'\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-button optanon-button-allow"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle"\x3e\x3ca class\x3d"optanon-allow-all" href\x3d"#" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Banner Accept Cookies\');"\x3e'+
b.AlertAllowCookiesText+'\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-button optanon-button-more"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle"\x3e\x3ca class\x3d"optanon-toggle-display" href\x3d"#" onClick\x3d"Optanon.TriggerGoogleAnalyticsEvent(\'OneTrust Cookie Consent\', \'Banner Open Preferences\');"\x3e'+b.AlertMoreInfoText+'\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-clearfix optanon-alert-box-bottom-padding"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e';
$("body").append(a);ra();if(0<$(".optanon-show-settings").length&&($(".optanon-show-settings").attr("href","#"),$(".optanon-show-settings").wrap('\x3cdiv class\x3d"optanon-show-settings-popup-wrapper"\x3e').wrap('\x3cdiv class\x3d"optanon-show-settings-button"\x3e').wrap('\x3cdiv class\x3d"optanon-show-settings-middle"\x3e'),$(".optanon-show-settings-middle").before('\x3cdiv class\x3d"optanon-show-settings-left"\x3e\x3c/div\x3e'),$(".optanon-show-settings-middle").after('\x3cdiv class\x3d"optanon-show-settings-right"\x3e\x3c/div\x3e'),
$(".optanon-show-settings-button").addClass("optanon-toggle-display"),sa(),b=n(),!("ontouchstart"in window||navigator.msMaxTouchPoints||r("OptanonConsent","dnt")||r("OptanonConsent","groups"))))for(a=0;a<b.Groups.length;a+=1)if(f=b.Groups[a],u(f)&&(f="do not track"==t(f).toLowerCase()&&P)){b=$(".optanon-show-settings-button").first();Z(b);$("#optanon-show-settings-popup").fadeIn(800);aa(b);ba(b);I=!0;setTimeout(ta,4E3);w("OptanonConsent","dnt","true");break}0<$("#optanon-cookie-policy").length&&ua();
J();r("OptanonConsent","groups")||y("OptanonConsent")})}function H(){$("script").filter(function(){return $(this).attr("type")&&"text/plain"==$(this).attr("type").toLowerCase()&&$(this).attr("class")&&$(this).attr("class").toLowerCase().match(/optanon-category-[0-9]+($|\s)/)}).each(function(){var a=$(this).attr("class").toLowerCase().split("optanon-category-")[1];K(a,!1)&&$(this).replaceWith($(this).attr("type","text/javascript")[0].outerHTML)})}function pa(a,b){return'\x3cdiv class\x3d"optanon-status-editable"\x3e\x3cform\x3e\x3cfieldset\x3e\x3cp\x3e\x3cinput type\x3d"checkbox" value\x3d"check" id\x3d"'+
b+'" checked class\x3d"optanon-status-checkbox" /\x3e\x3clabel for\x3d"'+b+'"\x3e'+a.ActiveText+"\x3c/label\x3e\x3c/p\x3e\x3c/fieldset\x3e\x3c/form\x3e\x3c/div\x3e"}function oa(){var a=n(),b=$(this).data("group");Q(b);Y(a);$("#optanon #optanon-menu li").removeClass("menu-item-selected");$(this).addClass("menu-item-selected");$("#optanon h3").text(q(b));$("#optanon #optanon-main-info-text").html(L(b));if(b&&!a.HideToolbarCookieList){var d=n(),e=$('\x3cdiv class\x3d"optanon-cookie-list"\x3e\x3c/div\x3e'),
f=Q(b),g,h;(b.Cookies&&0<b.Cookies.length||f&&0<f.length)&&e.append('\x3cdiv class\x3d"optanon-cookies-used"\x3e'+d.CookiesUsedText+"\x3c/div\x3e");if(b.Cookies&&0<b.Cookies.length){h=$('\x3cp class\x3d"optanon-group-cookies-list"\x3e\x3c/p\x3e');for(d=0;d<b.Cookies.length;d+=1)g=b.Cookies[d],h.append((g?g.Name:"")+(d<b.Cookies.length-1?", ":""));e.append(h)}if(f&&0<f.length)for(d=0;d<f.length;d+=1)g=$('\x3cp class\x3d"optanon-subgroup-cookies-list"\x3e\x3c/p\x3e'),h=da(f[d]),L(f[d]),g.append('\x3cspan class\x3d"optanon-subgroup-header"\x3e'+
h+" \x3c/span\x3e"),h=$('\x3cdiv class\x3d"optanon-subgroup-cookies"\x3e\x3c/div\x3e'),g.append(h),e.append(g);$("#optanon #optanon-main-info-text").append(e)}"always active"==t(b).toLowerCase()||"always active"==t(b.Parent).toLowerCase()?($("#optanon .optanon-status-always-active").show(),$("#optanon .optanon-status-editable").hide()):($("#optanon .optanon-status-editable").show(),$("#optanon .optanon-status-always-active").hide(),e=-1!=$.inArray(p(b)+":1",m),f=$(b&&null==b.Parent?"#chkMain":"#optanon #chk"+
p(b)),e?(f.prop("checked",!0),f.parent().addClass("optanon-status-on"),f.next("label").text(a.ActiveText)):(f.prop("checked",!1),f.parent().removeClass("optanon-status-on"),a.InactiveText&&f.next("label").text(a.InactiveText)));q(b)==x?$("#optanon #optanon-popup-more-info-bar").hide():$("#optanon #optanon-popup-more-info-bar").show();return!1}function qa(){var a=n();$(document).on("click",".optanon-close-consent",function(){Optanon.Close();ea(!0,!0);return!1});$(document).on("click",".optanon-close-ui",
function(){B();return!1});$(document).on("click",".optanon-toggle-display",function(){Optanon.ToggleInfoDisplay();return!1});$(document).on("click",".optanon-allow-all",function(){Optanon.AllowAll();ea(!0,!0);return!1});$(document).on("keydown","#optanon",function(a){27==a.keyCode&&B()});$("#optanon").on("change",".optanon-status-checkbox",function(){var b=$(this).data("group")||$("#optanon #optanon-menu li.menu-item-selected").data("group");$(this).is(":checked")?va(a,b,this):wa(a,b,this);O()})}
function p(a){return 0==a.OptanonGroupId?a.OptanonGroupId+"_"+a.GroupId:a.OptanonGroupId}function va(a,b,d){var e=q(b);Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent","Preferences Toggle On",e);$("#optanon #optanon-menu li.menu-item-selected").removeClass("menu-item-off");$("#optanon #optanon-menu li.menu-item-selected").addClass("menu-item-on");$(d).parent().addClass("optanon-status-on");$("#optanon-show-settings-popup ul li").each(function(){$(d).text()==$("#optanon #optanon-menu li.menu-item-selected ").text()&&
$(d).find(".icon").removeClass("menu-item-off").addClass("menu-item-on")});e=M(m,p(b)+":0");-1!=e&&(m[e]=p(b)+":1");$(d).next("label").text(a.ActiveText)}function wa(a,b,d){var e=q(b);Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent","Preferences Toggle Off",e);$("#optanon #optanon-menu li.menu-item-selected ").removeClass("menu-item-on");$("#optanon #optanon-menu li.menu-item-selected").addClass("menu-item-off");$(d).parent().removeClass("optanon-status-on");$("#optanon-show-settings-popup ul li").each(function(){$(d).text()==
$("#optanon #optanon-menu li.menu-item-selected ").text()&&$(d).find(".icon").removeClass("menu-item-on").addClass("menu-item-off")});e=M(m,p(b)+":1");-1!=e&&(m[e]=p(b)+":0");a.InactiveText&&$(d).next("label").text(a.InactiveText)}function Z(a){var b=n(),d,e,f;a.parent(".optanon-show-settings-popup-wrapper").append('\x3cdiv id\x3d"optanon-show-settings-popup"\x3e\x3cdiv id\x3d"optanon-show-settings-popup-inner"\x3e\x3cdiv class\x3d"top-arrow"\x3e\x3c/div\x3e\x3cul\x3e\x3c/ul\x3e\x3cdiv class\x3d"menu-bottom-even"\x3e\x3c/div\x3e\x3cdiv class\x3d"bottom-arrow-even"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
for(f=0;f<b.Groups.length;f+=1){if((a=b.Groups[f])&&null==a.Parent&&u(a))switch(d=-1!=$.inArray(p(a)+":1",m),e=!C("OptanonConsent")&&"do not track"==t(a).toLowerCase()&&P,d=$('\x3cli\x3e\x3cspan class\x3d"icon necessary-icon '+(d?"menu-item-on":"menu-item-off")+'"\x3e\x3c/span\x3e'+q(a)+(e?'\x3cbr\x3e\x3cspan class\x3d"optanon-dnt"\x3eOff by Do Not Track\x3c/span\x3e':"")+'\x3cdiv class\x3d"menu-item-border"\x3e\x3c/div\x3e\x3c/li\x3e'),a.OptanonGroupId){case 2:d.find(".icon").removeClass("necessary-icon").addClass("performance-icon");
break;case 3:d.find(".icon").removeClass("necessary-icon").addClass("functional-icon");break;case 4:d.find(".icon").removeClass("necessary-icon").addClass("advertising-icon");break;case 8:d.find(".icon").removeClass("necessary-icon").addClass("social-icon")}$("#optanon-show-settings-popup ul").append(d)}$("#optanon-show-settings-popup ul").children(":first").addClass("first");$("#optanon-show-settings-popup ul").children(":last").addClass("last");$("#optanon-show-settings-popup ul").children(":odd").addClass("even");
$("#optanon-show-settings-popup ul").children(":even").addClass("odd");$("#optanon-show-settings-popup ul").children(":last").hasClass("odd")&&($("#optanon-show-settings-popup .bottom-arrow-even").removeClass("bottom-arrow-even").addClass("bottom-arrow-odd"),$("#optanon-show-settings-popup .menu-bottom-even").removeClass("menu-bottom-even").addClass("menu-bottom-odd"));$("#optanon-show-settings-popup ul li.last div").remove(".menu-item-border")}function R(){$("#optanon-show-settings-popup").remove()}
function ta(){fa||$("#optanon-show-settings-popup").fadeOut(800,function(){R()});I=!1}function sa(){$(".optanon-show-settings-button").click(function(){Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent","Privacy Settings Click")});"ontouchstart"in window||navigator.msMaxTouchPoints||$(".optanon-show-settings-button").hover(function(){Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent","Privacy Settings Hover");fa=!0;I||($("#optanon-show-settings-popup").stop(),R(),Z($(this)),
$("#optanon-show-settings-popup").fadeIn(400),aa($(this)),ba($(this)))},function(){$("#optanon-show-settings-popup").fadeOut(400,function(){I=!1;R()})})}function ra(){if(!Optanon.IsAlertBoxClosedAndValid()){var a=n();$(".optanon-alert-box-wrapper").show().animate({bottom:"0px"},1E3);a.ForceConsent&&$("#optanon-popup-bg").css({"z-index":"7000"}).show();$(".optanon-alert-box-close").click(function(){$(".optanon-alert-box-wrapper").fadeOut(200);1==a.CloseShouldAcceptAllCookies&&Optanon.AllowAll();Optanon.SetAlertBoxClosed(!0);
return!1});S&&!ha||$(window).scroll(function(){var a=$(document).height()-$(window).height();0===a&&(a=$(window).height());25<100*$(window).scrollTop()/a&&!Optanon.IsAlertBoxClosedAndValid()&&(Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent","Banner Auto Close"),Optanon.Close(),$(".optanon-alert-box-wrapper").fadeOut(400),Optanon.SetAlertBoxClosed(!0))})}}function ua(){var a,b,d,e,f,g,h=n(),v,m;for(d=0;d<h.Groups.length;d+=1)if((a=h.Groups[d])&&null==a.Parent&&u(a)){v=$('\x3cdiv class\x3d"optanon-cookie-policy-group"\x3e\x3c/div\x3e');
v.append('\x3cp class\x3d"optanon-cookie-policy-group-name"\x3e'+q(a)+"\x3c/p\x3e");v.append('\x3cp class\x3d"optanon-cookie-policy-group-description"\x3e'+L(a)+"\x3c/p\x3e");if(0<a.Cookies.length)for(v.append('\x3cp class\x3d"optanon-cookie-policy-cookies-used"\x3e'+h.CookiesUsedText+"\x3c/p\x3e"),v.append('\x3cul class\x3d"optanon-cookie-policy-group-cookies-list"\x3e\x3c/ul\x3e'),e=0;e<a.Cookies.length;e+=1)b=(b=a.Cookies[e])?b.Name:"",v.find(".optanon-cookie-policy-group-cookies-list").append("\x3cli\x3e"+
b+"\x3c/li\x3e");a=Q(a);if(0<a.length){h.CookiesText||(h.CookiesText="Cookies");h.CategoriesText||(h.CategoriesText="Categories");h.LifespanText||(h.LifespanText="Lifespan");e=$('\x3cdiv class\x3d"optanon-cookie-policy-subgroup-table"\x3e\x3c/div\x3e');e.append('\x3cdiv class\x3d"optanon-cookie-policy-subgroup-table-header clearfix"\x3e\x3c/div\x3e');b="";h.IsLifespanEnabled&&(b="\x26nbsp;("+h.LifespanText+")");e.find(".optanon-cookie-policy-subgroup-table-header").append('\x3cdiv class\x3d"optanon-cookie-policy-right"\x3e\x3cp class\x3d"optanon-cookie-policy-subgroup-table-column-header"\x3e'+
h.CookiesText+b+"\x3c/p\x3e\x3c/div\x3e");e.find(".optanon-cookie-policy-subgroup-table-header").append('\x3cdiv class\x3d"optanon-cookie-policy-left"\x3e\x3cp class\x3d"optanon-cookie-policy-subgroup-table-column-header"\x3e'+h.CategoriesText+"\x3c/p\x3e\x3c/div\x3e");for(b=0;b<a.length;b+=1){m=$('\x3cdiv class\x3d"optanon-cookie-policy-subgroup"\x3e\x3c/div\x3e');m.append('\x3cdiv class\x3d"optanon-cookie-policy-left"\x3e\x3c/div\x3e');f=da(a[b]);m.find(".optanon-cookie-policy-left").append('\x3cp class\x3d"optanon-cookie-policy-subgroup-name"\x3e'+
f+"\x3c/p\x3e");m.find(".optanon-cookie-policy-left").append('\x3cp class\x3d"optanon-cookie-policy-subgroup-description"\x3e'+L(a[b])+"\x3c/p\x3e");m.append('\x3cdiv class\x3d"optanon-cookie-policy-right"\x3e\x3c/div\x3e');m.find(".optanon-cookie-policy-right").append('\x3cul class\x3d"optanon-cookie-policy-subgroup-cookies-list"\x3e\x3c/ul\x3e');if(h.IsLifespanEnabled)for(f=0;f<a[b].Cookies.length;f+=1){g=a[b].Cookies[f];var p="",p=g.IsSession?"Session":0===g.Length?"\x3c 1 days":g.Length+" days";
m.find(".optanon-cookie-policy-subgroup-cookies-list").append("\x3cli\x3e"+g.Name+"\x26nbsp;("+p+")\x3c/li\x3e")}else for(f=0;f<a[b].Cookies.length;f+=1)g=a[b].Cookies[f],m.find(".optanon-cookie-policy-subgroup-cookies-list").append("\x3cli\x3e"+g.Name+"\x3c/li\x3e");e.append(m)}v.append(e)}$("#optanon-cookie-policy").append(v);ia()}$(window).resize(function(){ia()})}function L(a){return a&&a.GroupLanguagePropertiesSets&&a.GroupLanguagePropertiesSets[0]&&a.GroupLanguagePropertiesSets[0].GroupDescription&&
a.GroupLanguagePropertiesSets[0].GroupDescription.Text?a.GroupLanguagePropertiesSets[0].GroupDescription.Text.replace(/\r\n/g,"\x3cbr\x3e"):""}function q(a){return a&&a.GroupLanguagePropertiesSets&&a.GroupLanguagePropertiesSets[0]&&a.GroupLanguagePropertiesSets[0].GroupName?a.GroupLanguagePropertiesSets[0].GroupName.Text:""}function t(a){return a&&a.GroupLanguagePropertiesSets&&a.GroupLanguagePropertiesSets[0]&&a.GroupLanguagePropertiesSets[0].DefaultStatus?a.GroupLanguagePropertiesSets[0].DefaultStatus.Text:
""}function da(a){return a?q(a):""}function ia(){$("#optanon-cookie-policy .optanon-cookie-policy-subgroup").each(function(){$(this).find(".optanon-cookie-policy-left").height("auto");$(this).find(".optanon-cookie-policy-right").height("auto");$(this).find(".optanon-cookie-policy-left").height()>=$(this).find(".optanon-cookie-policy-right").height()?$(this).find(".optanon-cookie-policy-right").height($(this).find(".optanon-cookie-policy-left").height()):$(this).find(".optanon-cookie-policy-left").height($(this).find(".optanon-cookie-policy-right").height())})}
function xa(){$("#optanon #optanon-menu li").removeClass("menu-item-selected");$("#optanon #optanon-menu li").each(function(){$(this).text()==x&&$(this).click()});O();var a=$("#optanon-popup-wrapper"),b=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,d=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;a.css("margin-top","10px");720>b?a.css("top","10px"):a.outerHeight()>d?a.css("top",Math.max(0,(d-a.outerHeight())/2+$(window).scrollTop())+
"px"):a.css("top",Math.max(0,(d-a.outerHeight())/2)+"px");$("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").hide().fadeIn(400);a.focus()}function B(a){$("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").fadeOut(400,a)}function ja(a){if(t(a)){var b=t(a).toLowerCase();a.Parent&&(b=t(a.Parent).toLowerCase());return"always active"==b||"active"==b||"inactive landingpage"==b||"do not track"==b&&!P}return!0}function ka(){var a,b=n(),d;if(r("OptanonConsent","groups")){r("OptanonConsent",
"groups")&&!T&&(T=!0);a=!1;var b=D(r("OptanonConsent","groups")),e=D(r("OptanonConsent","groups").replace(/:0/g,"").replace(/:1/g,""));d=n();var f,g,h;if(r("OptanonConsent","groups")){for(g=0;g<d.Groups.length;g+=1)f=d.Groups[g],u(f)&&(h=M(e,p(f)),-1==h&&(a=!0,ja(f)?b.push(p(f)+":1"):b.push(p(f)+":0")));for(g=b.length-1;0<=g;--g){h=!1;for(e=0;e<d.Groups.length;e+=1)if(f=d.Groups[e],u(f)&&p(f)==b[g].replace(/:0/g,"").replace(/:1/g,"")){h=!0;break}h||(a=!0,b.splice(g,1))}a&&y("OptanonConsent",b)}m=
D(r("OptanonConsent","groups"))}else{m=[];for(d=0;d<b.Groups.length;d+=1)a=b.Groups[d],u(a)&&(ja(a)?m.push(p(a)+":1"):m.push(p(a)+":0"));T=!0}}function y(a,b){b?w(a,"groups",b.toString().toLowerCase()):w(a,"groups",m.toString().toLowerCase())}function w(a,b,d){var e={},f=C(a),g,h;if(f)for(g=f.split("\x26"),f=0;f<g.length;f+=1)h=g[f].split("\x3d"),e[decodeURIComponent(h[0])]=decodeURIComponent(h[1]).replace(/\+/g," ");e[b]=d;e.datestamp=(new Date).toString();e.version="3.6.18";b="";for(var m in e)e.hasOwnProperty(m)&&
(""!=b&&(b+="\x26"),b+=m+"\x3d"+encodeURIComponent(e[m]).replace(/%20/g,"+"));U(a,b,365)}function r(a,b){var d=C(a),e,f,g;if(d){e={};f=d.split("\x26");for(d=0;d<f.length;d+=1)g=f[d].split("\x3d"),e[decodeURIComponent(g[0])]=decodeURIComponent(g[1]).replace(/\+/g," ");return b&&e[b]?e[b]:b&&!e[b]?"":e}return""}function U(a,b,d){var e;d?(e=new Date,e.setTime(e.getTime()+864E5*d),d="; expires\x3d"+e.toGMTString()):d="";e=["ra2web.cn"];1>=e.length&&(e[1]="");document.cookie=a+"\x3d"+b+d+"; path\x3d/"+
e[1]+"; domain\x3d."+e[0]}function C(a){a+="\x3d";var b=document.cookie.split(";"),d,e;for(d=0;d<b.length;d+=1){for(e=b[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(a))return e.substring(a.length,e.length)}return null}function K(a,b){var d=null!=a&&"undefined"!=typeof a,e,f;if(!b){ka();e=z(m,a+":1");a:{f=n();var g;for(g=0;g<f.Groups.length;g+=1)if(f.Groups[g].OptanonGroupId==a){f=!0;break a}f=!1}f=!f;return d&&(e&&X(a)||f)?!0:!1}return!0}function X(a){var b=n(),d,e;for(e=0;e<b.Groups.length;e+=
1)if(b.Groups[e].OptanonGroupId==a){d=b.Groups[e];break}return"inactive landingpage"!=t(d).toLowerCase()?!0:(a=r("OptanonConsent","landingPath"))&&a!==location.href?!0:!1}function D(a){return a?a.toLowerCase().split(","):[]}function J(){var a;if("function"==typeof OptanonWrapper&&"undefined"!=OptanonWrapper){OptanonWrapper();for(a=0;a<E.length;a+=1)z(V,E[a])||V.push(E[a]);E=[];for(a=0;a<F.length;a+=1)z(W,F[a])||W.push(F[a]);F=[]}}function Y(a){a.Groups.unshift({GroupLanguagePropertiesSets:[{GroupName:{Text:x},
GroupDescription:{Text:a.MainInfoText}}]})}function la(a){if(a=document.getElementById(a))for(;a.hasChildNodes();)a.removeChild(a.lastChild)}function N(a){if(a=document.getElementById(a))a.style.display="block"}function ma(a){(a=document.getElementById(a))&&a.parentNode.removeChild(a)}function z(a,b){var d;for(d=0;d<a.length;d+=1)if(a[d].toString().toLowerCase()==b.toString().toLowerCase())return!0;return!1}function M(a,b){var d;for(d=0;d<a.length;d+=1)if(a[d]==b)return d;return-1}function O(){var a=
0,b,d=n(),e;for(e=0;e<d.Groups.length;e+=1)if(b=d.Groups[e],u(b)&&z(m,p(b)+":0")&&(a+=1,1<=a))return $("#optanon .optanon-allow-all-button").show(),!0;$("#optanon .optanon-allow-all-button").hide();return!1}function ea(a,b){$(".optanon-alert-box-wrapper").fadeOut(400);a&&(S||!S&&!Optanon.IsAlertBoxClosedAndValid())&&Optanon.SetAlertBoxClosed(b)}function aa(a){$("#optanon-show-settings-popup").removeClass("optanon-show-settings-popup-top-button");$("#optanon-show-settings-popup ul").removeClass("top-button");
$("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").hide();$("#optanon-show-settings-popup").css("top","-"+$("#optanon-show-settings-popup-inner").height()+"px");var b=$("#optanon-show-settings-popup"),d=$(window).scrollTop(),b=b.offset().top;d>=b-50?($("#optanon-show-settings-popup").addClass("optanon-show-settings-popup-top-button"),$("#optanon-show-settings-popup ul").addClass("top-button"),$("#optanon-show-settings-popup").css("top",
a.find(".optanon-show-settings-left").height()+$("#optanon-show-settings-popup .top-arrow").height()-3+"px"),$("#optanon-show-settings-popup .top-arrow").css("top","-"+($("#optanon-show-settings-popup .top-arrow").height()-2)+"px"),$("#optanon-show-settings-popup .top-arrow").show()):$("#optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").show()}function ba(a){var b=$("#optanon-show-settings-popup-inner");a=a.find(".optanon-show-settings-left").width()+
a.find(".optanon-show-settings-middle").width()+a.find(".optanon-show-settings-right").width();var d=$("#optanon-show-settings-popup ul").width()-3,e=$("#optanon-show-settings-popup .top-arrow").width(),f,g,h,m;b.css("margin-left","-"+((d-a)/2+a)+"px");$("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").css("margin-left",(d-e)/2+"px");b.css("left","0px");f=$(window).scrollLeft();g=b.offset().left;h=f+$(window).width();
m=g+b.width();a<d?f>=g?(b.css("margin-left","-"+a+"px"),$("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").css("margin-left",(a-e)/2+"px")):h<=m&&(b.css("margin-left","-"+d+"px"),$("#optanon-show-settings-popup .top-arrow, #optanon-show-settings-popup .bottom-arrow-even, #optanon-show-settings-popup .bottom-arrow-odd").css("margin-left",d-(a+e)/2+"px")):h<=m?b.css("margin-left","-"+a+"px"):f>=g&&b.css("margin-left",
"-"+d+"px")}function u(a){var b,d=n(),e=!1,f;if(a&&null==a.Parent){for(f=0;f<d.Groups.length;f+=1)if(b=d.Groups[f],null!=b.Parent&&q(a)&&q(b.Parent)==q(a)&&b.ShowInPopup&&null!=b.Cookies&&0<b.Cookies.length){e=!0;break}return a.ShowInPopup&&(null!=a.Cookies&&0<a.Cookies.length||e)}return a.ShowInPopup&&null!=a.Cookies&&0<a.Cookies.length}function Q(a){var b,d=n(),e=[],f;for(f=0;f<d.Groups.length;f+=1)b=d.Groups[f],null!=b.Parent&&q(b.Parent)==q(a)&&b.ShowInPopup&&null!=b.Cookies&&0<b.Cookies.length&&
e.push(b);return e}function n(){var a={MainText:"Privacy Preference Centre",MainInfoText:"When you visit any web site, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalised web experience.\r\n\r\nBecause we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.",
AboutText:"More Information",AboutCookiesText:"Your Privacy",ConfirmText:"Allow All",AllowAllText:"Save Settings",CookiesUsedText:"Cookies used",ShowAlertNotice:!0,AboutLink:"https://cookiepedia.co.uk/giving-consent-to-cookies",HideToolbarCookieList:!0,ActiveText:"Active",AlwaysActiveText:"Always Active",AlertNoticeText:"本站点使用了Cookies技术。 继续使用本站点意味您同意我们的Cookies政策。",AlertCloseText:"Close",AlertMoreInfoText:"Cookie Settings",AlertAllowCookiesText:"同意",
CloseShouldAcceptAllCookies:!0,LastReconsentDate:null,BannerTitle:"",ForceConsent:!1,InactiveText:"Inactive",CookiesText:"Cookies",CategoriesText:"Categories",HasScriptArchive:!0,IsLifespanEnabled:!1,LifespanText:"Lifespan",Groups:[{ShowInPopup:!0,Order:0,OptanonGroupId:1,Parent:null,GroupLanguagePropertiesSets:[{DefaultStatus:{Text:"Always Active"},GroupDescription:{Text:"These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.\r\n\r\nYou can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."},
GroupName:{Text:"Strictly Necessary Cookies"}}],Cookies:[{Name:"OptanonConsent",Host:"ra2web.cn",IsSession:!1,Length:365},{Name:"OptanonAlertBoxClosed",Host:"ra2web.cn",IsSession:!1,Length:365},{Name:"__cfduid",Host:".ra2web.cn",IsSession:!1,Length:364}],GroupId:75419},{ShowInPopup:!0,Order:100,OptanonGroupId:101,Parent:{ShowInPopup:!0,Order:3,OptanonGroupId:4,Parent:null,GroupLanguagePropertiesSets:[{DefaultStatus:{Text:"Active"},GroupDescription:{Text:"These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."},
GroupName:{Text:"Targeting Cookies"}}],Cookies:[],GroupId:75417},GroupLanguagePropertiesSets:[{DefaultStatus:{Text:"Active"},GroupDescription:{Text:""},GroupName:{Text:"facebook.com"}}],Cookies:[{Name:"datr",Host:".facebook.com",IsSession:!1,Length:629},{Name:"fr",Host:".facebook.com",IsSession:!1,Length:89},{Name:"lu",Host:".facebook.com",IsSession:!1,Length:629}],GroupId:75420},{ShowInPopup:!0,Order:3,OptanonGroupId:4,Parent:null,GroupLanguagePropertiesSets:[{DefaultStatus:{Text:"Active"},GroupDescription:{Text:"These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."},
GroupName:{Text:"Targeting Cookies"}}],Cookies:[],GroupId:75417}],ConsentModel:{Name:"Implied Consent"},Language:{Culture:"en-GB"}};a.Groups.sort(function(a,d){return 100===a.Order&&100===d.Order?a.OptanonGroupId-d.OptanonGroupId:a.Order-d.Order});return a}var P="yes"==navigator.doNotTrack||"1"==navigator.doNotTrack||"1"==navigator.msDoNotTrack,I=!1,fa=!1,S=function(){var a=!0,b,d=n(),e;for(e=0;e<d.Groups.length;e+=1)if(b=d.Groups[e],u(b)&&(!t(b)||t(b)&&("active"==t(b).toLowerCase()||"inactive landingpage"==
t(b).toLowerCase()||"do not track"==t(b).toLowerCase()))){a=!1;break}return a}(),ha=function(){var a=!0,b,d=n(),e;for(e=0;e<d.Groups.length;e+=1)if(b=d.Groups[e],u(b)&&(b=t(b).toLowerCase(),"inactive landingpage"!==b&&"always active"!==b)){a=!1;break}return a}(),T=!1,m,V=[],W=[],E=[],F=[],x=n().AboutCookiesText;this.Init=function(){ka();G();var a=document.createElement("link");a.type="text/css";a.href="https://optanon.blob.core.windows.net/skins/default_flat_bottom_two_button_black/v2/css/optanon.css";
a.rel="stylesheet";document.getElementsByTagName("head")[0].appendChild(a);var a=(a=(a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec("#EE4F20"))?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null)?186<.299*a.r+.587*a.g+.114*a.b?"#000000":"#ffffff":"",b=document.createElement("style");b.innerHTML="#optanon ul#optanon-menu li { background-color:  !important }#optanon ul#optanon-menu li.menu-item-selected { background-color:  !important }#optanon #optanon-popup-wrapper .optanon-white-button-middle { background-color: #EE4F20 !important }.optanon-alert-box-wrapper .optanon-alert-box-button-middle { background-color: #EE4F20 !important; border-color: #EE4F20 !important; }#optanon #optanon-popup-wrapper .optanon-white-button-middle a { color: "+
a+" !important }.optanon-alert-box-wrapper .optanon-alert-box-button-middle a { color: "+a+" !important }#optanon #optanon-popup-bottom { background-color:  !important }#optanon.modern #optanon-popup-top, #optanon.modern #optanon-popup-body-left-shading { background-color:  !important }.optanon-alert-box-wrapper { background-color: !important }.optanon-alert-box-wrapper .optanon-alert-box-bg p { color: !important }";document.getElementsByTagName("head")[0].appendChild(b);if((a=r("OptanonConsent",
"landingPath"))&&a!==location.href){var a="true"===r("OptanonConsent","AwaitingReconsent"),d=n(),b=C("OptanonAlertBoxClosed"),d=d.LastReconsentDate;b&&d&&new Date(d)>new Date(b)&&!a?(A(location.href),w("OptanonConsent","AwaitingReconsent",!0)):(A("NotLandingPage"),w("OptanonConsent","AwaitingReconsent",!1),ha&&Optanon.SetAlertBoxClosed(!0))}else A(location.href);na()};this.InsertScript=function(a,b,d,e,f){var g=null!=e&&"undefined"!=typeof e,h;if(K(f,g&&"undefined"!=typeof e.ignoreGroupCheck&&1==
e.ignoreGroupCheck||!1)&&!z(V,f)){E.push(f);g&&"undefined"!=typeof e.deleteSelectorContent&&1==e.deleteSelectorContent&&la(b);f=document.createElement("script");null!=d&&"undefined"!=typeof d&&(h=!1,f.onload=f.onreadystatechange=function(){h||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(h=!0,d())});f.type="text/javascript";f.src=a;switch(b){case "head":document.getElementsByTagName("head")[0].appendChild(f);break;case "body":document.getElementsByTagName("body")[0].appendChild(f);
break;default:document.getElementById(b)&&(document.getElementById(b).appendChild(f),g&&"undefined"!=typeof e.makeSelectorVisible&&1==e.makeSelectorVisible&&N(b))}if(g&&"undefined"!=typeof e.makeElementsVisible)for(a=0;a<e.makeElementsVisible.length;a+=1)N(e.makeElementsVisible[a]);if(g&&"undefined"!=typeof e.deleteElements)for(g=0;g<e.deleteElements.length;g+=1)ma(e.deleteElements[g])}};this.InsertHtml=function(a,b,d,e,f){var g=null!=e&&"undefined"!=typeof e;if(K(f,g&&"undefined"!=typeof e.ignoreGroupCheck&&
1==e.ignoreGroupCheck||!1)&&!z(W,f)){F.push(f);g&&"undefined"!=typeof e.deleteSelectorContent&&1==e.deleteSelectorContent&&la(b);f=document.getElementById(b);var h;f&&(h=document.createElement("div"),h.innerHTML=a,f.appendChild(h));g&&"undefined"!=typeof e.makeSelectorVisible&&1==e.makeSelectorVisible&&N(b);if(g&&"undefined"!=typeof e.makeElementsVisible)for(a=0;a<e.makeElementsVisible.length;a+=1)N(e.makeElementsVisible[a]);if(g&&"undefined"!=typeof e.deleteElements)for(g=0;g<e.deleteElements.length;g+=
1)ma(e.deleteElements[g]);null!=d&&"undefined"!=typeof d&&d()}};this.Close=function(){B();A("NotLandingPage");y("OptanonConsent");H();G();J()};this.AllowAll=function(){var a,b=n(),d;m=[];for(d=0;d<b.Groups.length;d+=1)a=b.Groups[d],u(a)&&m.push(p(a)+":1");$("#optanon #optanon-menu li").removeClass("menu-item-off");$("#optanon #optanon-menu li").addClass("menu-item-on");$("#optanon-show-settings-popup ul li").each(function(){$(this).find(".icon").removeClass("menu-item-off").addClass("menu-item-on")});
B();A("NotLandingPage");y("OptanonConsent");H();G();J()};this.ToggleInfoDisplay=function(){$("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").is(":hidden")?xa():(B(),y("OptanonConsent"),H(),G(),J())};this.BlockGoogleAnalytics=function(a,b){window["ga-disable-"+a]=!K(b)};this.TriggerGoogleAnalyticsEvent=function(a,b,d,e){"undefined"!=typeof _gaq&&_gaq.push(["_trackEvent",a,b,d,e]);"undefined"!=typeof ga&&ga("send","event",a,b,d,e);"undefined"!=typeof dataLayer&&dataLayer.constructor===
Array&&dataLayer.push({event:"trackOptanonEvent",optanonCategory:a,optanonAction:b,optanonLabel:d,optanonValue:e})};this.IsAlertBoxClosed=this.IsAlertBoxClosedAndValid=function(){var a=n(),b=C("OptanonAlertBoxClosed"),a=a.LastReconsentDate;if(null===b)return!1;if(!a)return!0;(b=new Date(a)>new Date(b))&&Optanon.ReconsentGroups();return!b};this.ReconsentGroups=function(){var a=!1,b=D(r("OptanonConsent","groups")),d=D(r("OptanonConsent","groups").replace(/:0/g,"").replace(/:1/g,"")),e=n();if(r("OptanonConsent",
"groups")){for(var f=0;f<e.Groups.length;f+=1){var g=e.Groups[f];if(u(g)){var h=M(d,p(g));if(-1!=h){var m=t(g).toLowerCase();-1<["inactive","inactive landingpage","do not track"].indexOf(m)&&(a=!0,m="inactive landingpage"===m?":1":":0",b[h]=p(g)+m)}}}a&&y("OptanonConsent",b)}};this.SetAlertBoxClosed=function(a){var b=(new Date).toISOString();a?U("OptanonAlertBoxClosed",b,365):U("OptanonAlertBoxClosed",b)};this.GetDomainData=function(){return n()}}).call(Optanon);Optanon.Init();