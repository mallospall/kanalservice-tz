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
            } else { Alert.alert('Введенные данные не верны')}
        } else {
            Alert.alert('Заполните все поля')
        }
    }

    return (
        <View style={styles.form}>

            <Text style={styles.AuthText}>Authorization</Text>

            <Text style={styles.Text}>login</Text>

            <TextInput 
            style={styles.input}
            onChangeText={(text) => setInputs({ ...inputs, login: text })}>
            </TextInput>

            <Text style={styles.Text}>password</Text>

            <TextInput 
            secureTextEntry style={styles.input}
            onChangeText={(text) => setInputs({ ...inputs, password: text })}>
            </TextInput>

            <TouchableOpacity style={styles.submit} onPress={submitHandler}>
                <Text style={{fontSize: 24, font: 'Inter', fontStyle: 'normal', fontWeight: '800', lineHeight: 29,}}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    Text: {
        height:39, 
        width:212, 
        fontSize: 24,
        font: 'Inter',
        fontStyle: 'normal',
        fontWeight: '800',
        lineHeight: 29, 
    },
    AuthText: {
        fontSize: 24, 
        width:170, 
        height: 29,
        textAlign:"center", 
        color: "#27569C", 
        marginBottom:8, 
        marginTop:16,
        font: 'Inter',
        fontStyle: 'normal',
        fontWeight: '800',
        lineHeight: 29, 
    },

    form: {
        top:14, 
        borderWidth: 5, 
        borderColor: "#27569C", 
        height:333, width:290, 
        alignItems:'center',
        borderRadius: 5,
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