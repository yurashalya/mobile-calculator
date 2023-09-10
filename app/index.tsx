import { StyleSheet, Switch, Text, View } from "react-native";
import { useState } from "react";

import { Button, ThemeContext } from "../components";
import { colorsTheme, mainColors } from "../constants";

function App() {
  const [theme, setTheme] = useState<string>(colorsTheme.LIGHT);

  const handleSwitchTheme = () => {
    setTheme(
      theme === colorsTheme.LIGHT ? colorsTheme.DARK : colorsTheme.LIGHT
    );
  };

  return (
    <ThemeContext.Provider value={theme}>
      <View
        style={
          theme === colorsTheme.LIGHT
            ? styles.container
            : [styles.container, { backgroundColor: mainColors.black }]
        }
      >
        <Switch value={theme === "light"} onChange={handleSwitchTheme} />
        <Button
          onPress={() => {
            alert("Tes");
          }}
          title="3"
          isBlue
        />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: mainColors.light,
  },
});

export default App;
