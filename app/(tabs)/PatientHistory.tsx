import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import generalStyles from '../generalStyles';

const PatientHistory = () => {
  
  const initialPatientHistory = [
    {
      id: '1',
      patientName: 'John Doe',
      patientId: 'A12345',
      age: 45,
      lastVisitDate: '2024-11-05',
      lastSicknessIssue: 'Sprained Ankle',
      tabletsGiven: ['Ibuprofen', 'Paracetamol'],
      longTermConditions: 'Hypertension',
      ongoingMedications: ['Lisinopril'],
    },
    {
      id: '2',
      patientName: 'Jane Smith',
      patientId: 'B67890',
      age: 50,
      lastVisitDate: '2024-10-20',
      lastSicknessIssue: 'Migraine',
      tabletsGiven: ['Sumatriptan'],
      longTermConditions: 'Diabetes',
      ongoingMedications: ['Metformin'],
    },
    {
      id: '3',
      patientName: 'Alice Johnson',
      patientId: 'C23456',
      age: 60,
      lastVisitDate: '2024-09-18',
      lastSicknessIssue: 'Osteoarthritis',
      tabletsGiven: ['Ibuprofen', 'Naproxen'],
      longTermConditions: 'Osteoarthritis',
      ongoingMedications: ['Celecoxib'],
    },
    {
      id: '4',
      patientName: 'Bob Brown',
      patientId: 'D34567',
      age: 65,
      lastVisitDate: '2024-08-22',
      lastSicknessIssue: 'Chronic Back Pain',
      tabletsGiven: ['Acetaminophen'],
      longTermConditions: 'Spinal Stenosis',
      ongoingMedications: ['Gabapentin'],
    },
    {
      id: '5',
      patientName: 'Clara White',
      patientId: 'E45678',
      age: 30,
      lastVisitDate: '2024-07-29',
      lastSicknessIssue: 'Asthma',
      tabletsGiven: ['Albuterol'],
      longTermConditions: 'Asthma',
      ongoingMedications: ['Fluticasone'],
    },
    {
      id: '6',
      patientName: 'David Green',
      patientId: 'F56789',
      age: 55,
      lastVisitDate: '2024-06-15',
      lastSicknessIssue: 'High Cholesterol',
      tabletsGiven: ['Simvastatin'],
      longTermConditions: 'Hyperlipidemia',
      ongoingMedications: ['Atorvastatin'],
    },
    {
      id: '7',
      patientName: 'Emma Blue',
      patientId: 'G67890',
      age: 40,
      lastVisitDate: '2024-05-10',
      lastSicknessIssue: 'Thyroid Disorder',
      tabletsGiven: ['Levothyroxine'],
      longTermConditions: 'Hypothyroidism',
      ongoingMedications: ['Levothyroxine'],
    },
    {
      id: '8',
      patientName: 'Frank Black',
      patientId: 'H78901',
      age: 48,
      lastVisitDate: '2024-04-05',
      lastSicknessIssue: 'Kidney Stones',
      tabletsGiven: ['Pain Relievers'],
      longTermConditions: 'Nephrolithiasis',
      ongoingMedications: ['Allopurinol'],
    },
    {
      id: '9',
      patientName: 'Grace Miller',
      patientId: 'I89012',
      age: 35,
      lastVisitDate: '2024-03-28',
      lastSicknessIssue: 'Seasonal Allergies',
      tabletsGiven: ['Loratadine'],
      longTermConditions: 'Allergic Rhinitis',
      ongoingMedications: ['Montelukast'],
    },
    {
      id: '10',
      patientName: 'Henry Moore',
      patientId: 'J90123',
      age: 62,
      lastVisitDate: '2024-02-14',
      lastSicknessIssue: 'Rheumatoid Arthritis',
      tabletsGiven: ['Methotrexate'],
      longTermConditions: 'Rheumatoid Arthritis',
      ongoingMedications: ['Methotrexate', 'Prednisone'],
    },
    {
      id: '11',
      patientName: 'Ivy Scott',
      patientId: 'K01234',
      age: 54,
      lastVisitDate: '2024-01-22',
      lastSicknessIssue: 'Hypertension',
      tabletsGiven: ['Amlodipine'],
      longTermConditions: 'Hypertension',
      ongoingMedications: ['Losartan'],
    },
    {
      id: '12',
      patientName: 'Jack Taylor',
      patientId: 'L12345',
      age: 47,
      lastVisitDate: '2023-12-10',
      lastSicknessIssue: 'Cholesterol',
      tabletsGiven: ['Simvastatin'],
      longTermConditions: 'Hyperlipidemia',
      ongoingMedications: ['Pravastatin'],
    },
    {
      id: '13',
      patientName: 'Kara Adams',
      patientId: 'M23456',
      age: 29,
      lastVisitDate: '2023-11-18',
      lastSicknessIssue: 'Flu',
      tabletsGiven: ['Paracetamol', 'Oseltamivir'],
      longTermConditions: 'None',
      ongoingMedications: [],
    },
    {
      id: '14',
      patientName: 'Leo King',
      patientId: 'N34567',
      age: 50,
      lastVisitDate: '2023-10-05',
      lastSicknessIssue: 'Anxiety',
      tabletsGiven: ['Diazepam'],
      longTermConditions: 'Generalized Anxiety Disorder',
      ongoingMedications: ['Sertraline'],
    },
    {
      id: '15',
      patientName: 'Mia Lewis',
      patientId: 'O45678',
      age: 33,
      lastVisitDate: '2023-09-12',
      lastSicknessIssue: 'Obesity',
      tabletsGiven: ['Metformin'],
      longTermConditions: 'Metabolic Syndrome',
      ongoingMedications: ['Metformin', 'Liraglutide'],
    },
    {
      id: '16',
      patientName: 'Nathan West',
      patientId: 'P56789',
      age: 37,
      lastVisitDate: '2023-08-08',
      lastSicknessIssue: 'Sinusitis',
      tabletsGiven: ['Amoxicillin'],
      longTermConditions: 'Chronic Sinusitis',
      ongoingMedications: ['Fluticasone Nasal Spray'],
    },
    {
      id: '17',
      patientName: 'Olivia Hall',
      patientId: 'Q67890',
      age: 59,
      lastVisitDate: '2023-07-06',
      lastSicknessIssue: 'GERD',
      tabletsGiven: ['Omeprazole'],
      longTermConditions: 'Gastroesophageal Reflux Disease',
      ongoingMedications: ['Omeprazole'],
    },
    {
      id: '18',
      patientName: 'Pauline Jones',
      patientId: 'R78901',
      age: 42,
      lastVisitDate: '2023-06-04',
      lastSicknessIssue: 'Sciatica',
      tabletsGiven: ['Naproxen'],
      longTermConditions: 'Sciatica',
      ongoingMedications: ['Pregabalin'],
    },
    {
      id: '19',
      patientName: 'Quinn Robinson',
      patientId: 'S89012',
      age: 53,
      lastVisitDate: '2023-05-02',
      lastSicknessIssue: 'Osteoporosis',
      tabletsGiven: ['Alendronate'],
      longTermConditions: 'Osteoporosis',
      ongoingMedications: ['Risedronate'],
    },
    {
      id: '20',
      patientName: 'Rita Clark',
      patientId: 'T90123',
      age: 66,
      lastVisitDate: '2023-04-01',
      lastSicknessIssue: 'Menopause Symptoms',
      tabletsGiven: ['Hormone Replacement Therapy'],
      longTermConditions: 'Menopause',
      ongoingMedications: ['Estradiol'],
    },
  ];  

  const [patientHistory, setPatientHistory] = useState(initialPatientHistory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Filter patient list based on search query
  const filteredPatients = patientHistory.filter((patient) =>
    patient.patientName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle patient selection
  const handlePatientPress = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient History</Text>
      
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search by patient name"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      
      {/* Patient List */}
      {selectedPatient ? (
        <View style={styles.historyContainer}>
          {/* <Text style={styles.patientName}>Patient: {selectedPatient.patientName}</Text>
          <Text style={styles.patientDetail}>ID: {selectedPatient.patientId}</Text>
          <Text style={styles.patientDetail}>Age: {selectedPatient.age}</Text>
          <Text style={styles.patientDetail}>Last Visit: {selectedPatient.lastVisitDate}</Text>
          <Text style={styles.patientDetail}>Diagnosis: {selectedPatient.lastSicknessIssue}</Text>
          <Text style={styles.patientDetail}>Treatment: {selectedPatient.tabletsGiven.join(', ')}</Text>
          <Text style={styles.patientDetail}>Long-term Medical Conditions: {selectedPatient.longTermConditions}</Text>
          <Text style={styles.patientDetail}>Ongoing Medications: {selectedPatient.ongoingMedications.join(', ')}</Text> */}
          <Text style={styles.patientName}>Patient: {selectedPatient.patientName}</Text>
          <Text style={styles.patientDetail}>ID: {selectedPatient.patientId}</Text>
          <Text style={styles.patientDetail}>Age: {selectedPatient.age}</Text>
          <Text style={styles.patientDetail}>Last Visit: {selectedPatient.lastVisitDate}</Text>
          <Text style={styles.patientDetail}>Diagnosis: {selectedPatient.lastSicknessIssue}</Text>
          <Text style={styles.patientDetail}>Treatment: {selectedPatient.tabletsGiven.join(', ')}</Text>
          <Text style={styles.patientDetail}>Long-term Medical Conditions: {selectedPatient.longTermConditions}</Text>
          <Text style={styles.patientDetail}>Ongoing Medications: {selectedPatient.ongoingMedications.join(', ')}</Text>          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {/* Button to go back to patient list */}
          <TouchableOpacity onPress={() => setSelectedPatient(null)} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back to Patients</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filteredPatients}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.patientItem} onPress={() => handlePatientPress(item)}>
              <Text style={styles.patientItemText}>{item.patientName}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006377',
    marginBottom: 20,
  },
  searchBar: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  patientItem: {
    padding: 15,
    backgroundColor: '#006377',
    borderRadius: 8,
    marginBottom: 10,
  },
  patientItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  historyContainer: {
    flex: 1,
    paddingTop: 10,
  },
  patientName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006377',
    marginBottom: 10,
  },
  patientDetail: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#006377',
    borderRadius: 8,
  },
  backButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default PatientHistory;

