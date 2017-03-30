$(function () {
    //选项卡效果
    //选项卡标题
    var tab_title=$('.tea_content .tab .tab_title');
    //选项卡内容
    var tab_neirong=$('.tea_content .tab_content .tab_neirong');
    tab_neirong.eq(0).addClass('active');
    tab_title.eq(0).addClass('active');
    tab_title.on('click',function () {
        //先将所有的效果移除
        tab_title.removeClass('active');
        tab_neirong.removeClass('active');
        //为当前元素加上效果
        $(this).addClass('active');
        var index=$(this).index();
        tab_neirong.eq(index).addClass('active');
    })
})
