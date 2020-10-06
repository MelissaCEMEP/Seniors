import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import AsyncStorage from "@react-native-community/async-storage";
import DatePicker from "react-native-datepicker";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

function Calendario() {
  const navigation = useNavigation();
  const [dataEscolhida, setDataEscolhida] = useState("");
  LocaleConfig.locales["pt"] = {
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthNamesShort: [
      "Jan.",
      "Fev.",
      "Mar",
      "Abril",
      "Mai",
      "Jun",
      "Jul.",
      "Ago",
      "Set.",
      "Out.",
      "Nov.",
      "Dez.",
    ],
    dayNames: [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
      "Domingo",
    ],
    dayNamesShort: ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sab."],
  };

  LocaleConfig.defaultLocale = "pt";

  useEffect(() => {
    async function carregarDatas() {
      const data = await AsyncStorage.getItem("@data");
      if (data !== null) {
        const newDate = JSON.parse(data).reduce((obj, item) => {
          console.log(item);
          return Object.assign(obj, {
            [item]: { selected: true, marked: true, selectedColor: "blue" },
          });
        });

        setDataEscolhida(newDate);
      }
    }

    carregarDatas();
  }, []);
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.caixa}>
        <View style={styles.tituloContainer}>
          <Text style={styles.titulo}>Calendário</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 100,
            flex: 1,
          }}
        >
          <Calendar
            style={{ width: 300, height: 400 }}
            minDate={"2012-05-10"}
            monthFormat={"yyyy MM"}
            hideArrows={false}
            hideExtraDays
            disableMonthChange={true}
            firstDay={1}
            showWeekNumbers={true}
            enableSwipeMonths={true}
            markedDates={dataEscolhida}
          />

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

export default Calendario;
