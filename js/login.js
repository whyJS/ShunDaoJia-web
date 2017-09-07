$(document).ready(function(){
    // alert('jquery ready');
    // 选项卡
    $(".title1").click(function(){
        // alert("a");
        $("#phone1").show();
        $("#password").show();
        $(".line1").show();
        $("#phone2").hide();
        $("#anquan").hide();
        $(".line2").hide();
    })
    $(".title2").click(function(){
        // alert("b");
        $("#phone1").hide();
        $("#password").hide();
        $(".line1").hide();
        $("#phone2").show();
        $("#anquan").show();
        $(".line2").show();
    })
    // 获取焦点失去焦点
     $("#phone1 input").focus(function(){
        // alert('a');
        $("#phone1 img").attr("src","./img/shouji2.png");
     })
     $("#password input").focus(function(){
        // alert('a');
        $("#password .img1").attr("src","./img/suo2.png");
        $("#password .img2").attr("src","./img/eye2.png");
     })
     $("#phone2 input").focus(function(){
        // alert('a');
        $("#phone2 img").attr("src","./img/shouji2.png");
        $("#send").css("color","#323232");
     })
     $("#phone2 input").blur(function(){
        // alert('a');
        $("#send").css("color","#969696");
     })
     $("#anquan input").focus(function(){
        // alert('a');
        $("#anquan img").attr("src","./img/anquan2.png");
     })

     // 发送验证码
    //  $("#send").click(function(){
    //     // alert(1);
    //     timer = setInterval()
    // })

     // 点击登录判断
     $(".btn").click(function(){
        // alert("a");
        // 判断手机号是否正确
        if($("#phone1 input").val()==""){
            alert("请输入手机号");
        }else if($("#phone1 input").val()!="1[34578]\d{9}"){
            alert("请输入正确的手机号");
        }else{}
        // 判断密码 
        
        // 判断验证码
        // 判断手机号是否正确
        if($("#phone2 input").val()==""){
            alert("请输入手机号");
        }else if($("#phone1 input").val()!="1[34578]\d{9}"){
            alert("请输入正确的手机号");
        }else{}
        // 判断验证码
        
     })

    

     // 发送验证码
     var times=60,
         timer=null,
         bool = true;

    $("#send").click(function(){
         if(bool){
            // alert('a');
            bool=false;
            timer = setInterval(djs,1000);
        }else{
            bool=true;
            clearInterval(timer);
        }
        
//   
    })
    function djs(){
        send.value = "已发送("+times+")";
        send.setAttribute('disabled','disabled');
        send.style.color='#969696';
        times--;
        if(times <= 0){
            a=1;
            send.value = "发送验证码";
            send.removeAttribute('disabled');
            times = 60;
            clearInterval(timer);
        }
    }
});