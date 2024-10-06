import React, { useContext,useEffect } from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';

import speakWord from './SpeakingFunction';
export default function LanguageCards({wordName,wordType,SetWordToSpeak,WordToSpeak,url}) {


const handleclick=(word)=>
{
  // if(!WordToSpeak.includes(word))
  // {
  //   SetWordToSpeak((previousword)=>
  //   {
  //      return [...previousword,word]
  //   })
  // }
  SetWordToSpeak((previousword)=>
      {
         return [...previousword,word]
      })
  speakWord(word)
}


  const getbackgroundcolor=(wordType)=>
  {
    switch  (wordType.toLowerCase()){
      case 'noun':
        return '#FFCC80'; // light orange
        case 'verb':
          return '#A5D6A6' // light green
          case'adjective':
          return '#F48FB1'; // light pink
          
      case 'adverb':
            return '#E1BEE7'; // Light purple
      case 'pronoun':
          return '#FFFFC5';
        default:
            return "#ffffff"; //unrecognised

    }
  }
  return (
    <TouchableOpacity style={[styles.cardContainer,{backgroundColor:getbackgroundcolor(wordType)}]}  onPress={()=>handleclick(wordName)}>
      {/* Image */}
      <Image
        source={ url } // Replace with your image URL or local image source
        style={styles.image}
      />
      
      {/* Word Name */}
      <Text style={[styles.wordName]}>{wordName}</Text>
      
      {/* Word Type */}
      <Text style={styles.wordType}>{wordType}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 120, // Width of the card
    height: 140, // Adjusted height of the card
    backgroundColor: '#ffffff', // Background color of the card
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Shadow effect
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    marginRight:10,
    elevation: 5, // Elevation for Android shadow effect
    justifyContent: 'center', // Center the contents vertically
    alignItems: 'center', // Center the contents horizontally
    padding: 5, // Reduced padding
    marginBottom: 20, // Add some spacing at the bottom
  },
  image: {
    width: 80, // Adjusted width of the image
    height: 80, // Adjusted height of the image
    marginBottom: 8, // Space between the image and the word name
    borderRadius: 10, // Make image corners rounded
  },
  wordName: {
    fontSize: 16, // Reduced font size of the word name
    fontWeight: 'bold', // Make the word bold
    color: '#333', // Word name text color
    marginBottom: 4, // Space between word name and word type
    textAlign: 'center', // Center the text
  },
  wordType: {
    fontSize: 14, // Reduced font size of the word type
    color: '#555', // Word type text color
    textAlign: 'center', // Center the text
  },
});
