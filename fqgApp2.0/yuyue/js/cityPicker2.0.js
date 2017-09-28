/**
 * Created by huipu on 2017/9/7.
 */
//
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: false
});


var getData = null;
$.ajax({
    type : 'GET',
    url : 'china_pct.json',
    async : false,
    success : function(data){
        for(var i=0 ;i<data.length;i++){
            for(var j=0; j< data[i].cities.length;j++){
                for(var k=0 ;k<data[i].cities[j].towns.length;k++){
                    if(data[i].cities[j].towns[k].geoNameLocal == '市辖区'){
                        data[i].cities[j].towns.shift();
                    }
                }
            }
        }
        console.log(data);
        getData = data;
    }
});


var vm = new Vue({
    el : "#cityPickerBox",
    data : {
        provinceData : getData,
        cityData : null,
        townData : null,
        provinceValue : "请选择",
        cityValue : "市/区",
        townValue : "区/县"
    },
    methods : {
        choose1 : function(){
            var that = this;
            $(".swiper-slide2").removeClass("conHide");
            mySwiper.updateSlidesSize();
            mySwiper.slideTo(1, 300, false);
            that.cityValue = "市/区";
            that.townValue = "区/县";
            setTimeout(function(){
                for(var i=0;i<that.provinceData.length;i++){
                    if(that.provinceData[i].geoNameLocal == that.provinceValue){
                        that.cityData = that.provinceData[i].cities;
                        that.townData = that.cityData[0].towns;
                    }
                }
            })
        },
        choose2 : function(){
            var that = this;
            $(".swiper-slide3").removeClass("conHide");
            mySwiper.updateSlidesSize();
            mySwiper.slideTo(2, 300, false);
            // that.cityValue = "市/区";
            that.townValue = "区/县";
            setTimeout(function(){
                for(var i=0;i<that.cityData.length;i++){
                    if(that.cityData[i].geoNameLocal === that.cityValue){
                        that.townData = that.cityData[i].towns;
                    }
                }
            })

        },
        provinceClick : function(){
            mySwiper.slideTo(0, 300, false);
            this.cityValue = "市/区";
            this.townValue = "区/县";
        },
        cityClick : function(){
            mySwiper.slideTo(1, 300, false);
            this.townValue = "区/县";
        },
        allValuePicked : function(){
            if(this.provinceValue === "请选择" || this.cityValue === "市/区" || this.townValue === "区/县"){
                alert("请完善地址信息");
                return false;
            }
            if(this.provinceValue == "北京市" || this.provinceValue == "天津市" || this.provinceValue == "上海市" || this.provinceValue == "重庆市"){
                var resultStr = this.provinceValue +  this.townValue;
            } else {
                var resultStr = this.provinceValue + this.cityValue + this.townValue;
            }
            $("#cityPickerBox").addClass("add-conHide");
            $(".layOutView").addClass("add-conHide");
            $("html").removeClass("noScroll");
            $("body").removeClass("noScroll");
            $("#cityInfoPicker").html(resultStr);
        }
    },
    created : function(){
        this.cityData = this.provinceData[0].cities;
        this.townData = this.cityData[0].towns;
    }

});

var vm2 = new Vue({



});
