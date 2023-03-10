// Import state hook
import { useState } from "react";

// Import components
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";




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

    /* Add a modal for the input box (displayed on top of the screen) */
    <Modal visible={props.visible} animationType="slide">

      {/* Text and button container */}
      <View style={styles.inputContainer}>

        {/* Add Image */}
        <Image style={styles.image} source={require("../assets/images/goal.png")} />

        {/* When text is entered, call the goalInputHandler function */}
        <TextInput 
          style={styles.textInput} 
          placeholder="Your course goal!" 
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        {/* Container for "Add Goal" and "Cancel" button */}
        <View style={styles.buttonContainer}>

          {/* Add Goal Button */}
          <View style={styles.button}>
            {/* When clicked, call the onAddGoal function passed down by App.js */}
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>
          </View>

          {/* Cancel Button */}
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
            </View>
          </View>

      </View>
    </Modal>
  );
};

export default GoalInput;



/* Style Sheet for Goal Input */
const styles = StyleSheet.create({

  /* Container with text input and button */
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b"
  },

  /* Image styles */
  image: {
    width: 100,
    height: 100,
    margin: 20
  },

  /* Text input field */
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },

  /* Container for "Add Goal" and "Cancel" buttons */
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },

  /* Container for button styling */
  button: {
    width: 100,
    marginHorizontal: 8,
  }

});

