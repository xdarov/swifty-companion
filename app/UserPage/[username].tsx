import { Button, Text, View, TextInput, ScrollView } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import { get42UserData, get42UsersData } from "../utils/requests";
import { useEffect, useState } from "react";
import UserNameInput from "../components/UserNameInput";


const UserPage = () => {
  const params = useLocalSearchParams();
  const {username} = params;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log(username);
    get42UserData(username).then(response => {
      // get42UsersData().then(response => {
      const [response_status, response_data] = response;
      console.log(`STATUS ${response_status}`)
      if (response_status === 200) {
        setUserData(response_data);
      }
    });
  }, [username]);

  return (
    <ScrollView>
      <UserNameInput />
      <Text>{`${JSON.stringify(params, null, 2)}`}</Text>
      <Text>{JSON.stringify(userData || {}, null, 2)}</Text>
    </ ScrollView>
  );
}


export default UserPage;
