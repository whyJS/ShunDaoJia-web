$(document).ready(function(){
    // 点击跳转到下一页面
    
    // 点击登录跳转到主页
    $(".btn-login").click(function() {
        // alert("a");
       window.location.href="./mine.html";
    });
    // 我的信息
    $(".xinxi td").click(function(){
        // alert("a");
        window.location.href="./mine-message.html";
    })
    // 我的地址
    $(".dizhi td").click(function(){
        window.location.href="./mine-address.html";
    })
    // 关联业务
    $(".yewu td").click(function(){
        window.location.href="./mine-yewu.html";
    })
    // 角色升级
    $(".juese td").click(function(){
        window.location.href="./mine-juese.html";
    })
    // 实名认证
    $(".name td").click(function(){
        window.location.href="./mine-name.html";
    })
    // 我的二维码
    $(".erweima td").click(function(){
        window.location.href="./mine-erweima.html";
    })
    // 我的优惠券
    $(".yhq td").click(function(){
        window.location.href="./mine-yhq.html";
    })
    // 我的队伍
    $(".team td").click(function(){
        window.location.href="./mine-team.html";
    })
    // 帮助和反馈
    $(".help td").click(function(){
        window.location.href="./mine-help.html";
    })

    // 我的信息跳转下属页面
    $(".dingdan").click(function(){
        window.location.href="./mine-message-dingdan.html";
    })
    $(".zhangdan").click(function(){
        window.location.href="./mine-message-zhangdan.html";
    })
    $(".putong").click(function(){
        window.location.href="./mine-message-putong.html";
    })
    // 订单页面中的显示隐藏
    $(".message-middle img").click(function(){
        // alert("a");
        $(".message-bottom").css("display","block");
        $(".message-middle").css("display","none");
    })
      
    // 添加地址 男女选择
    $(".nan").click(function(){
        $(".nv").css("background","#fff");
        $(".nv").css("color","#ffdb4c");
        $(".nan").css("background","#ffdb4c");
        $(".nan").css("color","#fff");
    })
    $(".nv").click(function(){
        $(".nan").css("background","#fff");
        $(".nan").css("color","#ffdb4c");
        $(".nv").css("background","#ffdb4c");
        $(".nv").css("color","#fff");
    })

    // 关联业务
    $(".queren").click(function(){
        window.location.href="./mine-yewuyuan.html";
    })
      // 优惠券页面
      $(".yhq-ty").click(function(){
        $(".yhq-ty").css("border-bottom","3px solid pink");
        $(".yhq-ty").css("color","pink");
        $(".yhq-sj").css("border-bottom","none");
        $(".yhq-sj").css("color","#333");
        $(".yhq-sj-pic").css("display","none");
        $(".yhq-ty-pic").css("display","block");
      })
      $(".yhq-sj").click(function(){
        $(".yhq-sj").css("border-bottom","3px solid pink");
        $(".yhq-sj").css("color","pink");
        $(".yhq-ty").css("border-bottom","none");
        $(".yhq-ty").css("color","#333");
        $(".yhq-sj-pic").css("display","block");
        $(".yhq-ty-pic").css("display","none");
      })
})