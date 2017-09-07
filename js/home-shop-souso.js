$(document).ready(function() {
				$('#search-head').css({ 'height': $('.search-head').height() + 20 + 'px' })
				var number=0;
				
				//减
				$('.shop-ss-ul-d2-p2-span-img1').click(function() {
				 number--;
                 		$('#shop-gwc-d1-span').html(number);
					var xx = $(this).index('.shop-ss-ul-d2-p2-span-img1')
					var num = parseFloat($('.shop-ss-ul-d2-p2-span-s1:eq(' + xx + ')').text())
					if(num == 1) {
						$('.shop-ss-ul-d2-p2-span-img1:eq(' + xx + ')').css({ 'visibility': 'hidden' });
						$('.shop-ss-ul-d2-p2-span-s1:eq(' + xx + ')').css({ 'visibility': 'hidden' });
						$('.shop-ss-ul-d2-p2-span-s1:eq(' + xx + ')').text(num - 1);

					} else if(num > 1) {
						$('.shop-ss-ul-d2-p2-span-s1:eq(' + xx + ')').text(num - 1);
					} else {
						$('.shop-ss-ul-d2-p2-span-img1:eq(' + xx + ')').css({ 'visibility': 'hidden' });
						$('.shop-ss-ul-d2-p2-span-s1:eq(' + xx + ')').css({ 'visibility': 'hidden' });
					}
                    return false;
				})
				//加
				$('.shop-ss-ul-d2-p2-span-img2').click(function() {
                 		number++;
                 		$('#shop-gwc-d1-span').html(number);
					var xx = $(this).index('.shop-ss-ul-d2-p2-span-img2')
					var num = parseFloat($('.shop-ss-ul-d2-p2-span-s1:eq(' + xx + ')').text())
					if(num > 0) {
						$('.shop-ss-ul-d2-p2-span-img1:eq(' + xx + ')').css({ 'visibility': 'visible' });
						$('.shop-ss-ul-d2-p2-span-s1:eq(' + xx + ')').css({ 'visibility': 'visible' });
						$('.shop-ss-ul-d2-p2-span-s1:eq(' + xx + ')').text(num + 1);
					} else {
						$('.shop-ss-ul-d2-p2-span-s1:eq(' + xx + ')').text(num + 1);
						$('.shop-ss-ul-d2-p2-span-img1:eq(' + xx + ')').css({ 'visibility': 'visible' });
						$('.shop-ss-ul-d2-p2-span-s1:eq(' + xx + ')').css({ 'visibility': 'visible' });

					}
					return false;

				})

				//附近商家
				for(var i1 = 0; i1 < $('.home-page-p').length; i1++) {
					$('.home-page-p:eq(' + i1 + ') span .home-page-span1-no1:gt(0)').hide();
				}
				$('.home-page-span2').click(function() {
					var xx = $(this).index('.home-page-span2')
					$('.home-page-p:eq(' + xx + ') span .home-page-span1-no1:gt(0)').toggle();

				})
				
				
				//显示购物车
				$('.shop-gwc-d1').click(function(){
					$('.shop-cart').css({'display':'block'})
				})
				//隐藏购物车
				$('#shop-car-remove').click(function(){
					$('.shop-cart').css({'display':'none'})
				})
				
				//购物车清空按钮
				$('.shop-cart-ul-div').click(function(){
					console.log('1111')
					$('.shop-cart-ul-li').remove();
				})
			})