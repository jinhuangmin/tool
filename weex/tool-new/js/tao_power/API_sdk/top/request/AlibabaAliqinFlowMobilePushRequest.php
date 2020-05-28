<?php
/**
 * TOP API: alibaba.aliqin.flow.mobile.push request
 * 
 * @author auto create
 * @since 1.0, 2015.07.10
 */
class AlibabaAliqinFlowMobilePushRequest
{
	/** 
	 * 是否重试
	 **/
	private $always;
	
	/** 
	 * 流量
	 **/
	private $flow;
	
	/** 
	 * 手机号
	 **/
	private $mobile;
	
	/** 
	 * 原因
	 **/
	private $reason;
	
	/** 
	 * 流水号
	 **/
	private $serial;
	
	private $apiParas = array();
	
	public function setAlways($always)
	{
		$this->always = $always;
		$this->apiParas["always"] = $always;
	}

	public function getAlways()
	{
		return $this->always;
	}

	public function setFlow($flow)
	{
		$this->flow = $flow;
		$this->apiParas["flow"] = $flow;
	}

	public function getFlow()
	{
		return $this->flow;
	}

	public function setMobile($mobile)
	{
		$this->mobile = $mobile;
		$this->apiParas["mobile"] = $mobile;
	}

	public function getMobile()
	{
		return $this->mobile;
	}

	public function setReason($reason)
	{
		$this->reason = $reason;
		$this->apiParas["reason"] = $reason;
	}

	public function getReason()
	{
		return $this->reason;
	}

	public function setSerial($serial)
	{
		$this->serial = $serial;
		$this->apiParas["serial"] = $serial;
	}

	public function getSerial()
	{
		return $this->serial;
	}

	public function getApiMethodName()
	{
		return "alibaba.aliqin.flow.mobile.push";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->always,"always");
		RequestCheckUtil::checkNotNull($this->flow,"flow");
		RequestCheckUtil::checkNotNull($this->mobile,"mobile");
		RequestCheckUtil::checkNotNull($this->reason,"reason");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
