<?php
@ini_set('max_input_vars','50000');
header("Access-Control-Allow-Origin:*");
defined('IN_PHPCMS') or exit('No permission resources.');
//模型原型存储路径
define('MODEL_PATH',PC_PATH.'modules'.DIRECTORY_SEPARATOR.'content'.DIRECTORY_SEPARATOR.'fields'.DIRECTORY_SEPARATOR);
//模型缓存路径
define('CACHE_MODEL_PATH',CACHE_PATH.'caches_model'.DIRECTORY_SEPARATOR.'caches_data'.DIRECTORY_SEPARATOR);
pc_base::load_app_class('foreground');
pc_base::load_app_func('util','content');
class keyword extends foreground {
	private $db;
	public $siteid;
	function __construct() {
	
	}
	
	public function init() {
		$categorys = getcache('category_content_'.$this->siteid,'commons');
		
		$datas = $this->db->listinfo(array('siteid'=>$this->siteid,'type'=>0),'',$_GET['page'],30);
		//模型文章数array('模型id'=>数量);
		$items = array();
		foreach ($datas as $k=>$r) {
			foreach ($categorys as $catid=>$cat) {
				if(intval($cat['modelid']) == intval($r['modelid'])) {
					$items[$r['modelid']] += intval($cat['items']);
				} else {
					$items[$r['modelid']] += 0;
				}
			}
			$datas[$k]['items'] = $items[$r['modelid']];
		}

		$pages = $this->db->pages;
		$this->public_cache();
		$big_menu = array('javascript:window.top.art.dialog({id:\'add\',iframe:\'?m=content&c=sitemodel&a=add\', title:\''.L('add_model').'\', width:\'580\', height:\'420\', lock:true}, function(){var d = window.top.art.dialog({id:\'add\'}).data.iframe;var form = d.document.getElementById(\'dosubmit\');form.click();return false;}, function(){window.top.art.dialog({id:\'add\'}).close()});void(0);', L('add_model'));
		include $this->admin_tpl('sitemodel_manage');
	}
	

	public function edit() {
		if(isset($_POST['dosubmit'])) {
			
			$modelid = intval($_POST['modelid']);
			$_POST['info']['category_template'] = $_POST['setting']['category_template'];
			$_POST['info']['list_template'] = $_POST['setting']['list_template'];
			$_POST['info']['show_template'] = $_POST['setting']['show_template'];
			if (isset($_POST['other']) && $_POST['other']) {
				$_POST['info']['admin_list_template'] = $_POST['setting']['admin_list_template'];
				$_POST['info']['member_add_template'] = $_POST['setting']['member_add_template'];
				$_POST['info']['member_list_template'] = $_POST['setting']['member_list_template'];
			} else {
				unset($_POST['setting']['admin_list_template'], $_POST['setting']['member_add_template'], $_POST['setting']['member_list_template']);
			}
			
			$this->db->update($_POST['info'],array('modelid'=>$modelid,'siteid'=>$this->siteid));
			showmessage(L('update_success'), '', '', 'edit');
		} else {
			pc_base::load_sys_class('form','',0);
			$show_header = $show_validator = '';
			$style_list = template_list($this->siteid, 0);
			foreach ($style_list as $k=>$v) {
				$style_list[$v['dirname']] = $v['name'] ? $v['name'] : $v['dirname'];
				unset($style_list[$k]);
			}
			$modelid = intval($_GET['modelid']);
			$r = $this->db->get_one(array('modelid'=>$modelid));
			extract($r);
			$admin_list_template_f = $this->admin_list_template($admin_list_template, 'name="setting[admin_list_template]"');
			include $this->admin_tpl('sitemodel_edit');
		}
	}
	public function delete() {
		$this->sitemodel_field_db = pc_base::load_model('sitemodel_field_model');
		$modelid = intval($_GET['modelid']);
		$model_cache = getcache('model','commons');
		$model_table = $model_cache[$modelid]['tablename'];
		$this->sitemodel_field_db->delete(array('modelid'=>$modelid,'siteid'=>$this->siteid));
		$this->db->drop_table($model_table);
		$this->db->drop_table($model_table.'_data');
		
		$this->db->delete(array('modelid'=>$modelid,'siteid'=>$this->siteid));
		//删除全站搜索接口数据
		$this->type_db = pc_base::load_model('type_model');
		$this->type_db->delete(array('module'=>'search','modelid'=>$modelid,'siteid'=>$this->siteid));
		$cache_api = pc_base::load_app_class('cache_api','admin');
		$cache_api->cache('type');
		$cache_api->search_type();
		exit('1');
	}
	public function disabled() {
		$modelid = intval($_GET['modelid']);
		$r = $this->db->get_one(array('modelid'=>$modelid,'siteid'=>$this->siteid));
		
		$status = $r['disabled'] == '1' ? '0' : '1';
		$this->db->update(array('disabled'=>$status),array('modelid'=>$modelid,'siteid'=>$this->siteid));
		showmessage(L('update_success'), HTTP_REFERER);
	}

	/**
	 * 导出模型
	 */
	function export() {
		$modelid = isset($_GET['modelid']) ? $_GET['modelid'] : showmessage(L('illegal_parameters'), HTTP_REFERER);
		$modelarr = getcache('model', 'commons');
		//定义系统字段排除
		//$system_field = array('id','title','style','catid','url','listorder','status','userid','username','inputtime','updatetime','pages','readpoint','template','groupids_view','posids','content','keywords','description','thumb','typeid','relation','islink','allow_comment');
		$this->sitemodel_field_db = pc_base::load_model('sitemodel_field_model');
		$modelinfo = $this->sitemodel_field_db->select(array('modelid'=>$modelid));
		foreach($modelinfo as $k=>$v) {
			//if(in_array($v['field'],$system_field)) continue;
			$modelinfoarr[$k] = $v;
			$modelinfoarr[$k]['setting'] = string2array($v['setting']);
		}
		$res = var_export($modelinfoarr, TRUE);
		header('Content-Disposition: attachment; filename="'.$modelarr[$modelid]['tablename'].'.model"');
		echo $res;exit;
	}
	function import(){
		if(isset($_POST['dosubmit'])) {
			content_data($_POST['dats']);
		}
	}
	/**
	 * 检查表是否存在
	 */
	public function public_check_tablename() {
		$r = $this->db->table_exists(strip_tags($_GET['tablename']));
		if(!$r) echo '1';
	}
	/**
	 * 更新指定模型字段缓存
	 * 
	 * @param $modelid 模型id
	 */
	public function cache_field($modelid = 0) {
		$this->field_db = pc_base::load_model('sitemodel_field_model');
		$field_array = array();
		$fields = $this->field_db->select(array('modelid'=>$modelid,'disabled'=>$disabled),'*',100,'listorder ASC');
		foreach($fields as $_value) {
			$setting = string2array($_value['setting']);
			$_value = array_merge($_value,$setting);
			$field_array[$_value['field']] = $_value;
		}
		setcache('model_field_'.$modelid,$field_array,'model');
		return true;
	}
}
?>