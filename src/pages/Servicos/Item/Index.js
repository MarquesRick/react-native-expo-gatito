import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import CampoInteiro from '../../../componentes/CampoInteiro';
import estilos from './estilos';

export default function Item({nome, preco, descricao}){
    const [count, setCount] = useState(1);


    return (
        <>
            <View style={estilos.informacao}>
                <Text style={estilos.nome}>{nome}</Text>
                <Text style={estilos.descricao}>{descricao}</Text>
                <Text style={estilos.preco}>{preco}</Text>
            </View>
            <View style={estilos.carrinho}>
                <View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}>Quantidade:</Text>
                        <CampoInteiro valor={count} acao={setCount} />
                    </View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}>Preço:</Text>
                        <Text style={estilos.preco}>0</Text>
                    </View>
                </View>
                <Button title='Adicionar' />
            </View>
            <View style={estilos.divisor} />
        </>
    );
}