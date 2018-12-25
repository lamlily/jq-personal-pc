/* 
* @Author: Marte
* @Date:   2018-12-24 09:59:15
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-24 20:49:11
*/

jQuery($=>{
    // 点击logo提爱哦转到首页；
    $(".logo").click(function(){
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
    // 点击立即登录跳转到登录页面
    $(".toLogin").click(function(){
        location.href="./login.html";
    });
    
      // 系统生成随机用户名和密码
    // $('#username').val(NW_code(6));
    // $('#password').val(randomCode(6));
    
    // 获取用户名输入
    $("#username").click(function(){
        $("#username").val("");
    });




    var $repass=$("#repassword");
    var $pass=$("#password");
    var $user=$("#username");
    var $checkcode=$("#checkcode");
    var $code=$(".code");

    // 验证用户名
    $user.on("blur",function(){
        var $_user = $user.val();
        if(!/^1[3-9]\d{9}$/i.test($_user)){
            alert("你的手机号不满足条件");
            $("#username").val("");
            return false;
        
            // if($("#username").val()==null){
            //     $("#username").val(NW_code(6));
            // }
            // 发送ajax请求；
            $.ajax({
                type:"get",
                url:'../api/userData.php',
                // async:true,
                // data:{
                //     "username":username
                // },
                success:function(str){
                    console.log(str)
                    // if(str=="ok"){        
                        var $shuzu = [];
                        for(var i=0;i<str.length;i++){
                            $shuzu.push(str[i].username);
                        }
                        if($shuzu.indexOf($_user) != -1){                    
                            alert("用户名已存在");
                            $("#username").val("");
                        }
                }
            })
        }    

    })

        // 验证密码
        $pass.on("blur",function(){
            var $_pass = $pass.val();
            if(!/^[\w\d]{6}$/i.test($_pass)){
                alert("您的密码不满足条件");
                $("#password").val("");
                return false;
            }
        })

        // 两次密码一致
        $repass.on("blur",function(){
            if($pass.val()!=$repass.val()){
                $("#repassword").val("");
                alert("密码不一致");
            }
        })

        // 验证码
        $checkcode.on("blur",function(){
            if($checkcode.val()==""){
                alert("请填写验证码");
            }
            if($checkcode.val()!=$code.html()){     
                $("#checkcode").val("");
                alert("验证码不正确");
            }
        })


        
  

    // 输入密码
    $("#password").click(function(){
        $("#password").val("");
     });
     // 验证密码
    // $("#password").keyup(function(){
    //     // if($('#password').val()===null){
    //     //     $('#password').val(randomCode(6));
    //     // }
        
    //     $password=$("#password").attr("type","password");
    //     let password=$("#password").val();
    //     // 发起ajax请求
    //     $ajax({
    //         type:"post",
    //         url:'../api/userData.php',
    //         async:true,
    //         data:{
    //             "password":"password"
    //         },
    //         success:function(str){
    //             if(str=="ok"){}
    //         }
    //     });

    // });

     // 提交注册
     $("#submit").click(function(){
        // 获取用户名和密码
        var username= $("#username").val();
        // console.log($("#username"))
        console.log(username);
        var password=$("#password").val();
        console.log(password);
        // console.log($(".checkbox")[0].checked);
        if($(".checkbox")[0].checked){


            $.ajax({
                type:"post",
                url:"../api/userData.php",
                async:true,
                data:{
                    "`reg":"reg",
                    "username":username,
                    "password":password
                
                },
                success:function(str){
                    console.log(str)
                    if(str!=false){
                    //     // console.log(666);
                    //     //  点击注册跳转到登录页面
                    //    //  location.href="./login.html";
                    }
                    
                    //用户名
                    // $user.on("blur",function(){
                    //     var $_user = $user.val();
                    //     if(!/^1[3-9]\d{9}$/i.test($_user)){
                    //         alert("你的手机号不满足条件");
                    //         $("#username").val("");
                    //         return false;
                    //     }

                    //     var $shuzu = [];
                    //     for(var i=0;i<data.length;i++){
                    //         $shuzu.push(data[i].username);
                    //     }
                    //     if($shuzu.indexOf($_user) != -1){                    
                    //         alert("用户名已存在");
                    //         $("#username").val("");
                    //     }
                    // })
                }
            })
            // 两次密码一致
            // $repass.on("blur",function(){
            //     if($pass.val()!=$repass.val()){
            //         $("#repassword").val("");
            //         alert("密码不一致");
            //     }
            // })


        }else{
            alert("请阅读并同意相关协议");
        }
        if($user.val()==""){
                alert("请填写手机号/邮箱");
            }
        if($pass.val()==""){
                alert("请填写密码");
            }
        if($repass.val()==""){
                alert("请填写二次密码");
            }
        if($checkcode.val()==""){
                alert("请填写验证码");
            }


     });















})