import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import generalStyles from '../generalStyles'; // Import general styles

const ConsultationScreen = () => {
  // Sample consultations data
  const consultations = [
    { date: '2024-04-01', doctor: 'Dr. Smith', notes: 'Follow-up on previous diagnosis' },
    { date: '2024-04-10', doctor: 'Dr. Johnson', notes: 'Annual check-up' },
  ];

  return (
    <View style={[generalStyles.container, generalStyles.responsiveLayout]}>
      <Text style={[styles.title, generalStyles.responsiveTitle]}>Consultations</Text>
      
      <FlatList
        data={consultations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[styles.consultationItem, generalStyles.responsivePadding]}>
            <Text style={[styles.date, generalStyles.responsiveFontSize]}>Date: {item.date}</Text>
            <Text style={[generalStyles.responsiveFontSize]}>Doctor: {item.doctor}</Text>
            <Text style={[generalStyles.responsiveFontSize]}>Notes: {item.notes}</Text>
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
  consultationItem: {
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

export default ConsultationScreen;



















// import React from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import generalStyles from '../generalStyles';
// const ConsultationScreen = () => {
//   // Sample consultations data
//   const consultations = [
//     { date: '2024-04-01', doctor: 'Dr. Smith', notes: 'Follow-up on previous diagnosis' },
//     { date: '2024-04-10', doctor: 'Dr. Johnson', notes: 'Annual check-up' },
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Consultations</Text>
      
//       <FlatList
//         data={consultations}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.consultationItem}>
//             <Text style={styles.date}>Date: {item.date}</Text>
//             <Text>Doctor: {item.doctor}</Text>
//             <Text>Notes: {item.notes}</Text>
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
//     backgroundColor: '#ffffff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#006377',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   consultationItem: {
//     padding: 15,
//     marginBottom: 10,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//   },
//   date: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });

// export default ConsultationScreen;
