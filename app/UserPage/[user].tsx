import { Text, ScrollView, Button, StyleSheet } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import { get42UserData, get42UsersData } from "../utils/requests";
import { useEffect, useState } from "react";
import UserIcon from "../components/UserIcon";
import UserProfileCard from "../components/UserProfileCard";
import { useRouter } from 'expo-router';


const UserPage = () => {
  const { user } = useLocalSearchParams<{ user: string }>();
  const [userData, setUserData] = useState(null);
  const [userIconLink, setUserUconLink] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    get42UserData(user).then(response => {
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
    <ScrollView contentContainerStyle={styles.scrollStyle}>
      <Button
        title="Get new User"
        onPress={() => (router.push("UserNameInput/"))}
        style={styles.button}
      />
      {userData !== null && <UserIcon imageUrl={userIconLink} />}
      {userData !== null && <UserProfileCard userData={userData} />}
      {userData === null && <Text>User not found</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '80%',
    paddingBottom: 80,
    marginBottom: 80,
  },
  scrollStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  }
});


export default UserPage;
