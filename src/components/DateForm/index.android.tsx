import React,{useState,useMemo} from 'react';
import { Container,DateButton,DateText } from './styles';
import { Feather as Icon  } from '@expo/vector-icons';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { DatePickerAndroid } from 'react-native'

export default function DateForm({date,onChange}:any){
  const dateFormated = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt}),
    [date],
  );
  async function haldleOpenPicker(){
  const {action, year, month, day}:any = await DatePickerAndroid.open({
    mode:'spinner',
    date,
  });
  
  if (action === DatePickerAndroid.dateSetAction) {
    const selectedDate = new Date(year, month, day);
    onChange(selectedDate);
  }
}

  return(
    <Container>
      <DateButton onPress={haldleOpenPicker}>
         <Icon name="calendar" color="#FFD246" size={20} />
         <DateText>{dateFormated}</DateText>
      </DateButton>
    </Container>
  )
}