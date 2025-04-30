import AsyncStorage from '@react-native-async-storage/async-storage';
import { WordData } from '../types';

const HISTORY_KEY = 'wordHistory';

export const saveWord = async (wordData: WordData): Promise<void> => {
  try {
    const history = await getHistory();
    const exists = history.some(item => item.word === wordData.word);
    if (!exists) {
      const newHistory = [...history, wordData];
      await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
    }
  } catch (error) {
    console.error('Error saving word:', error);
    throw error;
  }
};

export const getHistory = async (): Promise<WordData[]> => {
  try {
    const history = await AsyncStorage.getItem(HISTORY_KEY);
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error('Error getting history:', error);
    return [];
  }
};

export const clearHistory = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(HISTORY_KEY);
  } catch (error) {
    console.error('Error clearing history:', error);
    throw error;
  }
};