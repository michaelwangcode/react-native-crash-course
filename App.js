// Import state hook
import { useState } from 'react';

// Import components (like StatusBar, Text etc) from libraries 
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';

// Import the GoalItem component from GoalItem.js
import GoalItem from "./components/GoalItem";



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

    // Update the courseGoals array by appending the new goal, which consists of text and a key
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
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

        {/* Use FlatList component to display list of goals*/}
        <FlatList 

          /* Pass the courseGoals array as data */
          data={courseGoals} 

          /* Pass the GoalItem component with the item data */
          renderItem={(itemData) => {

            /* Use our own GoalItem component, pass in text prop */
            return <GoalItem text={itemData.item.text} />
          }} 

          /* KeyExtractor lets us use the item id as a key */
          keyExtractor={(item, index) => {
            return item.id;
          }}

          /* Disable bounce on scroll */
          alwaysBounceVertical={false} 
        />

      </View>
    </View>
  );
}



/* Style Sheet for App */
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

});

