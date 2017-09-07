
$(document).ready(function(){
			$('.order-heade1 table td span').click(function() {
				$('.order-heade1 table td span').removeClass('order-heade1-tb-td')
				$(this).addClass('order-heade1-tb-td').siblings('.order-heade1 table td span').removeClass('order-heade1-tb-td');
			});
			$('.order-heade2-td-s1').click(function() {
				$(this).css({ 'background': '#FFDB4C', 'color': '#ffffff' });
				$('.order-heade2-td-s2').css({ 'background': '#FFFFFF', 'color': '#323232' });
				$('#order-body-tg').css({'display': 'none'})
				$('#order-body-sp').css({'display': 'block'})
			});
			$('.order-heade2-td-s2').click(function() {
				$(this).css({ 'background': '#FFDB4C', 'color': '#ffffff' });
				$('.order-heade2-td-s1').css({ 'background': '#FFFFFF', 'color': '#323232' });
				$('#order-body-tg').css({'display': 'block'})
				$('#order-body-sp').css({'display': 'none'})
			});

			$('.locat-div').css({ 'height': $('.order').css('height') })

			//订单详情
			var b=$('.order-body-p2-tr').length;
			
			for(var i=0;i<b;i++){
			var c=$('.order-body-p2-tr')[i].children.length;
		
			for(var j=0;j<c;j++){
				console.log(c)
				if(j<6){	
					$('.order-body-p2-tr')[i].children[j].style.display='inline-block';
				}else if(j>=6&&j<c-1){
					$('.order-body-p2-tr')[i].children[j].style.display='none';
				}else{
					$('.order-body-p2-tr')[i].children[j].style.display='inline-block';
				}
			}
			
			}
			
			//待收货弹窗
			$('.order-dsh-tc-d1-p2 span').click(function(){
				$('.order-dsh-tc').css({'display':'none'})
			})
			//确认联系商家
			$('.order-dsh-lxsj-d1-p2 span').click(function(){
				$('.order-dash-lxsj').css({'display':'none'})
			})
			//订单拒收弹出框
			$('.order-dsh-js-p1').click(function(){
				$('.order-dsh-js').css({'display':'none'})
			})
			$('.order-dsh-gray').click(function(){
				$(this).toggleClass('order-dsh-yellow');
			})
			
			//判断订单是否为空
			//商铺定单
			if($('#order-body-sp ul li').length==0){
				$('#order-body-no-1').css({'display':'block'})
			}else{
				$('#order-body-no-1').css({'display':'none'})
			}
			//团购订单
			if($('#order-body-tg ul li').length==0){
				$('#order-body-no-2').css({'display':'block'})
			}else{
				$('#order-body-no-2').css({'display':'none'})
			}
});
