import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import AsyncStorage from "@react-native-community/async-storage";

function Calendario() {
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
    <View
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
      }}
    >
      <Calendar
        style={{ marginTop: "50%" }}
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
    </View>
  );
}

export default Calendario;
