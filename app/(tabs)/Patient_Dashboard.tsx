import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation';
import generalStyles from '../generalStyles';

const PatientDashboard = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={generalStyles.container}>
      <Text style={[generalStyles.title, generalStyles.responsiveTitle]}>Patient Dashboard</Text>

      <View style={generalStyles.cardContainer}>
        <TouchableOpacity style={generalStyles.card} onPress={() => navigation.navigate('MedicalHistoryScreen')}>
          <Image
            source={{ uri: '../assets/medical-history-logo.jpg' }}
            style={generalStyles.icon}
          />
          <Text style={generalStyles.cardText}>Medical History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={generalStyles.card} onPress={() => navigation.navigate('ReminderScreen')}>
          <Image
            source={{ uri: '../assets/reminder-logo.jpg' }}
            style={generalStyles.icon}
          />
          <Text style={generalStyles.cardText}>Reminder</Text>
        </TouchableOpacity>

        <TouchableOpacity style={generalStyles.card} onPress={() => navigation.navigate('ConsultationScreen')}>
          <Image
            source={{ uri: '../assets/consultation-logo.jpg' }}
            style={generalStyles.icon}
          />
          <Text style={generalStyles.cardText}>Consultation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={generalStyles.card} onPress={() => navigation.navigate('PrescriptionScreen')}>
          <Image
            source={{ uri: '../assets/prescription-logo.jpg' }}
            style={generalStyles.icon}
          />
          <Text style={generalStyles.cardText}>Prescriptions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PatientDashboard;








// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { NavigationProp, useNavigation } from '@react-navigation/native';
// import { RootStackParamList } from '@/types/navigation';
// import generalStyles from '../generalStyles';

// const PatientDashboard = () => {
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Patient Dashboard</Text>

//       <View style={styles.cardContainer}>
//         <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MedicalHistoryScreen')}>
//           <Image
//             source={{ uri: '../assets/medical-history-logo.jpg' }}
//             style={styles.icon}
//           />
//           <Text style={styles.cardText}>Medical History</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ReminderScreen')}>
//           <Image
//             source={{ uri: '../assets/reminder-logo.jpg' }}
//             style={styles.icon}
//           />
//           <Text style={styles.cardText}>Reminder</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ConsultationScreen')}>
//           <Image
//             source={{ uri: '../assets/consultation-logo.jpg' }}
//             style={styles.icon}
//           />
//           <Text style={styles.cardText}>Consultation</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('PrescriptionScreen')}>
//           <Image
//             source={{ uri: '../assets/prescription-logo.jpg' }}
//             style={styles.icon}
//           />
//           <Text style={styles.cardText}>Prescriptions</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#006377',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#ffffff',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   cardContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   card: {
//     width: '40%', 
//     height: 150,
//     backgroundColor: '#ffffff',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 8,
//   },
//   icon: {
//     width: 60,
//     height: 60,
//     marginBottom: 10,
//   },
//   cardText: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#006377',
//     textAlign: 'center',
//   },
// });

// export default PatientDashboard;
