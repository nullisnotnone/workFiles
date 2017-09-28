$(window).on('click',function(event){
	console.log('事件类型:'+event.type);
	console.log('浏览器名称:'+navigator.appName);
	console.log('浏览器版本:'+navigator.appVersion);
	console.log('事件触发地址:'+window.location.href);
	console.log(event.target)
})