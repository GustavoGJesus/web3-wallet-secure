// styles

import { MainContainer, MainContent } from "./styles";
import { Button } from "../shared/button";


export function Main(){
    return(
      <MainContainer>
        <MainContent>
          <h1>Create a wallet</h1>
          <p>Create a your wallet with security</p>
          <Button style={{ background: "#fffff"}}>Create a new wallet</Button>
        </MainContent>
      </MainContainer>
    );
}