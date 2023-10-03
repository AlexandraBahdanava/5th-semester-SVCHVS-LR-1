const audioPlayer = document.getElementById('audioPlayer');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        toggleButton.innerText = 'Pause';
        toggleButton.classList.add('playing');
    } else {
        audioPlayer.pause();
        toggleButton.innerText = 'Play';
        toggleButton.classList.remove('playing');
    }
});

audioPlayer.addEventListener('ended', () => {
    toggleButton.innerText = 'Play';
    toggleButton.classList.remove('playing');
});
