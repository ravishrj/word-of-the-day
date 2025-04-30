import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Word of the Day',
          headerShown: true 
        }}
      />
      <Stack.Screen 
        name="home/page" 
        options={{ 
          title: 'Word of the Day',
          headerShown: true 
        }} 
      />
      <Stack.Screen 
        name="history/page" 
        options={{ 
          title: 'Word History',
          headerShown: true 
        }} 
      />
    </Stack>
  );
}