import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import generalStyles from '../generalStyles';

const PrescriptionScreen = () => {
  // Sample data for prescriptions
  const prescriptions = [
    { date: '2024-03-20', medication: 'Paracetamol', dosage: '500mg twice daily' },
    { date: '2024-04-01', medication: 'Amoxicillin', dosage: '250mg three times daily' },
  ];

  return (
    <View style={generalStyles.container}>
      <Text style={generalStyles.title}>Prescriptions</Text>
      
      <FlatList
        data={prescriptions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={generalStyles.prescriptionItem}>
            <Text style={generalStyles.date}>Date: {item.date}</Text>
            <Text>Medication: {item.medication}</Text>
            <Text>Dosage: {item.dosage}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006377',
    marginBottom: 20,
    textAlign: 'center',
  },
  prescriptionItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default PrescriptionScreen;
