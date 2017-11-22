/**
 * Created by huipu on 2017/8/24.
 */


$(function(){
    var cityInfo = null;
    $.ajax({
        type : 'GET',
        url : 'cityInfo1.json',
        async : false,
        success : function(data){
            cityInfo = data;
            // console.log(cityInfo);
        }
    });

    var vm = new Vue({
        el : "#addressPicker",
        data : {
            provinceData : cityInfo,
            cityData : null,
            townData : null
        },

        methods : {
            province_treeListDo : function(){
                var that = this;
                $("#provinceData").mobiscroll().treelist({
                    theme: "android-ics light",
                    display: 'bottom',
                    lang: "zh",
                    headerText: '请选择省份',
                    onSelect : function(valueText){
                        that.cityData = that.provinceData[Number(valueText)].sub;
                        that.townData = that.cityData[0].sub;
                        $("#province").val($("#provinceData li").eq(Number(valueText)).html());
                        setTimeout(function(){
                            that.city_treeListDo();
                            $("#cityData_dummy").focus();
                        },300);
                    }
                })
            },
            city_treeListDo : function(){
                var that = this;
                $("#cityData").mobiscroll().treelist({
                    theme: "android-ics light",
                    display: 'bottom',
                    lang: "zh",
                    headerText: '请选择城市',
                    onSelect : function(valueText){
                        that.townData = that.cityData[Number(valueText)].sub;
                        $("#city").val($("#cityData li").eq(Number(valueText)).html());
                        setTimeout(function(){
                            that.town_treeListDo();
                            $("#townData_dummy").focus();
                        },300);
                    }
                })
            },
            town_treeListDo : function(){
                var that = this;
                $("#townData").mobiscroll().treelist({
                    theme: "android-ics light",
                    display: 'bottom',
                    lang: "zh",
                    headerText: '请选择区/县',
                    onSelect : function(valueText){
                        $("#town").val($("#townData li").eq(Number(valueText)).html());
                    }
                })
            },
            listShow : function(event){
                var name = event.currentTarget.getAttribute("name");
                // console.log("#"+name+"_dummy");
                $("#"+name+"_dummy").focus();
            }
        },
        created : function(){
            var that = this;
            this.cityData = this.provinceData[0].sub;
            this.townData = this.cityData[0].sub;
            setTimeout(function(){
                that.province_treeListDo();
            },300);
        }
    });

    // 银行地址选择
    var vm_bank = new Vue({
        el : "#cityPicker",
        data : {
            provinceData : cityInfo,
            cityData : null
        },

        methods : {
            bank_province_treeListDo : function(){
                var that = this;
                $("#bank-provinceData").mobiscroll().treelist({
                    theme: "android-ics light",
                    display: 'bottom',
                    lang: "zh",
                    headerText: '请选择省份',
                    onSelect : function(valueText){
                        that.cityData = that.provinceData[Number(valueText)].sub;
                        $("#bank-province").val($("#bank-provinceData li").eq(Number(valueText)).html());
                        setTimeout(function(){
                            that.bank_city_treeListDo();
                            $("#bank-cityData_dummy").focus();
                        },300);
                    }
                })
            },
            bank_city_treeListDo : function(){
                var that = this;
                $("#bank-cityData").mobiscroll().treelist({
                    theme: "android-ics light",
                    display: 'bottom',
                    lang: "zh",
                    headerText: '请选择城市',
                    onSelect : function(valueText){
                        $("#bank-city").val($("#bank-cityData li").eq(Number(valueText)).html());
                    }
                })
            },
            bank_listShow : function(event){
                var name = event.currentTarget.getAttribute("name");
                console.log("#"+name+"_dummy");
                $("#"+name+"_dummy").focus();
            }
        },
        created : function(){
            var that = this;
            this.cityData = this.provinceData[0].sub;
            setTimeout(function(){
                that.bank_province_treeListDo();
            },300);
        }
    })

})