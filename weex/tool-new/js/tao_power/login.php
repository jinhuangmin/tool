<?php



    $action = $_POST["action"];

    if($action=="sign_out"){
        session_start();
        session_destroy();
        echo 1;
    }



	
	
?>