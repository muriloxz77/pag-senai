import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Input from './components/input';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('./assets/Logo.png')} style={styles.logo} />
      <Text style={styles.text}>Bem vindo(a)!</Text>
      <View style={styles.container2}>  
        <Input name="Email:" type={false}/>
        <Input name="Senha:" type={true}/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <Text style={styles.bottomText}>Não possui conta? Cadastre-se</Text>
        <View style={styles.iconsContainer}>
          <FontAwesome5 name="google" size={30} color="#000" style={styles.icon} />
          <FontAwesome5 name="facebook" size={30} color="#000" style={styles.icon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },
  logo: {
    width: 200,
    height: 51,
    marginTop: 60,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    marginTop: 20,
  },
  container2: {
    flex: 1,
    backgroundColor: '#F6FFFD',
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 20,
    paddingTop:39,
    marginTop: 20,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  bottomText: {
    color: '#4305C7',
    textAlign: 'left',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 44,
  },
  icon: {
    marginHorizontal: 10,
  },

});
