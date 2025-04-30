import { View, Button, ActivityIndicator, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import WordCard from '../components/WordCard';
import { getRandomWord } from '../../utils/api';
import { saveWord, getHistory } from '../../utils/storage';
import { styles } from '../../constants/styles';
import { WordData } from '../../types';

export default function HomePage() {
  const router = useRouter();
  const [wordData, setWordData] = useState<WordData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [historyCount, setHistoryCount] = useState<number>(0);

  const fetchWord = async () => {
    try {
      setLoading(true);
      const data = await getRandomWord();
      const newWordData: WordData = { ...data, date: new Date().toISOString() };
      setWordData(newWordData);
      await saveWord(newWordData);
      updateHistoryCount();
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch word. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateHistoryCount = async () => {
    const history = await getHistory();
    setHistoryCount(history.length);
  };

  useEffect(() => {
    fetchWord();
    updateHistoryCount();
  }, []);

  const navigateToHistory = () => {
    router.push('/history/page');
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <WordCard wordData={wordData} />
          <View style={styles.buttonContainer}>
            <Button title="New Word" onPress={fetchWord} />
            <Button 
              title={`History (${historyCount})`} 
              onPress={navigateToHistory} 
            />
          </View>
        </>
      )}
    </View>
  );
}