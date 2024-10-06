import React, { useEffect ,useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import LanguageCards from './LanguageCards';

import speakWord from "./SpeakingFunction"
export default function LanguageModule() {
  useEffect(() => {
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    };

    lockOrientation();

    return async () => {
      await ScreenOrientation.unlockAsync();
      //SetWordToSpeak(null)
    };
  }, []);

  const wordsarrtemp = [
    { wordname: 'rahul', wordtype: 'noun' },
    { wordname: 'nibha', wordtype: 'noun' },
    { wordname: 'zoha', wordtype: 'noun' },
    { wordname: 'swim', wordtype: 'verb' },
    { wordname: 'beautiful', wordtype: 'adjective' },
    { wordname: 'happy', wordtype: 'adjective' },
    { wordname: 'happy', wordtype: 'adjective' },
    { wordname: 'exciting', wordtype: 'adjective' },
    { wordname: 'learn', wordtype: 'verb' },
    { wordname: 'play', wordtype: 'verb' },
    { wordname: 'run', wordtype: 'verb' },
    { wordname: 'very', wordtype: 'adverb' },
    { wordname: 'rohanshu Banodha', wordtype: 'adverb' },
    { wordname: 'mustafa', wordtype: 'sentence' },
  ];

  // Function to group words into rows of 5
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const rows = chunkArray(wordsarrtemp, 5); // Create rows of 5 card
  const[WordToSpeak,SetWordToSpeak]=useState([])
  const speakallwords=()=>
  {
    //WordToSpeak.forEach((word)=>
    //{
      //speakWord(word)
    //})//
    speakWord(WordToSpeak.toString())
  }
  
  const handledelete=()=>
  {
    if(WordToSpeak.length>0)
    {
      SetWordToSpeak((prev)=>
      {
       return  prev.slice(0,-1)
      })
    }
  }

  const handleclear=()=>
  {
    SetWordToSpeak([])
  }
  return (
    <View style={styles.container}>
      {/* Bar container */}
      <View style={styles.barContainer}>
        {/* Word to be spoken */}
        <Text style={styles.wordText}>Word to speak:{WordToSpeak.join(', ')}</Text>

        {/* Buttons container */}
        <View style={styles.buttonContainer}>
          {/* Speak button */}
          <TouchableOpacity style={styles.button} onPress={speakallwords} >
            <Text style={styles.buttonText}>Speak</Text>
          </TouchableOpacity>

          {/* Delete button */}
          <TouchableOpacity style={styles.button} onPress={handledelete}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleclear}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Vertical Scrollable Language Cards */}
      <FlatList
        data={rows}
        renderItem={({ item }) => (
          <View style={styles.rowContainer}>
            {item.map((word, index) => (
              <LanguageCards key={index} wordName={word.wordname} wordType={word.wordtype}  SetWordToSpeak={SetWordToSpeak} WordToSpeak={WordToSpeak}/>
            ))}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center', // Center the bar container
    backgroundColor: '#f5f5f5',
  },
  barContainer: {
    width: '80%', // Increased width for centering
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10, // Add some margin below the bar
  },
  wordText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginLeft: 10,
  },
  scrollContainer: {
    padding: 10,
    alignItems: 'flex-start',
  },
  rowContainer: {
    flexDirection: 'row', // Make the contents horizontal in each row
    justifyContent: 'flex-start', // Align items to the start
    marginBottom: 10, // Space between rows
  },
});
