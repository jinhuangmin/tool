<?
$data=$_POST;
$time=time();
$time2=date("Ymd", $time);
$ip=$_SERVER["REMOTE_ADDR"];
if($data['type']=='c'){echo'["yes"]';}

if($data['type']=='k'){echo'200131111017000-91430';}  //200131111017000-91430

if($data['type']=='g'){echo'["yes","'.$ip.'","'.$time2.'","'.$time.'"]';}  //["yes","40.91.187.148","20150816","1439707239000"]
?>