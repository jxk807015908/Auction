/**
 * Created by Administrator on 17-7-12.
 */
$(function(){
    (function($){
        var oLi=$(".showpic ul li");
        var oNext=$(".next");
        var oPrev=$(".prev");
        var timer=null;
        var inow=0;
        function autoplay(){
            timer=setInterval(function(){
                oLi.eq(inow).hide();
                inow++;
                if(inow>=3) inow=0;
                oLi.eq(inow).fadeIn(1000);
            },4000);
        }
        autoplay();
        oNext.click(function(){
            oLi.eq(inow).hide();
            inow++;
            if(inow>=3) inow=0;
            oLi.eq(inow).fadeIn(1000);
            clearInterval(timer);
            autoplay();
        });
        oPrev.click(function(){
            oLi.eq(inow).hide();
            inow--;
            if(inow<=-1) inow=2;
            oLi.eq(inow).fadeIn(1000);
            clearInterval(timer);
            autoplay();
        });
    })(jQuery);

    (function($){
        var oText=$(".text_list");
        var oPoint=$(".point_list li");
        var inow=0;
        oPoint.each(function(index){
            $(this).click(function(){
               // alert(index);
               // alert(parseFloat(oText.find("li").css("width")));
                oText.css("left",-parseFloat(oText.find("li").css("width"))*index);
                $(this).addClass("active").siblings().removeClass("active");
            });
        });
    })(jQuery);

    //弹出式菜单
        (function($){
            var oFold_menu_button=$(".fold_menu_button");
            var oFold_menu=$("#fold_menu");
            var oli=oFold_menu.find("li");
            oFold_menu_button.click(function(){
                //var oa=$(this).find(".sub_totalmenu a");
                //  alert(oa[0].innerHTML);
                var height=oli.length*parseInt(oFold_menu.find("li:first").css("height"));
               // alert(oFold_menu.find("li").length);
                oFold_menu.css("height",height+"px");
            });
            oli.each(function(index){
                $(this).click(function(){
                    oFold_menu.css("height","0");
                });
            });

        })(jQuery);
});