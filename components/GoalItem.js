// Import components
import { StyleSheet, View, Text, Pressable } from "react-native";



// This component represents a single Goal item
// It takes the item text as a prop
function GoalItem(props) {

  // Return the GoalItem component
  return (

    <Pressable onPress={props.onDeleteItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;



/* Style Sheet for Goal Item*/
const styles = StyleSheet.create({

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


