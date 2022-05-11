import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  icon: {
    marginLeft: 2,
    alignSelf: "center",
    marginRight: 3,
    fontSize: 35,
  },
  input: {
    flex: 1,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
});
export default SearchBar;
