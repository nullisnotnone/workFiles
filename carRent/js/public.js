// new function (){
//     var _self = this;
//     _self.width = 640;//设置默认最大宽度
//     _self.fontSize = 100;//默认字体大小
//     _self.widthProportion = function(){var p = (document.body&&document.body.clientWidth||document.getElementsByTagName("html")[0].offsetWidth)/_self.width;return p<0.5?0.5:p;};
//
//     var lastProportion = _self.widthProportion()>0.75?0.75:_self.widthProportion();
//     _self.changePage = function(){
//         document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+lastProportion*_self.fontSize+"px !important");
//     }
//     _self.changePage();
//     window.addEventListener("resize",function(){_self.changePage();},false);
// };


new function (){
   var _self = this;
   _self.width = 750;//设置默认最大宽度
   _self.fontSize = 100;//默认字体大小
   _self.widthProportion = function(){var p = (document.body&&document.body.clientWidth||document.getElementsByTagName("html")[0].offsetWidth)/_self.width;return p<0.43?0.43:p;};

   var lastProportion = _self.widthProportion()>0.75?0.75:_self.widthProportion();
   _self.changePage = function(){
       document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+lastProportion*_self.fontSize+"px !important");
   }
   _self.changePage();
   window.addEventListener("resize",function(){_self.changePage();},false);
};

// 是否是微信
function isWeiXin(){
   var ua = window.navigator.userAgent.toLowerCase();
   if(ua.match(/MicroMessenger/i) == 'micromessenger'){
      return true;
   }else{
      return false;
   }
}

// 判断android与ios

function equipment(){
   var u = navigator.userAgent;
   if(u.indexOf('Android') > -1 || u.indexOf('Adr') > -1|| u.indexOf('android') > -1){
      return 'Android';
   }

   if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)|| u.indexOf('iOS') > -1){
      return 'IOS';
   }
}


// 与原生ios交互
function backToNative(url) {
   var iFrame;
   iFrame = document.createElement("iframe");
   iFrame.setAttribute("src", url);
   iFrame.setAttribute("style", "display:none;");
   iFrame.setAttribute("height", "0px");
   iFrame.setAttribute("width", "0px");
   iFrame.setAttribute("frameborder", "0");
   document.body.appendChild(iFrame);
   // 发起请求后这个 iFrame 就没用了，所以把它从 dom 上移除掉
   iFrame.parentNode.removeChild(iFrame);
   iFrame = null;
}