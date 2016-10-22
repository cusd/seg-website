// custom.js
// trigger for image gallery
$(document).ready(function() {
	 $(".pic").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
	 // to fix resizing stats and logos on home page
	$(window).resize(flo_fix);

	function flo_fix(){
	 if ($(window).width() <=641){
		$("#tagger_1").removeClass("right");
		$("#tagger_2").removeClass("left");
		}else{
		$("#tagger_1").addClass("right");
		$("#tagger_2").addClass("left");
		}
		$(".side_fix").css("margin" , "0 10%;");

	}
	// word counter
	// function count_words(){
	//     var paragraphs = document.getElementsByTagName("p.read-more-wrap");
	//     var count = 0;
	//     for(var i = 0; i < paragraphs.length; i++)
	//     {
	//         count += paragraphs[i].innerHTML.split(' ').length;
	//     }
	// }

	function countWords(){
	    // Select all the p elements in the page.
	    var paragraphs = document.getElementsByTagName("p");
	  
	    // The counter.
	    var count = 0;
	  
	    for(var i = 0; i < paragraphs.length; i++)
	    {
	        // Split the innerHtml of the current paragraph to count the words.
	        count += paragraphs[i].innerHTML.split(' ').length;
	    }
	    count=count-1;
	    console.log(count);
	    if (count<8){
	    	console.log("initiate hide");
	    	document.getElementById("hider").style.display="none";
			// document.getElementsById("read-more-trigger").style.display="none";
	    }
	}

	countWords();



});



$(function(){
    $('.card').animate({'margin-top': '20px'}, 1000);
    $('.card').fadeIn("slow", 400);
    // turn off display nones
    $('.profile').show(400);
    $('.txt_hide').show(400);
    // $('.profile').css('margin-top','0');

    var rowHeight = $(".row").height();

    // $(".valign").height(rowHeight);
    $(".midMaker").css("height", function(rowHeight){return rowHeight});
    // $(".midMaker").css("height",rowHeight);


    // $('.left_fly').animate({'margin-left':-100 }, 400);
	// $('.right_fly').animate({'margin-right': }, 400);

});
