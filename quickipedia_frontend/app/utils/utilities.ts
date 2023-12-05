import EasySpeech from 'easy-speech'

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
  const speechInitialized = EasySpeech.detect();

  if(speechInitialized.speechSynthesis == undefined) {
    console.log("Speech not supported in this browser");
  }
  else {
    console.log("Speech initialized");
  }

  EasySpeech.init({ maxTimeout: 5000, interval: 250 })
    .then(() => console.debug('load complete'))
    .catch(e => console.error(e))
};

export const speakFromText = async (text: string) => {
  /*const setVoiceAndSpeak = () => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    initVoice();
    if (voice != null) {
      speech.voice = voice;
      console.log(voice.name + " tried to speak " + text);
      window.speechSynthesis.speak(speech);
    }
  };

  setVoiceAndSpeak();*/

  await EasySpeech.speak({
    text: text, // optional, will use a default or fallback
    voice: voice,
    pitch: 1,
    rate: 1,
    volume: 1,
    // there are more events, see the API for supported events
    boundary: e => console.debug('boundary reached')
  })
};

export function uniqueFilter(value: string, index: number, self: string[]) {
  return self.indexOf(value) === index;
}
