<?php
    // $uname = isset($_POST["username"])?$_POST["username"] : '';
    // // 此处应该有一步，拿到数据库的所有用户名
    // $arr = array("田","王津","覃");
    // $res = in_array($uname, $arr);
    // if($res){
    //     echo "exist";
    // }else{
    //     echo "not";
    // }



    $stuname = isset($_POST["stuname"])? $_POST["stuname"] : "啊哈";
    $team = isset($_POST["team"])? $_POST["team"] : 6;
    $gender = isset($_POST["gender"])? $_POST["gender"] : "男";

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'h5_1808';

    // 1.创建与数据库的连接
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 2. 检测连接失败
    if ($conn->connect_error) {
        die($conn->connect_error);
    } 
    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    // 3. 操作数据库：增删改查
    // （1）书写sql语句
    // （2）执行sql语句 $conn->query(sql语句)
        //* 查找：返回值为查询结果集
        //* 增删改：返回值为布尔值
    // (3) 若为查询语句，对查询结果集进行操作
    //   * 查询结果集的属性及方法
    //      * num_rows 得到查询结果集的数量
    //      * fetch_all(MYSQLI_ASSOC); 得到查询结果集组成数组
    //      * fetch_assoc() 得到第一个结果
    //      * fetch_row() 得到第一个结果,只得到值，没有键
    // (4) 若为查询语句，关闭查询结果集
    //   * 查询结果集->close()
    // (5) 关闭与数据库的连接 $conn -> close()
    // $sql = 'select * from student where team=4 order by id desc limit 0,3';
    // $sql = 'select * from student where stuname="王津00"';
    // $result = $conn->query($sql);
    // if($result->num_rows == 0){
    //     echo "can";
    // }
    // $arr = $result->fetch_all(MYSQLI_ASSOC);
    // $res = $result->fetch_row();
    // echo json_encode($res,JSON_UNESCAPED_UNICODE);
    // $result->close();
    // $conn->close();
    // =================增加========================
    $uname = array("");
    // $sql = 'insert into student (stuname,team,gender) values ("'.$stuname.'",'.$team.',"'.$gender.'")';
    // $sql = 'insert into student (stuname,team,gender) values ("aaa",4,"女")';


    $res = $conn->query($sql);
    if($res){
        echo "插入成功";
    }else{
        echo "插入失败";
    }
    $conn -> close();





?>