// Import components
import { StyleSheet, View, Text, Pressable } from "react-native";



// This component represents a single Goal item
// It takes the item text as a prop
function GoalItem(props) {

  // Return the GoalItem component
  return (

    /* Goal Item Container */
    <View style={styles.goalItem}>

      {/* Use the Pressable component to perform actions when the view is pressed */}
      <Pressable 
        android_ripple={{color: "#210644"}} // Ripple effect for android only
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem} // Press effect for iOS
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>

    </View>
  );
}

export default GoalItem;



/* Style Sheet for Goal Item*/
const styles = StyleSheet.create({

  /* Container for individual goal */
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  /* Text opacity decreases when goal item is pressed */
  pressedItem: {
    opacity: 0.5,
  },

  /* Individual text */
  goalText: {
    color: "white",
    padding: 8,
  }

});


