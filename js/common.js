$(document).ready(function() {
	//all main var
	var $addPhoto = $('.add_photo'),
	$wrapGallery = $('.wrap_gallery'),
	$butAdd = $('.but_add'),
	$allPhoto = $('.all_photo'),
	$allImg = $('.all_photo > ul img'),
	$infoLike = $(".info_like");
	//height will be 100% 
	function heightDetect(){
		$("body").css("height",$(window).height());
	}
	heightDetect();
	//add photo motion
	$wrapGallery.scroll(function(){
		$addPhoto.css({
			right: - $wrapGallery.scrollLeft()
		});
	});
  	//change scroll
  	function changeScroll(valueScroll){
		$($wrapGallery).animate({scrollLeft: valueScroll}, 1500);
		$addPhoto.hide().fadeIn(2000);
	}
	//add photo
	var con1Limit = 4,
	con2Limit = 5,
	widthscroll = 1024,
	// var for add info like
	addInfoLike = "<div class='wrap_info_like'> <div class = 'info_like'> <div class = 'coutn_comment'> <i class = 'fa fa-commenting fa-lg'> <p class ='text_coutn_comment'>",
	addСountLike = "<div class = 'count_like'>  <i class = 'fa fa-thumbs-o-up fa-lg'> <p class ='like'>",
	addLastI = "<i class = 'fa fa-thumbs-o-down fa-lg'> <p class ='dislike'>";
	function addElements(){
  		$('.wrap_info_like:last').append(addInfoLike);
		$(".text_coutn_comment:last").text("0");
  		$('.info_like:last').append(addСountLike);
  		$(".like:last").text("0");
  		$('.count_like:last').append(addLastI);
  		$(".dislike:last").text("0");
		changeScroll(widthscroll);
        $('body .wrap_info_like:last-child').hover(function(){
			$(this).css("opacity","1");
			}, function(){
			$(this).css("opacity","0");
		});
	}
	//add img
	$(function(){
		$butAdd.change(function (event){
			var countFlex_con1 = $('.flex_con1 > div').length,
				countFlex_con2 = $('.flex_con2 > div').length;
			var newImg = URL.createObjectURL(event.target.files[0]);
			
			addDivElements(countFlex_con1, countFlex_con2, newImg);
		});
	});

	function addDivElements(count1, count2, classIm){

		if (count1  === con1Limit && count2 === con2Limit ) {
			$allPhoto.append('<div class= "flex_con1"> <div class = "con1_im1 for_add_info"> <img ' + 'src=' + classIm + '> <div class="wrap_info_like">');
			addElements();
			con1Limit += 4;
			con2Limit += 5;
			changeScroll(widthscroll);
			widthscroll += 1024;
			oneOpenOneLike = 0;
		}else if(count1 === con1Limit && count2 === con2Limit - 5){
			$allPhoto.append('<div class= "flex_con2"> <div class = "con2_im1 for_add_info"> <img ' + 'src=' + classIm + '> <div class="wrap_info_like">');
			$('.all_photo .con2_im1:last-child').css('width','100%');
			addElements();
			changeScroll(widthscroll);
			oneOpenOneLike = 0;
		}else if(count1 === con1Limit - 3){
			$(".flex_con1:last-child").append('<div class = "con1_im2 for_add_info"> <img ' + 'src=' + classIm + '> <div class="wrap_info_like">');
			addElements();		
			changeScroll(widthscroll);
			oneOpenOneLike = 0;
		}else if(count1 === con1Limit - 2){
			$(".flex_con1:last-child").append('<div class = "con1_im3 for_add_info"> <img ' + 'src=' + classIm + '> <div class="wrap_info_like">');
			addElements();
			changeScroll(widthscroll);
			oneOpenOneLike = 0;
		}else if(count1 === con1Limit - 1){
			$(".flex_con1:last-child").append('<div class = "con1_im4 for_add_info"> <img ' + 'src=' + classIm + '> <div class="wrap_info_like">');
			addElements();
			changeScroll(widthscroll);
			oneOpenOneLike = 0;
		}else if (count2 === con2Limit-4 ) {
			$(".flex_con2:last-child").append('<div class = "con2_im2 for_add_info"> <img ' + 'src=' + classIm + '> <div class="wrap_info_like">');
			addElements();
			changeScroll(widthscroll);
			oneOpenOneLike = 0;
		}else if (count2 === con2Limit-3 ){
			$('.flex_con2:last-child .con2_im1').css('width','50%');
			addElements();
			$(".flex_con2:last-child").append('<div class = "con2_im3 for_add_info"> <img ' + 'src=' + classIm + '> <div class="wrap_info_like">');
			addElements();
			changeScroll(widthscroll);
			oneOpenOneLike = 0;
		}else if (count2 === con2Limit-2 ){
			$(".flex_con2:last-child").append('<div class = "con2_im4 for_add_info"> <img ' + 'src=' + classIm + '> <div class="wrap_info_like">');
			addElements();
			changeScroll(widthscroll);
			oneOpenOneLike = 0;
		}else if (count2 === con2Limit-1 ){
			$(".flex_con2:last-child").append('<div class = "con2_im5 for_add_info"> <img ' + 'src=' + classIm + '> <div class="wrap_info_like">');
			addElements();
			changeScroll(widthscroll);
			oneOpenOneLike = 0;
		}
	}
	// $wrap_info_like, add elements
	$(".for_add_info").each(function(){
  		$(this).append(addInfoLike);
        $(".wrap_info_like").hover(function(){
			$(this).css("opacity","1");
			}, function(){
			$(this).css("opacity","0");
		});
  		$(".text_coutn_comment").text("0");
	});
	$(".info_like").each(function(){
  		$(this).append(addСountLike);
  		$(".like").text("0");
	});
	$(".count_like").each(function(){
  		$(this).append(addLastI);
  		$(".dislike").text("0");
	});
	//need creste event for all img
	function createPopup(nameClass,srcTobigImg, countLike, countDislike,coutnComments){
		if ( $("div").hasClass(nameClass) )  {
			oneOpenOneComment = 0;
			return false;
		}
		var addMinus = 0,
        addPlus = 0,
        dataFoPopup1 = '<div  class = "wrap_big_photo_comments"> <div class = "wrap_big_photo">'
        + '<img class= "big_photo"' + 'src=' + srcTobigImg + '> <div class = "vote">',
        dataFoPopup2 = '<div class = "plus_like"> <i class = "fa fa-thumbs-o-up fa-lg"> <p class ="plus">',
        dataFoPopup3 = '<div class = "minus_like"> <i class = "fa fa-thumbs-o-down fa-lg"> <p class = "minus">';
		$("body").append('<div' + " class =" + nameClass + '>');
		$("."+nameClass).addClass("common_style_popup");
		$("."+nameClass).append(dataFoPopup1);
		$("."+nameClass + " .vote").append(dataFoPopup2);
		$("."+nameClass + " .vote").append(dataFoPopup3);
		$("."+nameClass + " .plus").text(addPlus);
		$("."+nameClass + " .plus").addClass(countLike);
		$("."+nameClass + " .minus").text(addMinus);
		$("."+nameClass + " .minus").addClass(countDislike);
		addListcomments(nameClass,coutnComments);
	}//createPopup
	//addListcomments
	function addListcomments(classForList,coutnComments){
		$("."+classForList + " .wrap_big_photo_comments").append(' <div class = "wrap_commens"><a  class = "wrap_send" >'
		+ '<i class="fa fa-envelope-o" aria-hidden="true"></i>');
		$("."+classForList + " .wrap_commens").append(' <textarea  name="ccomment" placeholder="Write your comment here..." class= "dataComments">');
		$("."+classForList + " .wrap_commens").append(' <input  placeholder="Write your nickname here..." type = "text"  class= "nickname">');
		$("."+classForList + " .wrap_commens").append('<div  class = "list_comments" >');
		$("."+classForList + " .wrap_commens").append('<div class = "wrap_quantity_comments"> <p class= "text_quantity_comments">');
		$("."+classForList + " .wrap_commens").append('<div class = "close_popup" >');
		createBlockComm(classForList,coutnComments);
	}
	//createBlockComm
	function createBlockComm(classBlockComm,coutnComments){
		$('body').on('click', '.wrap_send', function () {
			var byName = $("."+classBlockComm + " .nickname").val(),
			dataComm = $("."+classBlockComm + " .dataComments").val(),
			timeComm = new Date().toLocaleString();
			$("."+classBlockComm + " .list_comments:last").append('<div class = "wrap_one_com">');
			$("."+classBlockComm + " .wrap_one_com:last").append('<div class = "name_who_com">');
			$("."+classBlockComm + " .name_who_com:last").text('By ' + byName);
			$("."+classBlockComm + " .wrap_one_com:last").append('<div class = "date_com">');
			$("."+classBlockComm + " .date_com:last").text(timeComm);
			$("."+classBlockComm + " .wrap_one_com:last").append('<div class = "text_com">');
			$("."+classBlockComm + " .text_com:last").text(dataComm);
			$(coutnComments).text($("."+classBlockComm + " .wrap_one_com").length);
			$("."+classBlockComm + " .text_quantity_comments:last").text( "Comments: " +  $("."+classBlockComm + " .wrap_one_com").length);
			$("."+classBlockComm + " .nickname").val("");
			dataComm = $("."+classBlockComm + " .dataComments").val("");
			byName = " ";
			dataComm= " ";
		});
	}
	//event for add popap
	var oneOpenOneLike = 0;
	$("body").on("click", ".for_add_info", function () {
		var   src = $(this).find("img").attr('src'), 
        	  tarr = src.split('/'),      
        	  file = tarr[tarr.length-1], 
       		  data = file.split('.')[0];
		$("." + data).css("display","flex");
        	var likeClass = "like" + data,
				dislikeClass = "dislike" + data;
				coutnCommentClass = "all_comm" + data;
				mainPlike = $(this).find(".like"),
				mainPdislike = $(this).find(".dislike");
				mainCoutnComment = $(this).find(".text_coutn_comment");
				mainPlike.addClass(likeClass);
				mainPdislike.addClass(dislikeClass);
				mainCoutnComment.addClass(coutnCommentClass);
				
        createPopup(data,src,likeClass, dislikeClass,mainCoutnComment );
		//for dislike
		if( oneOpenOneLike < 1) {
			forDislike(dislikeClass);
			forLike(likeClass);
		}
        // close popup
		$(".close_popup:visible").click(function() {
			$( ".common_style_popup:visible" ).toggle();
		});
		oneOpenOneLike += 1;
	});
	//add like, dislike
	//function forLike
	function forLike(dataforLike){
		$('body').on('click', '.plus_like:visible', function () {
			var valPlus = $(this).find("." + dataforLike),
            valPlusText = parseInt(valPlus.text());
            valPlusText += 1;
			valPlus.text(valPlusText);
			$("." + dataforLike).text(valPlusText);
			$('body').off('click', '.plus_like:visible');
			$('body').off('click', '.minus_like:visible');
			oneOpenOneLike = 0;
		});
	}
	//function forDislike
	function forDislike(dataforDislike){
		$('body').on('click', '.minus_like:visible', function () {
			var val = $(this).find("." + dataforDislike),
            valText = parseInt(val.text());
            valText += 1;
			val.text(valText);
			$("." + dataforDislike).text(valText);
			$('body').off('click', '.minus_like:visible');
			$('body').off('click', '.plus_like:visible');
			oneOpenOneLike = 0;
		});
		}
});
//reloder
$(window).on('load', function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});