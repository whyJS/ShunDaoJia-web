window.onload=function(){
    var aInput=document.getElementsByTagName('input');
    var oName=aInput[0];
    var dx=aInput[1];
    var pwd1=aInput[2];
    var pwd=aInput[3];
    var pwd2=aInput[4];
    
    var aP=document.getElementsByTagName('p');
    var name_msg=aP[0];
    var dx_msg=aP[0];
    var pwd1_msg=aP[0];
    var pwd_msg=aP[0];
    var pwd2_msg=aP[0];
    var name_length=0;
    var send=document.getElementById('send'),
        
    times=60,
    timer=null;
    send.onclick=function(){      
        // 计时开始 
        timer = setInterval(djs,1000);
    } 
    function djs(){
        send.value = times+"秒后重试";
        send.setAttribute('disabled','disabled');
        send.style.background='#ccc';
        send.style.border='1px solid #ccc';
        times--;
        if(times <= 0){
            send.value = "发送验证码";
            send.removeAttribute('disabled');
            times = 60;
            clearInterval(timer);
        }
    }

    //用户名检测
    // var bool1=false;
    oName.onfocus=function(o){
        name_msg.style.display='block';
        oName.removeAttribute("placeholder");
        oName.style.border='1px solid #fff';
        oName.value="";
        name_msg.innerHTML="";
        oName.style.color='#000';
    }

    oName.onkeyup=function(){
        if(this.value.length>=1){
            document.getElementById('shouji1').setAttribute('src','img/shouji2.png')
        }else{
            document.getElementById('shouji1').setAttribute('src','img/shouji.png')
        }
    }
    oName.onblur=function(){
        // 含有非法字符 ，不能为空 ，长度少于5个字符 ，长度大于25个字符
        var tel = /^1[3|4|5|7|8][0-9]\d{8}$/;
        if(!tel.test(this.value)){
            name_msg.innerHTML='<p>手机号不正确</p>';
            oName.style.color='red';
        }
        else{
            oName.style.border='1px solid #fff';
        }   
        if(tel.test(this.value)){
            dx.disabled=false;//可以输入       
        }else{
            dx.disabled=true;//禁止输入
            pwd.disabled=true;
            pwd2.disabled=true;
            dx.style.background="#fff";
            pwd.style.background="#fff";
            pwd2.style.background="#fff";
        }
    }

    
    
    //密码检测
    // var bool2=false;
    dx.onfocus=function(){
        dx_msg.style.display='block';
        dx.removeAttribute("placeholder");
        dx.style.border='1px solid #fff';
    }
    dx.onblur=function(){
        var re_t=/^[0-9a-zA-Z]{6,30}$/;
        if(this.value==""){
            dx_msg.innerHTML='<p>密码不可为空</p>';
        }else if(this.value.length<6 || this.value.length>30){
            
            dx_msg.innerHTML='密码长度应为6到30个字符';
        }else{
            dx.style.border='1px solid #fff';
        }
    }
    dx.onkeyup=function(){
        if(this.value.length>=1){
            document.getElementById('suo1').setAttribute('src','img/suo2.png')
        }else{
            document.getElementById('suo1').setAttribute('src','img/suo.png')
        }
    }
    
    //确认密码
    // var bool3=false;
    pwd1.onfocus=function(w){
        // alert(1);
        pwd1_msg.style.display='block';
        pwd1.removeAttribute("placeholder");
        pwd1.style.border='1px solid #fff';
        pwd1.value="";
        pwd1_msg.innerHTML="";
    }
    pwd1.onkeyup=function(){
        if(this.value.length>=1){
            document.getElementById('suo3').setAttribute('src','img/suo2.png')
        }else{
            document.getElementById('suo3').setAttribute('src','img/suo.png')
        }
    }
    pwd1.onblur=function(){
        if(this.value!=dx.value){
            pwd1_msg.innerHTML='<p>两次密码输入到不一致</p>';
        }else if(this.value==""){
            pwd1_msg.innerHTML='<p>请输入密码</p>';
        }else{
            pwd1.style.border='1px solid #fff';
        }
    }


    //短信验证码检测 
    // var bool4=false;
    pwd.onfocus=function(p){
        pwd_msg.style.display='block';
        pwd.removeAttribute("placeholder");
        pwd.style.border='1px solid #fff';
    }
    pwd.onkeyup=function(){
        if(this.value.length>=1){
            document.getElementById('anquan1').setAttribute('src','img/anquan2.png')
        }else{
            document.getElementById('anquan1').setAttribute('src','img/anquan.png')
        }
    }
 
    //接口连接
    
}