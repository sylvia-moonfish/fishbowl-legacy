import { purple } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Noto Sans KR",
  },
  palette: {
    type: "dark",
    primary: {
      main: purple[900],
    },
    secondary: {
      main: purple[100],
    },
  },
});

export default theme;
