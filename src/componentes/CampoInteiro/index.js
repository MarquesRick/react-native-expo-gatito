import React from 'react';
import { TextInput } from 'react-native';

export default function CampoInteiro({valor, acao}){
    const numberString = String(valor);

    return (
        <TextInput 
            keyboardType='number-pad'
            selectTextOnFocus
            onChangeText={(newValue) => {acao(newValue)} }
            value={numberString}
        />
    );
}