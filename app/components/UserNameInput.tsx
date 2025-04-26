import { Button, Text, View, TextInput, ScrollView, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useRouter } from 'expo-router';


const UserNameInput = () => {
  const [userNameInput, setUserNameInput] = useState('');
  const router = useRouter()

  const onChangeUserNameInput = (event) => {
    const text = event.nativeEvent.text;
    setUserNameInput(text);
  }

  const onPressUserData = () => {
    if (userNameInput)
      router.navigate({
        pathname: `/UserPage/${userNameInput}`,
        params: { 
          username: userNameInput,
        }
      })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <TextInput
          value={userNameInput}
          onChange={onChangeUserNameInput}
          style={styles.input}
        />
        <Button
          title="Get user data"
          onPress={onPressUserData}
          style={styles.button}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 12,
  },
  button: {
    width: '80%',
    marginTop: 8,
  },
});


export default UserNameInput;
