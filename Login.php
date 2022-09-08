<?php
$NAME=$_POST['NAME'];
$PASSSWORD=$_POST['PASSWORD'];
$con = new mysqli("localhost","root","","test");
if($con->connect_error){
    die("Filed to connect:".$con->connect_error);
}else{
    $stmt = $con->prepare("select * from registeration where NAME =?");
    $stmt->bind_param("s",$NAME);
    $stmt->execute();
    $stmt_result=$stmt->get_result();
    if($stmt_result->num_rows > 0){
         $data = $stmt_result->fetch_assoc();
         if($data['PASSWORD'] === $PASSSWORD){
            echo"<h2>LOgin Successfully</h2>";
         }else{
            echo"<h2>Invalid Email or Password</h2>";
         }
    }else{
        echo"<h2> Invlid Email or password</h2>";
    }
}

?>
