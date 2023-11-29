let voice: SpeechSynthesisVoice;

export const initVoice = () => {
  const regex = /UK English Male/;
  const regexFallback = /en-US/;
  let voices = window.speechSynthesis.getVoices();
  voice = voices.filter((item) => regex.test(item.name))[0];
  if (!voice) {
    voices = voices.filter((item) => regexFallback.test(item.lang));
    console.log(voices.map((item) => console.log(item.name))); //it's here
    voice = voices[24];
    //24
  }
};

export const speakFromText = (text: string) => {
  const setVoiceAndSpeak = () => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    initVoice();
    if (voice != null) {
      speech.voice = voice;
      console.log(voice.name + " tried to speak " + text);
      window.speechSynthesis.speak(speech);
    }
  };

  setVoiceAndSpeak();
};

export function uniqueFilter(value: string, index: number, self: string[]) {
  return self.indexOf(value) === index;
}
