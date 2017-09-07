$(document).ready(function(){
$('.locat-div').css({'height':$('.location-header').css('height')})
	
	$('.loc-tab-2 input').keyup(function(){
		if($(this).val().length>0){
		$('.loc-tab-3 img').css({'visibility':'visible'})
		$('.loc-tab-3').css({'background':'white'})
		}else{
			$('.loc-tab-3 img').css({'visibility':'hidden'})
		$('.loc-tab-3').css({'background':'#f0f0f0'})
		}
		
	})
	
	

	

})
    