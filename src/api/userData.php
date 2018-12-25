<?php
/**
 * @Author: Marte
 * @Date:   2018-12-24 12:01:20
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-12-24 16:46:01
 */

  // 获取前端返回的参数
    $user=isset($_POST['username'])? $_POST['username']:"哈哈";
    $pass=isset($_POST['password'])? $_POST['password']:666;

    // $reg=isset($_POST['reg'])?$_POST['reg']:"";
    // $login=isset($_POST['login'])?$_POST['login']:"";
    // var_dump($username);

// 连接数据库:  输入主机，用户名和密码，数据库名称
    $servername ="localhost";
    $username ="root";
    $password ="";
    $dbname ="sasa";

     // （1）创建链接,生成了conn对象
    $conn= new mysqli($servername ,$username ,$password,$dbname);

    // (2)检测链接
    if($conn->connect_error){
        die("连接失败：".$conn->connect_error);
    }

    // 查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

    // $sql = "select * from register";
    // $username = array("");
    // $sql = "insert into register (username , password) values ($username , $password)";
    $sql = "insert into register (username , password) values ('$user' , '$pass')";

    $res = $conn->query($sql);

    if($res){
        echo "插入成功";
    }else{
        echo "插入失败";
    }
    $conn -> close();


?>

