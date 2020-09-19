import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function TelaPrincipal() {
  const navigation = useNavigation();

  function navegarParaRemedios() {
    navigation.navigate("Remedios");
  }

  function navegarParaJogos() {
    navigation.navigate("Jogos");
  }

  function navegarParaVideos() {
    navigation.navigate("Videos");
  }

  function navegarParaEmergencia() {
    navigation.navigate("Emergencia");
  }
  return (
    <View style={styles.caixa}>

    <Text style={styles.link}>SENIORS</Text>

      <TouchableOpacity style={styles.botao} onPress={navegarParaRemedios}>
        <Text style={styles.texto}>Remédios</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={navegarParaJogos}>
        <Text style={styles.texto}>Jogos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={navegarParaVideos}>
        <Text style={styles.texto}>Vídeos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={navegarParaEmergencia}>
        <Text style={styles.texto}>Emergência</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  caixa: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#5A60FE",
  },
  botao: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FEF745",
    width: 263,
    height: 75,
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
    fontSize: 36,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  link: {
    color: "#FEF745",
    fontWeight: "bold",
    fontSize: 45,
  },
});
