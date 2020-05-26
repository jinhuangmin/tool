<? 
$time=time();
$t[0]=substr($time,0,2);
$t[1]=substr($time,2,3);
$t[2]=substr($time,5,5);

$ip=$_SERVER["REMOTE_ADDR"];
$ipdot=explode(".",$ip);

foreach($ipdot as $i=>$dot){
  if(strlen($dot)==1){$h[$i]='00'.$dot;}
  if(strlen($dot)==2){$h[$i]='0'.$dot;}
  if(strlen($dot)==3){$h[$i]=$dot;}
	}
	
$sz=$h[2].$t[0].$h[1].$t[1].$h[3].$t[2].$h[0].'B5';
$b64=base64_encode($sz);

$chongzu[4]=substr($b64,0, 5);
$chongzu[1]=substr($b64,5, 3);
$chongzu[5]=substr($b64,8, 2);
$chongzu[3]=substr($b64,10, 6);
$chongzu[2]=substr($b64,16, 16);
echo $chongzu[1].$chongzu[2].$chongzu[3].$chongzu[4].$chongzu[5].'C16';
?>