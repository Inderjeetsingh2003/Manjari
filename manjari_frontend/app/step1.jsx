import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, Modal } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { StatusBar } from 'expo-status-bar';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';

import calendarIcon from '@/assets/images/calendar_month_24dp_F5C7C7.png';
import disabilityIcon from '@/assets/images/volunteer_activism_24dp_F5C7C7.png';
import difficultyIcon from '@/assets/images/looks_24dp_F5C7C7.png';
import arrow_right from '@/assets/images/arrow_forward_24dp_F5C7C7.png';
import { router, useRouter } from 'expo-router';

const Step1 = () => {
  const router=useRouter();

  const [selectedValue, setSelectedValue] = useState('');
  const [otherText, setOtherText] = useState('');
  const [difficulty, setDifficulty]=useState('');

 
 //Setting the calendar.
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');



  //Sets the date and puts it in the textinput box
  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
    setCalendarVisible(false);
  };

  return (
    <View className="bg-[#DCF2FA] flex-1">
    <ScrollView >
      <StatusBar style="dark" />

      <View className="flex-1 items-center px-5">
        <View className="absolute top-5 right-5">
          <Image
            source={require('@/assets/images/Manjari.jpg')}
            className="w-20 h-20 rounded-full mb-5"
          />
        </View>
      

        <View className="w-full mt-32">
        <Text className="text-2xl mb-5 justify-center text-center">Please answer a few questions.</Text>
      

          <TouchableOpacity onPress={() => setCalendarVisible(true)}>
            <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
              <Image source={calendarIcon} className="w-6 h-6 mr-3" />
              <TextInput
                className="flex-1"
                placeholder="Select child's birthdate"
                placeholderTextColor="#888"
                value={selectedDate}
                editable={false}
              />
            </View>
          </TouchableOpacity>

          <Modal visible={calendarVisible} transparent={true} animationType="slide">
            <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
              <View className="bg-white rounded-lg p-5">
                <Calendar
                  onDayPress={handleDateSelect}
                  markedDates={{
                    [selectedDate]: { selected: true, marked: true, selectedColor: '#00adf5' },
                  }}
                />
                <TouchableOpacity
                  onPress={() => setCalendarVisible(false)}
                  className="mt-3 bg-gray-200 rounded-full p-3"
                >
                  <Text className="text-center text-gray-700">Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Text className="text-sm mb-5 justify-center text-center">Please let us know the child's disability.</Text>
          <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
            <Image source={disabilityIcon} className="w-6 h-6 mr-3" />
            
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, flex: 1 }} 
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Autism" value="autism" />
          <Picker.Item label="Dyslexia" value="dyslexia" />
          <Picker.Item label="Other" value="other" />
        </Picker>
            </View>

            {selectedValue === 'other' && (
        <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
          <Image source={disabilityIcon} className="w-6 h-6 mr-3" />
          <TextInput
            className="flex-1 text-base"
            placeholder="Please specify"
            placeholderTextColor="#888"
            value={otherText}
            onChangeText={setOtherText}
          />
        </View>
      )}
        
        <Text className="text-sm mb-5 justify-center text-center">Please let us know the child's difficulties.</Text>
          <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
            <Image source={difficultyIcon} className="w-6 h-6 mr-3" />
            <TextInput
              className="flex-1 text-base"
              placeholder="Please enter child's difficulties"
              placeholderTextColor="#888"
              value={difficulty}
              onChangeText={setDifficulty}
            />
          </View>
        </View>
        
       
      </View>
      
    
    </ScrollView>
    <TouchableOpacity
          className="absolute bottom-10 right-5"
          onPress={() => router.push('/(tabs)/step2')} // Replace 'NextPage' with your actual route name
        >
          <Image source={arrow_right} className="w-10 h-10" />
        </TouchableOpacity>
    </View>
   
  );
};

export default Step1;
