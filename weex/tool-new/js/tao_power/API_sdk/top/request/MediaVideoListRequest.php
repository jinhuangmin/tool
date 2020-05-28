<?php
/**
 * TOP API: taobao.media.video.list request
 * 
 * @author auto create
 * @since 1.0, 2018.07.25
 */
class MediaVideoListRequest
{
	/** 
	 * 搜索条件
	 **/
	private $searchCondition;
	
	private $apiParas = array();
	
	public function setSearchCondition($searchCondition)
	{
		$this->searchCondition = $searchCondition;
		$this->apiParas["search_condition"] = $searchCondition;
	}

	public function getSearchCondition()
	{
		return $this->searchCondition;
	}

	public function getApiMethodName()
	{
		return "taobao.media.video.list";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
