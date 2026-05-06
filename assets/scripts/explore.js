// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const image = document.querySelector('#explore > img');
  const textarea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore > button');
  const synth = window.speechSynthesis;

  let voices = [];

  function loadVoices() {
    voices = synth.getVoices();

    for (let i = voiceSelect.options.length - 1; i >= 0; i--) {
      if (voiceSelect.options[i].value !== 'select') {
        voiceSelect.remove(i);
      }
    }

    for (const voice of voices) {
      const option = document.createElement('option');
      option.textContent = voice.name + ' (' + voice.lang + ')';
      option.value = voice.name;
      voiceSelect.appendChild(option);
    }
  }

  loadVoices();
  synth.addEventListener('voiceschanged', loadVoices);

  talkButton.addEventListener('click', () => {
    const selectedVoice = voices.find(v => v.name === voiceSelect.value);
    if (!selectedVoice) return;

    const utter = new SpeechSynthesisUtterance(textarea.value);
    utter.voice = selectedVoice;

    utter.addEventListener('start', () => {
      image.src = 'assets/images/smiling-open.png';
    });
    utter.addEventListener('end', () => {
      image.src = 'assets/images/smiling.png';
    });

    synth.speak(utter);
  });
}
