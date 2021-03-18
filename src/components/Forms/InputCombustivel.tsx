import React, { useState } from 'react';
import { Feather as Icon} from "@expo/vector-icons";
import { View, Text,StyleSheet} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';




const InputCombustivel = () => {
  const [valueInput, setValueInput ] = useState(0);
  const [checkedFalse1, setCheckedcheckedFalse1 ] = useState(false);
  const [checkedFalse2, setCheckedcheckedFalse2 ] = useState(false);
  const [checkedFalse3, setCheckedcheckedFalse3 ] = useState(false);
  const [checkedFalse4, setCheckedcheckedFalse4 ] = useState(false);
  const [checkedFalse5, setCheckedcheckedFalse5 ] = useState(false);
  const [checkedFalse6, setCheckedcheckedFalse6 ] = useState(false);
  const [checkedFalse7, setCheckedcheckedFalse7 ] = useState(false);
  const [checkedFalse8, setCheckedcheckedFalse8 ] = useState(false);

  function updateInputValue(n:any){
    if(n === 1){
      if(valueInput === 0){
        setValueInput(1)
        setCheckedcheckedFalse1(true)
        setCheckedcheckedFalse2(false)
        setCheckedcheckedFalse3(false)
        setCheckedcheckedFalse4(false)
        setCheckedcheckedFalse5(false)
        setCheckedcheckedFalse6(false)
        setCheckedcheckedFalse7(false)
        setCheckedcheckedFalse8(false)
      }else{
        setValueInput(0)
        setCheckedcheckedFalse1(false)
        setCheckedcheckedFalse2(false)
        setCheckedcheckedFalse3(false)
        setCheckedcheckedFalse4(false)
        setCheckedcheckedFalse5(false)
        setCheckedcheckedFalse6(false)
        setCheckedcheckedFalse7(false)
        setCheckedcheckedFalse8(false)
      }
    } if(n === 2){
      setValueInput(2)
      setCheckedcheckedFalse1(true)
      setCheckedcheckedFalse2(true)
      setCheckedcheckedFalse3(false)
      setCheckedcheckedFalse4(false)
      setCheckedcheckedFalse5(false)
      setCheckedcheckedFalse6(false)
      setCheckedcheckedFalse7(false)
      setCheckedcheckedFalse8(false)
    } if(n === 3){
      setValueInput(3)
      setCheckedcheckedFalse1(true)
      setCheckedcheckedFalse2(true)
      setCheckedcheckedFalse3(true)
      setCheckedcheckedFalse4(false)
      setCheckedcheckedFalse5(false)
      setCheckedcheckedFalse6(false)
      setCheckedcheckedFalse7(false)
      setCheckedcheckedFalse8(false)
    } if(n === 4){
      setValueInput(4)
      setCheckedcheckedFalse1(true)
      setCheckedcheckedFalse2(true)
      setCheckedcheckedFalse3(true)
      setCheckedcheckedFalse4(true)
      setCheckedcheckedFalse5(false)
      setCheckedcheckedFalse6(false)
      setCheckedcheckedFalse7(false)
      setCheckedcheckedFalse8(false)
    } if(n === 5){
      setValueInput(5)
      setCheckedcheckedFalse1(true)
      setCheckedcheckedFalse2(true)
      setCheckedcheckedFalse3(true)
      setCheckedcheckedFalse4(true)
      setCheckedcheckedFalse5(true)
      setCheckedcheckedFalse6(false)
      setCheckedcheckedFalse7(false)
      setCheckedcheckedFalse8(false)
    } if(n === 6){
      setValueInput(6)
      setCheckedcheckedFalse1(true)
      setCheckedcheckedFalse2(true)
      setCheckedcheckedFalse3(true)
      setCheckedcheckedFalse4(true)
      setCheckedcheckedFalse5(true)
      setCheckedcheckedFalse6(true)
      setCheckedcheckedFalse7(false)
      setCheckedcheckedFalse8(false)
    } if(n === 7){
      setValueInput(7)
      setCheckedcheckedFalse1(true)
      setCheckedcheckedFalse2(true)
      setCheckedcheckedFalse3(true)
      setCheckedcheckedFalse4(true)
      setCheckedcheckedFalse5(true)
      setCheckedcheckedFalse6(true)
      setCheckedcheckedFalse7(true)
      setCheckedcheckedFalse8(false)
    } if(n === 8){
      setValueInput(8)
      setCheckedcheckedFalse1(true)
      setCheckedcheckedFalse2(true)
      setCheckedcheckedFalse3(true)
      setCheckedcheckedFalse4(true)
      setCheckedcheckedFalse5(true)
      setCheckedcheckedFalse6(true)
      setCheckedcheckedFalse7(true)
      setCheckedcheckedFalse8(true)
    }
  }

  return (
      <>
      <View style={styles.CheckBox}>
          <RectButton onPress={() => updateInputValue(1)} >
            <View  style={{
              height:50,
              marginRight:2,
              width:30,
              borderTopLeftRadius:5,
              borderBottomLeftRadius:5,
              justifyContent:'center',
              alignItems:'center',
              backgroundColor: checkedFalse1 ? "#FFD246" : "#fff",
              }}  >
          </View>
        </RectButton>

        <RectButton onPress={() => updateInputValue(2)} >
          <View  style={{
            height:50,
            width:30,
            marginRight:2,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: checkedFalse2 ? "#FFD246" : "#fff",
            }}  >
          </View>
        </RectButton>

        <RectButton onPress={() => updateInputValue(3)} >
          <View  style={{
            height:50,
            width:30,
            marginRight:2,
            borderRadius:2,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: checkedFalse3 ? "#FFD246" : "#fff",
            }}  >
          </View>
        </RectButton>

        <RectButton onPress={() => updateInputValue(4)} >
          <View  style={{
            height:50,
            width:30,
            marginRight:2,
            borderRadius:2,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: checkedFalse4 ? "#FFD246" : "#fff",
          }}>
          </View>
        </RectButton>

        <RectButton onPress={() => updateInputValue(5)} >
          <View  style={{
            height:50,
            width:30,
            marginRight:2,
            borderRadius:2,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: checkedFalse5 ? "#FFD246" : "#fff",
            }}  >
          </View>
        </RectButton>

        <RectButton onPress={() => updateInputValue(6)} >
          <View  style={{
            height:50,
            width:30,
            marginRight:2,
            borderRadius:2,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: checkedFalse6 ? "#FFD246" : "#fff",
            }}  >
          </View>
        </RectButton>

        <RectButton onPress={() => updateInputValue(7)} >
          <View  style={{
            height:50,
            width:30,
            marginRight:2,
            borderRadius:2,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: checkedFalse7 ? "#FFD246" : "#fff",
            }}  >
          </View>
        </RectButton>

        <RectButton onPress={() => updateInputValue(8)} >
          <View  style={{
            height:50,
            width:30,
            marginRight:2,
            borderRadius:2,
            borderTopRightRadius:5,
            borderBottomRightRadius:5,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: checkedFalse8 ? "#FFD246" : "#fff",
            }}  >
          </View>
        </RectButton>
      </View>
      </>
  );
}

const styles = StyleSheet.create({
    CheckBox:{
        flexDirection:"row",
        alignItems:'center',
    },
    label: {
        margin: 8,
        color:'#fff',
        fontWeight:'bold',
        left:5,
      },
})

export default InputCombustivel;
