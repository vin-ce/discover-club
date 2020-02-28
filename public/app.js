let doc = document.querySelector('.container');

window.addEventListener('mousewheel', function(e) {
	let scrollSpeed = 40;
	let scrollDirection = e.deltaY > 0 ? 1 : -1;
	doc.scrollLeft += scrollSpeed * scrollDirection;
});
