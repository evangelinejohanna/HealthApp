import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import generalStyles from '../generalStyles';

const PrescriptionUpload = () => {
  const [medicationName, setMedicationName] = useState('');
  const [dosage, setDosage] = useState('');
  const [schedule, setSchedule] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigation = useNavigation();

  const handleUpload = () => {
    Alert.alert('Info', 'Prescription upload triggered');
    navigation.goBack();
  };

  return (
    <ScrollView style={generalStyles.container}>
      <Text style={generalStyles.title}>Prescription Upload</Text>
      <Text style={generalStyles.label}>Medication Name:</Text>
      <TextInput
        value={medicationName}
        onChangeText={setMedicationName}
        placeholder="Enter medication name"
        placeholderTextColor="#808080"
        style={generalStyles.input}
      />
      <Text style={generalStyles.label}>Dosage:</Text>
      <TextInput
        value={dosage}
        onChangeText={setDosage}
        placeholder="Enter dosage (e.g., 1 tablet)"
        placeholderTextColor="#808080"
        style={generalStyles.input}
      />
      <Text style={generalStyles.label}>Schedule (e.g., Morning, Afternoon, Night):</Text>
      <TextInput
        value={schedule}
        onChangeText={setSchedule}
        placeholder="Enter medication schedule"
        placeholderTextColor="#808080"
        style={generalStyles.input}
      />
      <Text style={generalStyles.label}>Additional Instructions:</Text>
      <TextInput
        value={instructions}
        onChangeText={setInstructions}
        placeholder="Enter any additional instructions"
        placeholderTextColor="#808080"
        style={generalStyles.input}
      />
      <View style={generalStyles.buttonContainer}>
        <Button color="#006377" title="Upload Prescription" onPress={handleUpload} />
      </View>
    </ScrollView>
  );
};

export default PrescriptionUpload;








// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, Alert, ScrollView, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import generalStyles from '../generalStyles';


// const PrescriptionUpload = () => {
//   const [medicationName, setMedicationName] = useState('');
//   const [dosage, setDosage] = useState('');
//   const [schedule, setSchedule] = useState('');
//   const [instructions, setInstructions] = useState('');
//   const navigation = useNavigation();


//   const handleUpload = () => {
//     Alert.alert('Info', 'Prescription upload triggered');
//     navigation.goBack();
//   };


//   return (
//     <ScrollView style={styles.container}>
//         <Text style={styles.title}>Prescription Upload</Text>
//       <Text style={styles.label}>Medication Name:</Text>
//       <TextInput
//         value={medicationName}
//         onChangeText={setMedicationName}
//         placeholder="Enter medication name"
//         placeholderTextColor="#808080" 
//         style={styles.input}
//       />
//       <Text style={styles.label}>Dosage:</Text>
//       <TextInput
//         value={dosage}
//         onChangeText={setDosage}
//         placeholder="Enter dosage (e.g., 1 tablet)"
//         placeholderTextColor="#808080"
//         style={styles.input}
//       />
//       <Text style={styles.label}>Schedule (e.g., Morning, Afternoon, Night):</Text>
//       <TextInput
//         value={schedule}
//         onChangeText={setSchedule}
//         placeholder="Enter medication schedule"
//         placeholderTextColor="#808080"
//         style={styles.input}
//       />
//       <Text style={styles.label}>Additional Instructions:</Text>
//       <TextInput
//         value={instructions}
//         onChangeText={setInstructions}
//         placeholder="Enter any additional instructions"
//         placeholderTextColor="#808080"
//         style={styles.input}
//       />
//       <View style={styles.buttonContainer}>
//         <Button color="#006377" title="Upload Prescription" onPress={handleUpload} />
//       </View>
//     </ScrollView>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: 'white', 
//   },
//   label: {
//     fontSize: 16,
//     color: 'black', 
//     marginBottom: 5,
//   },
 
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#006377',
//         marginBottom: 20,
//         textAlign: 'center',
//       },
 
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#f8f8f8', 
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//     color: 'black', 
//   },
//   buttonContainer: {
//     marginTop: 20,
//   },
// });


// export default PrescriptionUpload;

