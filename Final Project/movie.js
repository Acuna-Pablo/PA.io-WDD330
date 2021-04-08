function findMovie() {
	
	let searchTitle = $("#title").val();
	

	// Set up the parameters to send to the API
    let params = {query:searchTitle, api_key:"acdc5c86d159c123dbc75f145e5966da"};
     
	// jQuery  request
	$.get("https://api.themoviedb.org/3/search/movie", params, function(data, status){
		Update(data)
	});
}

function Update(data) {

	if (data.results && data.results.length > 0) {
		let outcomeList = $("#newData");
		outcomeList.empty();

		for (let i = 0; i < data.results.length; i++) {
			let title = data.results[i].title;
			let image ="https://moviedb.kr/image/w500"+ data.results[i].poster_path;
            let year = data.results[i].release_date;
            let movie = data.results[i].id;
			outcomeList.append("<div class='title imgContainer'><a href='" + movie
 + "' target='_blank'/'><img class='poster' src='" + image + "' alt='" + title + "'><p class='titleText'>"+"Title:"+" " + title +"<br>"+"Year:"+" "+ year + "</p></a></div>");
		} 
	} else {
			let outcomeList = $("#newData");
			outcomeList.empty();
			outcomeList.append("<p class='error'>Try again</p>");
		}

}