$(document).ready(function() {
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
					<button class="btn">Like <i class="fas fa-thumbs-up"></i></button>
			</div>`);
    }

    $(".btn").on("click", function(i){
    	var likes = $("#like" + i).html();
    	likes ++;
    	$("#like" + i).html(likes);
    });
});