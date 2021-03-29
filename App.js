import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Header from "./src/components/Header";

export default class App extends Component {

constructor(props){
  super(props);
  this.state = {
    course: 0,
    period: 0,
    shift: 0,
    courses: [
      {
        key: 0,
        name: 'Administracao',
      },
      {
        key: 1,
        name: 'Biologia',
      },
      {
        key: 2,
        name: 'Contabeis',
      }
    ],
    periods: [
      {
        key: 0,
        value: '1',
      },
      {
        key: 1,
        value: '2',
      },
      {
        key: 2,
        value: '3',
      },
      {
        key: 3,
        value: '4',
      },
      {
        key: 4,
        value: '5',
      },
      {
        key: 5,
        value: '6',
      }
    ],
    shifts: [
      {
        key: 0,
        value: 'Vespertino',
      },
      {
        key: 1,
        value: 'Diurno',
      },
      {
        key: 2,
        value: 'Noturno',
      }
    ]
  }
  
  this.getName = this.getName.bind(this);
}
  getName(value){
    this.setState({name: value});
  }

  render(){

    let coursesItem = this.state.courses.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.name}/>
    })

    let periodsItem = this.state.periods.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.value}/>
    })

    let shiftsItem = this.state.shifts.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.value}/>
    })

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Text style={styles.logo}>Selecione os parâmetros:</Text>
      <TextInput
      style={styles.input}
      placeholder='Digite o seu nome'
      onChangeText={this.getName}
      />
      <Picker
      selectedValue={this.state.course}
      onValueChange={ (itemValue, itemIndex) => this.setState({course: itemValue})}
      >
        {coursesItem}
      </Picker>

      <Picker
      selectedValue={this.state.period}
      onValueChange={ (itemValue, itemIndex) => this.setState({period: itemValue})}
      >
        {periodsItem}
      </Picker>

      <Picker
      selectedValue={this.state.shift}
      onValueChange={ (itemValue, itemIndex) => this.setState({shift: itemValue})}
      >
        {shiftsItem}
      </Picker>

      <Text style={styles.logo}>Informações inseridas: </Text>
      <Text style={styles.info}>Nome: {this.state.name}</Text>
      <Text style={styles.info}>Curso: {this.state.courses[this.state.course].name}</Text>
      <Text style={styles.info}>Período: {this.state.periods[this.state.period].value}º</Text>
      <Text style={styles.info}>Turno: {this.state.shifts[this.state.shift].value}</Text>
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  info: {
    marginTop: 15,
    fontSize: 25,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    fontSize: 20,
    padding: 10,
    margin: 10
  }
});
