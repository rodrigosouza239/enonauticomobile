import { AsyncStorage} from 'react-native'
import { NavigationAction,useNavigation } from '@react-navigation/native';

export async function getUser() {
  try {
    return await AsyncStorage.getItem('@ListApp:userToken');
  } catch (e) {
    throw e;
  }
}

export async function storeUser(userToken:any) {
  try {
    return await AsyncStorage.setItem('@ListApp:userToken', JSON.stringify(userToken));
  } catch (e) {
    throw e;
  }
}

export async function deleteUser() {
  try {
    return await AsyncStorage.removeItem('@ListApp:userToken');
  } catch (e) {
    throw e;
  }
}

// NavigationService
let navigator = useNavigation();

export function setTopLevelNavigator(navigatorRef:any) {
  navigator = navigatorRef;
}

// export function navigate(routeName:any, params:any) {
//   navigator.dispatch(
//     NavigationAction.navigate({
//       routeName,
//       params,
//     }),
//   )}