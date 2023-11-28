import axios from "axios";

export const apiBaseUrlUsers = 'https://quickipedia.azurewebsites.net/api/users/'

export const speakFromText = (text: string) => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.voice = window.speechSynthesis.getVoices()[3]
    console.log(window.speechSynthesis.getVoices().map(item => item.name))
    window.speechSynthesis.speak(speech);
}

 