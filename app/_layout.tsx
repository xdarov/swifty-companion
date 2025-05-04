import { Stack } from 'expo-router';


export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserPage/[user]" />
      <Stack.Screen name="UserNameInput" />
    </Stack>
  );
}
