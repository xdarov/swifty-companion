import { Button, Text, View, TextInput, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { getOAuthToken, get42UserData, get42UsersData } from "../utils/requests";
import { useRouter } from 'expo-router';


const UserNameInput = () => {
  const [userNameInput, setUserNameInput] = useState('');
  const router = useRouter()

  const setAuthToken = async () => {
    getOAuthToken().then(token => {
      console.log('Полученный токен:', token);
    
    })
  }
  
//  =============================================================
//  ======================== TESTS ==============================
//  =============================================================

  useEffect(() => {
    setAuthToken()
  }, [])

//  =============================================================
//  ====================== METHODS ==============================
//  =============================================================

  const onChangeUserNameInput = (event) => {
    const text = event.nativeEvent.text;
    setUserNameInput(text);
  }

  const onPresUserData = () => {
    if (userNameInput)
      router.navigate({
        pathname: `/UserPage/${userNameInput}`,
        params: { 
          username: userNameInput,
        }
      })
  }

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          value={userNameInput}
          onChange={onChangeUserNameInput}
          style={{ borderWidth: 1, padding: 10 }}
        />
        <Button
          title={`get user data`}
          onPress={onPresUserData}
        />
      </View>
    </ ScrollView>
  );
}


export default UserNameInput;
