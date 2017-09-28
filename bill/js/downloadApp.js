/**
 * Created by huipu on 2017/8/4.
 */

function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}

function  webDownload(IOSurl,AndroidUrl,obj) {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1|| u.indexOf('android') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)|| u.indexOf('iOS') > -1; //ios终端
    if(isiOS){
        // if(isWeiXin()){
        //     layer.open({
        //         type:1,
        //         content:'<div id="layer1"><p class="remarkImg"><img src="__TMPL__Public/wx/images/1.png" alt=""></p></div>',
        //         anim: 'up',
        //         style : 'height:0.72rem;width:4.58rem;background:transparent;position:absolute;top:0.5rem;right:0.8rem;'
        //     });
        //     return false;
        // }
        window.location.href = IOSurl;
    } else if(isAndroid){
        window.location.href = AndroidUrl;
    }
}
