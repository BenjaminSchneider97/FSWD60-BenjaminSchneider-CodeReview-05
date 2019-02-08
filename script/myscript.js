$(document).ready(function(){

	for(i=0; i< comedy.length; i++){
		$("#allmovies").append(`
			<div class='col-lg-5 movie comedy'>
				<div class=" col-lg-5 movieimg">
					<img src="${comedy[i].image}">
				</div>
				<div class="col-lg-7 description">
					<h3>${comedy[i].title}</h3>
					<hr>
					<p>${comedy[i].desc}</p>
				</div>
			</div>`);
	}
});