$(document).ready(function() {

	$('#shop-title').css({ 'height': $('.shop-title').height() + 'px' })
	$('.home-shop-nav table td span').click(function() {
		$('.home-shop-nav table td span').removeClass('home-shop-nav-tb-td')
		$(this).addClass('home-shop-nav-tb-td').siblings('.home-shop-nav table td span').removeClass('home-shop-nav-tb-td');
	});

	//分类列表
	$('.shop-td1 ul li').click(function() {

		for(var i = 0; i < $('.shop-td1 ul li').length; i++) {
			$('.shop-td1 ul li').get(i).style.background = '#f2f2f2';
			$('.shop-td1 ul li').get(i).style.color = '#4D4D4D';
			$('.shop-td1 ul li').get(i).style.borderLeft = '0px solid #FFDB4D';
		}
		$(this).css({ 'background': '#FFFFFF', 'color': '#333333', 'border-left': ' 4px solid #FFDB4D' })

	});
	//标签
	$('.shop-td2-bq-d1 a span').click(function() {

		for(var i = 0; i < $('.shop-td2-bq-d1 a span').length; i++) {
			$('.shop-td2-bq-d1 a span').get(i).style.background = '#f2f2f2';
			$('.shop-td2-bq-d1 a span').get(i).style.color = '#666666';
		}
		$(this).css({ 'background': '#FFDB4C', 'color': '#333333' });
		$('.shop-td2-bq2-span').html($(this).html())

	});
	console.log($(window).height() - $('#shop-title').height() - 50 + 'px')
	//商品
	$('#shop-td2-div1').css({ 'height': $(window).height() - $('#shop-title').height() - 50 + 'px' })
	$('#shop-td2-div2').css({ 'height': $(window).height() - $('#shop-title').height() - 50 + 'px' })
	$('#shop-td2-div').css({ 'height': $(window).height() - $('#shop-title').height() - 50 + 'px' })
	$('.shop-table').css({ 'height': $(window).height() - $('#shop-title').height() - 50 + 'px' })
	//标签的显示和隐藏
	$('#shop-td2-bq').css({ 'height': $('.shop-td2-bq').height() + 'px' })
	$('.shop-td2-bq').css({ 'width': $('.shop-td2').width() + 'px' });
	$('.shop-td2-bq2').click(function() {
		$('.shop-td2-bq-d1').css({ 'display': 'block' });
		$(this).css({ 'display': 'none' })
	})

	$('#shop-td2-div2').scroll(function() {
		if($(this).scrollTop() >= 20) {
			$('.shop-td2-bq-d1').css({ 'display': 'none' })
			$('.shop-td2-bq2').css({ 'display': 'block' })
		} else {
			$('.shop-td2-bq-d1').css({ 'display': 'block' })
			$('.shop-td2-bq2').css({ 'display': 'none' })
		}
	})
	var num = 0; //购物车商品总数
	var mony = parseFloat($('#shop-gwc-d1-p1-zj2').html()); //起送价
	//商品列表中添加购物车数量
	$('.shop-td2-ul-p3-d2').on('click', function() {
		//	$('.shop-td2-ul-p3-d2').click(function() {
		num++;
		var a = $(this).index('.shop-td2-ul-p3-d2'); //此类商品的下标
		var name = $('.shop-td2-ul-p1')[a].innerHTML; //此类商品名称
		var b2 = $('.shop-td2-ul-p3-d1 span').html();
		var b = parseFloat($('.shop-td2-ul-p3-d1 span')[a].innerHTML); //商品单价
		var zj = parseFloat(parseFloat(parseFloat($('#shop-gwc-d1-p1-zj').html()) + b).toFixed(2)); //总价
		var cj = parseFloat((mony - zj).toFixed(2));
		$('#shop-gwc-d1-span').html(num);
		$('#shop-gwc-d1-p1-zj').html(zj);
		//购物车新建商品
		for(var nam = 0; nam < $('.shop-cart-ul-li').length; nam++) {
			if(name === $('.shop-cart-ul-li-s1')[nam].innerHTML) {
				console.log('111')
				var sl = parseFloat($('.shop-cart-ul-li-s2-img2')[nam].innerHTML) + 1;
				$('.shop-cart-ul-li-s2-img2')[nam].innerHTML = sl;

			} else {
				console.log('222')
				if(nam == $('.shop-cart-ul-li').length - 1) {
					//					var a='<li class="shop-cart-ul-li"><span class="shop-cart-ul-li-s1">'+name+'</span><span class="shop-cart-ul-li-s2" ><span class="shop-cart-ul-li-s2-span">'+b2+'</span><span><img class="shop-cart-ul-li-s2-img1" src="img/shop-jianhao.png" /><span class="shop-cart-ul-li-s2-img2">1</span><img class="shop-cart-ul-li-s2-img3" src="img/shop-jh.png" /></span></span></li>';
					//					$(".shop-cart-ul").append(a);
					$('<li class="shop-cart-ul-li"><span class="shop-cart-ul-li-s1">' + name + '</span><span class="shop-cart-ul-li-s2" ><span class="shop-cart-ul-li-s2-span">￥<span style="font-size: 14px;color: #FF5500;" class="shop-cart-ul-li-s2-span-a">' + b2 + '</span></span><span><img class="shop-cart-ul-li-s2-img1" src="img/shop-jianhao.png" /><span class="shop-cart-ul-li-s2-img2">0</span><img class="shop-cart-ul-li-s2-img3" src="img/shop-jh.png" /></span></span></li>').appendTo("#accordion");

				} else {

				}

			}

		}

		if(mony >= zj) {

			$('#shop-gwc-d1-p1-zj2').html(cj);
			console.log($('#shop-gwc-d1-p1-zj2').html());

		} else {

			$('.shop-gwc-d2').text('去结算');
			$('.shop-gwc-d2').css({ 'background': '#ffd633', 'color': 'black' });
		}

	})

	//减
	$('.shop-cart-ul-li-s2-img1').click(function() {
		num--;
		var xx = $(this).index('.shop-cart-ul-li-s2-img1')
		var num2 = parseFloat($('.shop-cart-ul-li-s2-img2:eq(' + xx + ')').text())
		if(num2 > 1) {
			$('.shop-cart-ul-li-s2-img2:eq(' + xx + ')').text(num2 - 1);
			var b = parseFloat($('.shop-cart-ul-li-s2-span-a')[xx].innerHTML); //商品单价
			var zj = parseFloat(parseFloat(parseFloat($('#shop-gwc-d1-p1-zj').html()) - b).toFixed(2)); //总价
			var cj = parseFloat((mony - zj).toFixed(2));
			$('#shop-gwc-d1-span').html(num);
			$('#shop-gwc-d1-p1-zj').html(zj);
			if(mony >= zj) {
				$('.shop-gwc-d2').html('￥<span id="shop-gwc-d1-p1-zj2">' + cj + '</span>')
				$('.shop-gwc-d2').css({ 'background': '#e1e1e1', 'color': '#ffffff' });
			} else {
				$('.shop-gwc-d2').text('去结算');
				$('.shop-gwc-d2').css({ 'background': '#ffd633', 'color': 'black' });

			}
		} else {
			var l1 = $('.shop-cart-ul-li')[xx];
			l1.parentNode.removeChild(l1);
		}
	})
	//加
	$('.shop-cart-ul-li-s2-img3').on('click',function() {
//	$('.shop-cart-ul-li-s2-img3').click(function() {

		var xx = $(this).index('.shop-cart-ul-li-s2-img3')
		var num2 = parseFloat($('.shop-cart-ul-li-s2-img2:eq(' + xx + ')').text())
		$('.shop-cart-ul-li-s2-img2:eq(' + xx + ')').text(num2 + 1);

		num++;

		var b = parseFloat($('.shop-cart-ul-li-s2-span-a')[xx].innerHTML); //商品单价
		var zj = parseFloat(parseFloat(parseFloat($('#shop-gwc-d1-p1-zj').html()) + b).toFixed(2)); //总价
		var cj = parseFloat((mony - zj).toFixed(2));
		$('#shop-gwc-d1-span').html(num);
		$('#shop-gwc-d1-p1-zj').html(zj);
		if(mony >= zj) {

			$('#shop-gwc-d1-p1-zj2').html(cj);
			console.log($('#shop-gwc-d1-p1-zj2').html());
		} else {
			$('.shop-gwc-d2').text('去结算');
			$('.shop-gwc-d2').css({ 'background': '#ffd633', 'color': 'black' });

		}
	})
	//显示购物车
	$('.shop-gwc-d1').click(function() {
		$('.shop-cart').css({ 'display': 'block' })
	})
	//隐藏购物车
	$('#shop-car-remove').click(function() {
		$('.shop-cart').css({ 'display': 'none' })
	})

	//购物车清空按钮
	$('.shop-cart-ul-div').click(function() {

		$('#shop-gwc-d1-span').html(0);
		$('.shop-cart-ul-li').remove();
	})
})