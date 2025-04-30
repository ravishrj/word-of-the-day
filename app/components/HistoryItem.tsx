import { View, Text } from 'react-native';
import { styles } from '../../constants/styles';
import { WordData } from '../../types';

interface HistoryItemProps {
  wordData: WordData;
}

export default function HistoryItem({ wordData }: HistoryItemProps) {
  return (
    <View style={styles.historyItem}>
      <Text style={styles.historyWord}>{wordData.word}</Text>
      <Text style={styles.historyDefinition}>{wordData.definition}</Text>
      <Text style={styles.historyExample}>{wordData.example}</Text>
      <Text style={styles.historyDate}>
        Viewed on: {new Date(wordData.date || '').toLocaleString()}
      </Text>
    </View>
  );
}