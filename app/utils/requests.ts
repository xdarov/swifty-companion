import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const getOAuthToken = async () => {
  try {
    const response = await axios.post('https://api.intra.42.fr/oauth/token', null, {
      params: {
        grant_type: 'client_credentials',
        client_id: process.env.EXPO_PUBLIC_UID,
        client_secret: process.env.EXPO_PUBLIC_SECRET
      }
    });
    await AsyncStorage.setItem('accessToken', response.data.access_token);
    console.log(`New Token ${response.data.access_token}`);
    return response.data.access_token;
  } catch (error) {
    console.error('Ошибка при получении токена:', error);
  }
}

const get42UsersData = async () => {
  try {
    const response = await axios.get(`https://api.intra.42.fr/v2/cursus/42/users`, {
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem('accessToken')}`,
        timeout: 5000
      },
    });
    return [response.status, response.data];
  } catch (error) {
    console.error(`Ошибка при запросе v2/cursus/42/users:`, error);
  }
}

const get42UserData = async (name: string, retryAttempt = false) => {
  try {
    const response = await axios.get(`https://api.intra.42.fr/v2/users/${(name || '').toLowerCase()}`, {
      headers: { Authorization: `Bearer ${await AsyncStorage.getItem('accessToken')}` },
      timeout: 5000
    });
    return [response.status, response.data];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.code === 'ECONNABORTED'
        ? 408 : error.response?.status || 500;
      
      if (!retryAttempt && status !== 404) {
        await getOAuthToken();
        console.info("Token Request");
        return get42UserData(name, true);
      }

      console.error(`Ошибка при запросе v2/users/${(name || '').toLowerCase()}:`, error.message);
      return [status, null];
    }
    console.error('Неожиданная ошибка:', error);
    return [500, null];
  }
}

export default () => {};
export {getOAuthToken, get42UsersData, get42UserData}
