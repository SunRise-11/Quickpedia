export const speakFromText = (text: string) => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.voice = window.speechSynthesis.getVoices()[3]
    console.log(window.speechSynthesis.getVoices().map(item => item.name))
    window.speechSynthesis.speak(speech);
}

export function uniqueFilter(value: string, index: number, self: string[]) {
    return self.indexOf(value) === index;
  }