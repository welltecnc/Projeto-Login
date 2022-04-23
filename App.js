import { StyleSheet, View } from 'react-native';
import {Button,Input,Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      <Text h2>Entre com seu Login</Text>
      <Input
      placeholder="usuario"
      leftIcon={{type:'font-awesome', name: 'user'}}
      onChangeText={value => Text(value)}
      />

      <Input
      placeholder="Digite sua Senha"
      leftIcon={{type: 'font-awesome', name:'key'}}
      onChangeText={value=> setPassword(value)}
      secureTextEntry={true}
      />
      <Button
       icon={
         <icon
         name="check"
         size={15}
         color="white"
      />

       }
       title="Logar"
       onPress={()=> entrar}
      />





    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
