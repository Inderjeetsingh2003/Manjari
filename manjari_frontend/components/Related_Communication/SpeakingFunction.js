import * as Speech from 'expo-speech';

/**
 * Function to speak the given word with an Indian accent
 */
const speakWord = async (word) => {
  if (word) {
    // Get the available voices and filter for an Indian accent
    const voices = await Speech.getAvailableVoicesAsync();
    const indianVoice = voices.find(voice => 
      voice.language === 'en-IN' // English (India)
    );

    Speech.speak(word, {
      language: 'en-IN',  // Indian English
      voice: indianVoice ? indianVoice.identifier : undefined,  // Use the Indian accent voice if available
      pitch: 2,
      rate: 1.2,
    });
  } else {
    console.warn("No word provided to speak.");
  }
};

export default speakWord;
