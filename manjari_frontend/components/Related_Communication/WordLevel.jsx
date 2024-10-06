import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView ,TouchableOpacity} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function WordLevel({navigation}) {
    useEffect(() => {
        const lockOrientation = async () => {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        };

        lockOrientation();

        return async () => {
            await ScreenOrientation.unlockAsync();
        };
    }, []);

    const folderNames = [
        'Folder 1', 
        'Folder 2', 
        'Folder 3', 
        'Folder 4', 
        'Folder 5', 
        'Folder 6', 
        'Folder 7', 
        'Folder 8', 
        'Folder 9', 
        'Folder 10'
    ];

    const handleclick=()=>
    {
navigation.navigate('LanguageModule')
    }
    return (
        <View style={styles.container}>
            {/* Heading */}
            <Text style={styles.heading}>Your Folders</Text>

            {/* Scrollable folder boxes */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {folderNames.map((folderName, index) => (
                    <TouchableOpacity key={index} style={styles.folderBox} onPress={handleclick}  >
                        <Text style={styles.folderText}>{folderName}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start', // Align items to the left
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: 'flex-start', // Align heading to the left
    },
    scrollContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Allow wrapping to the next row
        justifyContent: 'flex-start', // Align items to the start
        width: '80%', // Set scroll container width to 80% of the screen
    },
    folderBox: {
        width: '23%', // Set width to fit 4 folders in a row
        height: 100, // Height of the folder box
        backgroundColor: '#ffeb3b', // Light yellow background
        borderRadius: 5, // Rounded corners
        elevation: 3, // Shadow effect
        justifyContent: 'center', // Center text vertically
        alignItems: 'center', // Center text horizontally
        margin: 5, // Margin around each box
    },
    folderText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});
