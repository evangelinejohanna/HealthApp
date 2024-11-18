import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const breakpoints = {
  small: 320, // Small screens
  medium: 768, // Tablets or medium-sized devices
  large: 1024, // Large tablets or desktops
};

const responsiveFontSize = (size: number) => {
  const scale = width / 320; // 320 is the baseline screen width (e.g., iPhone 5)
  const newSize = size * scale;
  // return Platform.OS === 'web' ? newSize : Math.round(newSize); // Ensure rounded size on mobile, unrounded on web
};


const cardWidth = width < 350 ? '45%' : '30%'; 

const responsivePadding = 20; // Adjust based on screen width

// Responsive font size for titles and other text
const responsiveTitleFontSize = responsiveFontSize(24);
const responsiveTextFontSize = responsiveFontSize(16);

const generalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    ...(Platform.OS === 'web' && {
      maxWidth: 1200,  // Add max width for larger screens on the web
      marginHorizontal: 'auto', // Center content horizontally
    }),
  },

  dashboardContainer: {
    flex: 1,
    flexDirection: width < breakpoints.medium ? 'column' : 'row',
    justifyContent: 'space-between',
    // padding: 20,
    padding: width < breakpoints.medium ? 15 : 30,
    maxWidth: 1200,  // Limits the maximum width to avoid stretching on larger screens
    marginHorizontal: 'auto',  // Centers the content
  },
  
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },

  button: {
    backgroundColor: '#006377',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    ...(Platform.OS === 'web' && {
      paddingVertical: 18, // Adjust for web if needed
    }),
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  signInLink: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signInText: {
    fontSize: 16,
    color: '#000000',
  },
  linkText: {
    fontSize: 16,
    color: '#006377',
    marginLeft: 5,
  },
  errorText: {
    color: '#E74C3C',
    marginBottom: 15,
    textAlign: 'center',
  },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 30,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006377',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  reminderItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  reminderText: {
    fontSize: 16,
    color: '#333',
  },

 
  responsiveTitle: {
    fontSize: width < breakpoints.medium ? 20 : 24, // Adjust size based on screen width
  },
  responsivePadding: {
    padding: width < breakpoints.medium ? 10 : 20, // Adjust padding based on screen width
  },

  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  // Card styles (responsive width, padding, etc.)
  card: {
    // width: cardWidth,
    width: width < 350 ? '45%' : '30%', 
    // height: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    // marginBottom: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },

  // Icon styles for card images
  icon: {
    width: responsiveFontSize(60),
    height: responsiveFontSize(60),
    marginBottom: 10,
  },

  // Text on the card
  cardText: {
    fontSize: responsiveFontSize(18),
    fontWeight: '600',
    color: '#006377',
    textAlign: 'center',
  },
  historyEntry: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  // Date text style
  date: {
    fontSize: responsiveTextFontSize,
    fontWeight: 'bold',
    color: '#333',
  },

  // Diagnosis text style
  diagnosis: {
    fontSize: responsiveTextFontSize,
    color: '#555',
  },

  // Treatment text style
  treatment: {
    fontSize: responsiveTextFontSize,
    color: '#555',
  },

  
  responsiveFontSize: {
    fontSize: responsiveFontSize(14),  // Adjust to 14 for general text
  },

  
  largeScreenContainer: {
    padding: 30,
    maxWidth: 1200,  // Limit the width for large screens (you can adjust the value as needed)
    marginHorizontal: 'auto',  // Center content horizontally
  },
  

  
  responsiveLayout: {
    flexDirection: width < breakpoints.medium ? 'column' : 'row',
    justifyContent: 'center',
    marginHorizontal: 20, // Adds some horizontal margin on larger screens
  },
  

 
  smallScreenText: {
    fontSize: 14,
  },
  mediumScreenText: {
    fontSize: 16,
  },
  largeScreenText: {
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: '#006377',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },

  submitButtonText: {
    color: '#fff',
    fontSize: responsiveTextFontSize,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonContainer: {
    marginTop: 20,
  },
  
  prescriptionItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },

  radioContainer: {
    marginBottom: 20,
  },
  
  radioButton: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#006377',
    marginBottom: 10,
  },
  radioSelected: {
    backgroundColor: '#006377',
    borderColor: '#006377',
  },
  radioText: {
    fontSize: 16,
    color: '#000000',
    marginLeft: 10,
  },
  
});

export default generalStyles;
