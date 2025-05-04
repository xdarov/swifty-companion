import AsyncStorage from '@react-native-async-storage/async-storage';
import UserNameInput from './UserNameInput';
import { useEffect } from 'react';
import { getOAuthToken } from './utils/requests';


export default () => {
    useEffect(() => {
      AsyncStorage.setItem('accessToken', '123').then(() => {});
      // getOAuthToken();
  }, []);
  return (
    <UserNameInput />
  );
}
