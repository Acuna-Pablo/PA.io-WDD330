function findAnime() {
	
	let searchTitle = $("#title").val();

// Parameters API
let params = {q:searchTitle};

//https://api.jikan.moe/v3/search/anime?q=naruto

 
// jQuery request
$.get("https://api.jikan.moe/v3/search/anime", params, function(data, status){
    // Debugging
    console.log("FindingAPI:")
    console.log(status);
    console.log(data);

    Update(data)
});
}
function Update(data) {

if (data.results && data.results.length > 0) {
    let outcomeList = $("#newData");
    console.log(outcomeList);
    outcomeList.empty();

    for (let i = 0; i < data.results.length; i++) {
        let title = data.results[i].title;
        let image = data.results[i].image_url;
        let synopsis = data.results[i].synopsis;
        let type = data.results[i].type;
        let episodes = data.results[i].episodes;
        let rated = data.results[i].rated;
        let score = data.results[i].score;

       
        outcomeList.append("<div class='title imgContainer'><p class= 'titleText'> "+"Title:"+" "+ title+" </p>"+
        "<img class='poster' src='" + image + "' alt='" + title + "'><p class='titleText'>"+"Synopsis:"+" "+ synopsis +"<br>"+"Type:"+" " + type + "<br>"+"Episodes:"+" " + episodes +
        "<br>"+"Score:"+" "+ score +"<br>"+"Rated:"+" "+ rated + "</p></a></div>");
    } 
} else {
        let outcomeList = $("#newData");
        outcomeList.empty();
        outcomeList.append("<p class='error'>Try again</p>");
    }

}