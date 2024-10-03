import { useUser } from "@clerk/clerk-expo";
import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Link, Redirect, useRootNavigationState } from "expo-router";

export default function Index() {
  const { user } = useUser();
  const rootNavigationState = useRootNavigationState();

  useEffect(() => {
    CheckNavLoaded();
  }, []);

  const CheckNavLoaded = () => {
    if (!rootNavigationState.key) return null;
  }

  return (
    (
      <View>
        {user ? (
          <Redirect href={"/(tabs)/mainpage"} />
        ) : (
          <Redirect href={"/login"} />
        )}
        {/* <Link href={"/login"}>
          <Text style={{ fontFamily: "itim" }}>Go to login screen</Text>
        </Link> */}
      </View>
    )
  );
}

// import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { useRouter } from 'expo-router';
// import passwordIcon from '../assets/images/lock_24dp_F5C7C7.png';
// import emailIcon from '../assets/images/email_24dp_F5C7C7.png';
// import nameIcon from '../assets/images/edit_24dp_F5C7C7.png';

// const Index = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const[name, setName]=useState('');

//   const handleLogin = () => {
//     console.log('Logging in with:', email, password);
//     router.push("/(tabs)/step1")
//   };

//   return (
//     <ScrollView className='bg-[#DCF2FA]'>
//     <View className="flex-1 bg-[#DCF2FA] items-center justify-center px-5">
//       <StatusBar style="dark" />
//       <View>
//         <Image
//           source={require('../assets/images/Manjari2.jpg')}
//           className="w-13 h-25 mb-0  object-cover"
//         />
//       </View>
//       <Text className="text-2xl mb-5">Create an account</Text>
//       <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
//         <Image
//           source={nameIcon}
//           className="w-6 h-6 mr-3"
//         />
//         <TextInput
//           className="flex-1 text-base"
//           placeholder="Name"
//           placeholderTextColor="#888"
//           value={name}
//           onChangeText={setName}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//       </View>
//       <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
//         <Image
//           source={emailIcon}
//           className="w-6 h-6 mr-3"
//         />
//         <TextInput
//           className="flex-1 text-base"
//           placeholder="Email"
//           placeholderTextColor="#888"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//       </View>
//       <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
//         <Image
//           source={passwordIcon}
//           className="w-6 h-6 mr-3"
//         />
//         <TextInput
//           className="flex-1 text-base"
//           placeholder="Password"
//           placeholderTextColor="#888"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//       </View>
//       <TouchableOpacity
//         className="w-full p-4 mt-2 bg-[#F5C7C7] rounded-md items-center"
//         onPress={handleLogin}
//       >
//         <Text className="text-white text-lg">Create an account</Text>
//       </TouchableOpacity>
//       <Text className="my-4">-----------------------------------------OR------------------------------------------</Text>
//       <TouchableOpacity
//         className="w-full p-4 mt-2 bg-[#F5C7C7] rounded-md items-center"
//         onPress={handleLogin}
//       >
//         <Text className="text-white text-lg">Create an account using Google</Text>
//       </TouchableOpacity>
//       <Text className='mt-4'>Already have an account?<Text onPress={()=>router.push("/login")}>Login</Text></Text>
//     </View>

//     </ScrollView>
//   );
// };

// export default Index;
