import { Global } from '@emotion/react'
import { GlobalStyles } from './styles/global';


function App() {
  return (
    <>
      <Global styles={GlobalStyles}/>
      <h1>Hello</h1>
    </>
  );
}

export default App;
