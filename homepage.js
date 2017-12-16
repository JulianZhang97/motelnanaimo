$(document).ready(function(){
	$('.firstFade').fadeIn(500, function(){
	$(document).ready(function(){
		$('.secondFade').fadeIn(500, function(){
			$('.thirdFade').fadeIn(500);
		});
	})		
});
});
window.onbeforeunload = function(){
	window.scrollTo(0, 0);
};

$(document).ready(function(){

	$(window).scroll(function(){

		$('.contentFade').each(function(i){
			var top_of_object = $(this).offset().top;
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			if(bottom_of_window > top_of_object){
				if ($(this).css("opacity") == 0){
					$(this).fadeTo(750, 1);
				}
			}		
			else{
				if ($(this).css("opacity") == 1){
				$(this).fadeTo(50, 0);
				}
			}
		});
		$('.contentFadeFast').each(function(i){
			var top_of_object = $(this).offset().top;
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			if(bottom_of_window > top_of_object){
				if ($(this).css("opacity") == 0){
					$(this).fadeTo(500, 1);
				}
			}	
			else{
				if ($(this).css("opacity") == 1){
				$(this).fadeTo(50, 0);
				}
			}
		});
	});
});

$('body').scrollspy({target : ".navbar", offset : 50});

$("#myNavbar a").on('click', function(event) {

	if(this.hash !== ""){

		event.preventDefault();
		var hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 500, function(){
			window.location.hash = hash;
		});
	}
});


var curIndex =  0;
var curIndex2 = 0;
var curIndex3 = 0;
var items = $('.photoGallery .gallery1Display');
var items2 = $('.photoGallery .gallery2Display');
var items3 = $('.photoGallery .gallery3Display');
var itemAmount = items.length;
var itemAmount2 = items2.length;
var itemAmount3 = items3.length;

function changeItems(num, index){

	var galleryLength;
	var item;
	var prevItem;
	
	if(num === 1){
		galleryLength = itemAmount;
		item = $('.photoGallery .gallery1Display').eq(index);

		if(index == 0){
		prevItem = $('.photoGallery .galleryDisplay').eq(galleryLength - 1);
		}
		else{
			prevItem = $('.photoGallery .galleryDisplay').eq(index - 1);
		}

		items.hide();
		item.fadeTo(500, 1);
	}

	else if(num === 2){
		galleryLength = itemAmount2;
		item = $('.photoGallery .gallery2Display').eq(index);

		if(index == 0){
		prevItem = $('.photoGallery .gallery2Display').eq(galleryLength - 1);
		}
		else{
		prevItem = $('.photoGallery .gallery2Display').eq(index - 1);
		}
		items2.hide();
		item.fadeTo(500, 1);
	}
	else{
		galleryLength = itemAmount3;
		item = $('.photoGallery .gallery3Display').eq(index);

		if(index == 0){
		prevItem = $('.photoGallery .gallery3Display').eq(galleryLength - 1);
		}
		else{
		prevItem = $('.photoGallery .gallery3Display').eq(index - 1);
		}
		items3.hide();
		item.fadeTo(500, 1);
	}	
};

var autoChange = setInterval(function(){
	curIndex+= 1;
	curIndex2 += 1;
	curIndex3 += 1;

	if(curIndex> itemAmount - 1){
		curIndex= 0;
	}

	if(curIndex2> itemAmount2 - 1){
		curIndex2= 0;
	}

	if(curIndex3 > itemAmount3 - 1){
		curIndex3 = 0;
	}
	changeItems(1, curIndex);
	changeItems(2, curIndex2);
	changeItems(3, curIndex3);
}, 5000);

$('.prevClick1').click(function(){
	//clearInterval(autoChange);
	curIndex-= 1;
	if (curIndex< 0){
		curIndex= itemAmount - 1;
	}
	changeItems(1, curIndex);
});

$('.prevClick2').click(function(){
	//clearInterval(autoChange);
	curIndex2-= 1;
	if (curIndex2< 0){
		curIndex2= itemAmount2 - 1;
	}
	changeItems(2, curIndex2);
});

$('.prevClick3').click(function(){
	//clearInterval(autoChange);
	curIndex3 -= 1;
	if (curIndex3 < 0){
		curIndex3 = itemAmount3 - 1;
	}
	changeItems(3, curIndex3);
});

$('.nextClick1').click(function(){
	//clearInterval(autoChange);
	curIndex+= 1;
	if (curIndex> itemAmount -1){
		curIndex= 0;
	}
	changeItems(1, curIndex);

});

$('.nextClick2').click(function(){
	//clearInterval(autoChange);
	curIndex2+= 1;
	if (curIndex2> itemAmount2 -1){
		curIndex2= 0;
	}
	changeItems(2, curIndex2);
});

$('.nextClick3').click(function(){
	//clearInterval(autoChange);
	curIndex3 += 1;
	if (curIndex3 > itemAmount3 -1){
		curIndex3 = 0;
	}
	changeItems(3, curIndex3);
});

