new function (){
   var _self = this;
   _self.width = 640;//设置默认最大宽度
   _self.fontSize = 100;//默认字体大小
   _self.widthProportion = function(){var p = (document.body&&document.body.clientWidth||document.getElementsByTagName("html")[0].offsetWidth)/_self.width;return p<0.5?0.5:p;};

   var lastProportion = _self.widthProportion()>0.75?0.75:_self.widthProportion();
   _self.changePage = function(){
       document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+lastProportion*_self.fontSize+"px !important");
   }
   _self.changePage();
   window.addEventListener("resize",function(){_self.changePage();},false);
};


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
   setTimeout(function(){
      iFrame.parentNode.removeChild(iFrame);
      iFrame = null;
   },100)
}