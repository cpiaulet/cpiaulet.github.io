// Rolling news band: duplicate the cards so the -50% CSS animation loops seamlessly.
// Skipped for visitors who prefer reduced motion (the band stays a swipeable row).
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
	document.querySelectorAll('.marquee').forEach(function(marquee) {
		var track = marquee.querySelector('.marquee-track');
		Array.prototype.slice.call(track.children).forEach(function(item) {
			var copy = item.cloneNode(true);
			copy.setAttribute('aria-hidden', 'true');
			copy.querySelectorAll('a').forEach(function(a) { a.tabIndex = -1; });
			track.appendChild(copy);
		});
		marquee.classList.add('is-rolling');
	});
}

// Arrow buttons for horizontal scrollers: <button data-scroll-target="id" data-scroll-dir="1|-1">.
document.querySelectorAll('[data-scroll-target]').forEach(function(button) {
	button.addEventListener('click', function() {
		var scroller = document.getElementById(button.dataset.scrollTarget);
		scroller.scrollBy({ left: button.dataset.scrollDir * scroller.clientWidth * 0.8, behavior: 'smooth' });
	});
});
