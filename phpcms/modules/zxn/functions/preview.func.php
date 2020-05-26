<?
//过滤 
function qiege($the,$code)
{
	$codex='';$code2='';
	$code0=explode('${!',$code);
	for($i=1;$i<count($code0);$i++){
		if($i==1){$codex='x_x-'.$code0[$i];}else{$codex=$codex.'${!'.$code0[$i];}
	}
	$the2='x_x-'.$the.'}';
	$code1=explode($the2,$codex);

	$fh['qian']=$code0[0];
	$fh['hou']=$code1[1];
	return $fh;
 
}


?>