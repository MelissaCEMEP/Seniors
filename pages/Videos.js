import React, { useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Video } from "expo-av";

function Videos() {
  const navigation = useNavigation();

  function navegarParaTelaAnterior() {
    navigation.goBack();
  }
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.caixa}>
        <View style={styles.titulo}>
          <Text style={styles.link}>Vídeos</Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: 100,
            flex: 1,
          }}
        >
          <ScrollView style={{ marginBottom: 60 }}>
            <Video
              source={{
                uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              isLooping
              useNativeControls
              style={{ width: 300, height: 200 }}
            />
            <Video
              source={{
                uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              isLooping
              useNativeControls
              style={{ width: 300, height: 200, marginTop: 15 }}
            />

            <Video
              source={{
                uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              isLooping
              useNativeControls
              style={{ width: 300, height: 200, marginTop: 15 }}
            />
            <Video
              source={{
                uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              isLooping
              style={{ width: 300, height: 200, marginTop: 15 }}
            />
          </ScrollView>
          <View style={styles.footer}>
            <View style={styles.botao_voltar_caixa}>
              <TouchableOpacity
                style={styles.botao_voltar}
                onPress={navegarParaTelaAnterior}
              >
                <Text style={styles.botao_voltar_texto}>Voltar</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.badge}>SENIORS</Text>
          </View>
        </View>
      </View>
    </>
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
    backgroundColor: "#5A60FE",
    width: 263,
    height: 75,
    borderColor: "#FEF745",
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
    color: "#FFFFFF",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  link: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 47,
    textTransform: "uppercase",
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
  badge: {
    fontSize: 25,
    color: "#FEF745",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  botao_voltar_caixa: {
    width: "90%",
    alignItems: "flex-start",
  },
  titulo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FEF745",
    width: "100%",
    height: 90,
    position: "absolute",
    top: 0,
    paddingTop: 20,
    paddingLeft: 10,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
  },
});

export default Videos;
