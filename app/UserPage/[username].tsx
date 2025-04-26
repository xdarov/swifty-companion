import { Text, ScrollView } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import { get42UserData, get42UsersData } from "../utils/requests";
import { useEffect, useState } from "react";
import UserNameInput from "../components/UserNameInput";
import UserIcon from "../components/UserIcon";
import UserProfileCard from "../components/UserProfileCard";


const ScrollStyle = {
  flexGrow: 1,         // Растягиваем контент на всю высоту [3][4]
  justifyContent: 'center', // Вертикальное центрирование [3]
  alignItems: 'center',    // Горизонтальное центрирование [4]
  paddingVertical: 20    // Фиксированные отступы сверху/снизу [2]
}


const UserPage = () => {
  const params = useLocalSearchParams();
  const {username} = params;
  const [userData, setUserData] = useState(null);
  const [userIconLink, setUserUconLink] = useState(null);

  useEffect(() => {
    get42UserData(username).then(response => {
      // get42UsersData().then(response => {
      const [response_status, response_data] = response;
      if (response_status === 200) {
        setUserData(response_data);
        setUserUconLink(response_data.image.link);
      } else {
        setUserData(null);
      }
    });
  }, [username]);

  return (
    <ScrollView contentContainerStyle={ScrollStyle}>
      <UserNameInput />
      {userData !== null && <UserIcon imageUrl={userIconLink} />}
      {userData !== null && <UserProfileCard userData={userData} />}
      {userData === null && <Text>No User Data</Text>}
      {/* <Text>{JSON.stringify(userData || {}, null, 2)}</Text> */}
    </ScrollView>
  );
}


export default UserPage;
