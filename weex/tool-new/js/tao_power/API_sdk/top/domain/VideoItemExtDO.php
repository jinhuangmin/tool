<?php

/**
 * 视频信息列表
 * @author auto create
 */
class VideoItemExtDO
{
	
	/** 
	 * 是否能在移动端播放
	 **/
	public $can_play_in_phone;
	
	/** 
	 * 视频封面-主图
	 **/
	public $main_pic_url;
	
	/** 
	 * 视频播放地址
	 **/
	public $play_url;
	
	/** 
	 * 视频状态
	 **/
	public $state;
	
	/** 
	 * 视频基本信息
	 **/
	public $video_info;	
}
?>