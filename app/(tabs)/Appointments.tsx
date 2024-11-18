import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import generalStyles from '../generalStyles'; // Import general styles

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    { id: '1', patientName: 'John Doe', date: '2024-11-13', time: '10:00 AM' },
    { id: '2', patientName: 'Jane Smith', date: '2024-11-13', time: '11:30 AM' },
    { id: '3', patientName: 'Adeline Grace', date: '2024-11-14', time: '9:30 AM' },
    { id: '4', patientName: 'Glorious Priscilla', date: '2024-11-14', time: '1:30 PM' },
    { id: '5', patientName: 'Sam Jones', date: '2024-11-14', time: '3:30 PM' },
  ]);

  return (
    <View style={[generalStyles.container, generalStyles.responsiveLayout]}>
      <Text style={[generalStyles.title, generalStyles.responsiveTitle]}>Appointments</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.appointmentItem, generalStyles.responsivePadding]}>
            <Text style={[styles.patientName, generalStyles.responsiveFontSize]}>{item.patientName}</Text>
            <Text style={[styles.appointmentDetail, generalStyles.responsiveFontSize]}>Date: {item.date}</Text>
            <Text style={[styles.appointmentDetail, generalStyles.responsiveFontSize]}>Time: {item.time}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appointmentItem: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 10,
  },
  patientName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  appointmentDetail: {
    fontSize: 14,
    color: '#555',
  },
});

export default Appointments;














// import React, { useState } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import generalStyles from '../generalStyles';

// const Appointments = () => {
//   const [appointments, setAppointments] = useState([
//     { id: '1', patientName: 'John Doe', date: '2024-11-13', time: '10:00 AM' },
//     { id: '2', patientName: 'Jane Smith', date: '2024-11-13', time: '11:30 AM' },
//     { id: '3', patientName: 'Adeline Grace', date: '2024-11-14', time: '9:30 AM' },
//     { id: '4', patientName: 'Glorious Priscilla', date: '2024-11-14', time: '1:30 PM' },
//     { id: '5', patientName: 'Sam Jones', date: '2024-11-14', time: '3:30 PM' },

//   ]);

//   return (
//     <View style={generalStyles.container}>
//       <Text style={generalStyles.title}>Appointments</Text>
//       <FlatList
//         data={appointments}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.appointmentItem}>
//             <Text style={styles.patientName}>{item.patientName}</Text>
//             <Text style={styles.appointmentDetail}>Date: {item.date}</Text>
//             <Text style={styles.appointmentDetail}>Time: {item.time}</Text>
//           </View>
//         )}
//       />
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
//   },
//   appointmentItem: {
//     padding: 15,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     marginBottom: 10,
//   },
//   patientName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   appointmentDetail: {
//     fontSize: 14,
//     color: '#555',
//   },
// });

// export default Appointments;
