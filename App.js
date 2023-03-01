// Import components (like StatusBar, Text etc) from libraries 
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



// Main App
export default function App() {
  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" />
        <Button title="Add Goal" />
      </View>

      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
      
    </View>
  );
}



// StyleSheet
const styles = StyleSheet.create({

  /* Container for the entire app */
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "aliceblue"
  },

  /* Container with text input and button */
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "lightblue"
  },

  /* Text input field */
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
    backgroundColor: "antiquewhite"
  },

  /* Container with goals */
  goalsContainer: {
    flex: 5,
    backgroundColor: "lightyellow"
  }
});

