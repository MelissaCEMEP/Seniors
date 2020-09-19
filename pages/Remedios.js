import React from "react"
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

function Remedios(){
    return(
        <View style={styles.caixa}>
            <Text style={styles.link}>Remedios</Text>

            <TouchableOpacity style={styles.botao}>
            <Text style={styles.texto}>Calendário</Text>
            </TouchableOpacity>

            <Text style={[styles.novo, { fontSize: '10'}]}>Nome do Medicamento:</Text>

            <Text style={styles.novo}>Horário</Text>

            <AntDesign name="pluscircleo" size={24} color="#FEF745" />

            <View style={styles.botao_voltar_caixa}>
                <TouchableOpacity style={styles.botao_voltar}>
                <Text style={styles.botao_voltar_texto}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
} 
const styles = StyleSheet.create({

    texto: {
    fontSize: 30,
    color: "#FEF745",
    fontWeight: "bold",
    textTransform: "uppercase",
    textDecorationLine:"underline"
  },

  novo: { 
      fontSize: 30,
      color: "#FFFFFF",
      textTransform:"uppercase",
      fontWeight: "bold",
  },

  link: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 27,
  },

  caixa: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#5A60FE",
  },

  botao_voltar: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FEF745",
    width: 136,
    height: 41,
    borderColor: "#FEF745",
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
  botao_voltar_texto: {
    fontSize: 25,
    color: "#000000",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  botao_voltar_caixa: {
    width: "90%",
    alignItems: "flex-start",
  },
});

export default Remedios
