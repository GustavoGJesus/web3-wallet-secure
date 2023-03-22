// styles
import { ContainerAddress, Divider, HeaderContainer, HeaderContent } from "./styles";


export function Header() {
	return(
		<HeaderContainer>
			<HeaderContent>
        <h1>secure wallet</h1>

        <ContainerAddress>
          <Divider />
          <p>0x63677fbb34bh434834b48734hb34h4378478fb4</p>
        </ContainerAddress>
      </HeaderContent>
		</HeaderContainer>
	);
}