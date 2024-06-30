import BottomNavigator from "@/components/BottomNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import LoanScreen from "./screen/LoanScreen";

const Drawer = createDrawerNavigator();

// Define an array of screen objects
const screens = [
  {
    name: "Home",
    component: BottomNavigator,
    options: { drawerLabel: "Home", title: "Home Screen" },
  },
  {
    name: "loan",
    component: LoanScreen,
    options: { drawerLabel: "loan", title: "loan" },
  },
];

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: "slide",
          overlayColor: "transparent",
        }}
      >
        {screens.map((screen) => (
          <Drawer.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
