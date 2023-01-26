import {NavigationContainer} from "@react-navigation/native";
import {MainStack} from "./MainStack";

export const Navigation = () => {
  return (
      <NavigationContainer>
          <MainStack />
      </NavigationContainer>
  )
};
