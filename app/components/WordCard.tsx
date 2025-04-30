import { View, Text } from 'react-native';
import { styles } from '../../constants/styles';
import { WordData } from '../../types';

interface WordCardProps {
  wordData: WordData | null;
}

export default function WordCard({ wordData }: WordCardProps) {
  if (!wordData) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.word}>{wordData.word}</Text>
      <Text style={styles.definition}>{wordData.definition}</Text>
      <View style={styles.exampleContainer}>
        <Text style={styles.exampleLabel}>Example:</Text>
        <Text style={styles.example}>{wordData.example}</Text>
      </View>
      <Text style={styles.date}>
        {new Date(wordData.date || '').toLocaleDateString()}
      </Text>
    </View>
  );
}