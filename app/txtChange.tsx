import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Index = () => {
  const [text, setText] = useState('');
  const handleTextChange = (newText: React.SetStateAction<string>) => { setText(newText)}
  return (
  <View style={styles.container}>
    <TextInput 
      placeholder='Enter User Name'
      style={{
        height:45,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        backgroundColor:'pink',
        color: 'red',
        fontSize: 18
      }}
      value={text}
      onChangeText={handleTextChange}
    
    />
    <Text>You typed: {text}</Text>
  </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'plum',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Shadow for Android
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Index;