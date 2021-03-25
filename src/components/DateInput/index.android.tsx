import React, {useMemo} from 'react';
import {View} from 'react-native'
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from "@expo/vector-icons/build/MaterialIcons";
import {Container, DateButton, DateText} from './styles';

import DatePickerAndroid from '@react-native-community/datetimepicker'

export default function DateInput({date, onChange}:any) {
  const dateFormated = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt}),
    [date],
  );

  async function handleOpenPicker() {
    const {action, year, month, day} = await DatePickerAndroid.open({
      mode:'spinner',
      date,
    });
    
    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);

      onChange(selectedDate);
    }
  }

  return (
    <View>
      <DateButton onPress={handleOpenPicker}>
        <Icon name="event" color="#FFF" size={20} />
        <DateText>{dateFormated}</DateText>
      </DateButton>
    </View>
  );
}
