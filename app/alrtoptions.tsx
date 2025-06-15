import React, { useState } from 'react';
import { ActivityIndicator, Alert, Button, Modal, StatusBar, StyleSheet, Text, View } from 'react-native';

const Index = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <StatusBar 
        backgroundColor='lightgreen'
        barStyle='dark-content'
        // hidden
      />

      <ActivityIndicator size={'large'} color={'blue'} />
      <Button title='Alert options'
        onPress={
          () =>{
            Alert.alert('Invalid Data','DOB in Incorrect Format',[
              {
                text: 'Cancel',
                onPress: ()=> console.log('Cancel Pressed')
              },
              {
                text: 'Ok',
                onPress: ()=> console.log('Ok Pressed')
              }
            ])
          }
        }
      />
      <Button title="Press to see Modal" onPress={toggleModal} />


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is a modal!</Text>
            <Button title="Close Modal" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
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