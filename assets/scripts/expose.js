// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const select = document.getElementById('horn-select');
  const image = document.querySelector('#expose > img');
  const audio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls > img');
  const playButton = document.querySelector('#expose > button');
  const jsConfetti = new JSConfetti();

  select.addEventListener('change', () => {
    const horn = select.value;
    if (horn === 'air-horn') {
      image.src = 'assets/images/air-horn.svg';
      image.alt = 'Air horn';
      audio.src = 'assets/audio/air-horn.mp3';
    } else if (horn === 'car-horn') {
      image.src = 'assets/images/car-horn.svg';
      image.alt = 'Car horn';
      audio.src = 'assets/audio/car-horn.mp3';
    } else if (horn === 'party-horn') {
      image.src = 'assets/images/party-horn.svg';
      image.alt = 'Party horn';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });

  volumeSlider.addEventListener('input', () => {
    const value = Number(volumeSlider.value);
    audio.volume = value / 100;
    console.log(value);

    if (value === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (value < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (value < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });

  playButton.addEventListener('click', () => {
    audio.play();
    if (select.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
