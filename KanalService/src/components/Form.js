import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import { useDispatch } from 'react-redux';
import { login } from "../redux/actions/authAction";


function Form() {
    const [inputs, setInputs] = useState({ login: '', password: ''});
    
    const dispatch = useDispatch();

    const submitHandler = () => {
        if(inputs.login !== '' && inputs.password !== ''){
            if(inputs.login == '123' && inputs.password == '123'){
                dispatch(login(inputs.login));              
            }
        } else {
            Alert.alert('Заполните все поля')
        }
    }

    return (
        <View style={styles.form}>

            <Text style={styles.AuthText}>Authorization</Text>

            <Text style={{height:39, width:212, fontSize: 24}}>login</Text>

            <TextInput 
            style={styles.input}
            onChangeText={(text) => setInputs({ ...inputs, login: text })}>
            </TextInput>

            <Text style={{height:39, width:212, marginTop:13, fontSize: 24 }}>password</Text>

            <TextInput 
            secureTextEntry style={styles.input}
            onChangeText={(text) => setInputs({ ...inputs, password: text })}>
            </TextInput>

            <TouchableOpacity style={styles.submit} onPress={submitHandler}>
                <Text style={{fontSize: 24}}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    AuthText: {
        fontSize: 24, 
        width:150, 
        height: 29,
        textAlign:"center", 
        color: "#27569C", 
        marginBottom:8, 
        marginTop:16  
    },

    form: {
        top:14, 
        borderWidth: 5, 
        borderColor: "#27569C", 
        height:333, width:290, 
        alignItems:'center'
    },

    input: {
        width:212, 
        height:39 , 
        borderColor:'#27569C', 
        borderWidth: 2, 
        backgroundColor: '#D9D9D9', 
        borderRadius:10
    },

    submit: {
        width:212, 
        height:43, 
        backgroundColor: '#E4B062', 
        justifyContent:'center', 
        alignItems:'center', 
        marginTop: 23, 
        borderRadius: 5
    }
}

export default Form;