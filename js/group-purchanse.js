 $(document).ready(function(){
         	var he=$(window).height()-220;
         	$("#ss").css({"height":he+'px'});
	     
        //评论
	         $('#pl').click(function(){
	         	$('#sdj-fom').css({'display':'block'})
	         });
	         $('#sdj-fom textarea').blur(function(){
	         	$('#sdj-fom').css({'display':'none'})
	         })
 })
         