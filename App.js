// Import state hook
import { useState } from 'react';

// Import components (like StatusBar, Text etc) from libraries 
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



// Main App
export default function App() {

  // Use a state hook to store the entered text
  // It is a blank string by default and set using the enteredGoalText function
  const [enteredGoalText, setEnteredGoalText] = useState("");


  // This function gets executed whenever the text in the input changes
  function goalInputHandler(enteredText) {

    // Set the goal text to the text in the input
    setEnteredGoalText(enteredText);
  };


  // This function gets executed when the "Add Goal" button is pressed
  function addGoalHandler() {

    // Pritn the entered text
    console.log(enteredGoalText);
  };



  // Return the Main App component
  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>

        {/* When text is entered, call the goalInputHandler function */}
        <TextInput 
          style={styles.textInput} 
          placeholder="Your course goal!" 
          onChangeText={goalInputHandler}
        />

        {/* When button is pressed, call the addGoalHandler function */}
        <Button title="Add Goal" onPress={addGoalHandler} />
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

