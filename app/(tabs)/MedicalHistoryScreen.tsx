import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import generalStyles from '../generalStyles';

const MedicalHistoryScreen = () => {
  // Sample data for patient's medical history
  const medicalHistory = [
    {
      date: '2024-01-10',
      diagnosis: 'Common Cold',
      treatment: 'Antibiotics prescribed for 5 days',
    },
    {
      date: '2024-02-15',
      diagnosis: 'Migraine',
      treatment: 'Pain relievers prescribed',
    },
    {
      date: '2024-03-20',
      diagnosis: 'Allergy',
      treatment: 'Antihistamines prescribed',
    },
  ];

  return (
    <ScrollView style={generalStyles.container}>
      <Text style={[generalStyles.title, generalStyles.responsiveTitle]}>Medical History</Text>
      {medicalHistory.map((entry, index) => (
        <View key={index} style={generalStyles.historyEntry}>
          <Text style={generalStyles.date}>{entry.date}</Text>
          <Text style={generalStyles.diagnosis}>Diagnosis: {entry.diagnosis}</Text>
          <Text style={generalStyles.treatment}>Treatment: {entry.treatment}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default MedicalHistoryScreen;




// import React from 'react';
// import { View, Text, ScrollView, StyleSheet } from 'react-native';
// import generalStyles from '../generalStyles';

// const MedicalHistoryScreen = () => {
//   // Sample data for patient's medical history
//   const medicalHistory = [
//     {
//       date: '2024-01-10',
//       diagnosis: 'Common Cold',
//       treatment: 'Antibiotics prescribed for 5 days',
//     },
//     {
//       date: '2024-02-15',
//       diagnosis: 'Migraine',
//       treatment: 'Pain relievers prescribed',
//     },
//     {
//       date: '2024-03-20',
//       diagnosis: 'Allergy',
//       treatment: 'Antihistamines prescribed',
//     },
//   ];

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Medical History</Text>
//       {medicalHistory.map((entry, index) => (
//         <View key={index} style={styles.historyEntry}>
//           <Text style={styles.date}>{entry.date}</Text>
//           <Text style={styles.diagnosis}>Diagnosis: {entry.diagnosis}</Text>
//           <Text style={styles.treatment}>Treatment: {entry.treatment}</Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

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
//   historyEntry: {
//     marginBottom: 20,
//     padding: 15,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   date: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   diagnosis: {
//     fontSize: 16,
//     color: '#555',
//   },
//   treatment: {
//     fontSize: 16,
//     color: '#555',
//   },
// });

// export default MedicalHistoryScreen;
