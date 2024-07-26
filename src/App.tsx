import { ThemeProvider } from "styled-components";
import { GLOBAL_COLOR } from "./utils/constans";

function App() {
  return <ThemeProvider theme={GLOBAL_COLOR}></ThemeProvider>;
}

export default App;
