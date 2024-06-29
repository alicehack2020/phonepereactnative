import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "@/components/Header";
import BottomNavigator from "./screen/BottomNavigator";
const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{ header: () => <Header /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
