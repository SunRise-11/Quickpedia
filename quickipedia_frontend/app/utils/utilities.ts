let voice:SpeechSynthesisVoice;

export const initVoice = () => {
    voice = window.speechSynthesis.getVoices()[160];
}

export const speakFromText = (text: string) => {
    const setVoiceAndSpeak = () => {
      let speech = new SpeechSynthesisUtterance();
      speech.text = text;
      initVoice()
      if (voice != null) {
        speech.voice = voice; 
        console.log("tried to speak " + text)
        window.speechSynthesis.speak(speech);
      }
    };
  
    setVoiceAndSpeak()
  };
  

export function uniqueFilter(value: string, index: number, self: string[]) {
    return self.indexOf(value) === index;
  }