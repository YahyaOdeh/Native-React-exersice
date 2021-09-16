import { StatusBar } from 'expo-status-bar';
import React,{useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const nData = [1,2,3,4]
  const [number, setNumber] = useState(1); // * number 1 is for login page * * number 2 is for register page * * number 3 is for home page *
  const [bool, setWarn] = useState(false);
  const [input,setinput] = useState("");
  const [input1,setinput2] = useState("");

if(number===1){
  return (
    <View style={styles.container}>
      <Text style={styles.txtStyle}>Login</Text>

      <TextInput
            placeholder="Email"
            style={[styles.inputTxtStyle]}
            onChangeText={input => setinput(input)}
            defaultValue={input}
          ></TextInput>

      <TextInput
            placeholder="Password"
            style={[styles.inputTxtStyle]}
            onChangeText={input1 => setinput2(input1)}
            defaultValue={input1}
          ></TextInput> 

{

<View style={{alignSelf:'flex-start',left:'18%'}} >
<Text style={styles.warningtxtStyle}>
  { bool && 'Enter Email and Password please!'} </Text>
</View>

}

      <TouchableOpacity style={[styles.buttonStyle]} onPress={() => {if(!(input && input1))setWarn(true); else if((input && input1)){setWarn(false); setNumber(3);}}}>
                <Text style={{ alignSelf: "center", color: "white" }}>
                  Login
                </Text>
              </TouchableOpacity> 

              <TouchableOpacity style={[styles.buttonStyle2]} onPress={() => setNumber(2)}>
                <Text style={{ alignSelf: "center", color: "black" }}>
                  Create account ?
                </Text>
              </TouchableOpacity>         

    </View>
  );
  }
else if(number===2){

  return (
    <View style={styles.container}>
      <Text style={styles.txtStyle}>Register</Text>

      <TextInput
            placeholder="Email"
            style={[styles.inputTxtStyle]}
          ></TextInput>

      <TextInput
            placeholder="Password"
            style={[styles.inputTxtStyle]}
          ></TextInput> 

      <TouchableOpacity style={[styles.buttonStyle]}>
                <Text style={{ alignSelf: "center", color: "white" }}>
                  Register
                </Text>
              </TouchableOpacity> 

              <TouchableOpacity style={[styles.buttonStyle2]} onPress={() => setNumber(1)}>
                <Text style={{ alignSelf: "center", color: "black" }}>
                  Login instead
                </Text>
              </TouchableOpacity>         

    </View>
  );
}
else if(number===3){
  return (

    <View style={{padding:40}} >
      
      <Text style={styles.txtStyle}>Home</Text>

      <FlatList
        style={{alignSelf:'flex-start'}}
        numColumns={1}
        data={nData}
        keyExtractor={({item})=>item}
        renderItem={({item}) => <Text style={{margin:5,textAlign:'center'}}>{'Data'+item+'\n'}</Text>}
      
      />
     
    </View>
)
}




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtStyle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom:35,
  },
  warningtxtStyle: {
    fontSize: 10,
    fontWeight: "bold",
    color:'red'
  },
  inputTxtStyle: {
    marginVertical:10,
    fontSize: 14,
    fontWeight: "bold",
    height: 40,
    width: '70%',
    padding: 10,
    backgroundColor: "white",
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 15,
  },
  buttonStyle: {
    backgroundColor: "#14C4FC",
    marginVertical: 10,
    height: 40,
    width: '40%',
    alignItems: "center",
    padding: 10,
  },

  buttonStyle2: {
    backgroundColor: "white",
    marginVertical: 10,
    height: 40,
    width: '40%',
    alignItems: "center",
    padding: 10,
  },

});
