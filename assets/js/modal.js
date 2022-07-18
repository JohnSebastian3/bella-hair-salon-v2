
const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gtr-uniform img');
const original = document.querySelector('.full-img');

Array.from(previews).forEach(preview => {
	preview.addEventListener('click', () => {
		modal.classList.add('open');
		original.classList.add('open');
		// Dynamically change image
		const originalSrc = preview.getAttribute('src');
		original.src = `${originalSrc}`;
	})
});

modal.addEventListener('click', (e) => {
	if(e.target.classList.contains('modal')) {
		modal.classList.remove('open');
		original.classList.remove('open');
	}
});