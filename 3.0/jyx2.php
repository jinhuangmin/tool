<?
$time=time();
$t[0]=substr($time,0,2);
$t[1]=substr($time,2,4);
$t[2]=substr($time,6,4);

$ip=$_SERVER["REMOTE_ADDR"];
$ipdot=explode(".",$ip);

foreach($ipdot as $i=>$dot){
  if(strlen($dot)==1){$h[$i]='00'.$dot;}
  if(strlen($dot)==2){$h[$i]='0'.$dot;}
  if(strlen($dot)==3){$h[$i]=$dot;}
	}
	
$sz=$h[1].$t[2].$h[3].$t[0].$h[0].$t[1].$h[2].'D4';
$b64=base64_encode($sz);

$chongzu[3]=substr($b64,0, 6);
$chongzu[2]=substr($b64,6, 3);
$chongzu[5]=substr($b64,9, 4);
$chongzu[1]=substr($b64,13, 4);
$chongzu[4]=substr($b64,17, 15);
echo $chongzu[1].$chongzu[2].$chongzu[3].$chongzu[4].$chongzu[5].'A14';
?>