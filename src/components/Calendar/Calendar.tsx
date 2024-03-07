import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Calendar: React.FC = () => {
  const [expandedMonth, setExpandedMonth] = useState<string | null>(null);

  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = months[currentDate.getMonth()];
    setExpandedMonth(currentMonth);
  }, []);

  const handleMonthSelect = (month: string) => {
    setExpandedMonth(expandedMonth === month ? null : month);
  };

  const renderDays = (month: string) => {
    if (expandedMonth !== month) return null;

    const daysInMonth: number = new Date(
      2024,
      months.indexOf(month) + 1,
      0
    ).getDate();
    const daysArray: number[] = Array.from(
      { length: daysInMonth },
      (_, index) => index + 1
    );

    return (
      <View style={styles.daysContainer}>
        {daysArray.map((day) => (
          <View key={day} style={styles.dayContainer}>
            <View style={styles.dayBox}>
              <Text style={styles.dayText}>{day}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {months.map((month, index) => (
        <View key={index} style={styles.selectedMonthContainer}>
          <TouchableOpacity
            style={[
              styles.monthContainer,
              expandedMonth === month && styles.selectedMonth,
            ]}
            onPress={() => handleMonthSelect(month)}
          >
            <Text style={styles.monthText}>{month}</Text>
          </TouchableOpacity>
          {renderDays(month)}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  monthContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    width: "100%",
    alignItems: "center",
  },
  selectedMonth: {
    backgroundColor: "#63d6ff",
  },
  selectedMonthContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    width: "100%",
    alignItems: "center",
  },
  monthText: {
    fontSize: 18,
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
    padding: 20,
    backgroundColor: "#63d6ff",
  },
  dayContainer: {
    width: "14.28%", // 7 days in a week
    marginBottom: 10,
    alignItems: "center",
  },
  dayBox: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  dayText: {
    fontSize: 14,
  },
});

export default Calendar;
