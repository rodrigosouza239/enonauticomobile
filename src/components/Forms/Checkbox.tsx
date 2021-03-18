import React, { useEffect, useState } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface CheckBoxProps {
  label: string;
  value: boolean;
  onPress: any
}

const Checkbox = ({ label, value, onPress }: CheckBoxProps) => {
  // const [checked, setChecked] = useState(false);
  //   const [checkedFalse, setCheckedcheckedFalse] = useState(false);

  useEffect(() => {
    // setChecked(value);
  }, []);
  return (
    <>
      <View style={styles.CheckBox}>
        <RectButton
          // onPress={() => {
          //   setChecked(!checked);
          // }}

        >
          <View
            style={{
              height: 24,
              width: 24,
              borderRadius: 2,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: value ? "#fff" : "#FA5A4C",
            }}
          >
            <Icon size={17} color="#fff" name="x" />
          </View>
        </RectButton>

        <RectButton onPress={onPress}>
          <View
            style={{
              height: 24,
              width: 24,
              left: 6,
              borderRadius: 2,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: value ? "#63E669" : "#fff",
            }}
          >
            <Icon size={17} color="#fff" name="check" />
          </View>
        </RectButton>

        <Text style={styles.label}>{label}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  CheckBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    margin: 8,
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    left: 5,
  },
});

export default Checkbox;
