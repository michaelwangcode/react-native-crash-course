// Import state hook
import { useState } from 'react';

// Import components (like StatusBar, Text etc) from libraries 
import { StyleSheet, View, FlatList, Button } from 'react-native';

// Import Status bar
import { StatusBar } from "expo-status-bar";

// Import the GoalItem component from GoalItem.js
import GoalItem from "./components/GoalItem";

// Import the GoalInput component from GoalItem.js
import GoalInput from "./components/GoalInput";




// Main App
export default function App() {

  // Use a state hook to update the modal visibility
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // Use a state hook to update the course goals
  const [courseGoals, setCourseGoals] = useState([]);


  // This function displays the modal when the "Add Goal" button is clicked
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }


  // This function hides the modal when the "Cancel" button is clicked
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }


  // This function gets executed when the "Add Goal" button is pressed
  function addGoalHandler(enteredGoalText) {

    // Update the courseGoals array by appending the new goal, which consists of text and a key
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

    // Call the endAddGoalHandler function in GoalInput.js to close the modal
    endAddGoalHandler();
  };


  // This function gets executed when a goal is pressed and will be deleted
  // It takes the id of the item to be deleted
  function deleteGoalHandler(id) {

    // Remove the goal with the given id value
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }



  // Return the Main App component
  return (

    <>
      {/* Add status bar */}
      <StatusBar style="light" />

      {/* Main app container */}
      <View style={styles.appContainer}>

        {/* Add Goal button */}
        <Button 
          title="Add New Goal" 
          color="#a065ec" 
          onPress={startAddGoalHandler}
        />

        {/* Use our own GoalInput component for getting text input */}
        <GoalInput 
          visible={modalIsVisible} 
          onAddGoal={addGoalHandler} 
          onCancel={endAddGoalHandler} 
        />


        {/* Goal container */}
        <View style={styles.goalsContainer}>

          {/* Use FlatList component to display list of goals */}
          <FlatList 

            /* Pass the courseGoals array as data */
            data={courseGoals} 

            /* Pass the GoalItem component with the item data */
            renderItem={(itemData) => {

              /* Use our own GoalItem component with props */
              return (
                <GoalItem 
                  text={itemData.item.text} 
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler} 
                />
              );
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
    </>
  );
}



/* Style Sheet for App */
const styles = StyleSheet.create({

  /* Container for the entire app */
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a"
  },

  /* Container with goals */
  goalsContainer: {
    flex: 5,
  },

});

