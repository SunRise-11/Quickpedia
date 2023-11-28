export const speakFromText = (text: string) => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.voice = window.speechSynthesis.getVoices()[160]
    console.log(speech.voice)
    window.speechSynthesis.speak(speech);
}

export function uniqueFilter(value: string, index: number, self: string[]) {
    return self.indexOf(value) === index;
  }