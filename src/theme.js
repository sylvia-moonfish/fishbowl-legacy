import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans KR",
  },
  palette: {
    mode: "dark",
    primary: purple,
  },
});

export default theme;
