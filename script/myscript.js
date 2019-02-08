$(document).ready(function() {
    for (i = 0; i < comedy.length; i++) {
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
    for (i = 0; i < action.length; i++) {
        $("#allmovies").append(`
			<div class='col-lg-5 movie action'>
				<div class=" col-lg-5 movieimg">
					<img src="${action[i].image}">
				</div>
				<div class="col-lg-7 description">
					<h3>${action[i].title}</h3>
					<hr>
					<p>${action[i].desc}</p>
				</div>
			</div>`);
    }
    for (i = 0; i < drama.length; i++) {
        $("#allmovies").append(`
			<div class='col-lg-5 movie action'>
				<div class=" col-lg-5 movieimg">
					<img src="${drama[i].image}">
				</div>
				<div class="col-lg-7 description">
					<h3>${drama[i].title}</h3>
					<hr>
					<p>${drama[i].desc}</p>
				</div>
			</div>`);
    }
    for (i = 0; i < horror.length; i++) {
        $("#allmovies").append(`
			<div class='col-lg-5 movie action'>
				<div class=" col-lg-5 movieimg">
					<img src="${horror[i].image}">
				</div>
				<div class="col-lg-7 description">
					<h3>${horror[i].title}</h3>
					<hr>
					<p>${horror[i].desc}</p>
				</div>
			</div>`);
    }
});