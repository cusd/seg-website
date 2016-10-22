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
	


  // $.ajax("https://docs.google.com/spreadsheet/130nETntuTDctX0oB5LoUwFZ26hNII4pM7-nEOBqP_do&output=csv").done(function(result){
  //               alert(result);
  //       });

});

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


// 	  /**
//        * Load Sheets API client library.
//        */
//       function loadSheetsApi() {
//         var discoveryUrl =
//             'https://sheets.googleapis.com/$discovery/rest?version=v4';
//         gapi.client.load(discoveryUrl).then(listMajors);
//       }


// 	function listBlogs() {
// 	 var CLIENT_ID = '748207029193-u0ikhqcbjfdcbdjo5h77m4pn62qukhsc.apps.googleusercontent.com';

// 	  var SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
//         gapi.client.sheets.spreadsheets.values.get({
//           spreadsheetId: '130nETntuTDctX0oB5LoUwFZ26hNII4pM7-nEOBqP_do',

//           // range: 'Class Data!A2:E',
//           range: 'A2:E',
//         }).then(function(response) {
//           var range = response.result;
//           if (range.values.length > 0) {
//             appendPre('Title, Author Name, Content, Thumbnail (rendered below)');
//             for (i = 0; i < range.values.length; i++) {
//               var row = range.values[i];
//               // Print columns A and E, which correspond to indices 0 and 4.
//               appendPre(row[0] + ', ' + row[3]);
//             }
//           } else {
//             appendPre('No data found.');
//           }
//         }, function(response) {
//           appendPre('Error: ' + response.result.error.message);
//         });
//         img_load();
//       }

//       function img_load(){
// 	      var img = new Image();
// 	      img.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...."
// 	      document.body.appendChild(img);
// 	  }

//       loadSheetsApi();

// });



$(function(){


	  // ID of the Google Spreadsheet
         var spreadsheetID = "130nETntuTDctX0oB5LoUwFZ26hNII4pM7-nEOBqP_do";
         
         // Make sure it is public or set to Anyone with link can view 
         var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
         
         $.getJSON(url, function(data) {


	// test crap not working
         
         
     //     for (i=0;i<count;i++){
     //     	console.log(entry[i]['gsx$count']['$t']);
     //     	itr="post-"+entry[i]['gsx$count']['$t'];
     //     	console.log(itr);
    
     // 	    $('div.pic-3 , title').append(entry[i].gsx$title.$t);
     //        $(itr+'.author').append(entry[i].gsx$author.$t);
     //        $(itr+'.date').append(entry[i].gsx$date.$t);
     //        $(itr+'.caption').append(entry[i].gsx$caption.$t);
     //        $(itr+'.content').append(entry[i].gsx$content.$t);

     //     };
     // });






// kinda working bit
  //         var entry = data.feed.entry;
         
  //         $(entry).each(function(){
  //           // Column names are name, age, etc.
  //           console.log(entry)


  //           $('.title').append(this.gsx$title.$t);
  //           $('.author').append(this.gsx$author.$t);
  //           $('.date').append(this.gsx$date.$t);
  //           $('.caption').append(this.gsx$caption.$t);
  //           $('.main_content').append(this.gsx$content.$t);
  //         });
         
  // });





//end kinda working bit


// WORKING DYNAMIC PIECE YAAAASSS
          var entry = data.feed.entry;
          var counter=0;
         $(entry).each(function(){
         	counter=counter+1;
         }); 
         for (i=0; i<counter;i++){
         	// console.log(entry[i]);
         	var count=entry[i].gsx$count.$t;
         	console.log(count);
            var title=entry[i].gsx$title.$t;
            console.log(title);
            var author=entry[i].gsx$author.$t;
            console.log(author);
            var date=entry[i].gsx$date.$t;
            console.log(date);
            var caption=entry[i].gsx$caption.$t;
            console.log(caption);
            var main_content=entry[i].gsx$content.$t;
            console.log(main_content);
            $(".blog").append('<div class="row"> <div class="large-1 small-12 columns" style="visibility:hidden;">_</div> <div class="large-10 small-12 columns panel"> <div class="large-3 medium-4 small-6 columns"> <img src="img/cusdLogo.jpg" style="width:200px; height:200px;" alt="cusd"> </div> <div class="large-9 medium-8 small-6 columns" style="overflow:hidden;"></div> <div> <h4>'+title+'</h4> <h5><span>'+author+'</span>  <span style="margin-left:5%;"> '+date+'</span> </h5> <div> <input type="checkbox" class="read-more-state" id="post-'+count+'" /> <p class="read-more-wrap">'+caption+' <span class="read-more-target"> '+main_content+'</span></p> <label for="post-'+count+'" id="hider" class="read-more-trigger"></label> </div> </div> </div> <div class="large-1 small-12 columns" style="visibility:hidden;">_></div></div>');

               // $('.blog').append('<div class="large-1 small-12 columns" style="visibility:hidden;">_</div> <div class="large-10 small-12 columns panel"> <div class="large-3 medium-4 small-6 columns"> <img src="img/cusdLogo.jpg" style="width:200px; height:200px;" alt="cusd"> </div> <div class="large-9 medium-8 small-6 columns" style="overflow:hidden;"></div> <div> <h4>'+title+'</h4> <h5><span>'+author+'</span>  <span style="margin-left:5%;"> '+date+'</span> </h5> <div> <input type="checkbox" class="read-more-state" id="post-'+count+'" /> <p class="read-more-wrap">'+caption+' <span class="read-more-target"> '+main_content+'</span></p> <label for="post-'+count+'" id="hider" class="read-more-trigger"></label> </div> </div> </div> <div class="large-1 small-12 columns" style="visibility:hidden;">_></div>');  
               // $('.blog').append('<div class="large-1 small-12 columns" style="visibility:hidden;">_</div> <div class="large-10 small-12 columns panel"> <div class="large-3 medium-4 small-6 columns"> <img src="img/cusdLogo.jpg" style="width:200px; height:200px;" alt="cusd"> </div> <div class="large-9 medium-8 small-6 columns" style="overflow:hidden;"></div> <div> <h4>hi</h4> <h5><span>hi</span>  <span style="margin-left:5%;"> hi</span> </h5> <div> <input type="checkbox" class="read-more-state" id="post-4" /> <p class="read-more-wrap">HEY <span class="read-more-target"> DICK</span></p> <label for="post-4" id="hider" class="read-more-trigger"></label> </div> </div> </div> <div class="large-1 small-12 columns" style="visibility:hidden;">_></div>');
         }
         
        
  });


        
//END DYNAMIC PIECE






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
