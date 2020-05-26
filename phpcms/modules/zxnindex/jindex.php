<?php
defined( 'IN_PHPCMS' )or exit( 'No permission resources.' );

class jindex {
	public
	function __construct() {

	}

	public
	function init() {
		$_username = param::get_cookie( '_username' );
		$_usernick = param::get_cookie( '_nickname' );
		$catid = '12';
		include template( 'zxnindex', 'jindex' );
	}



	public
	function gserver() {
		if ( isset( $_GET ) ) {
			$time = time();
			$zxn_ku_tb_db = pc_base::load_model( 'zxn_ku_tb_model' );
			$_username = param::get_cookie( '_username' );
			$_usernick = param::get_cookie( '_nickname' );
			$arr = array();
			$data = array();
			$data2 = array();
			$page = $_POST[ 'page' ];
			$sort = $_POST[ 'sort' ];
			$title = trim( $_POST[ 'title' ] );
			$label = $_POST[ 'label' ];
			$keys = explode( " ", trim( $label ) );
			$keynum = count( $keys );
			if ( $sort == 'sort' || $sort == '' ) {
				$order = 'listorder DESC , CreaTime DESC';
			}
			if ( $sort == 'faver' ) {
				$order = 'Cang DESC';
			}
			if ( $sort == 'use' ) {
				$order = 'Hot DESC';
			}
			if ( $sort == 'time' ) {
				$order = 'CreaTime DESC';
			}

			//	$arrlist=$zxn_ku_tb_db->listinfo($where = '', $order = '', $page = 1, $pagesize = 20, $key='', $setpages = 10,$urlrule = '',$array = array(), $data = '*');
			//	select($where = '', $data = '*', $limit = '', $order = '', $group = '', $key='')
			$rows = $zxn_ku_tb_db->select( '', '*', '', $order, '', '' );

			foreach ( $rows as $row ) {
				$arr[ 'id' ] = $row[ 'ID' ];
				$arr[ 'shareTitle' ] = $row[ 'Title' ];
				$arr[ 'time' ] = date( "Y-m-d", $row[ 'CreaTime' ] );
				$arr[ 'preview' ] = $row[ 'Pic' ];
				$arqq = explode( "分享者：", $row[ 'UserName' ] );
				if ( count( $arqq ) > 1 ) {
					$nnmmm = $arqq[ 1 ];
				} else {
					$nnmmm = $row[ 'UserName' ];
				}
				$arr[ 'name' ] = '分享者：' . $nnmmm;
				$arr[ 'title' ] = '分享者：' . $nnmmm;
				$arr[ 'username' ] = $row[ 'UserName' ];
				$arr[ 'shareLabel' ] = $row[ 'Cate' ];
				$cates = explode( " ", $row[ 'Cate' ] );
				$arr[ 'imgname' ] = $row[ 'YuanPic' ];
				$arr[ 'type' ] = $row[ 'version' ];
				$arr[ 'psd' ] = $row[ 'Psd' ];
				if ( !empty( $title ) && empty( $label ) ) {
					if ( stripos( $row[ 'Title' ], $title ) > -1 ) {
						$data[] = $arr;
						$k = $k + 1;
					}
				}
				if ( !empty( $label ) && empty( $title ) ) {
					$n = 0;
					foreach ( $keys as $f => $key ) {
						if ( in_array( $key, $cates ) ) {
							$n++;
						}
					}
					if ( $keynum == $n ) {
						$data[] = $arr;
						$k = $k + 1;
					}
				}

				if ( !empty( $title ) && !empty( $label ) ) {
					$n = 0;
					foreach ( $keys as $f => $key ) {
						if ( in_array( $key, $cates ) ) {
							$n++;
						}
					}
					if ( $keynum == $n && stripos( $row[ 'Title' ], $title ) > -1 ) {
						$data[] = $arr;
						$k = $k + 1;
					}
				}
				if ( empty( $title ) && empty( $label ) ) {
					$data[] = $arr;
					$k = $k + 1;
				}

			}
			$arr = array();
			$yiye = 30;
			$yenum = ceil( $k / $yiye );
			$mus = $yenum * $yiye;
			if ( $page == 0 || $page == '' ) {
				$page = 1;
			}
			$star = ( $page - 1 ) * $yiye;
			$end = $page * $yiye;
			$rei = 0;
			if ( $k > $star ) {
				for ( $i = $star; $i < $end; $i++ ) {
					if ( $i < $k ) {
						$data2[ $rei ] = $data[ $i ];
						$rei++;
					}
				}
				$msg = 'Retrieved pictures';
			} else {
				$msg = 'No more pictures';
			}

			$all[ 'success' ] = 'true';
			$all[ 'message' ] = $msg;
			$all[ 'data' ] = $data2;
			header( 'Content-Type:application/json;charset=utf-8' );
			print_r( json_encode( $all ) );

		}
	}



	public
	function jwindex() {
		$_username = param::get_cookie( '_username' );
		$_usernick = param::get_cookie( '_nickname' );
		$catid = '12';
		include template( 'zxnindex', 'jwindex' );
	}


	public
	function server2() {
		$news_db = pc_base::load_model( 'news_model' );
		$news_data_db = pc_base::load_model( 'news_data_model' );
		$category_db = pc_base::load_model( 'category_model' );
		
		if($_POST['type']=='search'){
			if($_POST['faq_type']==0){$catid = '26';}
			if($_POST['faq_type']==1){$catid = '27';}
			if($_POST['faq_type']==2){$catid = '28';}
			if($_POST['faq_type']==3){$catid = '29';}
		}else{
			$catid = '26';
		}
		$catedata = $category_db->get_one( array( 'catid' => $catid ) );
		$arrchildid=$catedata['arrchildid'];
		
		$where2=$_POST['type']=='search'?"AND title  LIKE '%".$_POST['search_text']."%'":"";
		//	select($where = '', $data = '*', $limit = '', $order = '', $group = '', $key='')
		$where = 'catid in ('.$arrchildid.') '.$where2.'';
		$page = $_POST[ 'page' ]?$_POST[ 'page' ]:1;
		$ynum = 2;
		$pg1 = ( $page - 1 ) * $ynum;
		$pg2 = $page * $ynum;
		$limit = '' . $pg1 . ',' . $pg2 . '';
		$rows0 = $news_db->select( $where, '*', '', '', '', '' );
		$rows = $news_db->select( $where, '*', $limit, $order, '', '' );
		foreach ( $rows as $row ) {

			$r = $news_data_db->get_one( array( 'ID' => $row[ 'id' ] ) );
			$c = $category_db->get_one( array( 'catid' => $row[ 'catid' ] ) );
			$arr[ 'ID' ] = $row[ 'id' ];
			$arr[ 'catName' ] = $c[ 'name' ];
			$arr[ 'content' ] = $r[ 'content' ];
			$arr[ 'level' ] = $row[ 'listorder' ];
			$arr[ 'time' ] = date( 'Y-m-d H:i:s', $row[ 'inputtime' ] );
			$arr[ 'title' ] = $row[ 'title' ];

			$data1[] = $arr;
		}
		$fanhui[ 'total' ] = count($rows0);
		$fanhui[ 'page' ] = $page;
		$fanhui[ 'data' ] = $data1;
		header( 'Content-Type:application/json;charset=utf-8' );
		print_r( json_encode( $fanhui ) );

	}



}
?>