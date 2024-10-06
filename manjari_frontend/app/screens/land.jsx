import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput ,StyleSheet} from 'react-native';
//import { StatusBar } from 'expo-status-bar';

const Land = ({navigation}) => {
  //const [searchQuery, setSearchQuery] = useState('');
const handleclick=()=>
{
  navigation.navigate('WordLevel')
}
  

  return (
    <View style={styles.container}>
      <View className="absolute top-5 right-5">
          <Image
            source={require('@/assets/images/Manjari.jpg')}
            className="w-20 h-20 rounded-full mb-5"
          />
        </View>
      <Text className='text-lg mt-10' >Select a folder you want to access</Text>

    {/* Folder for Easy */}
    <TouchableOpacity style={[styles.folder,{ backgroundColor: '#FABDB9' }]} onPress={handleclick}>
      <Text style={[styles.folderText]}>Basic</Text>
    </TouchableOpacity>

    {/* Folder for Medium */}
    <TouchableOpacity style={[styles.folder,{ backgroundColor: '#f9a59e' }]} onPress={handleclick}>
      <Text style={[styles.folderText]}>Advanced</Text>
    </TouchableOpacity>

    {/* Folder for Hard */}
    <TouchableOpacity style={[styles.folder,{ backgroundColor: '#f9968e' }]} onPress={handleclick}>
      <Text style={[styles.folderText]}>Quick Access</Text>
    </TouchableOpacity>
   
  </View> 
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly', // Space the items evenly in the container
    alignItems: 'center', // Center the items horizontally
    backgroundColor: '#DCF2FA',
  },
  folder: {
    width: 150, // Width of the folder-like div
    height: 150, // Height of the folder-like div
    backgroundColor: '#f0f0f0', // Background color for the folder
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    borderRadius: 10, // Rounded corners to make it look like a folder
    shadowColor: '#000', // Shadow effect
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3, // Elevation for Android shadow effect
  },
  
  folderText: {
    fontSize: 18, // Font size of the text
    fontWeight: 'bold', // Bold text
    color: '#333', // Text color
  },
});
export default Land;
