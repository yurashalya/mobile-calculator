import { StyleSheet, Switch, Text, View } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button, ThemeContext, KeyboardView } from "../components";
import { colorsTheme, mainColors } from "../constants";
import { StatusBar } from "expo-status-bar";

function App() {
  const [theme, setTheme] = useState<string>(colorsTheme.LIGHT);

  const handleSwitchTheme = () => {
    setTheme(
      theme === colorsTheme.LIGHT ? colorsTheme.DARK : colorsTheme.LIGHT
    );
  };

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === colorsTheme.LIGHT
            ? styles.container
            : [styles.container, { backgroundColor: mainColors.black }]
        }
      >
        <Switch value={theme === "light"} onChange={handleSwitchTheme} />
        <StatusBar style="auto" />
        <KeyboardView />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: mainColors.light,
  },
});

export default App;
