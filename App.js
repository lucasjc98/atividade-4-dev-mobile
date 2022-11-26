import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const App = () => {
  const [value, setValue] = useState(1);
  const [sexo, setSexo] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.formLabel}> Cadastro de Usuário </Text>
        <TextInput placeholder="Nome" style={styles.inputStyle} />
        <TextInput placeholder="Sobrenome" style={styles.inputStyle} />
        <TextInput placeholder="Data de Nascimento" style={styles.inputStyle} />
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={150}
          step={1}
          onValueChange={slideValue => setValue(slideValue)}
        />
        <Text style={styles.text}>Idade: {value} ano(s)</Text>
        <Picker
          style={styles.inputStyle}
          selectedValue={sexo}
          onValueChange={itemValue => setSexo(itemValue)}>
          <Picker.Item label="Selecione o sexo..." value="" />
          <Picker.Item label="Feminino" value="Feminino" />
          <Picker.Item label="Masculino" value="Masculino" />
        </Picker>
        <Text style={styles.title}> Termos de Uso</Text>
        <Text style={styles.termosUso}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at
          consectetur lorem donec massa. Viverra accumsan in nisl nisi
          scelerisque eu ultrices. Condimentum vitae sapien pellentesque
          habitant morbi tristique senectus et netus. Platea dictumst quisque
          sagittis purus sit amet volutpat consequat mauris. In cursus turpis
          massa tincidunt dui ut ornare. Aliquet nibh praesent tristique magna.
          Elementum eu facilisis sed odio morbi quis commodo odio. Turpis in eu
          mi bibendum neque egestas. Eu tincidunt tortor aliquam nulla facilisi
          cras. Erat nam at lectus urna duis. Augue lacus viverra vitae congue
          eu consequat ac. Tempus urna et pharetra pharetra massa massa
          ultricies. Ipsum suspendisse ultrices gravida dictum fusce ut placerat
          orci nulla. Placerat in egestas erat imperdiet sed. Consequat ac felis
          donec et odio pellentesque diam volutpat commodo. In nulla posuere
          sollicitudin aliquam ultrices. Quis lectus nulla at volutpat.
          Facilisis mauris sit amet massa. Pellentesque nec nam aliquam sem et
          tortor. Fermentum leo vel orci porta non pulvinar neque laoreet. Elit
          sed vulputate mi sit amet mauris commodo quis. Leo integer malesuada
          nunc vel risus commodo. Velit laoreet id donec ultrices. Risus feugiat
          in ante metus dictum at. Justo laoreet sit amet cursus sit amet
          dictum. Proin fermentum leo vel orci.
        </Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.quebrar}>
            <Text style={styles.btnTexto}> Quebrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#367859',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue',
    height: 50,
    margin: 50,
    borderRadius: 10,
  },
  btnArea: {
    flexDirection: 'row',
    marginBottom: 100,
    height: 40,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  formLabel: {
    fontSize: 20,
    color: '#fff',
    marginTop: 100,
    marginLeft: 100,
    marginBottom: 10,
  },
  inputStyle: {
    marginTop: 20,
    marginLeft: 50,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 120,
    marginBottom: 10,
  },
  title: {
    marginTop: 30,
    marginLeft: 120,
    marginBottom: 10,
    color: '#fff',
    fontSize: 20,
  },
  termosUso: {
    marginLeft: 50,
    marginRight: 50,
    marginBottom: -30,
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'italic',
    textAlign: 'justify',
  },
  slider: {
    width: 300,
    opacity: 1,
    height: 50,
    marginTop: 10,
    marginLeft: 50,
    marginBottom: 10,
  },
});

export default App;
