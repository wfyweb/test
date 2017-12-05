new WOW().init();

$(document).ready(function() {
    // 用户登录
    $('#login').click(function(){
            $.post('/member/zhlogin.php',{action:'login'},function(msg){
                if(msg.status == 1){
                    location.href = '/member';
                    return false;
                } else {
                    layer.open({
                        type: 2,
                        title: '用户登录',
                        shadeClose: true,
                        shade: 0.8,
                        area: ['380px', '290px'],
                        content: '/member/alogin.php',
                        end:function(){
                            $.post('/member/zhlogin.php',{action:'login'},function(msg){
                                if(msg.status == 1){
                                    location.href = '/member';
                                    return false;
                                } else {

                                }
                            },'json');
                        }
                    });
                    return false;
                }
            },'json');
        });


    /*回到顶部*/
    $("#top").on('click', function () {
        $("html,body").animate({
            'scrollTop': '0px'
        }, 500);
    });

});
