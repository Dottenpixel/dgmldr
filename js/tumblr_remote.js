hashChangeHandler = function(e) {
//	console.log(e);
	if(e.originalEvent.newURL == "http://" + location.host + "/") {
		location.href = "/";
	}
};
//window.addEventListener("hashchange", hashChangeHandler, false);

$(document).ready(function(){
	$(window).bind("hashchange", hashChangeHandler);
	
	// Chrome Frame check
	CFInstall.check({
		mode: "overlay",
		destination: "http://www.dougmolidor.com"
	});
	
	$(".post_thumb").hover(
		function(){ $(this).addClass("hover"); $(".photoset .inner h1", this).fadeIn(400); },
		function(){ $(this).removeClass("hover"); $(".photoset .inner h1", this).fadeOut(200); }
	);
});