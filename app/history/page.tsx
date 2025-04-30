import { View, Text, FlatList, Button, Alert, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import HistoryItem from '../components/HistoryItem';
import { getHistory, clearHistory } from '../../utils/storage';
import { styles } from '../../constants/styles';
import { WordData } from '../../types';

export default function HistoryPage() {
  const [history, setHistory] = useState<WordData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const loadHistory = async () => {
    try {
      const storedHistory = await getHistory();
      setHistory(storedHistory.reverse());
    } catch (error) {
      Alert.alert('Error', 'Failed to load history.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClearHistory = async () => {
    try {
      await clearHistory();
      setHistory([]);
      Alert.alert('Success', 'History cleared.');
    } catch (error) {
      Alert.alert('Error', 'Failed to clear history.');
      console.error(error);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : history.length === 0 ? (
        <Text style={styles.emptyText}>No history yet. Go discover some words!</Text>
      ) : (
        <>
          <FlatList
            data={history}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <HistoryItem wordData={item} />}
          />
          <Button 
            title="Clear History" 
            onPress={handleClearHistory} 
            color="#ff4444"
          />
        </>
      )}
    </View>
  );
}