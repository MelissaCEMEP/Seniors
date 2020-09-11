import React from "react"
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'


function Emergencia(){
    
    return(
        <View style={styles.caixa}>
            <Text style={styles.link}>Emergencia</Text>

            <TouchableOpacity style={styles.botao}>
             <Text style={styles.texto}>Ambulância</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.texto}>Bombeiro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.texto}>Policia Militar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao_voltar}>
                <Text style={styles.botao_voltar_text}>Voltar</Text>
            </TouchableOpacity>

        </View>
        )
}

const styles = StyleSheet.create({
    caixa: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'space-around', 
        backgroundColor: '#5A60FE'
    },
    botao: {
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#5A60FE',
        width: 263,
        height: 75,
        borderColor: '#FEF745',
        borderWidth: 6,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    texto: {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    link: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 27
    },


    botao_voltar: {
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#FEF745',
        width: 136,
        height: 41,
        borderColor: '#FEF745',
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,

        fontSize: 25,
        color: '#000000',
        fontWeight: 'bold',
        textTransform: 'uppercase'

    },

})

export default Emergencia
