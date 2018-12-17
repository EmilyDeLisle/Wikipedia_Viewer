$("#search").on("click", function(){
	var searchText = $("input[type='text']").val();
	searchWiki(searchText);
});

var searchResults;

function searchWiki(query){
	$.ajax({
	    type: 'GET',
	    contentType: 'application/json',
	    dataType: "jsonp",
	    url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + query + "&utf8=&format=json",
    	success: function(wiki){
            searchResults = wiki;
            displayResults();
        }
	});
};

function displayResults(){
	for (var i = 0; i < 10; i++){
		$("#resultTitle" + i).html("<a href='https://en.wikipedia.org/wiki/" + searchResults.query.search[i].title + "' target='_blank'>" + searchResults.query.search[i].title + "</a>");
		$("#resultSnippet" + i).html(searchResults.query.search[i].snippet + "...");
		// $(".resultDisplay").css("display", "inline-block");
		$(".resultDisplay").fadeIn(600);
	}
};
