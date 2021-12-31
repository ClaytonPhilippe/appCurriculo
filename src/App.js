import React from 'react';
import { View, Text, Image, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Card from './components/Card'
import foto from './assets/foto.jpg'

const App = () => {

  function handleRedeSocial(rede_social) {

    switch (rede_social) {

      case 'github':
        Alert.alert('Meu Github', 'https://github.com/ClaytonPhilippe')
        break
      case 'facebook':
        Alert.alert('Meu Facebook', 'https://www.facebook.com/claytonphilippe')
        break
      case 'linkedin':
        Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/claytonphilippe/')
        break
    }

  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Clayton Philippe</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>

          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={20} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <Icon name="facebook" size={20} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <Card titulo="Objetivo">
          <Text style={style.card_content_text}>Atuar na área de desenvolvimento.</Text>
        </Card>

        <Card titulo="Formação Acadêmica">
          <Text style={style.card_content_text}>Sistemas de Informação</Text>
        </Card>


      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  nome: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '35%',
    marginTop: 20
  },
  
})


export default App