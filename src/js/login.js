jQuery($=>{
    // 点击logo提爱哦转到首页；
     $('.logo').click(function() {
        location.href="http://localhost:8090/index.html";
    });

       // 默认打开页面即生成一个
    $(".code").css({"background":randomColor(16),"width":"100px","height":"20px","display":"inline-block","text-align":"center"});
    $(".code").html(randomCode(4));

    // 点击验证码生成一个新的验证码
    $(".changeCode").click(function(){
        $(".code").css({"background":randomColor(16),"width":"100px","height":"20px","display":"inline-block","text-align":"center"});
        $(".code").html(randomCode(4));
    });

    // 点击立即注册跳转到登录页面
    $('.toRegister').click(function() {
        location.href="http://localhost:8090/html/register.html";
    });


    var $repass=$("#repassword");
    var $pass=$("#password");
    var $user=$("#username");
    var $checkcode=$("#checkcode");
    var $code=$(".code");
    var username=$('#username').val();


    username=getUrl("name");
    $('#username').val(username);

        console.log(username);
    

    //点击立即登录验证和跳转 
    $('#submit').click(function() {
        // 检验验证码是否正确
        if($checkcode.val()==$code.html()){
            console.log(checkcode);
            // 获取用户名、密码
            var username=$('#username').val();
            var password=$('#password').val();
            var check=$('#checkbox')[0].checked;
            $.ajax({
                url: '../api/userData.php',
                type: 'post',
                async: true,
                data: {
                        'login':'login',
                        'username': username,
                        'password': password,
                        'check':check
                },

                success:function(str) {
                    if(str!=false){
                        console.log(str);
                        location.href="http://localhost:8090/index.html?name="+username;
                    }
                }
                
            })
           
        }
        else{
            alert('验证码不正确');
            $('.code').css('background', randomColor(16));
            $('.code').html(randomCode(4));

        }
        if($user.val()==""){
                alert("请填写手机号/邮箱");
            }
        if($pass.val()==""){
                alert("请填写密码");
            }
        if($checkcode.val()==""){
                alert("请填写验证码");
            }

        
    });

})