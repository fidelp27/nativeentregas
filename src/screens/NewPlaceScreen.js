import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Text, TextInput, Button } from "react-native";
import colors from "../utils/colors";
import { useDispatch } from "react-redux";
import { addPlace } from "../store/place.slice";
import ImageSelector from "../components/ImageSelector";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 5,
  }
});

const NewPlaceSreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const onHandleTitleChange = (text) => setTitle(text);
  const onHandleSubmit = () => {
    dispatch(addPlace(title));
    navigation.navigate("Place");
  }
  return (
    <ScrollView style={styles.container}>
     <View style={styles.content}>
        <Text style={styles.title}>Titulo</Text>
        <TextInput style={styles.input} placeholder="Nueva ubicacion"  onChangeText={onHandleTitleChange} value={title}/>
        <ImageSelector onImage={(image) => console.log(image)} />
        <Button 
          title="Grabar Direccion"
          color={colors.primary}
          onPress={onHandleSubmit}
        />
     </View>
    </ScrollView>
  );
};

export default NewPlaceSreen;
