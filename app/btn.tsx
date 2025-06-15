import { Alert, Button, View } from 'react-native';

const Index = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <Button title="Press"
        onPress={() => Alert.alert("Button pressed...")}
        color='midnightblue'
      />
    </View>
  )
}

export default Index;