import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing icons

export default function VerticalBar({ navigation,AddNew }) {
  return (
    <View style={styles.container}>
      {/* Go Back Button with Back Arrow Icon */}
      <TouchableOpacity style={styles.button} onPress={() => alert("goback ")}>
        <Icon name="arrow-back" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>

      {/* Settings Button with Gear Icon */}
      <TouchableOpacity style={styles.button} onPress={() => alert('Settings')}>
        <Icon name="settings" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      {/* Quick Access Button with Shortcut Icon */}
      <TouchableOpacity style={styles.button} onPress={() => alert('Quick Access')}>
        <Icon name="flash-on" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Quick Access</Text>
      </TouchableOpacity>

      {/* Add New Folder Button with Plus Icon */}
      <TouchableOpacity style={styles.button} onPress={() => alert('Add New Folder')}>
        <Icon name="add" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>{AddNew}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0, // Aligns the bar to the rightmost side of the screen
    top: 0, // Starts from the top
    bottom: 0, // Stretches to the bottom of the screen
    width: 150, // Increased width of the vertical bar
    backgroundColor: '#D3D3D3', // Light grey color for the bar
    justifyContent: 'center', // Center the buttons vertically
    alignItems: 'center', // Align buttons in the center horizontally
    paddingVertical: 10, // Add some padding between buttons
  },
  button: {
    width: '90%',
    flexDirection: 'row', // Arrange icon and text side by side
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 5,
    marginBottom: 15,
    backgroundColor: '#007bff', // Button color
    borderRadius: 8, // Rounded corners
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8, // Space between icon and text
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
