'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$('.likeBtn').click(clickLike);
}

function clickLike(e) {
	e.preventDefault();
	ga('create', 'UA-189972573-2', 'auto');
	ga('send', 'event', 'like', 'click');
}