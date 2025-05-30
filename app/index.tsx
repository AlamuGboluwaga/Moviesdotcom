import { View,Text } from "react-native";
import "../global.css";
import Layout from "./(auth)/_layout";
import Onboarding from "./(auth)/onboarding";
const App = () => {
  return (
<Layout>
  <Onboarding/>
</Layout>
  );
};

export default App;
