import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";

import { ThemeContext } from "./themeContext";
import { colorsTheme } from "../constants";
import { Styles } from "../assets/GlobalStyles";

interface ButtonProps {
  onPress: () => void;
  title: string;
  isBlue?: boolean;
  isGray?: boolean;
}

const Button = ({ title, onPress, isBlue, isGray }: ButtonProps) => {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={
        isBlue
          ? Styles.btnBlue
          : isGray
          ? Styles.btnGray
          : theme === colorsTheme.LIGHT
          ? Styles.btnLight
          : Styles.btnDark
      }
      onPress={onPress}
    >
      <Text
        style={
          isBlue || isGray
            ? Styles.smallTextLight
            : theme === colorsTheme.DARK
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
