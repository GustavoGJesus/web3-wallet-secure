// styles
import { Global } from "@emotion/react";
import { GlobalStyles } from "./styles/global";

// pages
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Home />
    </>
  );
}

export default App;
