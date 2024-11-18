import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import generalStyles from '../generalStyles';

const PatientAdmission = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [complaint, setComplaint] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');

  // Input validation logic
  const handleSubmit = () => {
    if (!name || !age || !gender || !contact || !complaint || !emergencyContact) {
      Alert.alert('Error', 'Please fill out all required fields');
      return;
    }
    if (!/^[0-9]+$/.test(age)) {
      Alert.alert('Error', 'Please enter a valid age');
      return;
    }
    if (!/^\d{10}$/.test(contact)) {
      Alert.alert('Error', 'Please enter a valid contact number');
      return;
    }
    if (!/^\d{10}$/.test(emergencyContact)) {
      Alert.alert('Error', 'Please enter a valid emergency contact number');
      return;
    }

    // Form submission logic (e.g., API call)
    Alert.alert('Success', 'Patient admitted successfully!');
  };

  return (
    <View style={generalStyles.container}>
      <Text style={[generalStyles.title, generalStyles.responsiveTitle]}>Patient Admission</Text>

      <TextInput
        style={generalStyles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#666"
      />
      <TextInput
        style={generalStyles.input}
        placeholder="Age"
        value={age}
        keyboardType="numeric"
        onChangeText={setAge}
        placeholderTextColor="#666"
      />
      <TextInput
        style={generalStyles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
        placeholderTextColor="#666"
      />
      <TextInput
        style={generalStyles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        placeholderTextColor="#666"
      />
      <TextInput
        style={generalStyles.input}
        placeholder="Contact Number"
        value={contact}
        keyboardType="phone-pad"
        onChangeText={setContact}
        placeholderTextColor="#666"
      />
      <TextInput
        style={generalStyles.input}
        placeholder="Primary Complaint"
        value={complaint}
        onChangeText={setComplaint}
        placeholderTextColor="#666"
      />
      <TextInput
        style={generalStyles.input}
        placeholder="Emergency Contact"
        value={emergencyContact}
        keyboardType="phone-pad"
        onChangeText={setEmergencyContact}
        placeholderTextColor="#666"
      />

      <TouchableOpacity style={generalStyles.submitButton} onPress={handleSubmit}>
        <Text style={generalStyles.submitButtonText}>Submit Admission</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PatientAdmission;




// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
// import generalStyles from '../generalStyles';

// const PatientAdmission = () => {
  
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [address, setAddress] = useState('');
//   const [contact, setContact] = useState('');
//   const [complaint, setComplaint] = useState('');
//   const [emergencyContact, setEmergencyContact] = useState('');

  
//   const handleSubmit = () => {
//     if (!name || !age || !gender || !contact || !complaint || !emergencyContact) {
//       Alert.alert('Error', 'Please fill out all required fields');
//       return;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Patient Admission</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//         placeholderTextColor="#666"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Age"
//         value={age}
//         keyboardType="numeric"
//         onChangeText={setAge}
//         placeholderTextColor="#666"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Gender"
//         value={gender}
//         onChangeText={setGender}
//         placeholderTextColor="#666"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Address"
//         value={address}
//         onChangeText={setAddress}
//         placeholderTextColor="#666"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Contact Number"
//         value={contact}
//         keyboardType="phone-pad"
//         onChangeText={setContact}
//         placeholderTextColor="#666"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Primary Complaint"
//         value={complaint}
//         onChangeText={setComplaint}
//         placeholderTextColor="#666"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Emergency Contact"
//         value={emergencyContact}
//         keyboardType="phone-pad"
//         onChangeText={setEmergencyContact}
//         placeholderTextColor="#666"
//       />

//       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//         <Text style={styles.submitButtonText}>Submit Admission</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
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
//     marginBottom: 15,
//     backgroundColor: '#f9f9f9',
//     color: '#000',
//   },
//   submitButton: {
//     backgroundColor: '#006377',
//     paddingVertical: 12,
//     borderRadius: 8,
//     marginTop: 20,
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default PatientAdmission;
