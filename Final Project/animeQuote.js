function findQuote() {

	let searchTitle = $("#title").val();

	// Parameters API
    let params = {title:searchTitle};

   // https://animechan.vercel.app/api/quotes/anime?title=naruto
     
	// jQuery request
	$.get("https://animechan.vercel.app/api/quotes/anime", params, function(data, status){
    	Update(data)
	});
}

function Update(data) {

	if (data && data.length > 0) {
		var outcomeList = $("#newData");
        console.log(outcomeList);
		outcomeList.empty();

		for (let i = 0; i < data.length; i++) {
			let title = data[i].anime;
			let character =data[i].character;
            let quote = data[i].quote;
            
			outcomeList.append("<div class='title imgContainer'><p class='titleText'>"+"Title:"+" "+ title + "<br>"+"Character:"+" " + character +"<br>"+"Quote:"+" "+ quote + "</p></a></div>");
		} 
	} else {
			let outcomeList = $("#newData");
			outcomeList.empty();
			outcomeList.append("<p class='error'>Try again</p>");
		}

}

