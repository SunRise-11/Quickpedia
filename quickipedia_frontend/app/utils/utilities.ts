export const speakFromText = (text: string) => {
    const setVoiceAndSpeak = () => {
      let speech = new SpeechSynthesisUtterance();
      speech.text = text;
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        speech.voice = voices[160] || voices[0]; // Fallback to the first voice if 160 is not available
        console.log(speech.voice);
        window.speechSynthesis.speak(speech);
      }
    };
  
    if (window.speechSynthesis.onvoiceschanged == undefined) {
      window.speechSynthesis.onvoiceschanged = setVoiceAndSpeak;
    } else {
      setVoiceAndSpeak();
    }
  };
  

export function uniqueFilter(value: string, index: number, self: string[]) {
    return self.indexOf(value) === index;
  }