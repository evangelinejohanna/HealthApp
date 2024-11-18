import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation';
import generalStyles from '../generalStyles';

const DoctorDashboard = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={generalStyles.container}>
      <Text style={[generalStyles.title, generalStyles.responsiveTitle]}>Doctor Dashboard</Text>
      
      <View style={generalStyles.cardContainer}>
        <TouchableOpacity style={generalStyles.card} onPress={() => navigation.navigate('Appointments')}>
          <Image
            source={{ uri: '../assets/appointment-logo.jpg' }}
            style={generalStyles.icon}
          />
          <Text style={generalStyles.cardText}>Appointments</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={generalStyles.card} onPress={() => navigation.navigate('PatientHistory')}>
          <Image
            source={{ uri: '../assets/patient-history-logo.jpg' }} 
            style={generalStyles.icon}
          />
          <Text style={generalStyles.cardText}>Patient History</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={generalStyles.card} onPress={() => navigation.navigate('PatientAdmission')}>
          <Image
            source={{ uri: '../assets/admission-logo.jpg' }} 
            style={generalStyles.icon}
          />
          <Text style={generalStyles.cardText}>Patient Admission</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={generalStyles.card} onPress={() => navigation.navigate('PrescriptionUpload')}>
          <Image
            source={{ uri: '../assets/prescription-logo.jpg' }} 
            style={generalStyles.icon}
          />
          <Text style={generalStyles.cardText}>Upload Prescription</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorDashboard;
















// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { NavigationProp, useNavigation } from '@react-navigation/native';
// import { RootStackParamList } from '@/types/navigation';
// import generalStyles from '../generalStyles';
// const DoctorDashboard = () => {
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Doctor Dashboard</Text>
      
//       <View style={styles.cardContainer}>
//         <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Appointments')}>
//           <Image
//             source={{ uri: '../assets/appointment-logo.jpg' }}
//             style={styles.icon}
//           />
//           <Text style={styles.cardText}>Appointments</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('PatientHistory')}>
//           <Image
//             source={{ uri: '../assets/patient-history-logo.jpg' }} 
//             style={styles.icon}
//           />
//           <Text style={styles.cardText}>Patient History</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('PatientAdmission')}>
//           <Image
//             source={{ uri: '../assets/admission-logo.jpg' }} 
//             style={styles.icon}
//           />
//           <Text style={styles.cardText}>Patient Admission</Text>
//         </TouchableOpacity>
        
        
//         <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('PrescriptionUpload')}>
//           <Image
//             source={{ uri: '../assets/prescription-logo.jpg' }} 
//             style={styles.icon}
//           />
//           <Text style={styles.cardText}>Upload Prescription</Text>
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
//     // aspectRatio: 1, 
//     height: '80%',
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

// export default DoctorDashboard;
