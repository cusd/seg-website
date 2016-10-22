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



  // $.ajax("https://docs.google.com/spreadsheet/130nETntuTDctX0oB5LoUwFZ26hNII4pM7-nEOBqP_do&output=csv").done(function(result){
  //               alert(result);
  //       });

});

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
// var id='130nETntuTDctX0oB5LoUwFZ26hNII4pM7-nEOBqP_do';
// 	var url = "https://spreadsheets.google.com/feeds/cells/130nETntuTDctX0oB5LoUwFZ26hNII4pM7-nEOBqP_do/od6/public/values?alt=json";
// 	// $.getJSON(url,{}, function (d) { console.log(d); });

// 	$.getJSON("http://cors.io/spreadsheets.google.com/feeds/list/130nETntuTDctX0oB5LoUwFZ26hNII4pM7-nEOBqP_do/od6/public/values?alt=json", function(data) {
// 	  //first row "title" column
// 	  console.log(data.feed.entry[0]['gsx$title']);
// });




	// $.getJSON(url, function(data){
	//   var entry = data.feed.entry;
	//   console.log(data.feed.entry[0]['gsx$title']);
	  // $(entry).each(function(){
	    // Column names are name, age, etc.
	    // console.log(entry);
	    // console.log(data.feed.entry[0]['gsx$title']['$t']);
	    // $('.results').prepend('<h2>'+entry.gsx$title.$t+'</h2><p>'+entry.gsx$age+'</p>');
	  // });
	// })




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
