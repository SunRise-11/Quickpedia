import EasySpeech from "easy-speech";

let voice: SpeechSynthesisVoice;

export const initVoice = async () => {
  const speechInitialized = EasySpeech.detect();

  if (speechInitialized.speechSynthesis == undefined) {
    console.log("Speech not supported in this browser");
  } else {
  }

  await EasySpeech.init({ maxTimeout: 5000, interval: 250 })
    .then(() => assignVoice())
    .catch((e) => console.error(e));
};

const assignVoice = () => {
  const regex = /UK English Male/;
  const regexFallback = /en-US/;
  let voices = EasySpeech.voices();
  voice = voices.filter((item) => regex.test(item.name))[0];

  //Safari fallback
  if (!voice) {
    voices = voices.filter((item) => regexFallback.test(item.lang));
    console.log(voices.map((item) => console.log(item.name)));
    voice = voices.filter((item) => item.name == "Samantha")[0];
  }
  console.log("Speech initialized with voice: " + voice.name);
};

export const speakFromText = async (text: string) => {
  await EasySpeech.speak({
    text: text,
    voice: voice,
    pitch: 1,
    rate: 1,
    volume: 1,
    // there are more events, see the API for supported events
    boundary: (e) => console.debug("boundary reached"),
  });
};

export function uniqueFilter(value: string, index: number, self: string[]) {
  return self.indexOf(value) === index;
}

export function capitaliseFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}