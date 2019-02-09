//loads on document ready
$(document).ready(function() {
	//loop goes through the array and extracts data
    for (i = 0; i < movies.length; i++) {
        $("#allmovies").append(`
			<div class='col-lg-5 movie row ${movies[i].genre}'>
				<div class=" col-lg-5 movieimg">
					<img src="${movies[i].image}">
				</div>
				<div class="col-lg-7 description">
					<h3>${movies[i].title}</h3>
					<hr>
					<p>${movies[i].desc}</p>
				</div>
					<button class="likes" id="like` + i + `">${Math.floor((Math.random() * 100) + 1)}</button>
					<button class="btn" data-ref="like` + i + `">Like <i class="fas fa-thumbs-up"></i></button>
					</div>`);
    }
    //function to add one like onclick
    $(".btn").on("click", function() {
    	//data-ref stores the string of the id for the button to find it like #like0, #like1 etc
        var ref = $(this).attr('data-ref');
        //creates the full id with # + the saved string from the ref
        var likes = $("#" + ref).html();
        //increases the like number by one
        likes++;
        //gets full id with the likes and adds one like
        $("#" + ref).html(likes);
    });
    //global variables to get the genre classes from the movies
    action = $(".action");
    comedy = $(".comedy");
    drama = $(".drama");
    horror = $(".horror");
    //function to remove the filter and show all movies
    $("#genreallmovies").on("click", function() {
        action.fadeIn(500);
        comedy.fadeIn(500);
        drama.fadeIn(500);
        horror.fadeIn(500);
    });
    //filter for the action movies
    $("#genreaction").on("click", function() {
        action.fadeIn(500);
        comedy.fadeOut(500);
        drama.fadeOut(500);
        horror.fadeOut(500);
    });
    //filter for the comedy movies
    $("#genrecomedy").on("click", function() {
        action.fadeOut(500);
        comedy.fadeIn(500);
        drama.fadeOut(500);
        horror.fadeOut(500);
    });
    //filter for drama movies
    $("#genredrama").on("click", function() {
        action.fadeOut(500);
        comedy.fadeOut(500);
        drama.fadeIn(500);
        horror.fadeOut(500);
    });
    //filter for the horror movies
    $("#genrehorror").on("click", function() {
        action.fadeOut(500);
        comedy.fadeOut(500);
        drama.fadeOut(500);
        horror.fadeIn(500);
    });
});