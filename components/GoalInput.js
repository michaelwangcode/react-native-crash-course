// Import state hook
import { useState } from "react";

// Import components
import { View, TextInput, Button, StyleSheet } from "react-native";



// This component represents the text input field
// It takes a function as props, chich gets executed wthen the button is pressed
function GoalInput(props) {

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

    // Call the onAddGoal function that we recieved from props
    props.onAddGoal(enteredGoalText);

    // Clear the text after the button is pressed
    setEnteredGoalText("");
  }


  // Return the GoalInput component
  return (

    // Text and button container
    <View style={styles.inputContainer}>

      {/* When text is entered, call the goalInputHandler function */}
      <TextInput 
        style={styles.textInput} 
        placeholder="Your course goal!" 
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />

      {/* When button is pressed, call the onAddGoal function passed down by App.js */}
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;



/* Style Sheet for Goal Input */
const styles = StyleSheet.create({

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
});

