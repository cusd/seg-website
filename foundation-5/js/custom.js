// custom.js

// middle calculator
// var currWidth = $(window).width();
// console.log(currWidth);
// var startPos = -100;
// var endPos = (currWidth / 2) + (startPos / 2);
// console.log(endPos);
$(document).ready(function() {
    $("#pic_1").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });

    $("#pic_2").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
     $("#pic_3").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
      $("#pic_4").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
       $("#pic_5").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
        $("#pic_6").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
     $("#pic_7").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
	  $("#pic_8").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
	    $("#pic_9").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
	      $("#pic_10").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
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




// $( "div.example" ).css( "width", function( index ) {
//   return index * 50;
// });