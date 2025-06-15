import { Alert, Button, Image, Pressable, Text, View } from 'react-native';

const logoImg = require('../assets/images/adaptive-icon.png');

const Index = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'plum', alignItems: 'center', justifyContent: 'center',}}>
      <Pressable onPress={() => Alert.alert('Pressable pressed within image.')}>
        <Image source={logoImg} style={{width: 100, height: 100,}} />
        <Button title="Press" onPress={() => {Alert.alert("button inside pressable")}} color='pink' />
      </Pressable>
      <Pressable onPress={() => Alert.alert('Text Pressed')}>
        <Text style={{
          color: 'red',
          marginTop: 20,
          borderWidth: 1,
          padding: 6,
          borderColor: 'maroon',
          borderRadius: 10,
          fontStyle: 'italic',
          fontWeight: 'condensedBold',
        }}>Pressable Text</Text>
      </Pressable>
      
    </View>
  )
}

export default Index;