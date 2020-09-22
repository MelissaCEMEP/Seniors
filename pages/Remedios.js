import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-datepicker";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

function Remedios() {
  const [dataEscolhida, setDataEscolhida] = useState([]);
  const [dataInput, setDataInput] = useState("");
  const navigation = useNavigation();

  async function mudarData(date) {
    const newDate = [...dataEscolhida, date];
    setDataEscolhida(newDate);
    setDataInput(date);
    await AsyncStorage.setItem("@data", JSON.stringify(newDate));
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.caixa}>
        <View style={styles.tituloContainer}>
          <Text style={styles.titulo}>Remedios</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: 100,
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.push("Calendario")}
          >
            <Text style={styles.texto}>Calendário</Text>
          </TouchableOpacity>
          <Text style={styles.novo}>Medicamento:</Text>
          <TextInput placeholder="" style={styles.input} />
          <Text style={styles.novo}>Horário:</Text>
          <DatePicker
            style={{ width: 200 }}
            mode="date"
            date={dataInput}
            onDateChange={mudarData}
            placeholder="."
            format="YYYY-MM-DD"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            iconComponent={
              <AntDesign
                name="calendar"
                size={34}
                color="#FEF745"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 4,
                }}
              />
            }
            customStyles={{
              dateInput: {
                marginLeft: 36,
                backgroundColor: "#fff",
                width: 350,
                height: 54,
                borderWidth: 5,
                borderRadius: 50,
                borderColor: "#FEF745",
              },
            }}
          />

          <AntDesign name="pluscircleo" size={50} color="#FEF745" />

          <View style={styles.footer}>
            <View style={styles.botao_voltar_caixa}>
              <TouchableOpacity
                style={styles.botao_voltar}
                onPress={() => navigation.goBack()}
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
  texto: {
    fontSize: 25,
    color: "#FEF745",
    fontWeight: "bold",
    textTransform: "uppercase",
    textDecorationLine: "underline",
  },

  titulo: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 47,
    textTransform: "uppercase",
  },

  tituloContainer: {
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

  novo: {
    fontSize: 30,
    color: "#FFFFFF",
    textTransform: "uppercase",
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

  input: {
    width: 315,
    height: 54,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#FEF745",
    padding: 10,
    backgroundColor: "#fff",
  },

  inputMenor: {
    width: 202,
    height: 54,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#FEF745",
    padding: 10,
    backgroundColor: "#fff",
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

  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
  },

  badge: {
    fontSize: 25,
    color: "#FEF745",
    fontWeight: "bold",
    textTransform: "uppercase",
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

export default Remedios;
