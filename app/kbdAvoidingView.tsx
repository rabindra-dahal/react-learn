import {
    Alert,
    Button,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.vContainer}>
          <View style={styles.txtUserNameView}>
            <Text style={styles.txtContent}>User Name</Text>
            <TextInput placeholder={'Please enter text'} 
            style={styles.txtInput} 
            />
          </View>
          <View style={styles.btnView}>
            <Button title={'Submit'} 
            onPress={() => Alert.alert('Text Submitted')} 
            />
          </View>
        </View>
      
      </TouchableWithoutFeedback>
    
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  vContainer : {
    flex: 1,
    justifyContent: 'center',
  },
  txtUserNameView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  btnView: {
    marginTop: 10,
    justifyContent: 'center',

  },
  txtInput: {
    marginBottom: 40,
    fontSize: 18,
    borderBottomWidth: 3, 
    height: 45,
    borderColor: 'red'
  },
  txtContent:{
    fontSize: 18,
    height: 45,
    paddingRight: 10,
    marginHorizontal: 10

  },

});
