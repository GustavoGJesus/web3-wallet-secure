// styles
import { Button } from "../shared/button";
import { ContainerAddress, Divider, HeaderContainer, HeaderContent } from "./styles";

// libs
import {AiOutlineUser } from 'react-icons/ai'


export function Header() {
	return (
    <HeaderContainer>
      <HeaderContent>
        <h1>secure wallet</h1>

        <ContainerAddress>
          <Button>Recovery Pharse</Button>
          <Divider />
          <p>
            {" "}
            <AiOutlineUser /> 0x63677fbb34bh434834b48734hb34h4378478fb4
          </p>
        </ContainerAddress>
      </HeaderContent>
    </HeaderContainer>
  );
}