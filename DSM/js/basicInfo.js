/**
 * Created by huipu on 2017/7/27.
 */
$(function(){
    // 显示隐藏信息栏
    $(" .listTitle").on("click",function(){
        if($(this).find(".remarkBg").hasClass("close")){
            $(this).find(".remarkBg").removeClass("close").addClass("open");
            $(this).addClass("underLine");
            $(this).parent().find(".infoBox").removeClass("boxHide").addClass("boxOpen");
        } else {
            $(this).find(".remarkBg").removeClass("open").addClass("close");
            $(this).removeClass("underLine");
            $(this).parent().find(".infoBox").removeClass("boxOpen").addClass("boxHide");
        }
    });

    // 大商户特殊字符校验
    $("#shopName").on("blur",function(){
        if(!checkSpString($(this).val())){
            layerInfo("非法字符，请检查！");
            $(this).addClass("infoConError");
        } else {
            $(this).removeClass("infoConError");
        }
    });

    // 提示消息弹窗
    $(".remarkBtn").on("click",function(){
        var str = $(this).parents(".part").find(".infoName").html();
        if(str == "是否个体户"){
            remarkMessage("是否个体户，选择是，上传商户附件时法人需签字按手印代替公章");
            return false;
        }
        if(str == "商户具体地址"){
            remarkMessage("门店地址一定要精确到门牌号（无门牌号的，请提供显著标识，如***第一中学左侧30米");
            return false;
        }
    });


    // 单选按钮切换
    $(".con-radio label").on("click",function(){
        var eles = $(this).parent().find("label");
        eles.eq($(this).index() % 2).find("i").removeClass("unchecked").addClass("checked");
        eles.eq($(this).index() % 2).siblings().find("i").removeClass("checked").addClass("unchecked");

        var labelEle = $(".con-radio label");
        for(var i=0;i<labelEle.length;i++){
            if(labelEle.eq(i).find("i").hasClass("checked")){
                labelEle.eq(i).find("input").attr("checked","checked");
            } else {
                labelEle.eq(i).find("input").removeAttr("checked");
            }
        }

        // 是否是大商户
        if(!$("#big-yes").parent().find("i").hasClass("checked")){
            $(".list1 .part6").addClass("partHide");
            $("#signDatePicker").attr("placeholder","截至当前注册时间超过三个月");
        } else {
            $(".list1 .part6").removeClass("partHide");
            $("#signDatePicker").attr("placeholder","注册时间必须在当前日期之前");
        }

        // 是否是对私账户
        if($("#per-yes").parent().find("i").hasClass("checked")){
            $(".list4 .p-box").addClass("partHide");
            $(".list4 .part10").removeClass("partHide");
        } else {
            $(".list4 .p-box").removeClass("partHide");
            $(".list4 .part10").addClass("partHide");
        }
    });


    // 下拉框选择
    $(".selBox").each(function(){
        $(this).on("change",function(){
            if($(this).val() != 0){
                var str = this.options[this.options.selectedIndex].innerHTML;
                $(this).parent().find(".sel-value").html(str);
            }
        });
    });

    // 选择时间
    var opt = {};
    var currYear = (new Date()).getFullYear();
    var currMonth = (new Date()).getMonth() + 2;
    var currDate = (new Date()).getDate();
    // console.log(currDate);
    // console.log(currMonth);

    opt.default = {
        theme:'android-ics light',
        display:'bottom',
        lang:'zh'
    };
    opt.date1 = {
        preset : 'date',
        dateFormat:'yyyy-mm-dd',
        startYear : currYear,
        endYear : currYear + 100
    };
    opt.date2 = {
        preset : 'date',
        dateFormat:'yyyy-mm-dd',
        startYear : currYear -30,
        endYear : currYear
    };

    $("#startDatePicker").scroller('destroy').scroller($.extend(opt['default'] , opt['date1']));
    $("#signDatePicker").scroller('destroy').scroller($.extend(opt['default'] , opt['date2']));

    // 执照有效期是永久
    $(".foreverBtn").on("click",function(){
       $("#startDatePicker").val('9999-12-31');
        $("#startDatePicker").removeClass("infoConError");
    });

    //执照时间选择
    $(".sel-date-value").on("change",function(){
        if($(this).attr("id") === "startDatePicker"){
            var timeValue1 = $(this).val();
            var currentTimeValue = new Date().toLocaleDateString();
            if(!checkTime(timeValue1 , currentTimeValue ,1)){
                layerInfo("有效期必须要一个月以上");
                $(this).addClass("infoConError");
                return false;
            } else {
                $(this).removeClass("infoConError");
                return false;
            }

        }
        if($(this).attr("id") === "signDatePicker"){
            var timeValue2 = $(this).val();
            var currentTimeValue2 = new Date().toLocaleDateString();
            if(!$("#big-yes").parent().find("i").hasClass("checked")){ // 不是大商户
                if(!checkTime(currentTimeValue2 , timeValue2 ,3)){
                    layerInfo("注册时间必须要三个月以上");
                    $(this).addClass("infoConError");
                    return false;
                } else {
                    $(this).removeClass("infoConError");
                    return false;
                }
            } else { // 是大商户
                var diffTime =   new Date().getTime() -  new Date(timeValue2).getTime();
                if(diffTime < 1000*3600*24){
                    layerInfo("注册日期必须在当前日期之前");
                    $(this).addClass("infoConError");
                    return false;
                } else {
                    $(this).removeClass("infoConError");
                    return false;
                }
            }
        }
    });


    // 商户注册号验证
    $("#shopsNum").on("focus",function(){
        // console.log($(this).val());
        if($(this).val() == ""){
            $(this).val("R");
        }
    });

    $("#shopsNum").on("keyup",function(e){
        var str = $(this).val().substring(1);
        if(e.keyCode != 8){
            if(str.replace(/\s*/g,"").length % 4 == 0){
                $(this).val("R" + str + " ");
            }
        }
    });

    // 身份证号验证
    $("#idCard").on("keyup",function(e){
        var str = $(this).val();
        if(e.keyCode != 8){
            if(str.replace(/\s*/g,"").length % 4 == 0){
                $(this).val(str + " ");
            }
        }
        if($(this).val().replace(/\s*/g , "").length == 18){
            $(this).removeClass("infoConError");
        }
    });

    $("#idCard").on("blur",function(){
        if($(this).val().replace(/\s*/g , "").length != 18){
            $(this).addClass("infoConError");
            layerInfo("身份证号填写错误，请重新填写！");
        }
    });

    // 手机号验证
    var regTel = /^1[3|4|5|7|8]\d{9}$/;
    $(".tel").each(function(){
        $(this).on("keyup",function(e){
            var str = $(this).val();
            var str1 = str.replace(/\s*/g,"");
           if(e.keyCode != 8){
               if(str1.length == 3 || str1.length == 7){
                   $(this).val(str + " ");
               }
           }
            if(regTel.test($(this).val().replace(/\s*/g , ""))){
                $(this).removeClass("infoConError");
            }
        });

        $(this).on("blur",function(){
            var str = $(this).val();
            if(!regTel.test(str.replace(/\s*/g , ""))){
                $(this).addClass("infoConError");
                layerInfo("电话号码格式错误，请重新填写！");
            }
        });
    });

    // 邮箱验证
    var regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    $(".email").each(function(){
        $(this).on("input",function(){
            var str = $(this).val();
            if(regEmail.test(str)){
                $(this).removeClass("infoConError");
            }
        });

        $(this).on("blur",function(){
            var str = $(this).val();
            if(!regEmail.test(str)){
                $(this).addClass("infoConError");
                layerInfo("邮箱格式错误，请重新填写！");
            }
        });
    });

    // 主要联系人姓名，财务人员姓名 特殊字符校验
    $(".sp-infoCon").on("blur",function(){
       var str = $(this).val();
        if(!checkSpString(accountName)){
            layerInfo("非法字符,请检查！");
            $(this).addClass("infoConError");
        } else {
            $(this).removeClass("infoConError");
        }
    });

    // 银行卡号
    $("#accountNum").on("keyup",function(e){
        var str = $(this).val();
        if(e.keyCode != 8){
            if(str.replace(/\s*/g,"").length % 4 == 0){
                $(this).val(str + " ");
            }
        }
    });

    // 结算账户开户名
    $("#accountName").on("blur",function(){
        var shopName = $("#shopName").val(); // 商户名
        var accountName = $(this).val();     // 结算账户名
        var corporateName = $("#corporateName").val(); // 法人代表名
        if(!checkSpString(accountName)){
            layerInfo("非法字符,请检查！");
            $(this).addClass("infoConError");
        } else {
            $(this).removeClass("infoConError");
        }
        if(shopName == accountName && accountName != corporateName){
            $("#accountType").val("对公");
            return false;
        }
        if(shopName != accountName && accountName != corporateName){
            $("#accountType").val("委托对公");
            return false;
        }
        if(shopName != accountName && accountName != corporateName){
            $("#accountType").val("委托对公");
            return false;
        }
        if(shopName != accountName && accountName == corporateName){
            $("#accountType").val("");
            $(this).val("");
            layerInfo("信息有误,请检查！");
            return false;
        }
        if(shopName != accountName && shopName == corporateName){
            $("#accountType").val("");
            $(this).val("");
            layerInfo("信息有误，请检查！");
            return false;
        }
        if(shopName == accountName && shopName == corporateName){
            $("#accountType").val("");
            $(this).val("");
            layerInfo("信息有误，请检查！");
            return false;
        }

    });

    // 大商户弹窗
    $("#bigShop").on("focus",function(){
        $(".overView").removeClass("con-hide");
        $(".layOutView").removeClass("con-hide");
        $("html").addClass("unscroll");
        $("body").addClass("unscroll");
    });
    // 关闭大商户弹窗
    $(".overView").on("click",function(){
        $(".overView").addClass("con-hide");
        $(".layOutView").addClass("con-hide");
        $(".productsList").addClass("con-hide");
        $(".banksList").addClass("con-hide");
        $("html").removeClass("unscroll");
        $("body").removeClass("unscroll");
    });
    $(".searchBar .cancel-btn").on("click",function(){
        $(".overView").addClass("con-hide");
        $(".layOutView").addClass("con-hide");
        $("html").removeClass("unscroll");
        $("body").removeClass("unscroll");
    });

    // 选择大商户名称
    $(".layOutView .dataLists .dataList").on("click",function(){
        $(this).addClass("list-choose").siblings().removeClass("list-choose");
    });

    // 确认
    var listEle = $(".layOutView .dataList");
    $(".searchResult .yesBtn").on("click",function(){
        for(var i=0;i<listEle.length;i++){
            if(listEle.eq(i).hasClass("list-choose")){
                var dataStr = listEle.eq(i).find(".data-name").html().replace("/\s*/" ,"");
                console.log(dataStr);
                $("#bigShop").val(dataStr);
            }
        }
        $(".overView").addClass("con-hide");
        $(".layOutView").addClass("con-hide");
        $("html").removeClass("unscroll");
        $("body").removeClass("unscroll");
    });

    // 大商户名称回填
    var bigShop = $("#bigShop").val();
    for(var r= 0; r<listEle.length;r++){
        if(bigShop == listEle.eq(r).find(".data-name").html()){
            listEle.eq(r).addClass("list-choose");
            break;
        }
    }

    // 商品范畴弹窗显示
    $("#produceScope").on("focus",function(){
        $(".overView").removeClass("con-hide");
        $(".productsList").removeClass("con-hide");
        $("html").addClass("unscroll");
        $("body").addClass("unscroll");
    });


    // 关闭商品范畴弹窗显示
    $(".p-cancelBtn").on("click",function(){
        $(".overView").addClass("con-hide");
        $(".productsList").addClass("con-hide");
        $("html").removeClass("unscroll");
        $("body").removeClass("unscroll");
    });


    // 选择商品范畴
    var pListEle = $("#productsList .p-list");
    pListEle.on("click",function(){
        $(this).toggleClass("p-list-checked");
        var flag = Array.prototype.slice.call(pListEle).every(function(ele){
            return $(ele).hasClass("p-list-checked");
        });
        if(flag){
            $("#productsList .p-list1").addClass("p-list-checked");
        } else {
            $("#productsList .p-list1").removeClass("p-list-checked");
        }
    });

    // 全选
    $("#productsList .p-list1").on("click",function(){
       $(this).toggleClass("p-list-checked");
        if($(this).hasClass("p-list-checked")){
            for(var n=0; n<pListEle.length; n++){
                pListEle.eq(n).addClass("p-list-checked");
            }
        } else {
            for(var m=0; m<pListEle.length; m++){
                pListEle.eq(m).removeClass("p-list-checked");
            }
        }
    });


    // 确认商品范畴
    $(".p-yesBtn").on("click",function(){
        var valueStr = "";
        for(var q=0;q<pListEle.length;q++){
            if(pListEle.eq(q).hasClass("p-list-checked")){
                valueStr += ','+pListEle.eq(q).find(".l-value").html();
            }
        }

        $(".overView").addClass("con-hide");
        $(".productsList").addClass("con-hide");
        $("#produceScope").val(valueStr.substring(1));
        $("html").removeClass("unscroll");
        $("body").removeClass("unscroll");
    });



    // 商品范畴回填
    var products_Arr =  $("#produceScope").val().split(",");
    for(var e=0;e<products_Arr.length;e++){
        for(var w=0;w<pListEle.length;w++){
            if(pListEle.eq(w).find(".l-value").html() == products_Arr[e]){
                pListEle.eq(w).addClass("p-list-checked");
                break;
            }
        }
    }

    // 打开支行选择弹窗
    $("#part-bank-name").on("click",function(){
        var bank_name = $("#bank-name").val().replace(/\s*/g , "");
        var bank_address_province = $("#bank-province").val().replace(/\s*/g , "");
        var bank_address_city = $("#bank-city").val().replace(/\s*/g , "");
        if(bank_name.length == 0){
            layerInfo("请先选择开户行");
            return false;
        }
        if(bank_address_province.length == 0 || bank_address_city == 0 ){
            layerInfo("请先选择开户行所在省市");
            return false;
        }
        $(".overView").removeClass("con-hide");
        $(".banksList").removeClass("con-hide");
        $("html").addClass("unscroll");
        $("body").addClass("unscroll");
    });

    // 关闭选择支行弹窗
    $(".banksList .n-btn").on("click",function(){
        $(".banksList").addClass("con-hide");
        $(".overView").addClass("con-hide");
        $("html").removeClass("unscroll");
        $("body").removeClass("unscroll");
    });

    // 支行选择
    $("body").on("click",".b-list",function(){
        $(this).addClass("b-list-checked").siblings().removeClass("b-list-checked");
    });

    // 确认选择支行
    $(".banksList .y-btn").on("click",function(){
        var b_listEle = $("#bank-list tbody .b-list");
        for(var i=0;i<b_listEle.length;i++){
            if(b_listEle.eq(i).hasClass("b-list-checked")){
                $("#part-bank-name").val(b_listEle.eq(i).find(".bank-name").html());
                break;
            }
        }
        $(".banksList").addClass("con-hide");
        $(".overView").addClass("con-hide");
        $("html").removeClass("unscroll");
        $("body").removeClass("unscroll");
    });

    // 选择的支行回填
    var bank_istEle = $("#bank-list tbody .b-list");
    var bank_value = $("#part-bank-name").val();
    for(var v=0; v<bank_istEle.length; v++){
        if(bank_istEle.eq(v).find(".bank-name").html() == bank_value){
            bank_istEle.eq(v).addClass("b-list-checked");
            break;
        }
    }


    // 搜索框聚焦定位改变
    var beforeHeight = document.body.clientHeight;
    var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
    $(window).on("resize",function(){
        if(isAndroid && document.body.clientHeight < beforeHeight){
            $(".layOutView").css({"bottom":"-5rem"});
            $(".banksList").css({"bottom":"-5rem"});
        } else {
            $(".layOutView").css({"bottom":"0"});
            $(".banksList").css({"bottom":"0"});
        }
    });

    // 清空
    $(".banksList .c-btn").on("click",function(){
        $(".banksList .txtInput").each(function(index, ele){
            $(ele).val("");
        })
    });


    function layerInfo(str){
        layer.open({
            content: str
            ,skin: 'msg'
            ,time: 2  //2秒后自动关闭
        });
    }

    function checkTime(date1 , date2 ,m){
        var diffYear = new Date(date1).getFullYear() - new Date(date2).getFullYear();
        var diffMonth = diffYear * 12 + new Date(date1).getMonth() - new Date(date2).getMonth();

        var diffDay = new Date(date1).getDate() - new Date(date2).getDate();
        if(diffMonth > m || (diffMonth == m && diffDay > 0)){
            return true;
        } else {
            return false;
        }
    }

    // 特使字符校验
    function checkSpString(str){
        var regTest = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/g;
        if(!regTest.test(str)){
            return false;
        } else {
            return true;
        }
    }

    // 提示按钮弹窗
    function remarkMessage(str){
        layer.open({
            type : 1,
            content :'<div id="layer2">' +
            '<p class="title">温馨提醒</p>' +
            '<p class="txt3">'+ str +'</p>' +
            '<a class="backBtn" href="javascript:;" onclick="layer.closeAll();">我知道了</a>' +
            '</div>',
            anim : 'up',
            style :'height:4.0rem;width:4.82rem;background:transparent;position:absolute;left:50%;margin-left:-2.41rem;bottom:4.0rem;'
        })
    }

    // 设置光标文本输入最后

    // function getselectpos(obj){
    //     // var esrc = document.getelementbyid(obj);
    //     if(obj==null){
    //         obj=event.srcelement;
    //     }
    //     var rtextrange =obj.createtextrange();
    //     rtextrange.movestart('character',esrc.value.length);
    //     rtextrange.collapse(true);
    //     rtextrange.select();
    // }

});