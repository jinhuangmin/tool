<?
$data=$_POST;
$cats=$data['catsPost'];
?>

    <ul class="cat-list J_catList">
    
    <?
   $ls=rand(1000,9999);
    foreach($cats as $cat){
		echo'<li class="cat fst-cat"><i class="cat-icon collapse"></i><input data-id="'.$cat['id'].'" id="subcats_'.$cat['id'].'_'.$ls.'" data-name="'.$cat['name'].'" name="catsArray[]" value="'.$cat['id'].'" class="J_TFstCat" type="checkbox"><label for="subcats_'.$cat['id'].'_'.$ls.'">'.$cat['name'].'</label>';
		 echo'<ul class="fst-cat-bd">'; 
		if($cat['subCats']){
	foreach($cat['subCats'] as $sub){ echo'<li class="cat snd-cat"><input data-id="'.$sub['id'].'" id="subcats_'.$sub['id'].'_'.$ls.'" data-sname="'.$sub['name'].'"  name="catsArray[]" value="'.$sub['id'].'" class="J_TSndCat" type="checkbox"><label for="subcats_'.$sub['id'].'_'.$ls.'">'.$sub['name'].'</label></li>'; } 
	}
	echo'</ul>'; 
	echo'</li>';
		
		}

	?>