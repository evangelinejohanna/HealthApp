import React, { useLayoutEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import generalStyles from '../generalStyles';

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'doctor' | 'patient'>('patient');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigation = useNavigation<RegisterScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'HealthApp',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#006377',
      },
      headerTintColor: '#fff',
    });
  }, [navigation]);

  const handleRegister = async () => {
    setError('');
    if (!email || !password) {
      setError('Please fill in both email and password');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (userType === 'doctor') {
        navigation.navigate('DoctorDashboard');
      } else {
        navigation.navigate('Patient_Dashboard');
      }
    }, 1500);
  };

  return (
    <View style={generalStyles.container}>
      <Text style={generalStyles.header}>Create an Account!</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        style={generalStyles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
        style={generalStyles.input}
      />
      <View style={generalStyles.radioContainer}>
        <Text style={generalStyles.label}>Register as:</Text>
        <View style={generalStyles.radioButton}>
          <TouchableOpacity onPress={() => setUserType('doctor')} style={[generalStyles.radioOption, userType === 'doctor' && generalStyles.radioSelected]}>
            <Text style={generalStyles.radioText}>Doctor</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setUserType('patient')} style={[generalStyles.radioOption, userType === 'patient' && generalStyles.radioSelected]}>
            <Text style={generalStyles.radioText}>Patient</Text>
          </TouchableOpacity>
        </View>
      </View>
      {error ? <Text style={generalStyles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={generalStyles.button} onPress={handleRegister} disabled={loading}>
        {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={generalStyles.buttonText}>Register</Text>}
      </TouchableOpacity>
      <View style={generalStyles.signInLink}>
        <Text style={generalStyles.signInText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={generalStyles.linkText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   radioContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     color: '#000000',
//     marginBottom: 5,
//   },
//   radioButton: {
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//   },
//   radioOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#006377',
//     marginBottom: 10,
//   },
//   radioSelected: {
//     backgroundColor: '#006377',
//     borderColor: '#006377',
//   },
//   radioText: {
//     fontSize: 16,
//     color: '#000000',
//     marginLeft: 10,
//   },
// });

export default Register;




// import React, { useLayoutEffect, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '@/types/navigation';
// import generalStyles from '../generalStyles';

// type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [userType, setUserType] = useState<'doctor' | 'patient'>('patient');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const navigation = useNavigation<RegisterScreenNavigationProp>();

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerTitle: 'Health Solutions',
//       headerTitleAlign: 'center',
//       headerStyle: {
//         backgroundColor: '#006377',
//       },
//       headerTintColor: '#fff',
//     });
//   }, [navigation]);

//   const handleRegister = async () => {
//     setError('');
//     if (!email || !password) {
//       setError('Please fill in both email and password');
//       return;
//     }
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       if (userType === 'doctor') {
//         navigation.navigate('DoctorDashboard'); // Navigate to the Doctor Dashboard
//       } else {
//         navigation.navigate('Patient_Dashboard'); // Navigate to the Patient Dashboard
//       }
//     }, 1500);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Create an Account!</Text>
//       <TextInput
//         value={email}
//         onChangeText={setEmail}
//         placeholder="Enter your email"
//         keyboardType="email-address"
//         style={styles.input}
//       />
//       <TextInput
//         value={password}
//         onChangeText={setPassword}
//         placeholder="Enter your password"
//         secureTextEntry
//         style={styles.input}
//       />
//       <View style={styles.radioContainer}>
//         <Text style={styles.label}>Register as:</Text>
//         <View style={styles.radioButton}>
//           <TouchableOpacity onPress={() => setUserType('doctor')} style={[styles.radioOption, userType === 'doctor' && styles.radioSelected]}>
//             <Text style={styles.radioText}>Doctor</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => setUserType('patient')} style={[styles.radioOption, userType === 'patient' && styles.radioSelected]}>
//             <Text style={styles.radioText}>Patient</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       {error ? <Text style={styles.errorText}>{error}</Text> : null}
//       <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
//         {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.buttonText}>Register</Text>}
//       </TouchableOpacity>
//       <View style={styles.signInLink}>
//         <Text style={styles.signInText}>Already have an account?</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//           <Text style={styles.linkText}>Sign In</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#ffffff',
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#000000',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   input: {
//     height: 50,
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     fontSize: 16,
//     backgroundColor: '#f0f0f0',
//     borderColor: '#006377',
//     color: '#000000',
//   },
//   radioContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     color: '#000000',
//     marginBottom: 5,
//   },
//   radioButton: {
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//   },
//   radioOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#006377',
//     marginBottom: 10,
//   },
//   radioSelected: {
//     backgroundColor: '#006377',
//     borderColor: '#006377',
//   },
//   radioText: {
//     fontSize: 16,
//     color: '#000000',
//     marginLeft: 10,
//   },
//   errorText: {
//     color: '#E74C3C',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: '#006377',
//     paddingVertical: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   buttonText: {
//     fontSize: 18,
//     color: '#ffffff',
//     fontWeight: 'bold',
//   },
//   signInLink: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   signInText: {
//     fontSize: 16,
//     color: '#000000',
//   },
//   linkText: {
//     fontSize: 16,
//     color: '#006377',
//     marginLeft: 5,
//   },
// });

// export default Register;

