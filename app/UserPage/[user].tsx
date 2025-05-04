import { Text, ScrollView, Button, StyleSheet } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import { get42UserData, get42UsersData } from "../utils/requests";
import { useEffect, useState } from "react";
import UserNameInput from "../UserNameInput";
import UserIcon from "../components/UserIcon";
import UserProfileCard from "../components/UserProfileCard";
import { useRouter } from 'expo-router';


const ScrollStyle = {
  flexGrow: 1,         // Растягиваем контент на всю высоту [3][4]
  justifyContent: 'center', // Вертикальное центрирование [3]
  alignItems: 'center',    // Горизонтальное центрирование [4]
  paddingVertical: 20    // Фиксированные отступы сверху/снизу [2]
}


const UserPage = () => {
  const { user } = useLocalSearchParams<{ user: string }>();
  const [userData, setUserData] = useState(null);
  const [userIconLink, setUserUconLink] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    get42UserData(user).then(response => {
      // get42UsersData().then(response => {
      const [response_status, response_data] = response;
      if (response_status === 200) {
        setUserData(response_data);
        setUserUconLink(response_data.image.link);
      } else {
        setUserData(null);
      }
      setLoading(false);
    });
  }, [user]);

  if (loading)
    return (<Text>"Loading ..."</Text>)

  return (
    <ScrollView contentContainerStyle={ScrollStyle}>
      <Button
        title="Get new User"
        onPress={() => (router.push("UserNameInput/"))}
        style={styles.button}
      />
      {userData !== null && <UserIcon imageUrl={userIconLink} />}
      {userData !== null && <UserProfileCard userData={userData} />}
      {userData === null && <Text>User not found</Text>}
      {/* <Text>{JSON.stringify(userData || {}, null, 2)}</Text> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '80%',
    paddingBottom: 80,
    marginBottom: 80,
  },
});


export default UserPage;
