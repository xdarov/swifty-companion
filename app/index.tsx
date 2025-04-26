import AsyncStorage from '@react-native-async-storage/async-storage';
import UserNameInput from './components/UserNameInput';
// import { useEffect } from 'react';


export default function Home() {
  // useEffect(() => {
  //   AsyncStorage.setItem('accessToken', '123').then(() => {});
  // }, []);
  return (
    <UserNameInput />
  );
}
