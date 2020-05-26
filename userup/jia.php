<?

public function olddel () {

		$time=time();
		$old2user = pc_base::load_model('old2user_model');
$r = $old2user->delete(array('ID'=>$_POST['ID']));
			if(!$r){
			$fanhui['0']=false;
			$fanhui['1']="删除失败";
				}else{
			$fanhui['0']=true;
			$fanhui['1']="删除成功";				
				}
			header('Content-Type:application/json;charset=utf-8');
		    echo json_encode($fanhui);

	}


?>