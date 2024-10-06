import React, { useEffect ,useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList,Image } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import LanguageCards from './LanguageCards';
import arrow_left from '@/assets/images/arrow_back_24dp_F5C7C7.png'
 
import speakWord from "./SpeakingFunction"
export default function LanguageModule({navigation}) {
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
    { wordname: 'I', wordtype: 'pronoun' , url: require('@/assets/images/I.jpeg') },
    { wordname: 'want', wordtype: 'verb', url: require('@/assets/images/Want.jpeg')  },
    { wordname: 'to', wordtype: 'preposition',url: require('@/assets/images/Want.jpeg')  },
    { wordname: 'eat', wordtype: 'verb',url: require('@/assets/images/Eat.jpeg')  },
    { wordname: 'Drink', wordtype: 'adjective',url: require('@/assets/images/Drink.jpeg')  },
    { wordname: 'happy', wordtype: 'adjective',url: require('@/assets/images/Happy.jpeg')  },
    { wordname: 'am', wordtype: 'prepositiion',url: require('@/assets/images/I.jpeg')  },
    { wordname: 'tired', wordtype: 'adjective',url: require('@/assets/images/Tired.jpeg')  },
    { wordname: 'learn', wordtype: 'verb',url: require('@/assets/images/Learn.jpeg')  },
    { wordname: 'play', wordtype: 'verb',url: require('@/assets/images/Play.jpeg')  },
    { wordname: 'run', wordtype: 'verb',url: require('@/assets/images/Want.jpeg')  },
    { wordname: 'very', wordtype: 'adverb',url: require('@/assets/images/Want.jpeg')  },
   
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
      
      <TouchableOpacity
          className="absolute top-0 left-0 mt-5 ml-5"
          onPress={() => navigation.navigate('WordLevel')} // Replace 'NextPage' with your actual route name
        >
          <Image source={arrow_left} className="w-10 h-10" />
        </TouchableOpacity>
      {/* Bar container */}
      <View style={styles.barContainer}>
        
        {/* Word to be spoken */}
        <Text style={styles.wordText}>Word to speak:{WordToSpeak.join(' ')}</Text>

        {/* Buttons container */}
        <View style={styles.buttonContainer}>
          {/* Speak button */}
          <TouchableOpacity style={styles.button} onPress={speakallwords} >
            <Text style={styles.buttonText} className="text-white">Speak</Text>
          </TouchableOpacity>

          {/* Delete button */}
          <TouchableOpacity style={styles.button} onPress={handledelete}>
            <Text style={styles.buttonText} className="text-white">Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleclear}>
            <Text style={styles.buttonText} className="text-white">Clear</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Vertical Scrollable Language Cards */}
      <FlatList
        data={rows}
        renderItem={({ item }) => (
          <View style={styles.rowContainer}>
            {item.map((word, index) => (
              <LanguageCards key={index} wordName={word.wordname} wordType={word.wordtype}  url={word.url} SetWordToSpeak={SetWordToSpeak} WordToSpeak={WordToSpeak}/>
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
