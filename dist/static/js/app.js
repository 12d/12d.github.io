webpackJsonp([0],{"4nK+":function(t,a){},BAiR:function(t,a){},EFWR:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("nUgu"),i=e.n(n),s=e("gwNS"),o=e.n(s);window.App=i.a,i.a.Api=o.a,window.createScript=function(t,a){!function e(){var n=document.createElement("script");n.type="text/javascript",n.src=t[0],n.onload=function(){t.shift(),t.length>0?e():a&&a()},document.body.appendChild(n)}()},window.xhr={crearteXhr:function(){XMLHttpRequest?this.xhr=new XMLHttpRequest:ActiveXObject&&(this.xhr=new ActiveXObject("Microsoft.XMLHTTP"))},data:function(t,a){this.xhr.onreadystatechange=function(){4===this.readyState&&200===this.status?t(this.responseText):404===this.status&&a&&a()}},param:function(t){var a=[];if(/Object/.test(Object.prototype.toString.call(t))){for(var e in t)a.push(e+"="+t[e]);return a.join("&")}return"string"==typeof t?t:""},init:function(t){if("string"==typeof t.type)if(t.type=t.type.toUpperCase(),t.async=void 0===t.async||t.async,this.crearteXhr(),this.data(t.success,t.error),"GET"===t.type){var a=this.param(t.data);this.xhr.open(t.type,t.url+(""!==a?"?":"")+a,t.async),void 0!==t.bringCookie&&1==t.bringCookie?this.xhr.withCredentials=!0:this.xhr.withCredentials=!1,this.xhr.send()}else"POST"===t.type&&(this.xhr.open(t.type,t.url,t.async),this.xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"),void 0!==t.bringCookie&&1==t.bringCookie?this.xhr.withCredentials=!0:this.xhr.withCredentials=!1,this.xhr.send(this.param(t.data)))},getQueryString:function(t,a){var e=new RegExp("(^|&|\\?)"+a+"=([^(&|\\?)]*)(&|\\?|$)","i"),n=decodeURI(t).substr(1).match(e);return null!=n?unescape(n[2]):null},getChannel:function(){var t=document.getElementsByTagName("meta");if(t.length)for(var a=0;a<t.length;a++){var e=t[a];if("channel"===e.getAttribute("name"))for(k in channel)if(channel[k].description===e.getAttribute("content"))return channel[k].loanType}return""},paramZh:function(t){var a={};for(var e in t)""!==t[e]&&null!==t[e]&&(a[e]=t[e]);return a}},window.onerror=function(t,a,e,n){var i=[];i.push("**** 出错了 ****"),i.push("错误消息:"+t),i.push("文件:"+a),i.push("行数:"+e),i.push("字符:"+n),console.log(i.join("\n"))}},KvKp:function(t,a,e){"use strict";t.exports={loadingImg:function(){var t=new Array,a=$(".claImg");$.each(a,function(e){t[e]=new Image,a.eq(e).data("img")&&(t[e].src=a.eq(e).data("img"),t[e].onload=function(){a.eq(e).attr("src",t[e].src)})})},getBase64Image:function(t){var a=document.createElement("canvas");return a.width=t.width,a.height=t.height,a.getContext("2d").drawImage(t,0,0,t.width,t.height),a.toDataURL("images/png")},fmtDate:function(t,a){var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var n in/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(a)&&(a=a.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return a},MillisecondToDate:function(t){var a=parseFloat(t)/1e3,e="";return null!=a&&""!=a&&(e=a>60&&a<3600?parseInt(a/60)+" 分钟前":a>=3600&&a<86400?parseInt(a/3600)+" 小时前":a>=86400&&a<2592e3?parseInt(a/86400)+" 天前":a>=2592e3&&a<31536e3?parseInt(a/2592e3)+" 个月前":a>=31536e3?parseInt(a/31536e3)+" 年前":parseInt(a)+" 秒前"),e},getUUID:function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return""+t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()},getSalt:function(){for(var t=[0,1,2,3,4,5,6,7,8,9],a="",e=0;e<10;e++)a+=t[Math.ceil(9*Math.random())];return a},getQueryMap:function(t){if("string"!=typeof t)return t;if(!t)return t;var a,e,n={},i=/[\?\&]([^=\?]+)=([^\?\&#]*)/;if(!(a=(t=(t="?"+t)||location.href).match(/[\?\&][^\?\&]+=[^\?\&#]*/g)))return n;for(var s=0,o=a.length;s<o;s++)null!==(e=a[s].match(i))&&(n[e[1]]=e[2]);return n},isLogin:function(){return null!==App.sessionStorage.get("userInfo")}}},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("MVMM"),i=e("3cXf"),s=e.n(i),o={data:function(){return{dashed:!0,forwardUrl:App.Api.forwardUrl,imgUrl:App.Api.imgUrl,show:"1"}},created:function(){},mounted:function(){this.getCookie("popupTime")&&(this.dashed=!1)},methods:{closePopup:function(){this.dashed=!1;var t=Date.parse(new Date);this.setCookie("popupTime",t,4.8)},setCookie:function(t,a,e){var n=new Date,i=e;n.setTime(n.getTime()+1e3*i*60*60),document.cookie=t+"="+a+";expires="+n.toGMTString()},getCookie:function(t){for(var a,e=document.cookie,n=unescape(e).replace(/[ ]/g,""),i=n.split(";"),s=0;s<i.length;s++){var o=i[s].split("=");if(t==o[0]){a=o[1];break}}return a}}},r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:this.dashed&&"0"==this.show,expression:"dashed && show =='0'"}],staticClass:"dashed"},[a("div",{staticClass:"popup"},[a("div",{staticClass:"close-advert"},[a("span",{attrs:{otype:"button",otitle:"营销弹窗-关闭"},on:{click:this.closePopup}},[this._v("X")])]),this._v(" "),a("div",{staticClass:"img-box"},[a("a",{attrs:{href:this.forwardUrl,otype:"button",otitle:"营销弹窗"}},[a("img",{attrs:{src:this.imgUrl,alt:""}})])])])])])},staticRenderFns:[]};var c={data:function(){return{isShow:!0}},created:function(){},mounted:function(){},methods:{closePop:function(){this.isShow=!1},downLoadApp:function(){location.href="http://bfiles.pingan.com.cn/brcp/pkg/bfiles/download?downapp_id=AM001000030",this.closePop()}}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("aside",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"dialog-downloadApp"},[e("span",{staticClass:"dialog-close",on:{click:function(a){t.closePop()}}}),t._v(" "),e("div",{staticClass:"dialog-main",on:{click:function(a){t.downLoadApp()}}},[t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"dialog-btn"},[a("a",{staticClass:"dialog-submit",attrs:{otype:"button",otitle:"按钮-下载平安口袋银行APP"}},[this._v("下载平安口袋银行APP")])])}]};var d={data:function(){return{shopWindowList:[],licai:""}},mounted:function(){this.queryBnz(),this.licai=App.Api.financeUrl},methods:{queryBnz:function(){var t=this;this.$parent.ajax({url:App.Api.kouDai,data:{channelCode:"C0012",tabCode:"INV_WEB",accountType:"99"},type:"post",success:function(a){a&&"000000"===a.code&&a.data.length>0&&(t.shopWindowList=a.data[0].shopWindowList,t.shopWindowList.forEach(function(a){t.jump(a)}))}})},replace:function(t){return t.replace(/%/g,'<span class="digt">%</span>')},jump:function(t){try{t.product.prdClass=t.prdType,t.href=omm.product(t.product)}catch(t){}},strSplit:function(t){return t.substr(0,6)+"<br/>"+t.substr(6)}}},p={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"earn",attrs:{olabel:"首页-帮你赚"}},[e("div",{staticClass:"div earn_title"},[e("div",{staticClass:"earn_title-left"},[t._v("帮你赚")]),t._v(" "),e("div",{staticClass:"arrow_icon"}),t._v(" "),e("a",{staticClass:"earn_title-right",attrs:{href:t.licai,otitle:"首页-帮你赚-帮你赚更多"}},[t._v("更多理财等你来赚")]),t._v(" "),e("div",{staticStyle:{clear:"both"}})]),t._v(" "),e("div",{staticClass:"earn_tag"},[e("ul",{staticClass:"clearfix"},t._l(t.shopWindowList,function(a,n){return n<3?e("li",[a.cornerSign?e("span",[t._v(t._s(a.cornerSignName))]):t._e()]):t._e()}))]),t._v(" "),e("div",{staticClass:"earn_li clearfix"},t._l(t.shopWindowList,function(a,n){return n<3?e("a",{staticClass:"earn_li_info",attrs:{otitle:"首页-帮你赚-理财产品"+(n+1),href:a.href}},[e("div",{staticClass:"earn_li_title"},[e("span",{domProps:{innerHTML:t._s(t.strSplit(a.recommendName))}})]),t._v(" "),e("div",{staticClass:"earn_li_number"},[e("span",{domProps:{innerHTML:t._s(t.replace(a.newIndexContent))}})]),t._v(" "),e("div",{staticClass:"earn_li_txt1"},[t._v(t._s(a.indexName))]),t._v(" "),e("div",{staticClass:"earn_li_txt2"},[t._v(t._s(a.marketWord))])]):t._e()}))])])},staticRenderFns:[]};var u={components:{popup:e("Z0/y")(o,r,!1,function(t){e("BAiR")},null,null).exports,Arouse:e("Z0/y")(c,l,!1,function(t){e("4nK+")},null,null).exports,Finance:e("Z0/y")(d,p,!1,function(t){e("qgzP")},null,null).exports},mounted:function(){var t=this,a=this.ispaebank=navigator.userAgent.toLowerCase().match("paebank"),e=["share","adver","sdch5@2.0.0"];a&&e.unshift("aladdin"),screen.availWidth<350&&(this.xp=!0),window.PAB.use(e,function(){a&&(t.loading_start=!0,aladdin.loading.start()),t.informationRequest(),t.queryHomeData_Bank(),window.addEventListener("load",function(){var e=function(){var t=document.querySelectorAll("[data-src]");if(t)for(var a=0;a<t.length;a++){var e=t[a];e.src=e.getAttribute("data-src"),e.onload=function(){this.removeAttribute("data-src")}}};t.initShare(),t.initAdver(),a||t.requipmentId(),e(),setTimeout(e,1e3)})})},data:function(){return{isShowHQPop:!1,XYKUrl:App.Api.creditUrl,QSJUrl:App.Api.loanUrl,xp:!1,shareMode:"",tabItems:[],loading:0,selectedIndex:0,tabColor:"",rightItems:[{text:"",icon:"",isBadge:!1}],textColor:"",badge:{type:"",num:0},cardInfoData:{},loanData:{actionName:"更多",shopWindowList:[{materialName:"0814新一贷1",weight:"1",remark:{salesTalk:'<span class="p-remark">无抵押</span> | 最长可贷4年',rate:"1.1",type:"新一贷",remark:"最低月利率",buttonText:"立即申请"},shopwindowId:"5386d701e6f34214b795834ccfa1a0c2",lable:"99",trackName:"9104760-轻松借-0814新一贷1-04",contentName:"0814新一贷1",actionType:"webapp",shopwindowSort:"1",secondTitle:"月入4000即可办理",endTime:"2099-12-31 23:59",channelSource:"XSY-1-QSJ-1-03311-1",labelSource:"1",startTime:"2017-09-19 00:00",source:"KDAPP3",mainTitle:"可借1-50万",actionUrl:App.Api.homeUrl+"/station/activity/loan/newloan/loantrust.html?source=sa0000343&outerSource=os0003280"},{materialName:"车抵贷1012",weight:"1",remark:{salesTalk:'<span class="p-remark">不押车</span> | 最高可贷车价9成',rate:"1.00",desc:"一万日息3.3元",type:"车抵贷",remark:"最低月利率",buttonText:"立即申请"},shopwindowId:"029e1f38645e4001a0aa91371be32c82",lable:"99",trackName:"9104723-轻松借-cdd170420-04",contentName:"cdd170420",actionType:"webapp",shopwindowSort:"2",secondTitle:"最高可贷车价9成",endTime:"2099-12-31 23:59",channelSource:"XSY-1-QSJ-1-03311-2",labelSource:"1",startTime:"2017-09-19 00:00",source:"KDAPP3",mainTitle:"不押车 0收费",actionUrl:App.Api.homeUrl+"/station/activity/loan/carloan/loantrust.html?source=sa0000343&outerSource=os0003281"}],mainTitle:"轻松借"},moreInformationUrl:App.Api.moreInformation,informationDataList:[],helpYouEarn:{},shortCut:{},newCustomer:{},newCustomerObj0:"",newCustomerObj1:"",newCustomerObj2:""}},methods:{requipmentId:function(){var t=this;this.ajax({url:App.Api.equipmentId,type:"post",successs:function(a){if("false"==a.data){var e=new Date,n=e.getFullYear(),i=e.getMonth(),s=e.getDate();if(null==localStorage.getItem("lastTime"))t.isShowHQPop=!0;else{var o=new Date(localStorage.getItem("lastTime")),r=o.getFullYear(),c=o.getMonth(),l=o.getDate();t.isShowHQPop=n!=r||n==r&&i!=c||n==r&&i==c&&s!=l}localStorage.setItem("lastTime",e)}else t.isShowHQPop=!1}})},queryHomeData_Bank:function(){var t=this;this.ajax({url:App.Api.kouDai,data:{channelCode:"BM01",tabCode:"GWSY",accountType:"99"},type:"post",success:function(a){if(a&&"000000"===a.code&&a.data.length>0){for(var e=a.data,n=0;n<e.length;n++)if("XYK"==e[n].areaCode){t.cardInfoData=e[n];break}for(var i=0;i<a.data.length;i++)"XKZQ"==a.data[i].areaCode&&(t.newCustomer=JSON.parse(s()(a.data[i])),t.newCustomerObj0=t.newCustomer.shopWindowList[0],t.newCustomerObj1=t.newCustomer.shopWindowList[1],t.newCustomerObj2=t.newCustomer.shopWindowList[2]),"KJRK"==a.data[i].areaCode&&(t.shortCut=JSON.parse(s()(a.data[i])))}}})},shortCutJump:function(t){var a=t.mainTitle;_tag.trackEvent(a),location.href=t.actionUrl},newCusJump:function(t){var a=t.actionUrl;location.href=a},informationRequest:function(){var t=this;this.ajax({url:App.Api.information,type:"POST",data:{channel_source:"ZXPT-YYGWSY-CJZX",oppId:"04",source:"M_STATION"},success:function(a){"000000"==a.responseCode&&(t.informationDataList=a.infoList)}})},jumpTo:function(t,a,e){var n="";a=parseInt(a)+1,1==e?n="首页-信用卡-信用卡推荐":2==e?n="首页-贷款":3==e&&(n="首页-资讯"),_tag.trackEvent(n+a),location.href=t},getParamVals:function(){var t=void 0,a={},e=location.search,n=e.substr(e.lastIndexOf("?")+1),i=[];return n&&(i=n.split("&")),$.each(i,function(e,n){t=n.split("="),a[t[0]]=t[1]}),a},paramFilter:function(t){var a=t||location.search,e=this.getParamVals(a),n="";return $.each(e,function(t,a){"rec_no"!==t&&"rec_type"!==t&&"media_source"!==t&&"channel_source"!==t&&"source"!==t&&"outerSource"!==t&&"activity_Id"!==t&&"activity_FlowId"!==t&&"umMode"!==t&&"userType"!==t&&"isKDAPP2"!==t&&(n+="&"+t+"="+a)}),n&&(n=n.replace("&","?")),n},initShare:function(){var t,a=this.getParamVals();this.paramFilter();t={shareObj:{content:"平安银行秉承以客户为中心的宗旨，为您提供全方位的银行金融服务。登陆平安银行官方网站了解贷款业务、投资理财、信用卡、基金产品等服务",picture:"https://bank-static-stg.pingan.com.cn/app_img/logo/bankapplogo.png",title:"平安银行官方网站—贷款，信用卡，理财。您专业的金融管家！"},shareUrlObj:{url:location.origin+location.pathname,serach:"",hash:""},paramObj:{rec_no:"",rec_type:"",media_source:a.media_source,channel_source:a.channel_source,source:a.source,outerSource:a.outerSource,activity_Id:a.activity_Id,activity_FlowId:""},ucpParamObj:{appId:"wx95415c456652ce73",weappNo:"bank",ucp_url:location.protocol+"//eim.pingan.com.cn/bank/getSignature",backUrl:location.origin,openid:"oiBF4juARSrSbe1-bHAl2zQc8P3w"},sharChannelArr:{btn:"1",wx:"1",qqZone:"1",sina:"1",erweima:"1",changeRecNo:"1",recNoLayer:"1",btnDrag:"0"},otherObj:{intentCust:"",productCode:"",pubOrgCode:"",sceneCode:"",recName:""},customCSS:"0",webtrendsTitle:"",environment:"prd",isKDAPP2:!1,pactivityId:"V0617",notFlowIdShare:!1},window.shareMode.shareInit(t)},initAdver:function(t){new AdverSDK.Banner({areaId:App.Api.areaId,type:"banner",elId:"#banner",themeOptions:{height:"3.14rem",pagination:""}}),new AdverSDK.Dialog({areaId:App.Api.dialogId})},ajax:function(t){var a=this,e=t.url,n=t.type,i=void 0===n?"GET":n,o=t.data,r=void 0===o?{}:o,c=t.success,l=t.error;e=PAB.domain.rsbDomain+e;var d=a.getName(t);window.sessionStorage&&sessionStorage[d]?c&&c(JSON.parse(sessionStorage[d])):(a.loading+=1,$.ajax({url:e,data:r,type:i,xhrFields:{withCredentials:!0},crossDomain:!0,success:function(t){a.loading-=1,sessionStorage[d]=s()(t),c&&c(t)},error:function(t){a.loading-=1,l&&l(t)}}))},getName:function(t){var a=t.url.lastIndexOf("/")+1,e=t.url.lastIndexOf(".");return-1!=t.url.indexOf("getWindowData")&&(t.url=t.url+t.data.channelCode),-1==e?t.url.slice(a):t.url.slice(a,e)}},computed:{load:function(){return!this.ispaebank&&this.loading}},watch:{loading:function(t){var a=this;window.aladdin&&(t<=0?setTimeout(function(){aladdin.loading.stop(),a.loading_start=!1},300):this.loading_start||(this.loading_start=!0,aladdin.loading.start()))}}},m={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content",attrs:{id:"content"}},[t.load?e("div",{staticClass:"aladdin-loading"},[t._m(0)]):t._e(),t._v(" "),e("div",{staticClass:"content-wrap"},[e("div",{attrs:{id:"banner",olabel:"banner",otitle:"banner"}}),t._v(" "),e("div",{staticClass:"marketing"}),t._v(" "),e("div",[e("div",{staticClass:"shortCut",attrs:{olabel:"首页-快捷入口"}},[e("ul",{staticClass:"clearfix"},[t._l(t.shortCut.shopWindowList,function(a){return e("li",{staticClass:"shortCutItem",on:{click:function(e){t.shortCutJump(a)}}},[a.secondImageUrl?e("img",{staticClass:"youku",staticStyle:{width:".63rem",height:".28rem"},attrs:{src:a.secondImageUrl,alt:""}}):t._e(),t._v(" "),e("img",{attrs:{"data-src":a.imageUrl,alt:a.mainTitle}}),t._v(" "),e("p",[t._v(t._s(a.mainTitle))])])}),t._v(" "),e("div",{staticStyle:{clear:"both"}})],2)]),t._v(" "),e("div",{staticClass:"newCustomer",attrs:{olabel:"首页-新客专区"}},[e("div",{staticClass:"newCusHeader"},[t._v("\n          "+t._s(t.newCustomer.mainTitle)+"\n        ")]),t._v(" "),e("div",{staticClass:"newCusContent"},[e("div",{staticClass:"newCusContentLeft",attrs:{otitle:"首页-新客专区-新客福利"},on:{click:function(a){t.newCusJump(t.newCustomerObj0)}}},[e("img",{attrs:{"data-src":t.newCustomerObj0.imageUrl,alt:t.newCustomerObj0.mainTitle}})]),t._v(" "),e("div",{staticClass:"newCusContentRight"},[e("div",{staticClass:"weChatBound",attrs:{otitle:"首页-新客专区-绑定微信送红包"},on:{click:function(a){t.newCusJump(t.newCustomerObj1)}}},[e("img",{staticClass:"backPic",attrs:{"data-src":t.newCustomerObj1.imageUrl,alt:t.newCustomerObj1.mainTitle}})]),t._v(" "),e("div",{staticClass:"openAccount",attrs:{otitle:"首页-新客专区-一键开户"},on:{click:function(a){t.newCusJump(t.newCustomerObj2)}}},[e("img",{staticClass:"backPic",attrs:{"data-src":t.newCustomerObj2.imageUrl,alt:t.newCustomerObj2.mainTitle}})])])])])]),t._v(" "),e("finance"),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"card",attrs:{olabel:"首页-信用卡"}},[e("div",{staticClass:"div card_title"},[e("div",{staticClass:"card_title-left"},[t._v(t._s(t.cardInfoData.mainTitle&&""!=t.cardInfoData.mainTitle?t.cardInfoData.mainTitle:"信用卡"))]),t._v(" "),e("div",{staticClass:"arrow_icon",class:{iconTop:t.xp}}),t._v(" "),e("div",{staticClass:"card_title-right",attrs:{otitle:"首页-信用卡-信用卡更多"},on:{click:function(a){t.jumpTo(t.XYKUrl)}}},[t._v(t._s(t.cardInfoData.secondTitle&&""!=t.cardInfoData.secondTitle?t.cardInfoData.secondTitle:"更多优惠"))]),t._v(" "),e("div",{staticStyle:{clear:"both"}})]),t._v(" "),e("div",{staticClass:"shoppingList"},t._l(t.cardInfoData.shopWindowList,function(a,n){return n<6?e("div",{staticClass:"shoppingMall div",class:{shoppingMall_bottom:n>3},on:{click:function(e){t.jumpTo(a.actionUrl,n,1)}}},[e("img",{staticClass:"img",class:{img_bottom:n>3},attrs:{"data-src":a.imageUrl}})]):t._e()}))]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"loan",attrs:{olabel:"首页-轻松借"}},[e("div",{staticClass:"loan_title"},[e("div",{staticClass:"loan_title_left"},[t._v(t._s(t.loanData.mainTitle&&""!=t.loanData.mainTitle?t.loanData.mainTitle:"轻松借"))]),t._v(" "),e("div",{staticClass:"arrow_icon",class:{iconTop:t.xp}}),t._v(" "),e("div",{staticClass:"loan_title_right",attrs:{otitle:"首页-轻松借-贷款更多"},on:{click:function(a){t.jumpTo(t.QSJUrl)}}},[t._v(t._s(t.loanData.actionName&&""!=t.loanData.actionName?t.loanData.actionName:"更多"))]),t._v(" "),e("div",{staticStyle:{clear:"both"}})]),t._v(" "),t._l(t.loanData.shopWindowList,function(a,n){return n<2?e("div",{staticClass:"loan_li",on:{click:function(e){t.jumpTo(a.actionUrl,n,2)}}},[e("div",{staticClass:"div loan_li_info_1"},[e("div",[t._v(t._s(a.remark?a.remark.remark:""))]),t._v(" "),e("div",[e("span",{staticClass:"point"},[t._v(t._s(a.remark?a.remark.rate.split(".")[0]:""))]),t._v(" "),e("span",{staticClass:"decimal",staticStyle:{"font-size":".45rem"}},[t._v(t._s(a.remark?"."+a.remark.rate.split(".")[1].slice(0,2)+"%":""))])]),t._v(" "),e("div",[t._v(t._s(a.remark?a.remark.desc:""))])]),t._v(" "),e("div",{staticClass:"div loan_li_info_2"},[e("div",[t._v(t._s(a.mainTitle.length>10?a.mainTitle.slice(0,10)+"...":a.mainTitle))]),t._v(" "),e("div",[t._v(t._s(a.secondTitle.length>10?a.secondTitle.slice(0,10)+"...":a.secondTitle))]),t._v(" "),e("div",{domProps:{innerHTML:t._s(a.remark?a.remark.salesTalk:"")}})]),t._v(" "),e("div",{staticClass:"div loan_li_info_3"},[e("div",{staticClass:"xinDai"},[t._v(t._s(a.remark?a.remark.type:""))]),t._v(" "),e("div",{staticStyle:{"font-family":"PingFangSC-Regular"}},[t._v(t._s(a.remark?a.remark.buttonText:"立即申请"))])]),t._v(" "),e("div",{staticStyle:{clear:"both"}})]):t._e()})],2)],1),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"news",attrs:{olabel:"首页-财经资讯"}},[e("div",{staticClass:"new_title"},[e("div",{staticClass:"new_title_left"},[t._v("财经资讯")]),t._v(" "),e("div",{staticClass:"arrow_icon",class:{iconTop:t.xp}}),t._v(" "),e("div",{staticClass:"new_title_right",attrs:{otype:"button",otitle:"首页-财经资讯-资讯更多"},on:{click:function(a){t.jumpTo(t.moreInformationUrl)}}},[t._v("更多")]),t._v(" "),e("div",{staticStyle:{clear:"both"}})]),t._v(" "),t._l(t.informationDataList,function(a,n){return e("div",{staticClass:"news_li",on:{click:function(e){t.jumpTo(a.url,n,3)}}},[e("div",{staticClass:"new_left"},[e("div",{staticClass:"new_explain"},[t._v(t._s(a.title))]),t._v(" "),e("div",{staticClass:"new_time"},[t._v(t._s(a.publishTime))])]),t._v(" "),e("img",{staticClass:"new_img new_right",attrs:{"data-src":a.thumbnail}}),t._v(" "),e("div",{staticStyle:{clear:"both"}})])})],2),t._v(" "),e("popup"),t._v(" "),e("Arouse",{directives:[{name:"show",rawName:"v-show",value:t.isShowHQPop,expression:"isShowHQPop"}]})],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"aladdin-loading-content"},[a("div",{staticClass:"aladdin-loading-icon"}),a("p",{staticClass:"aladdin-loading-message"},[this._v("请稍后")])])}]};var h=e("Z0/y")(u,m,!1,function(t){e("vcfe")},null,null).exports;e("EFWR"),n.a.config.productionTip=!1;var g=[App.Api.pab,App.Api.head,App.Api.financeurl];createScript(g,function(){new n.a({el:"#home",render:function(t){return t(h)}}),bankModulePublic.headShow("content"),bankModulePublic.footShow(),bankModulePublic.floatShow("content",function(){})});var v=e("z/xZ");v.install({onUpdating:function(){console.log("SW Event:","onUpdating")},onUpdateReady:function(){console.log("SW Event:","onUpdateReady"),v.applyUpdate()},onUpdated:function(){console.log("SW Event:","onUpdated"),window.location.reload()}})},gwNS:function(t,a){var e={homeUrl:"https://b.pingan.com.cn",financeUrl:"https://b.pingan.com.cn/aum/mobile/index.html",creditUrl:"https://b.pingan.com.cn/creditcard/m/index.html",loanUrl:"https://b.pingan.com.cn/loan/loanh5/mloan/pages/index.html?float=1",mineUrl:"https://b.pingan.com.cn/platform/mine/module/mine.html",serviceOnline:"https://bank.pingan.com.cn/static/act/koudai/fag/index.html",moreInformation:"https://b.pingan.com/bank/zixun/index.shtml?labelId=C3&source=M_STATION&channel_source=ZXPT-YYGWSY-CJZX",kouDai:"/bron/coss/cust/app/getWindowData",information:"/brop/mop/adms/cust/admssf/information/queryOppInfos",equipmentId:"/brop/ma/cust/app/market/bank/qryLoginFlag.do",loginState:"/brop/ma/cust/app/market/game/checkLogin.do",goFund:"https://b.pingan.com.cn/paces-ccms-core/life/expressCard/middle.html",goRights:"https://b.pingan.com.cn/static/act/koudai/quanyi/index.html",goActive:"https://b.pingan.com/bank/koudai/huodongzhongxin/index.html",goCoupon:"https://b.pingan.com/bank/koudai/youhuiquan/3.0/index.html",goCreditAccount:"https://b.pingan.com.cn/ca/pages/preauditLimit/limit.html",goInvestigation:"https://diaoyan.pingan.com/t/ieERVb",goFeedback:"https://b.pingan.com.cn/CSCDebitCard/debitCardWeb/paxycard.html",rememberInfo:"/brcp/uc/cust/uc-member.qryUserInfo.do",riskLevel:"/bron/coss/cust/app/getMyAssetsInfo",hasManager:"/bron/coss/cust/app/getFinancialManager",logoutUrl:"/brcp/uc/cust/uc-session.logout.do",shareJsSrc:"https://bank-static-stg.pingan.com.cn/app_com/share/2.0.0/js/share.js",adverUrl:"https://bank-static-stg.pingan.com.cn/app_com/adversdk/2.0.0/js/adversdk.js",areaId:"8495d072c21b4752b53a8b8e941a2c9c",floatId:"f5959849d84c4f82aa23d97b972c79b2",dialogId:"0321",forwardUrl:"https://bank.pingan.com.cn/static/act/hd/zhongchao/index.shtml",imgUrl:"https://bank-static-stg.pingan.com.cn/station/site/home/static/images/popup.jpg",awakeId:"1046",pab:"https://bank-static-stg.pingan.com.cn/app_com/pab/1.0.0/pab.js",head:"https://bank-static-stg.pingan.com.cn/station/site/common/mobilehome/js/bank-module-public.js",financeurl:"https://bank-static-stg.pingan.com.cn/omm/mobile/assets/plugins/product.js"};(e={homeUrl:"https://b-stg.pingan.com.cn",financeUrl:"https://b-stg.pingan.com.cn/aum/mobile/index.html",creditUrl:"https://b-stg.pingan.com.cn/creditcard/m/index.html",loanUrl:"https://b-stg.pingan.com.cn/loan/loanh5/mloan/pages/index.html?float=1",mineUrl:"https://b-stg.pingan.com.cn/platform/mine/module/mine.html",serviceOnline:"https://bank.pingan.com.cn/static/act/koudai/fag/index.html",moreInformation:"https://b.pingan.com/bank/zixun/index.shtml?labelId=C3&source=M_STATION&channel_source=ZXPT-YYGWSY-CJZX",kouDai:"/bron/coss/cust/app/getWindowData",information:"/brop/mop/adms/cust/admssf/information/queryOppInfos",equipmentId:"/brop/ma/cust/app/market/bank/qryLoginFlag.do",loginState:"/brop/ma/cust/app/market/game/checkLogin.do",goFund:"https://b-stg.pingan.com.cn/paces-ccms-core/life/expressCard/middle.html",goRights:"https://b-stg.pingan.com.cn/static/act/koudai/quanyi/index.html",goActive:"https://b-stg.pingan.com.cn/brop-cmp/act/bank/koudai/huodongzhongxin/index.html",goCoupon:"https://b-stg.pingan.com.cn/brop-cmp/act/bank/koudai/youhuiquan/3.0/index.html",goCreditAccount:"https://b-stg.pingan.com.cn/ca/pages/preauditLimit/limit.html",goInvestigation:"https://diaoyan.pingan.com/t/ieERVb?test mode=1",goFeedback:"https://b-stg.pingan.com.cn/CSCDebitCard/debitCardWeb/paxycard.html",rememberInfo:"/brcp/uc/cust/uc-member.qryUserInfo.do",riskLevel:"/bron/coss/cust/app/getMyAssetsInfo",hasManager:"/bron/coss/cust/app/getFinancialManager",logoutUrl:"/brcp/uc/cust/uc-session.logout.do",shareJsSrc:"https://bank-static-stg.pingan.com.cn/app_com/share/2.0.0/js/share.js",adverUrl:"https://bank-static-stg.pingan.com.cn/app_com/adversdk/2.0.0/js/adversdk.js",areaId:"0083",floatId:"5d883b0058c247c7ab6831053204e4f7",dialogId:"0386",forwardUrl:"https://b-stg.pingan.com.cn/bank-mobilesite/zhongchao/index.shtml",imgUrl:"https://bank-static-stg.pingan.com.cn/station/site/home/static/images/popup.jpg",awakeId:"1006",pab:"https://bank-static-stg.pingan.com.cn/app_com/pab/1.0.0/pab.js",head:"https://bank-static-stg.pingan.com.cn/station/site/common/mobilehome/js/bank-module-public.js",financeurl:"https://bank-static-stg.pingan.com.cn/omm/mobile/assets/plugins/product.js"}).env="stg",t.exports=e},nUgu:function(t,a,e){"use strict";var n=navigator.userAgent;n.indexOf("Android")>-1||n.indexOf("Adr");t.exports={Utils:e("KvKp")}},qgzP:function(t,a){},vcfe:function(t,a){}},["NHnr"]);