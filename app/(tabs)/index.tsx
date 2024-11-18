import 'react-native-gesture-handler'; 
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Register from './Register';
import DoctorDashboard from './DoctorDashboard';
import Appointments from './Appointments';
import generalStyles from '../generalStyles';

import PatientAdmission from './PatientAdmission';
import PatientHistory from './PatientHistory'
import {RootStackParamList}  from '@/types/navigation'; 

const Stack = createNativeStackNavigator<RootStackParamList>(); 

const App = () => {
  return (
    //<NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
         <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="DoctorDashboard" component={DoctorDashboard} />
        <Stack.Screen name="Appointments" component={Appointments} />
        <Stack.Screen name="PatientHistory" component={PatientHistory} />
        <Stack.Screen name="PatientAdmission" component={PatientAdmission} />
      </Stack.Navigator>
   
  );
};

export default App;
