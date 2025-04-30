import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  word: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  definition: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
    color: '#555',
  },
  exampleContainer: {
    marginBottom: 15,
  },
  exampleLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  example: {
    fontStyle: 'italic',
    color: '#666',
  },
  date: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  historyItem: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  historyWord: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  historyDefinition: {
    fontSize: 14,
    marginBottom: 8,
    color: '#555',
  },
  historyExample: {
    fontSize: 13,
    fontStyle: 'italic',
    marginBottom: 8,
    color: '#666',
  },
  historyDate: {
    fontSize: 12,
    color: '#999',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#777',
  },
});