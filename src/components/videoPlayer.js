const myVideo = document.getElementById("myVideo");
const playButton = document.getElementById("playButton");
const videoOverlay = document.querySelector(".review__video-overlay");

playButton.addEventListener("click", function () {
	myVideo.play();
	myVideo.setAttribute('controls', '')
	videoOverlay.style.opacity = "0";
	videoOverlay.style.pointerEvents = "none";
	playButton.style.opacity = "0";
	playButton.style.pointerEvents = "none";
});

myVideo.addEventListener('click', () => {
	myVideo.pause();
	myVideo.removeAttribute('controls')
	videoOverlay.style.opacity = ".5";
	videoOverlay.style.pointerEvents = "auto";
	playButton.style.opacity = "1";
	playButton.style.pointerEvents = "auto";
})
