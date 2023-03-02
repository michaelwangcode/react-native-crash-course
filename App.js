// Import state hook
import { useState } from 'react';

// Import components (like StatusBar, Text etc) from libraries 
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';

// Import the GoalItem component from GoalItem.js
import GoalItem from "./components/GoalItem";

// Import the GoalInput component from GoalItem.js
import GoalInput from "./components/GoalInput";




// Main App
export default function App() {

  // Use a state hook to update the course goals
  const [courseGoals, setCourseGoals] = useState([]);


  // This function gets executed when the "Add Goal" button is pressed
  function addGoalHandler(enteredGoalText) {

    // Update the courseGoals array by appending the new goal, which consists of text and a key
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };


  // This function gets executed when a goal is pressed and will be deleted
  function deleteGoalHandler() {
    console.log("DELETE");
  }



  // Return the Main App component
  return (

    /* Main app container */
    <View style={styles.appContainer}>

      {/* Use our own GoalInput component for getting text input */}
      <GoalInput onAddGoal={addGoalHandler} />


      {/* Goal container */}
      <View style={styles.goalsContainer}>

        {/* Use FlatList component to display list of goals */}
        <FlatList 

          /* Pass the courseGoals array as data */
          data={courseGoals} 

          /* Pass the GoalItem component with the item data */
          renderItem={(itemData) => {

            /* Use our own GoalItem component, pass in text prop and onDeleteItem prop */
            return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} />
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

  /* Container with goals */
  goalsContainer: {
    flex: 5,
    backgroundColor: "lightyellow"
  },

});

