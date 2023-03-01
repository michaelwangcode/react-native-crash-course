// Import state hook
import { useState } from 'react';

// Import components (like StatusBar, Text etc) from libraries 
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



// Main App
export default function App() {

  // Use a state hook to store the entered text
  // It is a blank string by default and set using the enteredGoalText function
  const [enteredGoalText, setEnteredGoalText] = useState("");

  // Use a state hook to update the course goals
  const [courseGoals, setCourseGoals] = useState([]);


  // This function gets executed whenever the text in the input changes
  function goalInputHandler(enteredText) {

    // Set the goal text to the text in the input
    setEnteredGoalText(enteredText);
  };

  // This function gets executed when the "Add Goal" button is pressed
  function addGoalHandler() {

    // Update the courseGoals array by appending the new goal
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
  };



  // Return the Main App component
  return (

    /* Main app container */
    <View style={styles.appContainer}>

      {/* Text and button container */}
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

      {/* Goal container */}
      <View style={styles.goalsContainer}>

        {/* Display all of the goals using the map function */}
        {courseGoals.map((goal) => 
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        )}

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
  },

  /* Container for individual goal */
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  /* Individual text */
  goalText: {
    color: "white"
  }

});

