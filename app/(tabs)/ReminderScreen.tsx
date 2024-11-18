import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from 'react-native';
import generalStyles from '../generalStyles';

const ReminderScreen = () => {
  const [reminder, setReminder] = useState('');
  const [reminders, setReminders] = useState<string[]>([]);

  const addReminder = () => {
    if (!reminder) {
      Alert.alert('Error', 'Please enter a reminder');
      return;
    }
    setReminders([...reminders, reminder]);
    setReminder('');
  };

  return (
    <View style={generalStyles.container}>
      <Text style={generalStyles.title}>Medication Reminders</Text>
      
      <TextInput
        style={generalStyles.input}
        placeholder="Enter reminder"
        value={reminder}
        onChangeText={setReminder}
      />
      <Button title="Add Reminder" onPress={addReminder} color="#006377" />

      <FlatList
        data={reminders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={generalStyles.reminderItem}>
            <Text style={generalStyles.reminderText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#ffffff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#006377',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//   reminderItem: {
//     padding: 10,
//     marginTop: 10,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//   },
//   reminderText: {
//     fontSize: 16,
//     color: '#333',
//   },
// });

export default ReminderScreen;
