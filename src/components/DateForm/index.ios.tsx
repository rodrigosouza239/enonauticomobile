import React,{useState,useMemo} from 'react';
import { Container,DateButton,DateText } from './styles';
import { Feather as Icon  } from '@expo/vector-icons';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { DatePickerIOS } from 'react-native'

export default function DateForm({date,onChage}:any){
  const [opened, setOpened] = useState(false);

  const dateFormated = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt}),
    [date],
  );

  return(
    <Container>
      <DateButton onPress={() =>setOpened(!opened)}>
         <Icon name="calendar" color="#fff" size={20} />
         <DateText>{dateFormated}</DateText>
      </DateButton>

      {opened && (
          <DatePickerIOS
             date={date}
             onDateChange={onChage}
             minimumDate={new Date()}
             locale="pt"
             mode="date"
          />
      )}
    </Container>
  )
}